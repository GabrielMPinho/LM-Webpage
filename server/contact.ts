import type { IncomingMessage, ServerResponse } from 'node:http';

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website?: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const REQUIRED_FIELDS: Array<keyof ContactPayload> = [
  'name',
  'company',
  'email',
  'phone',
  'subject',
  'message',
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();

function getWebhookUrl() {
  return process.env.CONTACT_WEBHOOK_URL?.trim();
}

function createJsonResponse(status: number, body: Record<string, unknown>) {
  return {
    status,
    body,
  };
}

function getClientIp(source?: {
  headers?: Record<string, string | string[] | undefined>;
  socket?: { remoteAddress?: string | undefined };
  ip?: string | undefined;
}) {
  const forwardedFor = source?.headers?.['x-forwarded-for'];

  if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  if (Array.isArray(forwardedFor) && forwardedFor[0]) {
    return forwardedFor[0];
  }

  return source?.ip || source?.socket?.remoteAddress || 'unknown';
}

function normalizePayload(payload: Partial<ContactPayload>): ContactPayload {
  return {
    name: payload.name?.trim() ?? '',
    company: payload.company?.trim() ?? '',
    email: payload.email?.trim() ?? '',
    phone: payload.phone?.trim() ?? '',
    subject: payload.subject?.trim() ?? '',
    message: payload.message?.trim() ?? '',
    website: payload.website?.trim() ?? '',
  };
}

function isRateLimited(clientIp: string) {
  const now = Date.now();
  const existingEntry = rateLimitStore.get(clientIp);

  if (!existingEntry || existingEntry.resetAt <= now) {
    rateLimitStore.set(clientIp, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return false;
  }

  existingEntry.count += 1;

  return existingEntry.count > RATE_LIMIT_MAX_REQUESTS;
}

function validatePayload(payload: ContactPayload) {
  for (const field of REQUIRED_FIELDS) {
    if (!payload[field]) {
      return `Campo obrigatório ausente: ${field}`;
    }
  }

  if (!EMAIL_RE.test(payload.email)) {
    return 'E-mail inválido.';
  }

  if (payload.website) {
    return 'Falha na validação do formulário.';
  }

  return null;
}

async function forwardToWebhook(payload: ContactPayload) {
  const webhookUrl = getWebhookUrl();

  if (!webhookUrl) {
    throw new Error('CONTACT_WEBHOOK_URL is not configured.');
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...payload,
      source: 'site-lm-contact-form',
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook respondeu com status ${response.status}`);
  }
}

export async function submitContactForm(
  payload: Partial<ContactPayload>,
  clientIp: string
) {
  if (isRateLimited(clientIp)) {
    return createJsonResponse(429, {
      error: 'Muitas tentativas. Aguarde um momento antes de enviar novamente.',
    });
  }

  const normalizedPayload = normalizePayload(payload);
  const validationError = validatePayload(normalizedPayload);

  if (validationError) {
    return createJsonResponse(400, { error: validationError });
  }

  try {
    await forwardToWebhook(normalizedPayload);

    return createJsonResponse(200, {
      message: 'Mensagem enviada com sucesso. Entraremos em contato em breve.',
    });
  } catch {
    return createJsonResponse(502, {
      error:
        'Não foi possível enviar agora. Verifique a conexão com o webhook e tente novamente.',
    });
  }
}

async function readJsonBody(req: IncomingMessage) {
  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function writeNodeResponse(
  res: ServerResponse,
  status: number,
  body: Record<string, unknown>
) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

export async function handleNodeContactRequest(
  req: IncomingMessage,
  res: ServerResponse
) {
  if (req.method !== 'POST') {
    writeNodeResponse(res, 405, { error: 'Method Not Allowed' });
    return;
  }

  try {
    const body = (await readJsonBody(req)) as Partial<ContactPayload>;
    const response = await submitContactForm(body, getClientIp(req));

    writeNodeResponse(res, response.status, response.body);
  } catch {
    writeNodeResponse(res, 400, { error: 'Requisição inválida.' });
  }
}
