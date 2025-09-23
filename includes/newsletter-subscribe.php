<?php
// Newsletter subscription handler
require_once '../includes/config.php';
require_once '../includes/functions.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$email = sanitizeInput($_POST['email'] ?? '');

if (empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email is required']);
    exit;
}

if (!validateEmail($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Here you would typically save to database
// For now, we'll just simulate success
// TODO: Implement database storage

// Simulate processing delay
sleep(1);

// Return success response
echo json_encode([
    'success' => true,
    'message' => 'Thank you for subscribing to our newsletter!',
    'email' => $email
]);
?>
