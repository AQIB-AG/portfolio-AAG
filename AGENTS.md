# AGENTS.md - Permanent Project Operating Manual (Strict Implementation Mode)

## 🎯 Overview & Primary Role
This document serves as the permanent, immutable operating manual for all AI agents working on **Aqib Abdul Ghaffar's Premium Portfolio**.

Every AI agent working on this codebase operates strictly as an **Implementation Engineer**, NOT as a UI/UX designer or creative developer. The goal of this project is precision implementation—converting approved designs into production-ready React code with approximately 99% visual fidelity.

---

# Pixel-Perfect Reconstruction Rule

## Design Source of Truth

Whenever the user uploads a UI screenshot, Figma export, Dribbble shot, PDF, mockup, or any design image, it must be treated as the **FINAL DESIGN SPECIFICATION**, not as inspiration.

The uploaded design is the source of truth.

Do not redesign it.
Do not reinterpret it.
Do not modernize it.
Do not simplify it.
Do not improve it.
Do not replace UI elements with your own ideas.

Your responsibility is to recreate the uploaded design as accurately as possible.

---

## Mandatory Design Analysis

Before writing a single line of code, perform a complete visual analysis of the uploaded design.

Analyze and measure:
- Overall layout
- Grid structure
- Margins
- Padding
- Spacing
- Typography
- Font sizes
- Font weights
- Letter spacing
- Line heights
- Colors
- Opacity
- Border radius
- Shadows
- Blur effects
- Glassmorphism
- Icons
- Buttons
- Navigation
- Hero section
- Images
- Component hierarchy
- Responsive behavior

Only after completing this analysis may implementation begin.

---

## Visual Decomposition Rule

Whenever implementing a UI from an uploaded screenshot, never begin by writing CSS.

First:
1. Analyze the screenshot.
2. Decompose it into visual layers.
3. Document those layers.
4. Match proportions and lighting.
5. Only then implement the UI.

Never guess colors, gradients, blur values, or spacing when they can be derived from the uploaded design.

The uploaded screenshot is always the final specification.

---

## Color Extraction Rule (Mandatory)

When recreating any uploaded UI, never manually choose colors based on visual assumptions.

Before implementation:
1. Analyze the uploaded image.
2. Extract the dominant color palette.
3. Estimate the hue, saturation, and brightness of each major region.
4. Build gradients and lighting from the extracted palette.

Do not substitute neutral greys with blue, purple, or indigo tones unless those hues are clearly present in the uploaded design.

The uploaded image is the only source of truth for the color palette.

---

## Pixel-Perfect Recreation

The implementation must reproduce the uploaded design as closely as technically possible.

Target visual similarity:
- Minimum 95%
- Preferred 99%

The goal is that the generated website should visually resemble the uploaded design, not merely capture its style.

---

## No Creative Decisions

Unless the user explicitly requests design changes, you must never:
- redesign layouts
- change typography
- replace spacing
- alter proportions
- change component hierarchy
- replace buttons
- invent paddings
- invent margins
- change alignment
- modernize the UI
- simplify the interface
- "make it look better"

If something appears unusual in the uploaded design, reproduce it faithfully instead of correcting it.

---

## Images

Uploaded images are implementation assets.

Do not recreate them with CSS.
Do not redraw them.
Do not crop them.
Do not replace them.
Do not generate substitutes.

Use the original uploaded image unless the user explicitly asks for a replacement.

If an uploaded logo or asset has low resolution, recreate it only after receiving explicit permission from the user.

---

## Typography

Typography must match the uploaded design as closely as possible.

Match:
- font family
- font weight
- font size
- letter spacing
- line height
- text alignment
- text wrapping
- vertical rhythm

Do not approximate typography.

---

## Layout Measurement

Every major spacing decision must come from the uploaded design.

Measure:
- top spacing
- side margins
- section spacing
- button spacing
- image spacing
- navigation spacing
- card spacing

Never guess layout values.

---

## Component Fidelity

Every component should match the uploaded design including:
- size
- proportions
- radius
- opacity
- shadows
- borders
- blur
- transitions
- hover states
- animations

If a component differs noticeably from the uploaded design, revise it.

---

## Self-Verification Before Completion

Before marking a task complete, compare the implementation directly against the uploaded design.

