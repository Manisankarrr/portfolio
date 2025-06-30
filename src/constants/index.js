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
  { value: 4, suffix: "", label: "Completed Projects" },
  { value: 3, suffix: "", label: "Certifications" },
  { value: 3, suffix: "", label: "CI/CD Pipelines Built" },
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
    imgPath: "/images/devops.png",
    title: "Infrastructure & Automation",
    desc: "Docker, Docker Compose, Kubernetes, Bash & Linux – Automating deployments and system orchestration."
  },
  {
    imgPath: "/images/aws.png",
    title: "Cloud & CI/CD",
    desc: "AWS, Jenkins, GitHub Actions, Prometheus & Grafana – Ensuring scalable, reliable, and observable pipelines."
  },
  {
    imgPath: "/images/backend.png",
    title: "Full-Stack Development",
    desc: "React.js, Node.js, Express.js, Tailwind CSS, MySQL, MongoDB, Python & C – Building end-to-end web solutions."
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
    title: "Optimal XI Insights using data ana",
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
