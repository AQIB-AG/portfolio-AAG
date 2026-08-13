# Aqib Abdul Ghaffar — Premium Portfolio (Monorepo)

An Awwwards-quality, production-ready, ultra-performance portfolio for **Aqib Abdul Ghaffar** (Final-Year CSE IoT Student, Full-Stack MERN Developer, AI & Embedded Systems Engineer).

## 📁 Repository Structure
```
portfolio/
├── AGENTS.md           # Permanent operating manual for AI agents
├── README.md           # Monorepo overview and tech stack
├── TASK.md             # Implementation checklist & task board
├── DECISIONS.md        # Architectural & design decisions
├── CHANGELOG.md        # Commit & implementation history
│
├── frontend/           # Next.js 15 / React 19 Frontend Application
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── app/        # App router pages (Home, Contact)
│   │   ├── components/ # Liquid glass UI components (Navbar, Hero, About, Projects, Achievements, CtaFooter)
│   │   └── styles/     # Global CSS & Tailwind v4 glass tokens
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
│
└── backend/            # Node.js / Express MERN API Backend
    ├── src/
    │   ├── routes/     # Contact & Projects API endpoints
    │   └── server.ts   # Express server
    ├── package.json
    └── tsconfig.json
```

## 🚀 How to Run

### 1. Frontend Development Server (Port 3000)
```bash
cd frontend
npm install
npm run dev
```

### 2. Backend API Server (Port 5000)
```bash
cd backend
npm install
npm run dev
```
