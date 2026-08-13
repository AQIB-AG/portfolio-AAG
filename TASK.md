# TASK.md - Implementation Checklist & Task Board

## 📍 Sprint 1: MERN Stack Architecture Migration & Initialization
- [x] Create project memory files (`AGENTS.md`, `README.md`, `TASK.md`, `DECISIONS.md`, `CHANGELOG.md`)
- [x] Migrate frontend to Vite + React 19 + TypeScript + Tailwind CSS v4 stack
- [x] Fix PostCSS / Tailwind CSS v4 config conflict by configuring `@tailwindcss/vite` natively
- [x] Configure `@` path alias, glassmorphic design system (`index.css`), and font imports
- [x] Build Page 1: Navigation Bar & Hero Section with SVG Avatar Visual ([Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx), [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx))
- [x] Build Page 2: About Me Section & Specialty Cards ([About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx))
- [x] Build Page 3: Projects Showcase with Category Filters ([Projects.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Projects.tsx))
- [x] Build Page 4: Achievements & Interactive Certificate Drawer ([Achievements.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Achievements.tsx))
- [x] Build Page 5: CTA Glass Card & Footer ([CtaFooter.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/CtaFooter.tsx))
- [x] Build Page 6: Dedicated Contact View & Interactive Form ([Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx))
- [x] Install Vite + React 19 frontend dependencies (`npm install`)
- [x] Launch Vite development server (`npm run dev`) on port 3000 (Ready in 1751 ms)

