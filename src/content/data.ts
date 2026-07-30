export const profile = {
  name: "Vanshika Ludhani",
  title: "B.Tech Student | AI Systems & Backend Engineering",
  tagline: "Building distributed backends and computer-vision systems that hold up under load.",
  bio: "B.Tech Electrical Engineering student at NIT Jamshedpur, building backend infrastructure (FastAPI, Celery, distributed queues) and computer-vision systems (YOLOv8, OpenCV, MediaPipe). Open-source contributor to AI governance tooling; former research intern working on ArduPilot ROV/AUV simulation pipelines.",
  location: "Jamshedpur, India",
  email: "2024ugee084@nitjsr.ac.in",
  links: {
    linkedin: "https://www.linkedin.com/in/vanshika-ludhani-1a7a5a1a5/",
    github: "https://github.com/VanshikaLud04",
  },
};

export const skills = [
  { category: "Software Engineering", items: ["System Design", "Distributed Systems", "Concurrency", "Event-Driven Architecture", "AsyncIO", "OOP"] },
  { category: "AI Systems", items: ["Generative AI", "Retrieval-Augmented Generation (RAG)", "Information Retrieval", "Hybrid Retrieval", "Computer Vision"] },
  { category: "Backend", items: ["FastAPI", "Docker", "RabbitMQ", "Celery", "OpenTelemetry"] },
  { category: "Databases", items: ["PostgreSQL", "Redis", "SQLite", "ChromaDB", "PGVector"] },
  { category: "Languages", items: ["Python", "C++", "C", "JavaScript", "SQL"] },
];

export const experience = [
  {
    role: "Software Engineering Contributor (Open Source)",
    org: "Cordum",
    date: "Apr 2026",
    link: { label: "Merged PR", url: "https://github.com/cordum-io/cordum-packs/pull/264" },
    bullets: [
      "Replaced synchronous HTTP policy checks with an asynchronous job pipeline, eliminating blocking policy evaluation from the execution path.",
      "Developed <b>cordum-langchain-guard</b>, a Python sidecar service implementing asynchronous approval workflows for LLM policy evaluation.",
      "Implemented deterministic 403 policy-denial handling and real-time execution routing, contributing to a merged pull request with <b>26/26</b> passing integration tests.",
    ],
  },
  {
    role: "Research Intern",
    org: "NIT Jamshedpur & IIT Guwahati",
    date: "Jun 2025 – Apr 2026",
    link: { label: "Appointment Letter", url: "https://drive.google.com/file/d/1z5axLIsBYDNrZiSYIq-uQ7fEEPqZg0AX/view?usp=sharing" },
    bullets: [
      "Developed <b>20+</b> Python/C++ simulation pipelines for ArduSub ROV/AUV testing within the ArduPilot ecosystem.",
      "Integrated OpenCV-based vision modules into ArduPilot simulation pipelines for underwater feature tracking.",
      "Validated simulation outputs through iterative experimentation with researchers from NIT Jamshedpur and IIT Guwahati, improving the reliability of underwater autonomy experiments.",
    ],
  },
];

export const projects = [
  {
    id: "FILE_01",
    slug: "llm-cost-guard",
    title: "LLM Cost Guard",
    subtitle: "Distributed API Cost Middleware",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "RabbitMQ", "Docker"],
    metrics: ["7,100+ RPS", "Atomic Token Reservation"],
    link: "https://github.com/VanshikaLud04/llm-cost-guard",
    bullets: [
      "Built a production-style AI Gateway for centralizing policy enforcement, intelligent provider routing, and token budget management across multiple LLM providers.",
      "Scaled request handling through asynchronous task queues (RabbitMQ/Celery), isolating latency-sensitive API paths from persistence workloads, and defined a common provider interface enabling pluggable routing across OpenAI, Anthropic, and Groq.",
      "Guaranteed atomic token reservation before provider invocation using Redis to prevent double charging during concurrent requests, alongside integration tests validating policy enforcement under <b>7,100+</b> concurrent requests."
    ],
  },
  {
    id: "FILE_02",
    slug: "ragbench",
    title: "RagBench",
    subtitle: "Full-Stack RAG Platform",
    stack: ["FastAPI", "React", "PostgreSQL", "ChromaDB", "Redis", "pgvector"],
    metrics: ["97.6% latency drop"],
    link: "https://github.com/VanshikaLud04/Rag-bench",
    bullets: [
      "Engineered a production retrieval platform combining hybrid retrieval (BM25 + dense search), Reciprocal Rank Fusion (RRF), cross-encoder reranking, and grounded generation for enterprise document search.",
      "Built a pluggable parser registry enabling new document types to be added without modifying the ingestion pipeline, and guaranteed post-hoc citation grounding independent of LLM outputs.",
      "Integrated evaluation pipelines measuring faithfulness and context precision, and implemented a Redis-based Semantic Caching layer reducing generation latency by <b>97.6%</b> (3.5s to 85ms)."
    ],
  },
  {
    id: "FILE_03",
    slug: "focus-lock",
    title: "Focus Lock",
    subtitle: "OS-Level Productivity Tracker",
    stack: ["Python", "YOLOv8", "OpenCV", "MediaPipe", "Flask", "WebSockets", "SQLite"],
    metrics: ["97.2% Recall", "<30ms latency", "93% CPU reduction"],
    link: "https://github.com/VanshikaLud04/focus-lock",
    bullets: [
      "Developed a privacy-first Edge AI analytics platform performing on-device distraction detection with <b>97.2%</b> recall and <b>&lt;30 ms</b> inference latency.",
      "Designed an event-driven producer-consumer pipeline separating capture, inference, telemetry, and analytics using lock-safe asynchronous queues and an in-memory EventBus.",
      "Guaranteed non-blocking inference by isolating analytics from the critical path, and applied Shannon entropy to dynamically adapt inference frames based on motion, slashing system CPU consumption by <b>93%</b>."
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
      "Achieved <b>93.61%</b> accuracy on the sklearn digits dataset (1000 epochs, 80/20 train-test split).",
      "Loss dropped from 2.30 → 0.18 over 1000 epochs, confirming the backprop implementation is perfectly stable."
    ],
  },
];

export const education = [
  {
    institution: "National Institute of Technology (NIT)",
    degree: "B.Tech in Electrical Engineering",
    detail: "CGPA: 7.57/10.0",
    date: "Expected May 2028",
    location: "Jamshedpur, India",
  },
  {
    institution: "Cambridge Court High School",
    degree: "Intermediate (Class XII): 90% | Matriculation (Class X): 96.4%",
    detail: "",
    date: "Completed 2023",
    location: "Jaipur, India",
  },
];

export const achievements = [
  {
    title: "National Finalist, MeitY SWAYAAN Challenge",
    description: "Served as Core Vision Engineer; architected a YOLO-based computer vision pipeline for an autonomous drone attaining <b>85%</b> detection accuracy.",
  },
  {
    title: "Top 30, HackOdisha 2025",
    description: "Ranked among the top 30 out of <b>441</b> projects for VeriChain, a blockchain-based academic credential verification platform.",
  },
  {
    title: "2nd Position, ElectroHack'25",
    description: "Secured 2nd place among <b>200+</b> participants for designing an integrated hardware-software solution.",
  },
];
