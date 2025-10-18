<?php

class UserController
{
    private $users = [
        ['id' => 1, 'name' => 'Mario Rossi', 'email' => 'mario.rossi@example.com', 'age' => 30],
        ['id' => 2, 'name' => 'Giulia Bianchi', 'email' => 'giulia.bianchi@example.com', 'age' => 25],
        ['id' => 3, 'name' => 'Luca Verdi', 'email' => 'luca.verdi@example.com', 'age' => 35]
    ];

    public function getUsers()
    {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'data' => $this->users,
            'count' => count($this->users)
        ]);
    }

    public function getUser($id)
    {
        $user = array_filter($this->users, function($u) use ($id) {
            return $u['id'] == $id;
        });

        if (empty($user)) {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'error' => 'User not found'
            ]);
            return;
        }

        http_response_code(200);
        echo json_encode([
            'success' => true,
            'data' => array_values($user)[0]
        ]);
    }

    public function createUser()
    {
        $input = json_decode(file_get_contents('php://input'), true);

        if (!$input || !isset($input['name']) || !isset($input['email'])) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'error' => 'Name and email are required'
            ]);
            return;
        }

        $newUser = [
            'id' => max(array_column($this->users, 'id')) + 1,
            'name' => $input['name'],
            'email' => $input['email'],
            'age' => $input['age'] ?? null
        ];

        $this->users[] = $newUser;

        http_response_code(201);
        echo json_encode([
            'success' => true,
            'data' => $newUser,
            'message' => 'User created successfully'
        ]);
    }

    public function updateUser($id)
    {
        $userIndex = array_search($id, array_column($this->users, 'id'));

        if ($userIndex === false) {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'error' => 'User not found'
            ]);
            return;
        }

        $input = json_decode(file_get_contents('php://input'), true);

        if (!$input) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'error' => 'Invalid JSON data'
            ]);
            return;
        }

        // Update user data
        if (isset($input['name'])) {
            $this->users[$userIndex]['name'] = $input['name'];
        }
        if (isset($input['email'])) {
            $this->users[$userIndex]['email'] = $input['email'];
        }
        if (isset($input['age'])) {
            $this->users[$userIndex]['age'] = $input['age'];
        }

        http_response_code(200);
        echo json_encode([
            'success' => true,
            'data' => $this->users[$userIndex],
            'message' => 'User updated successfully'
        ]);
    }

    public function deleteUser($id)
    {
        $userIndex = array_search($id, array_column($this->users, 'id'));

        if ($userIndex === false) {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'error' => 'User not found'
            ]);
            return;
        }

        $deletedUser = $this->users[$userIndex];
        unset($this->users[$userIndex]);
        $this->users = array_values($this->users); // Re-index array

        http_response_code(200);
        echo json_encode([
            'success' => true,
            'data' => $deletedUser,
            'message' => 'User deleted successfully'
        ]);
    }
}
