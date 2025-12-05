# Green-Nest 

GreenNest is a modern, responsive and eco‑friendly web application built with React, Tailwind CSS, and Firebase, aimed at promoting sustainable products and encouraging a greener lifestyle. It offers a clean UI/UX, smooth navigation, product sections and eco‑friendly content, secure authentication, toast notifications, and intuitive features like swipers/sliders — all to help users explore sustainable choices and make environmentally conscious decisions.
**Live Demo:** [https://remarkable-torte-c4c438.netlify.app/](https://remarkable-torte-c4c438.netlify.app/)  
**Server:** [Green-Nest Server](https://github.com/Shoybit/Green-Nest-Server)


---

##  Features

- Fully responsive clean UI  
- Smooth navigation with React Router v7  
- Firebase Authentication (login/signup)  
- Product sections & eco‑friendly content  
- Beautiful components styled with Tailwind + DaisyUI  
- Toast notifications & spinners (loaders) for better UX  
- Swiper sliders for enhanced UI/UX  
- SweetAlert2 popups for interactive alerts  

---

##  Technologies Used

**Frontend**  
- React v19   
- React Router DOM v7  
- Tailwind CSS v4  
- DaisyUI  
- React Icons  
- Swiper  
- React Toastify  
- React Spinners  
- SweetAlert2  

**Backend / Services**  
- Firebase v12 (Authentication, Hosting, Database if used)  

**Build & Dev Tools**  
- Vite v7  
- ESLint + Plugins for React & Hooks  
- Node.js (for running npm scripts)  

---

##  Installation & Project Setup

1. Clone the repository  

```bash
git clone https://github.com/Shoybit/Green-Nest.git
cd Green-Nest
```

2. Install dependencies  

```bash
npm install
```

3. Add Firebase config  

- Create `src/firebase.js` with your Firebase credentials:  

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

4. Run development server  

```bash
npm run dev
```

5. Build for production  

```bash
npm run build
```

6. Preview production build  

```bash
npm run preview
```

---

##  Folder Structure

```
src
┣ components
┣ pages
┣ hooks
┣ context
┣ assets
┣ main.jsx
┗ App.jsx
```

---

##  Project Purpose

Green-Nest helps users explore eco‑friendly lifestyle ideas and products with a modern, responsive interface.  
It focuses on:

- Component-based UI  
- Responsive layouts  
- Firebase Authentication  
- Smooth UX with notifications, loaders, and alerts  

---

##  Developer

Md Shoyaib Islam — Front-End Developer (React, Tailwind, Firebase)  

---
