# 🚀 Kubernetes Trial

This project is a simple **Node.js** web application deployed using **Docker** and **Kubernetes (K8s)**.  
It serves as a learning project to understand how to containerize, build, and deploy applications using modern DevOps tools.

---

## 🧱 Project Structure

kubernetes_trial/
│
├── k8s/ # Kubernetes deployment and service YAML files
├── node_modules/ # Project dependencies (ignored in Git)
├── index.js # Main application file
├── package.json # Project configuration and dependencies
├── Dockerfile # Instructions to build Docker image
├── docker-compose.yaml # Optional local Docker setup
├── deploy.sh # Shell script for deploying to Kubernetes
└── .gitignore # Ignored files and folders

yaml
Copy code

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [Docker](https://www.docker.com/)
- [Kubernetes (kubectl)](https://kubernetes.io/docs/tasks/tools/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Git](https://git-scm.com/)

---

## 🧩 Setup and Usage

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/GilbertKamau/kubernetes_trial.git
cd kubernetes_trial
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Run Locally
bash
Copy code
node index.js
Your app should be available at 👉 http://localhost:3000

🐳 Build and Run with Docker
Build Docker Image
bash
Copy code
docker build -t kubernetes_trial .
Run Docker Container
bash
Copy code
docker run -p 3000:3000 kubernetes_trial
☸️ Deploy to Kubernetes
Make sure Minikube or your Kubernetes cluster is running.

Apply Kubernetes Configurations
bash
Copy code
kubectl apply -f k8s/
Check Deployment Status
bash
Copy code
kubectl get pods
kubectl get services
Or use the helper script:

bash
Copy code
bash deploy.sh


📜 License
This project is for learning and experimentation purposes only.
Feel free to use and modify it.

