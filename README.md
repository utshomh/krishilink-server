# 🌾 KrishiLink (Server)

***Backend API for KrishiLink – a Farmer’s Growth & Connection Platform***

---

## 🚀 Overview

KrishiLink connects farmers and buyers through an agro-focused social platform.  
This repository contains the **Node.js + Express backend** and MongoDB connection.

---

## 🛠️ Tech Stack

- ⚙️ Node.js + Express  
- 🍃 MongoDB (Atlas)  
- 🔒 Firebase Admin SDK (JWT verification)  
- 🌍 CORS & dotenv  
- ☁️ Vercel (deployment)  

---

## ✨ Features

- RESTful APIs for crops and interests  
- Firebase ID token verification  
- Owner-restricted update/delete  
- JSON-based consistent responses  
- Error handling and validation  
- Deployed and accessible from client app  

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/mahadyhassanutsho/krishilink-server.git
cd krishilink-server

# Install dependencies
npm install

# Run locally
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
FIREBASE_SERVICE_ACCOUNT=your_service_account_json
```

---

## 🌾 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/crops` | Get all crops |
| GET | `/crops/:id` | Get single crop |
| POST | `/crops` | Add new crop |
| PATCH | `/crops/:id` | Update crop |
| DELETE | `/crops/:id` | Delete crop |
| POST | `/interests` | Create interest |
| GET | `/interests` | Get user interests |

---

## 📡 Deployment

Deployed on **Vercel**:  
➡️ [https://krishilink-server.vercel.app](https://krishilink-server.vercel.app)

---

## 📦 Related Repositories

- 🖥️ [Client Repository](https://github.com/mahadyhassanutsho/krishilink-client)
- ⚙️ [Server Repository](https://github.com/mahadyhassanutsho/krishilink-server)

---

## 👨‍💻 Author

Developed by ***Utsho MH***
© 2025 KrishiLink
