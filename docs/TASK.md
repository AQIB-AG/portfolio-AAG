# TASK.md - Implementation Checklist & Task Board

## 📍 Sprint 1: MERN Stack Architecture Migration & Initialization
- [x] Create project memory files (`AGENTS.md`, `README.md`, `TASK.md`, `DECISIONS.md`, `CHANGELOG.md`)
- [x] Migrate frontend to Vite + React 19 + TypeScript + Tailwind CSS v4 stack
- [x] Configure `@` path alias, glassmorphic design system (`index.css`), and font imports
- [x] Build Page 1: Navigation Bar & Hero Section with SVG Avatar Visual ([Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx), [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx))
- [x] Build Page 2: About Me Section & Specialty Cards ([About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx))
- [x] Build Page 3: Projects Showcase with Category Filters ([Projects.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Projects.tsx))
- [x] Build Page 4: Achievements & Interactive Certificate Drawer ([Achievements.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Achievements.tsx))
- [x] Build Page 5: CTA Glass Card & Footer ([CtaFooter.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/CtaFooter.tsx))
- [x] Build Page 6: Dedicated Contact View & Interactive Form ([Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx))
- [x] Install Vite + React 19 frontend dependencies (`npm install`)
- [ ] Launch Vite development server (`npm run dev`) on port 3000

## 📍 Sprint 2: Express Backend & Database Integration
- [x] Initialize Express.js server on port 5001 ([server.js](file:///c:/Users/aqib2/Downloads/portfolio/backend/src/server.js))
- [ ] Connect MongoDB / Mongoose schema for contact messages & telemetry
- [ ] Connect frontend contact form to Express `/api/contact` endpoint

## 📍 Sprint 3: Visual Polish & Performance Verification
- [ ] Verify 60fps smooth scrolling with Lenis & Framer Motion
- [ ] Conduct lighthouse audit (target 95+ performance, 100 accessibility)
