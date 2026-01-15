# KSeod-Med API starter

Minimalny backend REST w Express + MongoDB z JWT do szybkiego prototypowania. Udostępnia rejestrację, logowanie oraz proste, zabezpieczone endpointy użytkownika. Możesz go rozszerzać o kolejne kontrolery, akcje i widoki API.

## Wymagania
- Node.js 18+
- MongoDB (lokalnie lub w chmurze)

## Konfiguracja
1. Zainstaluj zależności:
   ```bash
   npm install
   ```
2. Skopiuj plik środowiskowy i uzupełnij wartości:
   ```bash
   cp .env.example .env
   ```
   - `MONGO_URI` – connection string do bazy MongoDB.
   - `JWT_SECRET` – tajny klucz do podpisywania tokenów.
3. Uruchom serwer:
   ```bash
   npm start
   ```

Serwer nasłuchuje domyślnie na `http://localhost:3000`.

## Endpointy
- `GET /health` – szybki healthcheck.
- `POST /api/auth/register` – rejestracja (body: `email`, `password`).
- `POST /api/auth/login` – logowanie, zwraca token JWT.
- `GET /api/users/me` – profil zalogowanego użytkownika (wymaga nagłówka `Authorization: Bearer <token>`).
- `GET /api/users` – lista użytkowników (również wymaga JWT).

## Dodawanie nowych funkcji
- Dodaj nowe modele w `src/models`.
- Twórz kontrolery w `src/controllers` i reużywaj middleware `src/middleware/auth.js` do ochrony endpointów.
- Rejestruj trasy w plikach z `src/routes` i podepnij je w `src/server.js` np. `app.use('/api/orders', orderRoutes)`.
