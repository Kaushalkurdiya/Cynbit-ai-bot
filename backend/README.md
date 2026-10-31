# Backend (Express)

```bash
npm install
cp .env.example .env
npm run dev     # http://localhost:5000
```

Routes:
- GET  /api/health
- POST /api/enroll
- POST /api/chat   <- left empty, implement it in routes/chat.js
  Body: { messages: [{ role, content }] }   Response: { reply }
