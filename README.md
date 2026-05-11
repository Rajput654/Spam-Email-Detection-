# 🚀 AI Spam Classifier

### 🔍 FastAPI + React + Machine Learning

A modern, full-stack AI-powered Spam Detection web application built using **FastAPI (Python backend)** and **React + Tailwind CSS (frontend)**.

This project uses a trained **TF-IDF + Machine Learning pipeline** to classify email/messages as:

* ✅ Legitimate (Not Spam)
* 🚨 Spam

With real-time confidence score prediction.

---

## 🌟 Live Demo Preview

> Paste a message → Click “Check Message” → Get prediction with confidence score and animated UI feedback.

---

## 🧠 ML Model Overview

The backend uses a trained ML pipeline:

* **Text Vectorization:** TF-IDF
* **Classifier:** (e.g., Logistic Regression / Naive Bayes / SVM)
* **Output:**

  * Prediction (Spam / Not Spam)
  * Confidence Probability

The model is serialized using `pickle` and loaded into FastAPI.

---

## 🏗️ Tech Stack

### 🔹 Backend

* 🐍 Python
* ⚡ FastAPI
* 📦 Scikit-Learn
* 🔢 NumPy
* 🔄 CORS Middleware

### 🔹 Frontend

* ⚛ React (TypeScript)
* 🎨 Tailwind CSS
* 🔥 Modern Glassmorphism UI
* ✨ Animated Results & Progress Bar

---

## 📂 Project Structure

```
AI-Spam-Classifier/
│
├── backend/
│   ├── main.py
│   ├── model/
│   │   └── spam_pipeline.pkl
│
├── frontend/
│   ├── components/
│   │   ├── SpamForm.tsx
│   │   ├── ResultCard.tsx
│   ├── services/
│   │   └── api.ts
│
├── README.md
```

---

## ⚙️ Backend Setup (FastAPI)

### 1️⃣ Install Dependencies

```bash
pip install fastapi uvicorn scikit-learn numpy
```

### 2️⃣ Run the Server

```bash
uvicorn main:app --reload
```

Server runs at:

```
http://127.0.0.1:8000
```

---

## 🎨 Frontend Setup (React + Tailwind)

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start Development Server

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📡 API Endpoint

### POST `/predict`

#### Request:

```json
{
  "email": "Congratulations! You won a lottery"
}
```

#### Response:

```json
{
  "prediction": "Spam",
  "confidence": 0.87
}
```

---

## ✨ Features

* ✅ Real-time spam detection
* 📊 Confidence score visualization
* 🎨 Modern animated UI
* ⚡ Fast API response
* 🌐 CORS enabled (Frontend ↔ Backend)
* 💎 Glassmorphism design
* 📱 Fully responsive layout

---

## 📸 UI Highlights

* Gradient animated background
* Glassmorphism card design
* Animated result reveal
* Dynamic progress bar
* Premium button hover effects

---

## 🎯 Future Improvements

* 🔥 Add deep learning model (LSTM / BERT)
* 🌍 Deploy on Render / Vercel
* 📊 Add model evaluation dashboard
* 🧪 Add message history logging
* 🌓 Add Dark/Light toggle
* 📈 Model accuracy comparison feature

---

## 🧑‍💻 Author

** Sanskar Rajput**
Full Stack Developer | AI Enthusiast

Building scalable ML-powered web applications 🚀

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub and feel free to contribute!


