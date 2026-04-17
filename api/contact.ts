import type { IncomingMessage, ServerResponse } from 'node:http';
import { submitContactForm } from '../server/contact';

type VercelRequestLike = IncomingMessage & {
  body?: Record<string, unknown>;
  ip?: string;
};

export default async function handler(
  req: VercelRequestLike,
  res: ServerResponse
) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  const response = await submitContactForm(req.body ?? {}, req.ip ?? 'unknown');

  res.statusCode = response.status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(response.body));
}
