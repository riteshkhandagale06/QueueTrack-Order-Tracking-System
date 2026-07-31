# 🍽️ QueueTrack – Real-Time Food Order Tracking System

QueueTrack is a full-stack web application that allows restaurants and food outlets to manage customer orders and provide real-time order tracking.

---

# 🚀 Features

- Create New Orders
- Live Order Tracking
- Owner Dashboard
- Update Order Status
- Delete Orders
- Firebase Firestore Database
- Responsive UI
- Auto Refresh Every 3 Seconds

---

# 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Firebase Admin SDK
- Firestore Database

---

# 📂 Project Structure

```
QueueTrack/
│
├── Backend/
│
├── Frontend/
│
└── README.md
```

---

# 📦 Backend Setup

## 1. Go to Backend

```bash
cd Backend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Add Firebase Service Account

Create:

```
Backend/firebase/serviceAccountKey.json
```

Download it from

Firebase Console
→ Project Settings
→ Service Accounts
→ Generate New Private Key

---

## 4. Create .env

```
PORT=5000
```

---

## 5. Start Backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# 💻 Frontend Setup

## 1. Open another terminal

```bash
cd Frontend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start Frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🌐 Application URLs

## Customer Home

```
http://localhost:5173/
```

## Outlet Page

```
http://localhost:5173/outlet/outlet_001
```

## Track Order

```
http://localhost:5173/outlet/outlet_001/track/ORDER001
```

Replace **ORDER001** with an actual order number.

---

## Owner Login

```
http://localhost:5173/login
```

---

## Dashboard

```
http://localhost:5173/dashboard
```

---

## Create Order

```
http://localhost:5173/create-order
```

---

## QR Code Page

```
http://localhost:5173/qr
```

---

# 🔥 Backend API

## Home

```
GET /
```

---

## Get All Orders

```
GET /orders
```

---

## Get Order By Number

```
GET /orders/:orderNumber
```

---

## Create Order

```
POST /orders
```

---

## Update Order

```
PUT /orders/:id
```

---

## Delete Order

```
DELETE /orders/:id
```

---

# 🔐 Firebase Setup

1. Create Firebase Project
2. Enable Firestore Database
3. Generate Service Account Key
4. Save it as

```
Backend/firebase/serviceAccountKey.json
```

⚠️ Never upload this file to GitHub.

---

# ▶️ How to Run

### Terminal 1

```bash
cd Backend
npm install
npm run dev
```

### Terminal 2

```bash
cd Frontend
npm install
npm run dev
```

Open

```
http://localhost:5173
```

---

# 👨‍💻 Owner Workflow

1. Open

```
http://localhost:5173/login
```

2. Login

3. Open Dashboard

4. Create Orders

5. Update Status

6. Delete Orders

---

# 👤 Customer Workflow

1. Scan QR Code

or

Open

```
http://localhost:5173/outlet/outlet_001
```

2. Enter Order Number

3. Track Order

4. Status updates automatically every 3 seconds.

---

# 📷 Screens

- Home
- Create Order
- Dashboard
- Track Order
- QR Page

---

# 📄 License

This project is developed for educational and learning purposes.

---

# 👨‍💻 Developer

**Ritesh Khandagale**

GitHub:
https://github.com/riteshkhandagale06