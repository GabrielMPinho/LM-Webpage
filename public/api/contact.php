<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Metodo nao permitido.']);
    exit;
}

$configPath = __DIR__ . '/contact.config.php';
if (is_file($configPath)) {
    require $configPath;
}

$n8nWebhookUrl = isset($n8nWebhookUrl)
    ? (string)$n8nWebhookUrl
    : (string)(getenv('N8N_CONTACT_WEBHOOK_URL') ?: '');

if ($n8nWebhookUrl === '') {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Webhook nao configurado.']);
    exit;
}

if (strpos($n8nWebhookUrl, 'https://') !== 0) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Webhook precisa usar HTTPS.']);
    exit;
}

if (!function_exists('curl_init')) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'cURL nao esta habilitado no servidor.']);
    exit;
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'JSON invalido.']);
    exit;
}

if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$requiredFields = ['name', 'company', 'email', 'phone', 'subject', 'message'];
$payload = [];

foreach ($requiredFields as $field) {
    $value = trim((string)($data[$field] ?? ''));

    if ($value === '') {
        http_response_code(422);
        echo json_encode(['ok' => false, 'message' => 'Campos obrigatorios ausentes.']);
        exit;
    }

    $payload[$field] = substr($value, 0, 2000);
}

if (!filter_var($payload['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'E-mail invalido.']);
    exit;
}

$payload['source'] = (string)($data['source'] ?? 'site-lm-contact-form');
$payload['submittedAt'] = (string)($data['submittedAt'] ?? gmdate('c'));
$payload['ip'] = $_SERVER['REMOTE_ADDR'] ?? null;
$payload['userAgent'] = $_SERVER['HTTP_USER_AGENT'] ?? null;

$ch = curl_init($n8nWebhookUrl);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 15,
]);

$responseBody = curl_exec($ch);
$curlError = curl_error($ch);
$statusCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($responseBody === false || $curlError !== '' || $statusCode < 200 || $statusCode >= 300) {
    error_log(sprintf(
        'Erro ao enviar contato para n8n. status=%s error=%s response=%s',
        $statusCode,
        $curlError,
        is_string($responseBody) ? substr($responseBody, 0, 500) : ''
    ));

    http_response_code(502);
    echo json_encode(['ok' => false, 'message' => 'Falha ao enviar contato.']);
    exit;
}

echo json_encode(['ok' => true]);