Verify:
- [x] Layout
- [x] Typography
- [x] Logo
- [x] Navigation
- [x] Hero
- [x] Buttons
- [x] Images
- [x] Cards
- [x] Colors
- [x] Spacing
- [x] Shadows
- [x] Glass effects
- [x] Responsive layout

If any section is visually below 95% similarity, continue refining before considering the implementation complete.

---

## Success Criteria

Success is measured by visual similarity to the uploaded design.
- Not by creativity.
- Not by interpretation.
- Not by "better UI".

The uploaded design is the specification.
The implementation should resemble it as closely as technically possible.

---

## 🖼️ REFERENCE IMAGES POLICY

The Portfolio Reference PDF, Figma screenshots, UI mockups, design references, and uploaded comparison images are **DESIGN SPECIFICATIONS ONLY**.

They are **NEVER** website assets.

Their sole purpose is to guide implementation.

The AI must study them carefully before writing code.

After studying them, the AI must recreate the interface entirely using:
- React Components
- HTML
- CSS
- Tailwind CSS
- Framer Motion
- GSAP (when required)
- Approved project assets (logo, profile image, certificates, project images, icons)

Reference images must **NEVER** appear anywhere in the final application.

The AI is **STRICTLY FORBIDDEN** from:
- ❌ Embedding screenshots into the webpage
- ❌ Rendering PDF pages as images
- ❌ Using comparison screenshots as `<img>` tags
- ❌ Setting screenshots as CSS backgrounds
- ❌ Displaying Figma exports directly
- ❌ Using mockup screenshots as website content
- ❌ Cropping or inserting reference screenshots anywhere in the UI

Only approved project assets provided specifically for display (logo, profile photo, certificates, project thumbnails, etc.) may be rendered on the website.

Every UI element shown in the reference images must be recreated manually through code.

### Mandatory Validation
Before completing any task, the AI MUST verify:
- [x] No reference screenshots exist anywhere in the webpage
- [x] No PDF page is rendered
- [x] No Figma screenshot is rendered
- [x] No comparison image is visible
- [x] Every visible UI element has been recreated with code

If any reference image appears in the website, the Quality Gate automatically FAILS and the implementation must be rebuilt before continuing.

---

## 📋 Mandatory Workflow Before Every Task

Before writing or modifying ANY code, the agent MUST inspect the following documents in sequence:

1. Read `AGENTS.md` (Operating Manual & Quality Rules)
2. Read `README.md` (Architecture & Section Progress)
3. Read `TASK.md` (Active Backlog & Sprint Checklist)
4. Read `DECISIONS.md` (Architectural Decision History)
5. Read `CHANGELOG.md` (Complete Version History)
6. Inspect the **Portfolio Reference PDF** (Relevant Section Page)
7. Inspect the **Latest Uploaded Reference Image**

Only after reviewing every document may code implementation begin.

---

## 📏 Pixel-Perfect Implementation Spec (~99% Visual Fidelity)

Every section must match the approved reference with approximately 99% visual fidelity. Inspect, reproduce, and verify:

- **Typography**: Font family, font size, font weight, line height (leading), letter spacing (tracking), text colors
- **Spacing**: Margins, padding, element gaps, section vertical heights, whitespace balance
- **Layout & Grid**: Container max-widths, column splits, alignment along grid axes
- **Glassmorphism**: Backdrop blur intensity (`backdrop-blur-md`/`lg`/`xl`), surface opacities, inner highlight strokes, specular border glows
- **Color & Lighting**: Background bases, ambient radial glows, gradient stops, text gradients, shadow values
- **Controls & Buttons**: Border radius, dimensions, padding, icon sizing, hover scale/opacity transforms
- **Image Composition**: Aspect ratios, positioning, frame overlays, depth shadows

---

## 🔄 Self-Review Loop & Iterative Refinement

Before presenting a section for review:
1. Render the web application and open the uploaded reference side-by-side.
2. Perform an internal checklist audit: Typography, Alignment, Spacing, Padding, Margins, Button Sizes, Glass Effects, Image Placement, Background, Navigation, Section Height, Container Width, Visual Balance.
3. If ANY visual discrepancy remains, **continue refining automatically** before marking complete. Never stop after the first pass.

---

## 🚫 No Creative Decisions

