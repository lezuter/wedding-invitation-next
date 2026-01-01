# 💍 Digital Wedding Invitation Platform

A highly interactive and responsive wedding invitation website built with **Next.js** and **TypeScript**. Designed to provide a seamless user experience with dynamic guest personalization and real-time RSVP management via **Firebase**.

## ✨ Key Features

* **Dynamic Guest Personalization:** Generates unique invitation links for each guest (e.g., `?to=NamaTamu`) automatically from CSV data.
* **Real-time RSVP System:** Integrated with **Firebase Firestore** to capture guest attendance and messages instantly.
* **Interactive UI/UX:** Features a custom music player, scroll animations (AOS), and a countdown timer.
* **Optimized Performance:** Utilizes Next.js Image Optimization and Lazy Loading for fast load times on mobile devices.
* **Secure Guest Management:** Backend scripts included for batch generating invitation links safely.

## 🛠️ Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** CSS Modules / Tailwind
* **Database:** Firebase Firestore
* **Animation:** AOS (Animate On Scroll)
* **Deployment:** Vercel / Static Export

## 📂 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # Reusable UI components (Hero, Gallery, RSVP)
│   ├── data/           # Static data & configurations
│   └── lib/            # Firebase configuration
├── public/             # Static assets (Images, Fonts, Music)
├── functions/          # Serverless functions
└── generateLinks.js    # Script to generate guest URLs from CSV
```

---
**Developed by [Derry Andhika](https://www.linkedin.com/in/lezut3r/)**