## 📍 Sprint 2: Express Backend & Database Integration
- [x] Initialize Express.js server on port 5001 ([server.js](file:///c:/Users/aqib2/Downloads/portfolio/backend/src/server.js))
- [ ] Connect MongoDB / Mongoose schema for contact messages & telemetry
- [ ] Connect frontend contact form to Express `/api/contact` endpoint

## 📍 Sprint 3: Visual Polish & Performance Verification
- [ ] Verify 60fps smooth scrolling with Lenis & Framer Motion
- [ ] Conduct lighthouse audit (target 95+ performance, 100 accessibility)

## 📍 Sprint 4: Milestone 1 — Navigation & Hero PDF 99% Visual Fidelity
- [x] Extract design tokens from Page 1 of Portfolio Reference PDF (Typography, Glassmorphism, Colors, Spacing)
- [x] Update [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) as permanent project operating manual for AI Implementation Engineers
- [x] Update [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with monogram logo `AAG`, liquid glass active section pill, and `LET'S TALK ↗` CTA
- [x] Re-architect [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) into 2-column layout matching PDF Page 1
- [x] Update bio text copy to exact verbatim wording from PDF Page 1
- [x] Implement social CTA glass pills (`LinkedIn ↗` & `GitHub ↗`)
- [x] Generate and integrate high-fidelity 3D developer avatar & bobblehead on wooden pedestal visual asset (`/hero_avatar_3d.png`)
- [x] Replace legacy Hero character with approved custom 3D Mini-Me / Bobblehead figurine production asset (`/hero_avatar_3d.png`) matching exact uploaded design composition (~99% visual fidelity)
- [x] Fix 3D Hero Visual ground integration: remove silhouette drop-shadow filter, defringe semi-transparent edge alpha, build dedicated HTML/CSS studio floor contact shadow layer (`z-0`) underneath character (`z-10`) matching `phomepage(6).jpeg`
- [x] Final Micro-Fix: precision non-aggressive alpha residue removal around Mini-Me/pedestal (`/hero_avatar_3d.png`), lock DOM in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to EXACTLY ONE shadow element (`bottom-[-2px] w-[78%] h-[22px] bg-black/55 blur-[14px]`), and preserve purple/blue border on "LET'S TALK" button perimeter
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Verify side-by-side visual fidelity against PDF Page 1 screenshot
- [x] Approved by user to proceed to Milestone 2

## 📍 Sprint 5: Milestone 2 — About Me Section PDF 99% Visual Fidelity
- [x] Study Page 2 of Portfolio Reference PDF (Layout, Heading, Copy, 3D Character, Specialty Cards)
- [x] Re-architect [About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx) into 2-column layout matching PDF Page 2
- [x] Generate and integrate 3D crossed-arms developer character render asset (`/about_avatar_3d.png`)
- [x] Replicate exact verbatim copy: *"Driven by curiosity. Built for impact."* and bio text
- [x] Implement 4 specialty glass cards row (`Full-Stack Developer`, `IoT Enthusiast`, `AI Explorer`, `Hackathon Participant`)
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Verify side-by-side visual fidelity against PDF Page 2 screenshot
- [x] Approved by user to proceed to Milestone 3

## 📍 Sprint 6: Milestone 3 — Projects Showcase Section PDF 99% Visual Fidelity
- [x] Study Page 3 of Portfolio Reference PDF (Carousel layout, Featured card, Tech icons, Dashboard UI mockup, Pagination dots, Category filter bar)
- [x] Re-architect [Projects.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Projects.tsx) to match PDF Page 3 composition
- [x] Replicate verbatim heading: *"Projects that solve real problems."* and subtitle
- [x] Generate and integrate dark theme project dashboard UI mockup (`/project_dashboard_ui.png`)
- [x] Implement featured project card (`Smart Resume Analyzer & Job Matcher`) with tech stack icons (`MongoDB`, `Express`, `React`, `Node.js`) and CTAs (`View Project ↗`, `GitHub ↗`)
- [x] Implement carousel navigation arrows, 7 pagination dots, and category filter pill bar (`All Projects`, `Web Applications`, `AI / ML`, `Dashboards`, `Full Stack`, `Embedded Systems`)
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Verify side-by-side visual fidelity against PDF Page 3 screenshot
- [x] Approved by user to proceed to Milestone 4

## 📍 Sprint 7: Milestone 4 — Achievements & Certificate Showcase PDF 99% Visual Fidelity
- [x] Study Page 4 of Portfolio Reference PDF (Heading, Subtitle, Counter pill, Certificate card mockup, Right details panel, Pagination dots)
- [x] Re-architect [Achievements.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Achievements.tsx) to match PDF Page 4 composition
- [x] Replicate verbatim heading: *"Certificates that reflect the journey."* and subtitle copy
- [x] Generate and integrate official Google Cloud / Kaggle AI Agents certificate mockup (`/google_kaggle_certificate.png`)
- [x] Implement left counter badge (`01 / 12`), carousel navigation arrows (`<` & `>`), right credential metadata panel (`Credential`, `Issuer`, `Date`, `Category`, `Credential ID`, `View Credential ↗`), and 9 pagination dots
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Verify side-by-side visual fidelity against PDF Page 4 screenshot
- [x] Approved by user to proceed to Milestone 5

## 📍 Sprint 8: Milestone 5 — CTA Card & Footer PDF 99% Visual Fidelity
- [x] Study Page 5 of Portfolio Reference PDF (Glass CTA card, Paper plane icon, Verbatim copy, Green Send Message button, Footer links)
- [x] Re-architect [CtaFooter.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/CtaFooter.tsx) to match PDF Page 5 composition
- [x] Replicate verbatim heading: *"Have a project in mind?"* and subtitle *"Let's build something impactful together."*
- [x] Implement green `Send Message` glass button, copyright text, `Made with ❤️ using React, Tailwind & Framer Motion`, glowing email link (`hasib4aqib@gmail.com`), and social icons row (`LinkedIn`, `GitHub`, `Mail`)
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Verify side-by-side visual fidelity against PDF Page 5 screenshot
- [x] Approved by user to proceed to Milestone 6

## 📍 Sprint 9: Milestone 6 — Dedicated Contact View PDF 99% Visual Fidelity
- [x] Study Page 6 of Portfolio Reference PDF (Glass window frame, Logo header, Return to home button, Contact copy, Detail badges, Interactive contact form)
- [x] Re-architect [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) to match PDF Page 6 composition
- [x] Replicate `RETURN TO HOME 🏠` pill button in header
- [x] Replicate verbatim heading: *"Let's build something amazing together."* and subtitle
- [x] Implement contact detail badges (`LOCATION: Hyderabad, Telangana, India`, `PHONE: +91 939 110 30 20`, `EMAIL: aqibag@example.com`) and social icon buttons
- [x] Implement interactive `CONTACT FORM` glass panel (`Your name`, `Your email`, `Subject`, `Your message`, `SEND MESSAGE ↗` button)
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Verify side-by-side visual fidelity against PDF Page 6 screenshot
- [x] 100% Portfolio Reference PDF Visual Fidelity Milestone Completed Across All 6 Pages

## 📍 Sprint 10: Approved Monogram Logo Asset Replacement & Visual Integration
- [x] Save uploaded approved logo image asset to `/public/logo.png`
- [x] Replace text monogram logo in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with approved `/logo.png` image asset using liquid glass screen blending
- [x] Replace text monogram logo in [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) with approved `/logo.png` image asset
- [x] Preserve exact aspect ratio, spacing, and optical alignment across desktop, laptop, tablet, and mobile viewports
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 11: Pixel-Perfect Hero Section Rebuild (Target Hero Image Alignment)
- [x] Study uploaded TARGET HERO IMAGE (`media__1785786922166.jpg`) and Portfolio Reference PDF Page 1
- [x] Save target hero visual composition image to `/public/hero_target_visual.jpg`
- [x] Rebuild [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to match TARGET HERO IMAGE with ~99% visual fidelity
- [x] Replicate exact line breaks, tracking, heading typography (`AQIB` / `ABDUL GHAFFAR`), and verbatim bio text
- [x] Implement blue LinkedIn badge `in` glass pill (`in LinkedIn ↗`) and GitHub glass pill (`GitHub ↗`)
- [x] Replicate background studio lighting dark charcoal base (`#1a1c23`) and right-side image alignment (`/hero_target_visual.jpg`)
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 12: Embedded Reference Image Removal & Pure Component Rebuild
- [x] Remove reference screenshot renders from Hero component layout
- [x] Copy 3D developer character render asset to `/public/hero_avatar_3d.png`
- [x] Code 100% of UI elements manually in React + Tailwind CSS (Navbar, Monogram logo, Typography, Glass buttons, CSS background gradients & studio lighting)
- [x] Render ONLY approved developer graphic asset `/hero_avatar_3d.png` in right column
- [x] Create [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md) recording verification audit
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 13: Hero Section Reconstruction & Pixel-Perfect Layout Alignment
- [x] Conduct pre-implementation visual audit comparing current Hero against Target Reference Image
- [x] Recalculate top navbar relationship distance (`pt-28 md:pt-32 pb-12`)
- [x] Re-architect studio background vignette gradient (`bg-[#1c1f27]`) with radial lighting centered behind character
- [x] Refine title tracking (`AQIB` / `ABDUL GHAFFAR`), subtitle label (`H I ,  I ' M`), and paragraph width (`max-w-[530px]`)
- [x] Adjust glass button padding, borders, blue LinkedIn `in` badge, and GitHub icon scale
- [x] Extend right column 3D developer character asset (`/hero_avatar_3d.png`) to align with studio ground floor level shadow
- [x] Update [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md) recording ~99% precision match
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 14: Zero-Patch Hero Scratch Rebuild & Pixel-Perfect Reference Rule
- [x] Add `## Pixel-Perfect Reference Rule (Highest Priority)` permanently to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md)
- [x] Delete old Hero layout and perform zero-patch scratch rebuild in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx)
- [x] Replicate exact page container width (`max-w-[1320px]`), navbar top distance (`pt-24 sm:pt-28 md:pt-32 pb-16`), studio dark background vignette (`bg-[#181a20]`), typography tracking (`AQIB` / `ABDUL GHAFFAR`), verbatim bio paragraph (`max-w-[560px]`), glass pills, and right column developer asset (`/hero_avatar_3d.png`) seated flush on studio ground level shadow
- [x] Update [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md) recording ~99% side-by-side match
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 15: Website Logo & Hero Header Intro Text Correction
- [x] Encapsulate monogram logo asset `/logo.png` in a glass capsule container (`px-4 py-2 border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-lg`) in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx)
- [x] Increase logo vertical height (`h-11 sm:h-13 md:h-15`) and apply crisp non-blurry contrast rendering (`image-rendering: crisp-edges`, `mix-blend-screen`, `contrast-125 brightness-110 drop-shadow-[0_4px_14px_rgba(255,255,255,0.18)]`)
- [x] Refine `H I ,  I ' M` subtitle tracking (`tracking-[0.42em] font-light text-slate-400/90`)
- [x] Implement explicit 3-line breaks (`AQIB` / `ABDUL` / `GHAFFAR`) with `font-light` weight and tracking (`tracking-[0.16em]` & `tracking-[0.18em]`)
- [x] Preserve exact scope: Hero image, navigation items, buttons, background, About section, Projects, and Footer remained untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 16: Zero-Border Logo Integration & Exact 2-Line Name Heading
- [x] Remove background rectangle/capsule border around `/logo.png` in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx), floating monogram naturally on dark header background (`h-10 sm:h-11 md:h-12 w-auto mix-blend-screen image-rendering: crisp-edges`)
- [x] Rebuild display heading in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to exactly TWO lines: Line 1 `AQIB`, Line 2 `ABDUL GHAFFAR`
- [x] Replicate exact font weight, tracking, and verbatim copy matching uploaded UI specification image
- [x] Update [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md) recording ~99% side-by-side match
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 17: Transparent PNG Logo Conversion & 3D Character Asset Reconstruction
- [x] Convert `/logo.png` from solid JPEG to true 32-bit transparent PNG with alpha channel, eliminating the solid dark rectangle box
- [x] Replace square mockup card preview in right column with exact 626KB transparent 3D developer character asset (`/hero_avatar_3d.png`), standing flush on studio ground floor with radial shadow ellipse
- [x] Verify 2-line display heading structure (`AQIB` / `ABDUL GHAFFAR`), dark charcoal vignette background (`bg-[#1a1c24]`), and bio paragraph text wrapping
- [x] Update [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md) recording ~99% side-by-side match
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 18: HiDPI Logo Size Scaling & Retina Sharpness Fix
- [x] Generate 5x HiDPI transparent PNG asset (`/logo.png` at `885 × 340` px) with true 32-bit alpha channel, eliminating downsampling blur
- [x] Increase logo vertical height in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) (`h-11 sm:h-13 md:h-14 lg:h-16 w-auto`) matching navigation pill height
- [x] Verify zero dark rectangle box, zero visible image border, zero outline, zero blur, and 100% readable serif & subtext lettering
- [x] Preserve exact scope: Hero layout, character graphic asset, navbar items, buttons, typography, and background remained untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 19: Logo Size Fine-Tuning (25% Reduction) & Vertical Center Alignment
- [x] Reduce displayed CSS logo height by ~25% in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) (`h-8 sm:h-9 md:h-10 lg:h-[42px] w-auto`)
- [x] Align vertical center of logo with vertical center of navigation pill container via shared `<header className="flex items-center justify-between">`
- [x] Preserve 5x HiDPI asset resolution (`885 × 340` px), transparent alpha channel, crisp edges, and zero distortion
- [x] Preserve exact scope: Hero section, buttons, typography, navbar tabs, background, and footer remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 20: 4K Vector SVG Logo Asset Integration & 10% Additional Size Refinement
- [x] Create resolution-independent 4K vector SVG asset (`/logo.svg`) with geometric precision rendering for vector serif letters and `AQIB ABDUL GHAFFAR` subtext
- [x] Generate 4K transparent PNG fallback (`/logo.png` at `2000 × 800` px) with 32-bit alpha channel
- [x] Reduce displayed CSS logo height by an additional 10% in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) (`h-7 sm:h-8 md:h-9 lg:h-[36px] w-auto`)
- [x] Maintain vertical center axis alignment with navigation pill container
- [x] Preserve exact scope: Hero section, 3D character graphic, buttons, typography, navbar tabs, background, and footer remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 21: Exact Original Uploaded Logo Artwork Restoration
- [x] Process original uploaded logo artwork image (`media__1785785826507.jpg`) into a 2000px HiDPI 32-bit transparent PNG asset (`/logo.png`)
- [x] Restore exact stencil serif monogram `A A G` shapes, stencil gaps, kerning, and original `AQIB ABDUL GHAFFAR` banner text
- [x] Eliminate synthetic font replacements; preserve 100% visual fidelity to original artwork
- [x] Maintain fine-tuned displayed size (`h-7 sm:h-8 md:h-9 lg:h-[36px] w-auto`) and vertical center axis alignment with navigation pill
- [x] Preserve exact scope: Hero section, 3D character graphic, buttons, typography, navbar tabs, background, and footer remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 22: Hero Typography Block Reconstruction
- [x] Replace wide-spaced `H I ,  I ' M` with natural `Hi I'm` badge (`text-sm md:text-base font-medium tracking-normal text-slate-400 mb-2`)
- [x] Rebuild display heading to bold display title (`font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white tracking-tight leading-[1.08] mb-5`)
- [x] Enforce exact line structure: Line 1 `AQIB`, Line 2 `ABDUL GHAFFAR` (never split ABDUL and GHAFFAR)
- [x] Tighten vertical gaps between greeting, title lines, and description paragraph (`max-w-[550px] leading-relaxed mb-8`)
- [x] Preserve exact scope: Logo, navigation, character graphic, buttons, background, and overall layout remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 23: Hero Top Padding Reduction & Tight Composition Realignment
- [x] Reduce Hero section top padding in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to `pt-16 sm:pt-20 md:pt-22 pb-8 min-h-[85vh]`, shifting Hero content block upward by ~60px
- [x] Process `hero_avatar_3d.png` into a transparent PNG character cutout, eliminating room background box outlines and placing Aqib directly on the dark studio floor
- [x] Align vertical visual center of Hero text block with 3D developer character graphic
- [x] Preserve exact scope: Logo, navigation, buttons, typography, colors, and background lighting remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 24: Navigation Bar Pixel-Perfect Reconstruction
- [x] Rebuild Liquid Glass capsule container in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) (`border border-white/15 bg-white/[0.03] backdrop-blur-2xl px-2 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`)
- [x] Rebuild active `Home` tab with liquid glass gradient sheen (`from-white/25 via-white/10 to-white/5`), specular top highlight stroke, and 0 bullet dots
- [x] Rebuild right `LET'S TALK ↗` CTA button with indigo specular gradient outline (`border-indigo-400/40 bg-white/[0.02] shadow-[0_4px_20px_rgba(0,0,0,0.4)]`)
- [x] Align all 3 header sections (Left Logo, Center Capsule, Right CTA) on a single horizontal axis (`top-7 flex items-center justify-between`)
- [x] Preserve exact scope: Hero section, 3D character graphic, buttons, typography, and background lighting remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 25: Apple Liquid Glass Navbar Material Integration
- [x] Replace purple/grey tint fills with 90% transparent neutral glass material (`bg-white/[0.05] border border-white/[0.18]`)
- [x] Increase backdrop blur to 24px (`backdrop-blur-[24px] backdrop-saturate-150`) matching Apple VisionOS / macOS floating panels
- [x] Integrate specular top edge reflection line (`absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent`)
- [x] Rebuild active `Home` tab with bright transparent glass gradient (`bg-gradient-to-b from-white/35 via-white/15 to-white/10 border border-white/40`) and top specular highlight stroke
- [x] Preserve exact scope: Hero layout, 3D character graphic, typography, colors, and background lighting remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 26: True Apple Liquid Glass Multi-Layer Architecture Integration
- [x] Complete Phase 0 Research & Visual Analysis across Apple HIG, liquid-glass-js, and SVG displacement maps
- [x] Integrate SVG filter `<filter id="appleLiquidGlassRefraction">` utilizing `<feTurbulence>` and `<feDisplacementMap>` for light refraction
- [x] Layer backdrop blur (24px), ultra-light neutral fill (`bg-white/[0.04]`), specular top edge stroke, and inner light reflection overlay
- [x] Rebuild active `Home` tab with thick VisionOS liquid glass sheen (`from-white/35 via-white/15 to-white/10 border-white/40 shadow-[0_4px_24px_rgba(255,255,255,0.22)]`)
- [x] Retain indigo specular outline ONLY on `LET'S TALK` CTA button
- [x] Preserve exact scope: Hero layout, 3D character graphic, typography, and background lighting remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 27: Homepage Studio Background Reconstruction
- [x] Add permanent `Visual Decomposition Rule` to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) mandating visual layer decomposition prior to writing CSS
- [x] Execute Phase 0 Background Image Analysis: derive dominant colors, spotlight center, spotlight radius, vignette strength, floor shadow, and color temperature
- [x] Rebuild background in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) using 7-layer neutral studio lighting system (`#15171e` base, primary studio spotlight `ellipse 75% 65% at 50% 42%`, ambient slate depth fill, character illumination wrapping, studio floor transition, perimeter vignette `rgba(10,11,15,0.85)`)
- [x] Preserve exact scope: Navigation, Logo, Hero typography, 3D character graphic asset, buttons, layout, and spacing remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 28: Extracted Neutral Studio Graphite Background & Color Extraction Rule
- [x] Add permanent `Color Extraction Rule (Mandatory)` to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) requiring color extraction prior to writing CSS
- [x] Run Python PIL pixel analysis on target image: extract exact neutral RGB palette (`#1c1f28`, `#21242b`, `#3a3d46`, `#303038`, `#383b44` with 7.7%–13.2% saturation)
- [x] Eliminate all blue, indigo, and purple background tints from [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) and [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css)
- [x] Update body background color in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) to neutral studio graphite (`#1c1f28`)
- [x] Preserve exact scope: Navigation, Logo, Hero typography, 3D character graphic asset, buttons, layout, and spacing remained 100% untouched
- [x] Verify zero TypeScript errors via `npm run build`
- [x] Approved by user to proceed

