<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metodo nao permitido.']);
    exit;
}

$rawBody = file_get_contents('php://input');
$input = json_decode($rawBody ?: '', true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'JSON invalido.']);
    exit;
}

if (!empty($input['website'])) {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso.']);
    exit;
}

function clean_text($value, int $maxLength = 2000): string
{
    $text = trim((string)$value);
    $text = str_replace(["\r", "\n"], ' ', $text);
    $text = strip_tags($text);

    return substr($text, 0, $maxLength);
}

function html_text(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$name = clean_text($input['name'] ?? $input['nome'] ?? '', 180);
$company = clean_text($input['company'] ?? $input['empresa'] ?? '', 180);
$email = filter_var(trim((string)($input['email'] ?? '')), FILTER_SANITIZE_EMAIL);
$phone = clean_text($input['phone'] ?? $input['telefone'] ?? '', 80);
$subject = clean_text($input['subject'] ?? $input['assunto'] ?? 'Contato via site', 180);
$message = trim(strip_tags((string)($input['message'] ?? $input['mensagem'] ?? '')));
$message = substr($message, 0, 5000);

if ($name === '' || $email === '' || $phone === '' || $subject === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Preencha todos os campos obrigatorios.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'E-mail invalido.']);
    exit;
}

$recipients = [
    'posvenda@lm2rodas.com.br',
];

$fromEmail = 'noreply@lm2rodas.com.br';
$fromName = 'Site LM2 Rodas';
$mailSubject = '[' . $subject . '] - Contato via site';

$safeName = html_text($name);
$safeCompany = html_text($company);
$safeEmail = html_text($email);
$safePhone = html_text($phone);
$safeSubject = html_text($subject);
$safeMessage = nl2br(html_text($message));
$submittedAt = date('d/m/Y H:i');
$ipAddress = html_text((string)($_SERVER['REMOTE_ADDR'] ?? ''));

$body = <<<HTML
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Novo Contato - LM2Rodas</title>
</head>
<body style="margin:0; padding:0; background-color:#F3F4F6; font-family:Arial, Helvetica, sans-serif; color:#1F2937;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6; padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF; border-radius:12px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
          <tr>
            <td style="padding-bottom:20px; border-bottom:1px solid #E5E7EB;">
              <h2 style="margin:0; color:#3565AD; font-size:18px; letter-spacing:1px;">
                LM2RODAS - NOVO CONTATO
              </h2>
              <p style="margin:5px 0 0; font-size:12px; color:#6B7280;">
                Mensagem recebida pelo site institucional
              </p>
            </td>
          </tr>

          <tr><td height="20"></td></tr>

          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0; color:#6B7280;">Nome do Cliente</td>
                  <td style="padding:8px 0; text-align:right; color:#111827;">{$safeName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6B7280;">Empresa</td>
                  <td style="padding:8px 0; text-align:right; color:#111827;">{$safeCompany}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6B7280;">E-mail</td>
                  <td style="padding:8px 0; text-align:right; color:#111827;">{$safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6B7280;">Telefone</td>
                  <td style="padding:8px 0; text-align:right; color:#111827;">{$safePhone}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; color:#6B7280;">Assunto</td>
                  <td style="padding:8px 0; text-align:right; color:#111827;">{$safeSubject}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr><td height="25"></td></tr>

          <tr>
            <td>
              <p style="margin:0 0 10px; color:#6B7280; font-size:13px;">Mensagem</p>
              <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:10px; padding:15px; color:#1F2937; font-size:14px; line-height:1.5;">
                {$safeMessage}
              </div>
            </td>
          </tr>

          <tr><td height="30"></td></tr>

          <tr>
            <td style="border-top:1px solid #E5E7EB; padding-top:15px;">
              <p style="margin:0; font-size:11px; color:#9CA3AF;">
                Este email foi gerado automaticamente pelo formulario do site LM2Rodas.
              </p>
              <p style="margin:6px 0 0; font-size:11px; color:#9CA3AF;">
                Enviado em {$submittedAt}. IP: {$ipAddress}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $fromName . ' <' . $fromEmail . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail(
    implode(',', $recipients),
    $mailSubject,
    $body,
    implode("\r\n", $headers),
    '-f ' . $fromEmail
);

if (!$sent) {
    error_log('Falha ao enviar contato do site LM2 Rodas via mail().');
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro ao enviar. Tente novamente.']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso.']);
