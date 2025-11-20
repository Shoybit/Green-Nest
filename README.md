# 🌿 GreenNest — Eco-Friendly Living Website

A modern, responsive, and eco-friendly web application built using **React**, **Tailwind CSS**, and **Firebase**, focused on promoting sustainable products and green lifestyle awareness.

Live Site: *([https://remarkable-torte-c4c438.netlify.app/](https://remarkable-torte-c4c438.netlify.app/))*

---

## 🚀 Features

* Fully responsive clean UI
* Smooth navigation with React Router
* Firebase Authentication
* Product sections & eco-friendly content
* Beautiful components using Tailwind + DaisyUI
* Toast notifications & loaders
* Swiper sliders for UI enhancement

---

## 🛠️ Technologies Used

### **Frontend**

* **React 19** — component-based UI
* **React DOM**
* **React Router DOM** — navigation
* **Tailwind CSS 4** — modern styling
* **DaisyUI** — UI components
* **React Icons** — icons
* **Swiper** — sliders & carousels
* **React Toastify** — notifications
* **React Spinners** — loaders

### **Backend / Services**

* **Firebase 12** — Authentication & Hosting Support

### **Build Tools**

* **Vite** — fast development & build
* **ESLint** — clean and error-free code

---

## 📁 Project Setup

### **1️⃣ Clone the project**

```bash
git clone https://github.com/your-username/greennest.git
cd greennest
```

### **2️⃣ Install dependencies**

```bash
npm install
```

### **3️⃣ Create Firebase config**

Inside `src/firebase.js`

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
```

### **4️⃣ Run the development server**

```bash
npm run dev
```

### **5️⃣ Build for production**

```bash
npm run build
```

---

## 📦 Folder Structure

```
📦 src
 ┣ 📂 components
 ┣ 📂 pages
 ┣ 📂 hooks
 ┣ 📂 context
 ┣ 📂 assets
 ┣ 📜 main.jsx
 ┣ 📜 App.jsx
```

---

## 🌱 Project Purpose

This project helps users explore eco-friendly lifestyle ideas and products through a clean and modern interface. It's built to practice:

* Clean UI/UX design
* Component-based architecture
* Firebase authentication
* Smooth and responsive layout

---

## ✨ Developer

**Md Shoyaib Islam** — Front-End Developer (React, Tailwind, Firebase)

---

If you want, I can also generate **badges**, **screenshots section**, or a **GitHub-friendly version**.
