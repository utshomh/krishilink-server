# 🌾 KrishiLink (Server) - To-Do List  

***Backend for a Farmer’s Growth & Connection Platform***  

> This document tracks all project requirements, their progress, and completion status for the **KrishiLink Server**.

---

## Progress Legend  

    - 🕐 : In-Progress  
    - ✅ : Done  
    - 🚀 : Upcoming / Due  

---

## 🧱 Setup & Configuration  

- ✅ Initialize Express project
- ✅ Install dependencies (`express`, `cors`, `dotenv`, `mongodb`)  
- ✅ Connect MongoDB Atlas (cluster0 under PROJECT 0)  
- ✅ Add `.env` for credentials  
- ✅ Use middleware: `cors`, `express.json()`  
- ✅ Create GitHub repo `krishilink-server`  
- 🕐 Make ≥8 meaningful commits  
- ✅ Deploy on Vercel  

---

## 🌾 API Routes  

### Auth Routes  

- 🚀 `/verify-token` → Validate Firebase ID token  

### Crop Routes  

- ✅ `GET /crops` → Fetch all crops  
- ✅ `GET /crops/:id` → Get specific crop  
- ✅ `POST /crops` → Add new crop  
- 🕐 `PATCH /crops/:id` → Update crop (owner only)  
- 🕐 `DELETE /crops/:id` → Delete crop (owner only)  

### Interest Routes  

- ✅ `POST /interests` → Create interest  
- 🚀 `GET /interests?buyer=email` → Get buyer interests  
- 🚀 `GET /interests?owner=email` → Get received interests  
- ✅ `PATCH /interests/:id` → Update status (accept/reject)  

---

## 🔒 Security & Validation  

- 🚀 Verify JWT via Firebase Admin SDK  
- 🚀 Restrict crop modifications to owner only  
- 🚀 Validate incoming data  
- 🚀 Return consistent JSON responses  
- 🚀 Handle errors gracefully  

---

## 🧩 Structure  

```
src/
 ├── routes/
 │   ├── crops.js
 │   ├── interests.js
 │   └── auth.js
 ├── db/
 │   └── connect.js
 ├── server.js
 └── .env
```

---

## ⚙️ Miscellaneous  

- 🚀 Use `dotenv` for config  
- 🚀 Use proper HTTP codes (200, 201, 400, 401, 404)  
- 🚀 Include centralized error handler  
- 🚀 Use modular route structure  
- 🚀 Log meaningful server messages  

---

## 📦 Submission Checklist  

- 🚀 Server GitHub Repo Link  
- 🚀 Client GitHub Repo Link  
- 🚀 Live API Base URL  