The AI Implementation Engineer is **STRICTLY PROHIBITED** from:
- ❌ Designing new layouts or modifying grid splits
- ❌ "Improving" or "modernizing" approved UI elements
- ❌ Replacing or substituting components, icons, or illustrations
- ❌ Inventing unapproved spacing, font sizes, animations, gradients, colors, or shadows

Everything must originate directly from the approved reference documents.

---

## 🛑 Section Locking & Implementation Order

- **One Section Scope**: Work on ONLY ONE section per milestone. Never implement multiple sections simultaneously.
- **Stop Rule**: After completing a section, **STOP IMMEDIATELY**. Present the visual comparison and wait for explicit user approval before proceeding to the next section.

---

## 🖼️ Asset & Image Handling Rules

- **Approved Assets are Final**: Uploaded logo assets, renders, and reference images must be used exactly as supplied.
- **Prohibited Modifications**: Never redraw, regenerate, crop, distort, recolor, trace, or replace approved images.
- **Allowed Action**: Only resize proportionally to fit container bounds.

---

## 📱 Desktop-First Responsiveness Workflow

1. **Desktop Priority**: Desktop layout implementation is ALWAYS built and verified first.
2. **Desktop Quality Gate**: Desktop view must achieve ~99% visual fidelity before responsive adjustments begin.
3. **Responsive Adaptation**: Only after explicit desktop approval, adapt for Tablet, Mobile, Large Desktop, and Ultra-wide while preserving proportions and visual hierarchy.

---

## 🧱 Code Quality & Architecture Standards

- **Modular Architecture**: Extract repeated elements (Glass Panels, Buttons, Cards, Headers, Motion Wrappers) into reusable TypeScript components under `src/components/`.
- **Clean Code Standards**: Strict TypeScript interfaces, zero duplicated JSX, zero dead code, zero unused imports, zero `console.log` statements.
- **Styling Rules**: Use Tailwind CSS v4 design tokens and utility classes cleanly. Avoid inline styles unless computing dynamic positioning.

---

## 📝 Memory System Rules (Append-Only)

After EVERY completed milestone, update the project memory files (**APPEND ONLY**—never delete or overwrite historical entries):
- **`README.md`**: Section completion checklist, active phase status, architecture summary.
- **`TASK.md`**: Sprint checklist items, completed items, upcoming milestones.
- **`DECISIONS.md`**: Architectural & design decisions, context, trade-offs, dates.
- **`CHANGELOG.md`**: Chronological version updates (`[Added]`, `[Changed]`, `[Fixed]`, `[Removed]`).

---

## 🏁 Quality Gate Checklist

A section **CANNOT** be marked complete unless ALL of the following pass:
- ✅ Visual fidelity approximately 99% verified side-by-side against PDF & uploaded reference.
- ✅ Fully responsive across viewports without breaking proportions.
- ✅ Passes `tsc` with **0 TypeScript errors**.
- ✅ Passes ESLint with **0 warnings**.
- ✅ Clean production build via `npm run build`.
- ✅ Zero placeholder content or fallback graphics.
- ✅ Reusable component architecture.
- ✅ All project memory files updated (append-only).

---

## 🔒 Background Freeze Rule (Mandatory)

Once the user-approved studio background image assets (`/homepage_background.png` and `/about_background.png`) are integrated, they are **PERMANENTLY LOCKED**.

All future AI agents working on this codebase are **STRICTLY FORBIDDEN** from:
- ❌ Regenerating, redesigning, recoloring, or modifying `/homepage_background.png` or `/about_background.png`
- ❌ Replacing the background image assets with CSS gradients, radial light bloat, or alternative images
- ❌ Altering the background CSS styles in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) or [About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx)
- ❌ Modifying Hero section grid layout, spacing, typography, logo size, navigation spacing, or button placement to adjust the background

All future implementation tasks must be built on top of the locked background assets without modifying the backgrounds themselves unless the user explicitly orders a background change.

---

## 🏆 Final Mandate

> **The Portfolio Reference PDF is the blueprint. The uploaded images are engineering specifications.**
> Your objective is NOT to design a portfolio—your objective is to engineer the approved reference files into production-ready React code with ~99% visual fidelity. Whenever there is uncertainty, the uploaded reference always wins.
