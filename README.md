# RCA Tracker UI

This project started as a small demo API experiment and gradually evolved into a **real full-stack, production-grade cloud application**.  
The goal is to continue expanding it with new features and improvements while maintaining clean architecture, cloud-native deployment, and professional development practices.

---

## 🧱 Current Architecture Overview

| Layer        | Stack                                     | Hosting               |
| ------------ | ----------------------------------------- | --------------------- |
| **Frontend** | React (Vite) + Bootstrap                  | Azure Static Web Apps |
| **Backend**  | FastAPI + Docker                          | Azure Container Apps  |
| **Database** | MongoDB Atlas (Free Tier)                 | Cloud                 |
| **CI/CD**    | GitHub Actions + Azure                    | Automatic deployments |
| **API CORS** | Configured for your Static Web App domain | ✅ Working            |


---

## 🌍 Live Full-Stack Demo
**Frontend (React + Bootstrap)**  
https://black-sea-064252b03.3.azurestaticapps.net

**Backend (FastAPI + MongoDB)**  
https://rca-tracker.whiteocean-65212696.westeurope.azurecontainerapps.io/docs

---

## 🧠 Project Description
RCA Tracker is a full-stack application designed to record and view incident reports.  
It features a responsive React interface, a FastAPI backend with MongoDB persistence, and automated CI/CD deployment pipelines using GitHub Actions and Azure services.

---

## 🚀 Future Enhancements
- Add timestamps and sorting by severity or date  
- Add chart visualisations (Recharts or Chart.js)  
- Add authentication (JWT)  
- Add delete/edit functionality for incidents  
- Polish UI for better user experience  
- Add tests for backend and frontend

---
