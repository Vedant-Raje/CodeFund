# 🚀 CodeFund — Empowering developers

CodeFund is a full-stack crowdfunding platform inspired by *Patreon*, designed to help developers receive financial support from their followers. Built using modern technologies like Next.js 14, MongoDB, and Razorpay, CodeFund offers a robust, secure, and production-ready end-to-end donation system for independent developers.


---

## 🌟 Features

- 🔐 **GitHub OAuth Authentication** – Quick and secure login for users and creators using NextAuth.js  
- 👤 **Dynamic Creator Profiles** – Each creator gets a custom page (e.g. `/username`) to receive donations and showcase their work  
- 💸 **Razorpay Payment Integration** – Followers can donate custom or preset amounts securely via Razorpay  
- 📊 **Creator Dashboard** – Intuitive UI to manage profiles, update cover/photo, and link Razorpay API keys  
- 🏆 **Supporter Leaderboard** – Public display of top donors, amounts, and custom messages  
- 📈 **Payment Analytics** – Track total raised funds, number of donations, and donation trends (coming soon)  
- ✅ **Real-Time Updates** – Donations dynamically update without page reloads  
- 📱 **Responsive UI** – Mobile-first design powered by Tailwind CSS  
- 🔒 **Secure Backend** – Payment signature verification, .env handling, and secure API design  



---

## 🧠 Tech Stack

| Layer          | Tech Used                                   |
|----------------|----------------------------------------------|
| Frontend       | React, Next.js 14, Tailwind CSS              |
| Authentication | NextAuth.js (GitHub OAuth)                   |
| Backend/API    | Next.js API Routes, Node.js                  |
| Database       | MongoDB with Mongoose                        |
| Payments       | Razorpay API (orders, payments, webhooks)    |
| Tools          | Git, Postman, FileZilla, Certbot             |

---

## 📦 Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/your-username/codefund.git
cd codefund
