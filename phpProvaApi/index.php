<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'src/UserController.php';

$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];

// Remove query string from URI
$path = parse_url($requestUri, PHP_URL_PATH);

// Simple routing
switch ($path) {
    case '/api/users':
        $controller = new UserController();
        switch ($requestMethod) {
            case 'GET':
                $controller->getUsers();
                break;
            case 'POST':
                $controller->createUser();
                break;
            default:
                http_response_code(405);
                echo json_encode(['error' => 'Method not allowed']);
                break;
        }
        break;
    
    case (preg_match('/^\/api\/users\/(\d+)$/', $path, $matches) ? true : false):
        $userId = $matches[1];
        $controller = new UserController();
        switch ($requestMethod) {
            case 'GET':
                $controller->getUser($userId);
                break;
            case 'PUT':
                $controller->updateUser($userId);
                break;
            case 'DELETE':
                $controller->deleteUser($userId);
                break;
            default:
                http_response_code(405);
                echo json_encode(['error' => 'Method not allowed']);
                break;
        }
        break;
    
    case '/api/health':
        echo json_encode(['status' => 'OK', 'message' => 'API is running']);
        break;
    
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint not found']);
        break;
}
