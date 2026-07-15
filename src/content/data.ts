export const profile = {
  name: "Vanshika Ludhani",
  title: "Backend & AI/CV Systems",
  tagline: "Building distributed backends and computer-vision systems that hold up under load.",
  bio: "B.Tech Electrical Engineering student at NIT Jamshedpur, building backend infrastructure (FastAPI, Celery, distributed queues) and computer-vision systems (YOLOv8, OpenCV, MediaPipe). Open-source contributor to AI governance tooling; former research intern working on ArduPilot ROV/AUV simulation pipelines.",
  location: "Jamshedpur, India",
  email: "vanshikaludhani2004@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/vanshika-ludhani-1a7a5a1a5/",
    github: "https://github.com/VanshikaLud04",
  },
};

export const skills = [
  { category: "Languages", items: ["Python", "C++", "C", "JavaScript", "SQL", "HTML/CSS"] },
  { category: "Backend & DevOps", items: ["FastAPI", "Node.js", "Flask", "Celery", "RabbitMQ", "Docker", "GitHub Actions", "Linux/Unix"] },
  { category: "Databases & State", items: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB", "SQLite"] },
  { category: "AI & Computer Vision", items: ["YOLOv8", "OpenCV", "MediaPipe", "RAG", "Hybrid Search"] },
  { category: "Core CS", items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "AsyncIO"] },
];

export const experience = [
  {
    role: "Open Source Contributor",
    org: "Cordum (AI Governance Framework)",
    date: "Apr 2026",
    link: { label: "Merged PR", url: "https://github.com/cordum-io/cordum-packs/pull/264" },
    bullets: [
      "Redesigned Cordum's Safety Kernel, replacing synchronous HTTP policy checks with asynchronous job pipelines for better scalability and responsiveness.",
      "Built the cordum-langchain-guard Python sidecar with non-blocking workflows that return control to the LLM immediately during approval-required execution states.",
      "Integrated deterministic 403 policy denial handling and real-time execution routing; merged 26/26 passing integration tests into the mainline open-source project.",
    ],
  },
  {
    role: "Research Intern",
    org: "NIT Jamshedpur & IIT Guwahati",
    date: "Jun 2025 – Apr 2026",
    link: { label: "Appointment Letter", url: "https://drive.google.com/file/d/1z5axLIsBYDNrZiSYIq-uQ7fEEPqZg0AX/view?usp=sharing" },
    bullets: [
      "Developed 20+ Python/C++ simulation pipelines for ArduSub ROV/AUV testing within the ArduPilot ecosystem.",
      "Integrated OpenCV image-processing streams to validate real-time underwater feature tracking and target detection.",
      "Logged and analyzed video-feed latency metrics across 3 trial phases to guide compute optimization.",
    ],
  },
];

