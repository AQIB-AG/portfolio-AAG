# DECISIONS.md - Architecture & Design Decisions Log

## Decision 001: Tech Stack Selection & Vite Migration
- **Status**: Approved
- **Context**: Deep nested file path limits (`es-abstract`) on Windows caused Next.js dependency installation to lock.
- **Decision**: Migrated frontend stack from Next.js to **Vite + React 19 + TypeScript + Tailwind CSS v4**.
- **Rationale**: Vite provides instant dev server startup on port 3000, zero deep path resolution issues, and optimal performance for single-page interactive applications with Framer Motion and Lucide icons.

## Decision 002: Modular MERN Architecture
- **Status**: Approved
- **Context**: Need clear separation between frontend preview layer and backend APIs.
- **Decision**: Structured workspace into `frontend/` (Vite + React 19) and `backend/` (Express.js on port 5001).

## Decision 003: SVG Vector Avatar Illustration
- **Status**: Approved
- **Context**: The visual source of truth (PDF Page 1) specifies a vector avatar hero visual.
- **Decision**: Built a high-fidelity inline SVG developer vector illustration component.
