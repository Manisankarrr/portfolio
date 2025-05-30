# 🚀 Manisankar's Developer Portfolio

Live Preview: [https://manisankar.netlify.app](https://manisankar.netlify.app)

A modern, responsive, and DevOps-powered portfolio built with **React**, styled using **Tailwind CSS**, and deployed via **Docker**, **GitHub Actions**, and **Netlify CI/CD**.

---

## 📌 Features

- ⚛️ Built with React + Vite for blazing-fast performance
- 🎨 Responsive design with Tailwind CSS
- 🐳 Containerized using Docker
- 🔁 CI/CD pipeline using GitHub Actions
- 🚀 Automated deployment to Netlify
- 🛠️ Production-ready and DevOps-friendly

---


---

## 🧪 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **CI/CD**: GitHub Actions
- **Deployment**: Netlify
- **Containerization**: Docker

---

## 🛠️ DevOps Setup

### 🔧 Docker

The application is containerized using Docker:

```bash
docker build -t manisankar-portfolio .
docker run -p 3000:3000 manisankar-portfolio

----

🔁 GitHub Actions Workflow (.github/workflows/ci.yml)
Step 1: Build Docker image

Step 2: Push to Docker Hub

Step 3: Deploy to Netlify using NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID

Secrets are managed securely in GitHub repository → Settings → Secrets and Variables → Actions.

🔐 GitHub Secrets Required
Name	Purpose
DOCKERHUB_USERNAME	Docker Hub username
DOCKERHUB_PASSWORD	Docker Hub access token
NETLIFY_AUTH_TOKEN	Netlify personal access token
NETLIFY_SITE_ID	Unique Netlify site ID

🚀 Deployment
✅ CI/CD runs automatically on every push to main
🏁 Netlify deploys the site live at:

🔗 https://manisankar.netlify.app

🧠 Projects Showcased
🔹 Real-Time Chat Application
MERN Stack, Socket.IO

Private + Public chat rooms

GitHub Repo

🔹 Predictive Diagnosis System
Streamlit, XGBoost, ML

Multiple disease prediction

GitHub Repo

🔹 Optimal XI Insights (Cricket Analytics)
Power BI, Data Scraping

Cricket XI analysis from ESPN data

GitHub Repo

🧰 How to Run Locally
bash
Copy code
# Install dependencies
npm install

# Start local dev server
npm run dev

📄 License
This project is licensed under the MIT License.