export const projects = [
  {
    id: "FILE_01",
    slug: "llm-cost-guard",
    title: "LLM-Cost-Guard",
    subtitle: "Distributed API Cost Middleware",
    stack: ["FastAPI", "PostgreSQL", "Celery", "RabbitMQ", "Docker", "Prometheus"],
    metrics: ["p95 110ms", "7,100+ RPS", "0.63ms Redis"],
    link: "https://github.com/VanshikaLud04/llm-cost-guard",
    bullets: [
      "FastAPI middleware enforcing LLM token budgets and rate limits to prevent uncontrolled API spend.",
      "Distributed task-processing backend (PostgreSQL + RabbitMQ + Celery) decoupling DB I/O from the main API thread, eliminating monolithic locking bottlenecks.",
      "Dockerized full stack with Prometheus observability; p95 latency of 110ms across 7,100+ concurrent requests in Locust load tests, 0.63ms Redis idempotency overhead.",
      "Supports deterministic fallback chains (OpenAI → Anthropic → Groq) to ensure high uptime simulation."
    ],
  },
  {
    id: "FILE_02",
    slug: "focus-lock",
    title: "Focus Lock",
    subtitle: "OS-Level Productivity Tracker",
    stack: ["Python", "YOLOv8", "MediaPipe", "Flask-SocketIO", "Redis", "OpenCV"],
    metrics: ["97.2% Recall", "<30ms latency", "93% CPU reduction"],
    link: "https://github.com/VanshikaLud04/focus-lock",
    bullets: [
      "Daemon-architected macOS productivity tracker (OpenCV + Tkinter subprocesses) isolating ML inference from the main event loop for non-blocking full-screen lock-outs.",
      "97.2% recall in distraction detection by fusing YOLOv8 object recognition with MediaPipe gaze tracking, <30ms end-to-end inference latency.",
      "Adaptive sampling engine using frame-difference entropy — 93% reduction in CPU overhead during idle states.",
      "Redis-backed idempotency caching layer (~2ms overhead) for session state integrity across aggressive UI transitions.",
      "Features a beautiful interactive web dashboard for session tracking, task management, and live stats."
    ],
  },
  {
    id: "FILE_03",
    slug: "ragbench",
    title: "RagBench",
    subtitle: "Full-Stack RAG Platform",
    stack: ["React", "Node.js", "FastAPI", "MongoDB", "ChromaDB"],
    metrics: ["69.6% → 92.5% faithfulness"],
    link: "https://github.com/VanshikaLud04/Rag-bench",
    bullets: [
      "Production-grade RAG Evaluation Platform for Academic Research Papers, built to benchmark multiple LLMs.",
      "Improved generation faithfulness from 69.6% to 92.5% via Hybrid Search (dense embeddings + sparse BM25) and an automated LLM-as-a-judge retry mechanism.",
      "Custom evaluation engine measuring Context Precision, Recall, and Answer Relevancy for both local and cloud models.",
      "Integrated Redis Semantic Caching to bypass heavy LLM computation for similar queries, dropping latency by 97.6%."
    ],
  },
  {
    id: "FILE_04",
    slug: "numpy-neural-net",
    title: "NumPy Neural Network",
    subtitle: "From Scratch — No PyTorch, No TensorFlow, No model.fit()",
    stack: ["Python 3", "NumPy", "Linear Algebra", "sklearn"],
    metrics: ["93.61% accuracy", "Loss: 2.30 → 0.18", "1000 epochs"],
    link: "https://github.com/VanshikaLud04/numpy-neural-net",
    bullets: [
      "A fully connected Multilayer Perceptron (MLP) implemented purely in Python and NumPy — no PyTorch, no TensorFlow, no model.fit().",
      "Built to demonstrate a ground-up understanding of how neural networks actually work: forward pass, backpropagation, and gradient descent implemented as raw matrix operations.",
      "Architecture: Input (64) → Hidden (16, ReLU) → Output (10, Softmax). Loss: Cross-entropy. Optimizer: SGD.",
      "Achieved 93.61% accuracy on the sklearn digits dataset (1000 epochs, 80/20 train-test split).",
      "Loss dropped from 2.30 → 0.18 over 1000 epochs, confirming the backprop implementation is perfectly stable."
    ],
  },
];

export const education = [
  {
    institution: "National Institute of Technology Jamshedpur",
    degree: "B.Tech, Electrical Engineering",
    detail: "CGPA 7.57/10.0",
    date: "Expected 2028",
    location: "Jamshedpur, India",
  },
  {
    institution: "Cambridge Court High School",
    degree: "Class XII: 90% · Class X: 96.4%",
    detail: "",
    date: "2020 – 2023",
    location: "Jaipur, India",
  },
];

export const achievements = [
  {
    title: "National Finalist, MeitY SWAYAAN Challenge",
    description: "Selected from 285 teams for an autonomous disaster-management drone; built a YOLO-based vision pipeline achieving 85% detection accuracy.",
  },
  {
    title: "2nd Position, ElectroHack'25",
    description: "Recognized for outstanding hardware-software integration.",
  },
];