## 📍 Sprint 29: Functional Hero Social Buttons
- [x] Convert LinkedIn button in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to external link (`https://www.linkedin.com/in/aqib-abdul-ghaffar-497047302?utm_source=share_via&utm_content=profile&utm_medium=member_android`) with `target="_blank"` and `rel="noopener noreferrer"`
- [x] Convert GitHub button in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to external link (`https://github.com/AQIB-AG`) with `target="_blank"` and `rel="noopener noreferrer"`
- [x] Ensure full clickable area, keyboard focusability (`focus:ring-2 focus:ring-white/40`), and aria-labels
- [x] Preserve 100% of liquid glass styling, hover scale/glow animations, typography, and responsive layout
- [x] Verify zero TypeScript errors via `npm run build`
- [x] 🛑 STOP & WAIT FOR USER APPROVAL

## 📍 Sprint 32: Photorealistic Studio Backdrop Asset Generation & Background Lock (#2A2C31 Dark Slate Gray)
- [x] Execute Phase 1 Reverse Engineering Analysis: dominant `#2A2C31` Dark Slate Gray base color, upper-right soft diffuse studio spotlight, straight horizon line, matte plaster rear wall, edge vignetting, 0% blue/purple/indigo color cast
- [x] Generate 4K photorealistic studio stage background image asset using `generate_image` tool with strict camera, material, and exclusion locks
- [x] Save generated background image asset to `frontend/public/homepage_background.png`
- [x] Configure `/homepage_background.png` as permanent section background in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx)
- [x] Preserve 100% of all foreground UI components (Navbar, Logo, Hero typography, LinkedIn & GitHub CTA buttons, 3D character graphic, lower sections)
- [x] Add permanent `Background Freeze Rule` to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) marking `/homepage_background.png` as `Background Locked`
- [x] Update all 6 project memory files ([AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md), [README.md](file:///c:/Users/aqib2/Downloads/portfolio/README.md), [DECISIONS.md](file:///c:/Users/aqib2/Downloads/portfolio/DECISIONS.md), [TASK.md](file:///c:/Users/aqib2/Downloads/portfolio/TASK.md), [CHANGELOG.md](file:///c:/Users/aqib2/Downloads/portfolio/CHANGELOG.md), [walkthrough.md](file:///c:/Users/aqib2/Downloads/portfolio/walkthrough.md))
- [x] Verify zero TypeScript errors via `npm run build`

## 📍 Sprint 33: About Section Approved Background Asset Integration (/about_background.png)
- [x] Copy user-provided approved dark studio backdrop image asset to `frontend/public/about_background.png`
- [x] Configure `/about_background.png` as standalone background layer in [About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx) (`bg-[url('/about_background.png')] bg-cover bg-center bg-no-repeat`)
- [x] Purge all background color layering (`bg-[#0d111a]` / `bg-[#26282E]`), gradient masks, and blue dot glowing accents from About section
- [x] Preserve 100% of all foreground elements inside About section (heading, verbatim bio text, 3D crossed-arms avatar render `/about_avatar_3d.png`, 4 specialty glass cards)
- [x] Preserve 100% of all other portfolio sections (Hero, Navbar, Projects, Achievements, Contact, Footer)
- [x] Update project memory files ([README.md](file:///c:/Users/aqib2/Downloads/portfolio/README.md), [DECISIONS.md](file:///c:/Users/aqib2/Downloads/portfolio/DECISIONS.md), [TASK.md](file:///c:/Users/aqib2/Downloads/portfolio/TASK.md), [CHANGELOG.md](file:///c:/Users/aqib2/Downloads/portfolio/CHANGELOG.md), [walkthrough.md](file:///c:/Users/aqib2/Downloads/portfolio/walkthrough.md))

## 📍 Sprint 34: Homepage Approved Background Asset Integration & 100/100 Hero Layout Lock (/homepage_background.png)
- [x] Copy user-provided approved dark studio backdrop image asset (`media__1785860798978.jpg`) to `frontend/public/homepage_background.png`
- [x] Configure `/homepage_background.png` as standalone background layer in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) (`bg-[url('/homepage_background.png')] bg-cover bg-center bg-no-repeat`)
- [x] Purge all background color layering (`bg-[#2A2C31]`), radial gradient overlays, and overlay `<div>` elements from Hero section
- [x] Enforce 100/100 Hero Layout Lock: zero modification to grid structure, spacing, padding, margins, typography, logo size, navigation bar, CTA buttons, or 3D developer character graphic
- [x] Enforce permanent `Background Freeze Rule` across all project memory files (`Background Locked`)
- [x] Update project memory files ([AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md), [README.md](file:///c:/Users/aqib2/Downloads/portfolio/README.md), [DECISIONS.md](file:///c:/Users/aqib2/Downloads/portfolio/DECISIONS.md), [TASK.md](file:///c:/Users/aqib2/Downloads/portfolio/TASK.md), [CHANGELOG.md](file:///c:/Users/aqib2/Downloads/portfolio/CHANGELOG.md), [walkthrough.md](file:///c:/Users/aqib2/Downloads/portfolio/walkthrough.md))
- [x] Verify zero TypeScript errors via `npm run build`

## 📍 Sprint 35: About Section Approved Background Asset Integration & 100/100 About Layout Lock (/about_background.png)
- [x] Copy user-provided approved dark studio backdrop image asset (`media__1785861253589.jpg`) to `frontend/public/about_background.png`
- [x] Configure `/about_background.png` as standalone background layer in [About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx) (`bg-[url('/about_background.png')] bg-cover bg-center bg-no-repeat`)
- [x] Purge all background color layering (`bg-[#0d111a]` / `bg-[#26282E]`), gradient masks, and blue glowing dot accents from About section
- [x] Enforce 100/100 About Layout Lock: zero modification to grid structure, spacing, padding, margins, alignment, typography, 3D avatar position, or 4 specialty glass icon cards
- [x] Preserve 100% of all other portfolio sections (Hero, Navbar, Projects, Achievements, Contact, Footer)
- [x] Update project memory files ([AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md), [README.md](file:///c:/Users/aqib2/Downloads/portfolio/README.md), [DECISIONS.md](file:///c:/Users/aqib2/Downloads/portfolio/DECISIONS.md), [TASK.md](file:///c:/Users/aqib2/Downloads/portfolio/TASK.md), [CHANGELOG.md](file:///c:/Users/aqib2/Downloads/portfolio/CHANGELOG.md), [walkthrough.md](file:///c:/Users/aqib2/Downloads/portfolio/walkthrough.md))
- [x] Verify zero TypeScript errors via `npm run build`

## 📍 Sprint 36: LET'S TALK Navigation Button Border Thickness Adjustment
- [x] Increase visible border thickness of "LET'S TALK ↗" CTA button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) by ~25–30% (`border-[1.5px] border-indigo-400/50`)
- [x] Preserve 100% of Liquid Glass styling, button width, height, padding, typography, hover scale/glow animations, specular highlight, and navbar layout
- [x] Update project memory files ([README.md](file:///c:/Users/aqib2/Downloads/portfolio/README.md), [DECISIONS.md](file:///c:/Users/aqib2/Downloads/portfolio/DECISIONS.md), [TASK.md](file:///c:/Users/aqib2/Downloads/portfolio/TASK.md), [CHANGELOG.md](file:///c:/Users/aqib2/Downloads/portfolio/CHANGELOG.md), [walkthrough.md](file:///c:/Users/aqib2/Downloads/portfolio/walkthrough.md))
- [x] Verify zero TypeScript errors via `npm run build`

## 📍 Sprint 37: ScrollSpy Active Navigation Implementation (Dynamic Active Tab)
- [x] Implement single source of truth `activeSection` state in [App.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/App.tsx)
- [x] Implement `IntersectionObserver` observing `#home`, `#about`, `#projects`, `#achievements` with threshold array `[0, 0.1, ..., 1.0]` and root margin `"-25% 0px -35% 0px"`
- [x] Implement dominant section selection algorithm using `intersectionRatio` max reduction and 15% micro-visibility filter (`intersectionRatio >= 0.15`)
- [x] Implement instant tab click override (`handleNavigate`) with temporary observer suppression during smooth scroll (~800ms)
- [x] Evaluate initial scroll position on mount/refresh for hydration persistence
- [x] Preserve 100% of Apple Liquid Glass navbar material, blur, refraction, borders, shadows, typography, and button dimensions in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx)
- [x] Update project memory files ([README.md](file:///c:/Users/aqib2/Downloads/portfolio/README.md), [DECISIONS.md](file:///c:/Users/aqib2/Downloads/portfolio/DECISIONS.md), [TASK.md](file:///c:/Users/aqib2/Downloads/portfolio/TASK.md), [CHANGELOG.md](file:///c:/Users/aqib2/Downloads/portfolio/CHANGELOG.md), [walkthrough.md](file:///c:/Users/aqib2/Downloads/portfolio/walkthrough.md))
- [x] Verify zero TypeScript errors via `npm run build`

## 📍 Sprint 38: Apple VisionOS Smooth Sliding Active Navigation Pill Upgrade
- [x] Wrap navigation items inside `<LayoutGroup id="navbar-tabs">` in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx)
- [x] Render active tab Liquid Glass pill using Framer Motion `<motion.span layoutId="activeNavTab" ...>`
- [x] Configure Apple VisionOS spring physics (`type: "spring", stiffness: 180, damping: 24, mass: 1.0, restDelta: 0.001, restSpeed: 0.001`)
- [x] Preserve 100% of Liquid Glass material, backdrop blur, SVG refraction filter, specular highlight top stroke, borders, shadows, and ScrollSpy section detection logic
- [x] Update project memory files ([README.md](file:///c:/Users/aqib2/Downloads/portfolio/README.md), [DECISIONS.md](file:///c:/Users/aqib2/Downloads/portfolio/DECISIONS.md), [TASK.md](file:///c:/Users/aqib2/Downloads/portfolio/TASK.md), [CHANGELOG.md](file:///c:/Users/aqib2/Downloads/portfolio/CHANGELOG.md), [walkthrough.md](file:///c:/Users/aqib2/Downloads/portfolio/walkthrough.md))
- [x] Verify zero TypeScript errors via `npm run build`

## 📍 Sprint 39: Surgical Fix for Black Dashed Outline Artifact
- [x] Inspect [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx): verify zero dashed CSS classes, borders, outlines, pseudo-elements, or overlays exist in HTML/CSS
- [x] Search workspace: verify zero dashed border rules exist around hero image in codebase
- [x] Inspect `/hero_avatar_3d.png`: identify 7 isolated floating pixel clusters (components 2..8) and 1,943 low-alpha dark background noise pixels (alpha <= 51) baked into asset edge pixels
- [x] Execute precision non-destructive cleanup: clear 7 floating clusters and 1,943 low-alpha noise pixels while preserving 100% of subject artwork (81,548 opaque pixels: face, hair, clothes, shoes, Mini-Me figurine, wooden pedestal)
- [x] Preserve single ground shadow element (`bottom-[-2px] w-[78%] h-[22px] bg-black/55 blur-[14px]`) in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx)
- [x] Preserve 100% of background (`/homepage_background.png`), typography, navbar, CTA buttons, character scale, and position
- [x] Verify zero build/TypeScript errors via `npm run build`

## 📍 Sprint 40: Pristine Seed-Based Background Extraction & Grey Silhouette Elimination
- [x] Investigate Git asset history across commits `81514da`, `1ef63ad`, `fd25399`, `v0.48.0`, `v0.49.0`
- [x] Discover root cause: original candidate `1ef63ad` contained a solid slate-grey studio wall background (`#37363e` / `[56, 59, 68]`), which previous alpha-thresholding passes turned into a 20-pixel wide semi-transparent grey silhouette ($\alpha = 157..252$)
- [x] Execute localized seed-based region growing flood fill starting from outer image margins of `1ef63ad` to cleanly isolate studio wall background pixels ($\alpha = 0$)
- [x] Preserve 100% of subject artwork (61,970 opaque pixels: face, hair, eyes, skin, white jacket, black t-shirt, black trousers, white sneakers, 3D Mini-Me figurine, wooden pedestal box)
- [x] Generate 950 smooth 1-pixel edge antialiasing boundary pixels ($\alpha = 1..254$)
- [x] Filter isolated floating noise components: enforce exactly 1 single connected component representing the subject figure
- [x] Preserve [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) layout, single floor ground shadow, `/homepage_background.png` studio backdrop, character scale, character position, typography, navbar, and buttons
- [x] Verify zero build/TypeScript errors via `npm run build`

## 📍 Sprint 41: Extension of Studio Background Asset Across Projects, Achievements & Footer
- [x] Inspect existing Home ([Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx)) and About ([About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx)) background implementation (`/homepage_background.png` & `/about_background.png`)
- [x] Define `.portfolio-surface` background utility in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css)
- [x] Apply approved studio stage background asset to [Projects.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Projects.tsx) (replacing `#0d111a`)
- [x] Apply approved studio stage background asset to [Achievements.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Achievements.tsx) (replacing `#0d111a`)
- [x] Apply approved studio stage background asset to [CtaFooter.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/CtaFooter.tsx) (replacing `#0d111a`)
- [x] Preserve Home, About, Navbar, Contact, typography, glassmorphism, and body styles
- [x] Verify clean production build via `npm run build`

## 📍 Sprint 42: Light Pull Theme Switcher Integration in Navbar
- [x] Create [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) component using Framer Motion drag mechanics
- [x] Configure dark/grey glowing orb in dark mode and warm yellow glowing orb in light mode
- [x] Enforce compact capsule container (`w-10 h-10 overflow-hidden`) with cord extending upward
- [x] Integrate [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) into [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) next to `LET'S TALK` CTA button
- [x] Preserve default dark mode appearance, 3D character assets, typography, and portfolio layout
- [x] Verify zero build/TypeScript errors via `npm run build`

## 📍 Sprint 43: Light Mode Home Page & Navbar Pixel-Accurate Reference Implementation
- [x] Process and integrate 4K HiDPI warm ivory marble studio backdrop asset (`/lightmode_background.png`) matching `lightmode homep.jpeg`
- [x] Update [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) with Light Mode marble background, dark charcoal kerning display heading (`AQIB ABDUL GHAFFAR`), uppercase badge (`HI, I'M`), and translucent dark-outline glass buttons (`LinkedIn`, `GitHub`)
- [x] Update [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with Light Mode translucent white glass pill container, dark active section tab, dark monogram logo, and dark outline `LET'S TALK` CTA button
- [x] Update [App.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/App.tsx) container div with light mode base colors (`bg-[#F6F5F2] text-neutral-800`)
- [x] Preserve 100% of Dark Mode (`<html class="dark">`), 3D developer character asset (`/hero_avatar_3d.png`), floor contact shadow, and non-home routes
- [x] Verify clean production build via `npm run build`

## 📍 Sprint 44: Perfect Light Mode Home Page & Navbar Alignment
- [x] Audit codebase for zero duplicate `className` attributes across JSX elements
- [x] Enforce viewport dead-centering on center navigation capsule (`md:absolute md:left-1/2 md:-translate-x-1/2`) in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx)
- [x] Enhance active tab contrast in Light Mode (`text-neutral-950 font-semibold` on soft white pill)
- [x] Lock 100% of Dark Mode (`<html class="dark">`), 3D character asset (`/hero_avatar_3d.png`), single floor shadow, and non-home sections
- [x] Verify clean production build via `npm run build`

## 📍 Sprint 45: Pure LightPullThemeSwitcher Component Outer-Circle Removal
- [x] Update [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) to match the exact reference component design provided
- [x] Completely remove the outer circular glass border container (`w-10 h-10 border bg-white/70 overflow-hidden`)
- [x] Preserve 100% of vertical drag pull mechanics, click handler, radial gradient orbs (`bg-[radial-gradient(circle_at_center,_#facc15,_#fcd34d,_#fef9c3)]` / `dark:bg-[radial-gradient(circle_at_center,_#4b5563,_#1f2937,_#000000)]`), and pull cord
- [x] Verify clean production build via `npm run build`

## 📍 Sprint 46: Targeted LightPullThemeSwitcher Spacing & MutationObserver Sync Fix
- [x] Implement MutationObserver in [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) for instant synchronization with HTML root `dark` class
- [x] Add drag guard to prevent double-toggling during pull gestures
- [x] Configure theme-synced vertical pull cord (`bg-neutral-700` in dark mode, `bg-neutral-300` in light mode)
- [x] Adjust right header gap in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) to `gap-6 sm:gap-7` for ~24–28px horizontal visual breathing room from `LET'S TALK` button
- [x] Verify clean production build via `npm run build`

## 📍 Sprint 47: LightPullThemeSwitcher Drag Physics & Motion Optimization
- [x] Configure downward drag constraints (`dragConstraints={{ top: 0, bottom: 70 }}`) and elastic response (`dragElastic={0.1}`) in [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) for 1:1 direct pointer tracking without input lag
- [x] Implement lightweight spring return physics (`stiffness: 650, damping: 32, mass: 0.35`) for quick, responsive snap-back upon release
- [x] Set theme toggle threshold (`info.offset.y > 18`) to trigger theme switch on intentional pull
- [x] Preserve 100% of bulb dimensions (`w-8 h-8`), radial gradients, single pull cord, navbar layout, and theme logic
- [x] Verify clean production build via `npm run build`

## 📍 Sprint 48: Explicit Resting Position Return Animation Fix (`useAnimationControls`)
- [x] Integrate Framer Motion `useAnimationControls` and `dragSnapToOrigin={true}` in [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx)
- [x] Explicitly trigger `controls.start({ y: 0, transition: { type: "spring", stiffness: 700, damping: 30, mass: 0.35 } })` on `onDragEnd`
- [x] Guarantee bulb and cord assembly reliably returns to exact original resting position (`y = 0`) after every drag release without sticking or floating
- [x] Preserve 100% of downward stretch distance (~70px), 32x32px bulb styling, radial gradient glows, single pull cord, and theme toggle mechanics
- [x] Verify clean production build via `npm run build`


































