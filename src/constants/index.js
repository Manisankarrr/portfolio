const navLinks = [
  {
    name: "Certifications",
    link: "#certifications",
  },
  {
    name: "Skills",
    link: "#skills",
  },

  {
    name: "Projects",
    link: "#projects",
  },
    
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 9, suffix: "", label: "Completed Projects" },
  { value: 3, suffix: "", label: "Certifications" },
  { value: 4, suffix: "", label: "CI/CD Pipelines Built" },
  { value: 6, suffix: "", label: "DevOps Tools Used" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/1nginx.png",
  },
  {
    imgPath: "/images/logos/2reactjs.png",
  },
  {
    imgPath: "/images/logos/3grafana.png",
  },
  {
    imgPath: "/images/logos/4nodejs.png",
  },
  {
    imgPath: "/images/logos/5jenkins.png",
  },
  {
    imgPath: "/images/logos/6github-actions.png",
  },
  {
    imgPath: "/images/logos/7docker.png",
  },
  {
    imgPath: "/images/logos/8docker-compose.png",
  },
  {
    imgPath: "/images/logos/9kubernetes.png",
  },
  {
    imgPath: "/images/logos/10prometheus.png",
  },
  {
    imgPath: "/images/logos/awss.png",
  },
];

const abilities = [
  {
    "imgPath": "/images/aiml.webp",
    "title": "AI / ML",
    "desc": "TensorFlow, PyTorch, Scikit-learn, XGBoost, DL, NLP, RAG, LLM Orchestration, Gradio, Flask, OpenRouter API.",
  },
  {
    "imgPath": "/images/aws.png",
    "title": "Cloud Infrastructure",
    "desc": "AWS, Kubernetes, Docker Compose, Linux.",
  },
  {
    "imgPath": "/images/devops.png",
    "title": "DevOps & Automation",
    "desc": "GitHub Actions (CI/CD), Docker, Jenkins, Prometheus, Grafana, Bash, Python.",
  }
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
  "title": "AccessoryIQ – Evidence-Based Accessory Recommendation System",
  "logoPath": "/images/aiicon.png",
  "review":
    "RAG, Agent-based AI, Python, FAISS, Sentence Transformers, OpenRouter API, Web Search (Serper), Gradio, Docker.",
  "responsibilities": [
    "Designed a dual-agent RAG system (Planner + Evidence) to recommend compatible accessories for phones, laptops, TVs, and gaming consoles using official manufacturer PDFs as ground truth.",
    "Implemented strict hallucination control with RAG-first retrieval, controlled web search fallback, confidence scoring, and explicit refusal when evidence was insufficient.",
    "Built a modular Python backend using FAISS vector search and sentence-transformer embeddings to ensure accurate, explainable, and scalable retrieval.",
    "Developed an interactive Gradio UI enabling category-aware accessory selection and real-time, source-cited recommendations."
  ],
  "repoLink": "https://github.com/Manisankarrr/AccessoryIQ"
}
,
  {
  "title": "Intelligent Prompt Optimization Platform (IPO-Meta)",
  "logoPath": "/images/aiml.webp", 
  "review": "Gradio, Flask, OpenAI SDK, OpenRouter API, GitHub Actions, Docker, Hugging Face Spaces.",
  "responsibilities": [
    "Engineered a **GPU-Free MLOps Pipeline** using GitHub Actions to automate continuous learning and prompt refinement.",
    "Built a **containerized Flask proxy backend** to serve a custom HTML/CSS frontend, managing API calls to the deployed Gradio application.",
    "Orchestrated two external LLMs via **OpenRouter** to systematically rewrite vague user prompts and execute the final answer based on user feedback.",
  ],
  "repoLink": "https://github.com/Manisankarrr/promptTune",
},
{
  "title": "DocuMind – Intelligent Document Question Answering System",
  "logoPath": "/images/aiml.webp",
  "review":
    "RAG, Python, LangChain, FAISS, Sentence Transformers, OpenAI / LLM APIs, PDF Processing, Gradio.",
  "responsibilities": [
    "Built a Retrieval-Augmented Generation (RAG) system to enable accurate question answering over uploaded PDF documents using vector embeddings and semantic search.",
    "Implemented document ingestion, chunking, and FAISS-based retrieval to ensure responses were grounded strictly in source documents.",
    "Designed prompt logic and context handling to minimize hallucinations and return document-cited answers only.",
    "Developed a simple Gradio-based interface allowing users to upload documents and interact with them in real time."
  ],
  "repoLink": "https://github.com/Manisankarrr/DocuMind"
}
,
  {
  "title": "AI Project Roadmap Generator",
  "logoPath": "/images/aiicon.png",
  "review":
    "RAG, Google Gemini API, OPENAI API, Python, Flask, ChromaDB, Docker, CI/CD, GitHub Actions, JavaScript, Tailwind CSS, jsPDF.",
  "responsibilities": [
    "Engineered an advanced Retrieval-Augmented Generation (RAG) pipeline integrating the Google Gemini API with a ChromaDB vector database to provide hyper-personalized project recommendations.",
    "Automated the end-to-end application lifecycle with a full CI/CD pipeline using GitHub Actions, containerizing the backend with Docker for Docker Hub and deploying the frontend to Vercel.",
    "Architected a data retrieval system that analyzes and synthesizes developer skills from the GitHub API with market trends to inform the AI's strategic recommendations.",
    "Developed a responsive frontend with a client-side PDF report generator using jsPDF to create structured, downloadable roadmaps."
  ],
  "repoLink": "https://github.com/Manisankarrr/ai-roadmap-generator"
},
  {
  title: "DevOps Portfolio Website",
  logoPath: "/images/devops.png",  // add an icon in your public/images folder
  review:
    "Vite, React, Tailwind CSS, Docker, GitHub Actions, Docker Hub, Netlify, AWS (S3, CloudFront).",
  responsibilities: [
    "Built and containerized a portfolio website using Vite, React, and Tailwind CSS with DevOps focus.",
    "Automated CI/CD pipeline using GitHub Actions: Docker build, push to Docker Hub, and deploy to Netlify.",
    "Planned and integrated cloud services: S3 and CloudFront for static hosting, ECR for container Registery.",
  ],
  repoLink: "https://github.com/Manisankarrr/portfolio",
}
,
{
  title: "Barber Shop Booking System (AWS DevOps)",
  logoPath: "/images/aws.png",
  review:
    "HTML, Node.js, MySQL, AWS (ECS, RDS, S3, CloudFront), Docker, GitHub Actions, CI/CD, CloudFormation.",
  responsibilities: [
    "Built a full-stack barber booking system using HTML, Node.js, and MySQL with user authentication and slot booking features.",
    "Containerized backend and deployed it on AWS ECS Fargate via ECR, connected to RDS (MySQL) within a custom VPC.",
    "Hosted frontend on S3 with CloudFront distribution, and implemented automated CI/CD using GitHub Actions.",
    "Provisioned complete cloud infrastructure using AWS CloudFormation (IaC) including VPC, subnets, and database.",
  ],
  repoLink: "https://github.com/Manisankarrr/barber-shop-sql",
}
,
  {
    title: "Optimal XI Insights using Data Analytics",
    logoPath: "/images/powerbi.png",
    review:
      "Power BI, Data Analytics, ESPN Cricinfo data scraping, Performance Metrics, Visualization, DAX.",
    responsibilities: [
      "Collected cricket match data from ESPN Cricinfo and performed data cleaning and transformation.",
      "Analyzed batting averages, bowling economy, and other metrics to recommend best playing XI.",
      "Created interactive dashboards using Power BI to visualize player stats and selection impact.",
    ],
    repoLink: "https://github.com/Manisankarrr/Optimal-XI-Insights",
  },
  {
    title: "Real-Time Chat Application",
    logoPath: "/images/aws.png",
    review:
      "MERN Stack (MongoDB, Express.js, React.js, Node.js), Socket.IO, WebSocket, Authentication, Responsive Design.",
    responsibilities: [
      "Built a full-stack real-time chat application with public and private messaging features.",
      "Implemented real-time, bidirectional communication using Socket.IO and Node.js.",
      "Managed user authentication and session control using JWT tokens and Express middleware.",
    ],
    repoLink: "https://github.com/Manisankarrr/Realtime-Chat-App",
  },
  {
    title: "Predictive Diagnosis System",
    logoPath: "/images/backend.png",
    review:
      "Streamlit, Python, Scikit-learn, XGBoost, Machine Learning, Data Analysis, Logistic Regression, SVM.",
    responsibilities: [
      "Developed a disease prediction web app using Streamlit and ML models (XGBoost, Logistic Regression, SVM).",
      "Integrated real-time symptom input with trained models to predict diseases like diabetes, heart conditions, and liver issues.",
      "Enabled probability-based output with symptom analysis for user diagnosis support.",
    ],
    repoLink: "https://github.com/Manisankarrr/Predictive-Diagnosis-WebApp",
  },
];



const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "git",
    imgPath: "/images/git.png",
  },
  
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];
const socialLinks = {
  insta: "https://instagram.com/your_actual_username",
  git: "https://github.com/Manisankarrr",
  linkedin: "https://linkedin.com/in/your_actual_profile_id",
};

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  socialLinks,
  techStackIcons,
  techStackImgs,
  navLinks,
};
