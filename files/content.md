# Content (Resume Data)

> Status: filled from resume. Bio/tagline are drafted — tweak the wording to sound like you.

## Profile
- Full name: **Vanshika Ludhani**
- Title/role: Electrical Engineering Student · Backend & AI/CV Systems
- Tagline (draft, edit freely): "Building distributed backends and computer-vision systems that hold up under load."
- Location: Jamshedpur, India (studying) / Jaipur, India (home)
- Email: 2024ugee084@nitjsr.ac.in
- Phone: +91-9649351660 *(decide if you want this public on the site — most portfolios omit it and rely on email/LinkedIn)*
- Links: [LinkedIn](https://www.linkedin.com/in/vanshika-ludhani-1a7a5a1a5/) · [GitHub](https://github.com/VanshikaLud04)
- Short bio (draft): B.Tech Electrical Engineering student at NIT Jamshedpur, building backend infrastructure (FastAPI, Celery, distributed queues) and computer-vision systems (YOLOv8, OpenCV, MediaPipe). Open-source contributor to AI governance tooling; former research intern working on ArduPilot ROV/AUV simulation pipelines.

## Skills
- **Languages:** Python, C++, C, JavaScript, SQL, HTML/CSS
- **Backend & DevOps:** FastAPI, Node.js, Flask, Celery, RabbitMQ, Docker, GitHub Actions (CI/CD), Linux/Unix
- **Databases & State:** PostgreSQL, MongoDB, Redis, ChromaDB, SQLite
- **AI & Computer Vision:** YOLOv8, OpenCV, MediaPipe, RAG, Hybrid Search
- **Core CS:** Data Structures & Algorithms, OOP, Operating Systems, AsyncIO

## Experience

### Cordum (AI Governance Framework) — Open Source Contributor · Apr 2026
[Merged PR](https://github.com/cordum-io/cordum-packs/pull/264)
- Redesigned Cordum's Safety Kernel, replacing synchronous HTTP policy checks with asynchronous job pipelines for better scalability and responsiveness.
- Built the `cordum-langchain-guard` Python sidecar with non-blocking workflows that return control to the LLM immediately during approval-required execution states.
- Integrated deterministic 403 policy denial handling and real-time execution routing; merged 26/26 passing integration tests into the mainline open-source project.

### NIT Jamshedpur & IIT Guwahati — Research Intern · Jun 2025 – Apr 2026
[Appointment Letter](https://drive.google.com/file/d/1z5axLIsBYDNrZiSYIq-uQ7fEEPqZg0AX/view?usp=sharing)
- Developed 20+ Python/C++ simulation pipelines for ArduSub ROV/AUV testing within the ArduPilot ecosystem.
- Integrated OpenCV image-processing streams to validate real-time underwater feature tracking and target detection.
- Logged and analyzed video-feed latency metrics across 3 trial phases to guide compute optimization.

## Projects

### LLM-Cost-Guard — Distributed API Cost Middleware
*FastAPI, PostgreSQL, Celery, Docker* · [Source Code](https://github.com/VanshikaLud04/llm-cost-guard)
- FastAPI middleware enforcing LLM token budgets and rate limits to prevent uncontrolled API spend.
- Distributed task-processing backend (PostgreSQL + RabbitMQ + Celery) decoupling DB I/O from the main API thread, eliminating monolithic locking bottlenecks.
- Dockerized full stack with Prometheus observability; **p95 latency of 110ms** across 7,100+ concurrent requests in Locust load tests, **0.63ms** Redis idempotency overhead.

### Focus Lock — OS-Level Productivity Tracker
*Python, YOLOv8, Flask-SocketIO, Redis* · [Source Code](https://github.com/VanshikaLud04/focus-lock)
- Daemon-architected macOS productivity tracker (OpenCV + Tkinter subprocesses) isolating ML inference from the main event loop for non-blocking full-screen lock-outs.
- **97.2% recall** in distraction detection by fusing YOLOv8 object recognition with MediaPipe gaze tracking, **<30ms** end-to-end inference latency.
- Adaptive sampling engine using frame-difference entropy — **93% reduction** in CPU overhead during idle states.
- Redis-backed idempotency caching layer (~2ms overhead) for session state integrity across UI transitions.

### RagBench — Full-Stack RAG Platform
*React, Node.js, FastAPI, MongoDB, ChromaDB* · [Source Code](https://github.com/VanshikaLud04/ragbench)
- Full-stack app for benchmarking multiple LLMs.
- Improved generation faithfulness from **69.6% to 92.5%** via Hybrid Search (dense embeddings + sparse BM25) and an automated LLM-as-a-judge retry mechanism.
- Custom evaluation engine benchmarking context precision, recall, and answer relevancy across local and cloud models.

### Vectorized Neural Network from Scratch
*Python, NumPy, Linear Algebra* · [Source Code](https://github.com/VanshikaLud04/numpy-neural-net)
- 3-layer MLP built from first principles — forward pass and backpropagation derived via matrix calculus (**93.6% accuracy**).

## Education
- **National Institute of Technology Jamshedpur** — B.Tech, Electrical Engineering · CGPA 7.57/10.0 · Expected 2028
- **Cambridge Court High School**, Jaipur — Class XII: 90% · Class X: 96.4% (2020–2023)

## Achievements
- **National Finalist, MeitY SWAYAAN Challenge** — selected from 285 teams for an autonomous disaster-management drone; built a YOLO-based vision pipeline achieving 85% detection accuracy.
- **2nd Position, ElectroHack'25** — recognized for outstanding hardware-software integration.

---
Feeds directly into `content/*.ts` in `architecture.md` and the sections defined in `functionality.md`.
