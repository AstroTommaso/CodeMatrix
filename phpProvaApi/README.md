# REST API PHP per Postman

Questa è una semplice API REST in PHP che puoi testare con Postman.

## Installazione

1. Assicurati di avere PHP 7.4+ installato
2. Clona o scarica questo progetto
3. Avvia un server web locale (es. XAMPP, WAMP, o PHP built-in server)

## Avvio del server

Per avviare il server PHP built-in:
```bash
php -S localhost:8000
```

## Endpoints disponibili

### 1. Health Check
- **GET** `/api/health`
- Verifica che l'API sia funzionante

### 2. Gestione Utenti

#### Ottieni tutti gli utenti
- **GET** `/api/users`
- Restituisce la lista di tutti gli utenti

#### Ottieni un utente specifico
- **GET** `/api/users/{id}`
- Restituisce i dettagli di un utente specifico

#### Crea un nuovo utente
- **POST** `/api/users`
- Body (JSON):
```json
{
    "name": "Nome Cognome",
    "email": "email@example.com",
    "age": 30
}
```

#### Aggiorna un utente
- **PUT** `/api/users/{id}`
- Body (JSON):
```json
{
    "name": "Nuovo Nome",
    "email": "nuova@email.com",
    "age": 35
}
```

#### Elimina un utente
- **DELETE** `/api/users/{id}`

## Test con Postman

1. Apri Postman
2. Crea una nuova collection chiamata "REST API PHP"
3. Aggiungi le seguenti richieste:

### Health Check
- Method: GET
- URL: `http://localhost:8000/api/health`

### Get All Users
- Method: GET
- URL: `http://localhost:8000/api/users`

### Get User by ID
- Method: GET
- URL: `http://localhost:8000/api/users/1`

### Create User
- Method: POST
- URL: `http://localhost:8000/api/users`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
    "name": "Test User",
    "email": "test@example.com",
    "age": 28
}
```

### Update User
- Method: PUT
- URL: `http://localhost:8000/api/users/1`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
    "name": "Updated Name",
    "email": "updated@example.com"
}
```

### Delete User
- Method: DELETE
- URL: `http://localhost:8000/api/users/1`

## Struttura del progetto

```
rest-api-php/
├── index.php          # Entry point dell'API
├── src/
│   └── UserController.php  # Controller per la gestione utenti
├── .htaccess          # Configurazione Apache per URL rewriting
├── composer.json      # Dipendenze PHP
└── README.md          # Questa documentazione
```

## Note

- L'API include CORS headers per permettere richieste cross-origin
- I dati sono memorizzati in memoria (si perdono al riavvio del server)
- Tutte le risposte sono in formato JSON
- Gli errori seguono un formato standardizzato
