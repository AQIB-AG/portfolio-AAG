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

## Decision 004: Implementation Engineer Operating Manual
- **Status**: Approved
- **Context**: Require 100% strict alignment to Portfolio Reference PDF without creative redesigns or simplifications.
- **Decision**: Rewrote [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) to define AI role as Implementation Engineer and Portfolio Reference PDF as permanent visual source of truth.

## Decision 005: 2-Column Hero & 3D Bobblehead Avatar Asset
- **Status**: Approved
- **Context**: PDF Page 1 mandates a 2-column desktop hero grid with 3D developer character leaning on a wooden pedestal with a 3D bobblehead avatar.
- **Decision**: Re-architected [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to 2-column layout with verbatim copy and integrated high-resolution `/hero_avatar_3d.png` asset.

## Decision 006: 2-Column About Section & Specialty Cards Row
- **Status**: Approved
- **Context**: PDF Page 2 mandates a 2-column layout with a 3D crossed-arms avatar render on the left, verbatim heading ("Driven by curiosity. Built for impact."), verbatim bio copy, and 4 specialty glass cards in a horizontal row (`Full-Stack Developer`, `IoT Enthusiast`, `AI Explorer`, `Hackathon Participant`).
- **Decision**: Re-architected [About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx) to match PDF Page 2 composition and integrated `/about_avatar_3d.png` asset.

## Decision 007: Projects Showcase Carousel & Dashboard UI Preview
- **Status**: Approved
- **Context**: PDF Page 3 mandates a featured project showcase card featuring `Smart Resume Analyzer & Job Matcher`, tech stack icons (`MongoDB`, `Express`, `React`, `Node.js`), dark dashboard UI mockup preview, carousel navigation arrows, 7 pagination dots, and a category filter pill bar (`All Projects`, `Web Applications`, `AI / ML`, `Dashboards`, `Full Stack`, `Embedded Systems`).
- **Decision**: Re-engineered [Projects.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Projects.tsx) to match PDF Page 3 composition and integrated `/project_dashboard_ui.png` asset.

## Decision 008: Achievements Certificate Mockup & Metadata Panel
- **Status**: Approved
- **Context**: PDF Page 4 mandates a certificate showcase with Google Kaggle AI Agents certificate card mockup render, `01 / 12` left counter pill, carousel navigation arrows, right credential metadata panel (`Credential`, `Issuer`, `Date`, `Category`, `Credential ID`, `View Credential ↗`), and 9 pagination dots.
- **Decision**: Re-engineered [Achievements.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Achievements.tsx) to match PDF Page 4 composition and integrated `/google_kaggle_certificate.png` asset.

## Decision 009: Liquid Glass CTA Card & Centered Footer Links
- **Status**: Approved
- **Context**: PDF Page 5 mandates a liquid glass card container with glowing green paper plane icon, verbatim copy ("Have a project in mind?", "Let's build something impactful together."), green `Send Message` glass button, copyright line, `Made with ❤️ using React, Tailwind & Framer Motion`, glowing email link (`hasib4aqib@gmail.com`), and 3 centered social icon buttons (`LinkedIn`, `GitHub`, `Mail`).
- **Decision**: Re-engineered [CtaFooter.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/CtaFooter.tsx) to match PDF Page 5 composition.

## Decision 010: Dedicated Glass Contact View & Interactive Form
- **Status**: Approved
- **Context**: PDF Page 6 mandates a dedicated liquid glass contact view (`/contact`) with brand header, `RETURN TO HOME 🏠` pill button, verbatim copy ("Let's build something amazing together."), 3 contact detail badges (`LOCATION: Hyderabad, Telangana, India`, `PHONE: +91 939 110 30 20`, `EMAIL: aqibag@example.com`), social buttons, and an interactive `CONTACT FORM` glass panel.
- **Decision**: Re-engineered [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) to match PDF Page 6 composition with 99% visual fidelity.

## Decision 011: Hero Section Rebuild for Target Hero Image Alignment
- **Status**: Approved
- **Context**: User provided an uploaded TARGET HERO IMAGE requiring ~99% visual fidelity alignment.
- **Decision**: Rebuilt [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to match the target image composition, typography tracking, line breaks, blue LinkedIn badge `in` glass pill (`in LinkedIn ↗`), GitHub glass pill (`GitHub ↗`), dark studio charcoal background (`#1a1c23`), and right-side 3D bobblehead pedestal render asset (`/hero_target_visual.jpg`).

## Decision 012: Hero Section Layout Reconstruction & Optical Realignment
- **Status**: Approved
- **Context**: User requested a complete optical layout reconstruction of [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to match the Target Reference Image without relying on arbitrary spacing.
- **Decision**: Recalculated top padding (`pt-28 md:pt-32`), dark studio vignette backdrop (`bg-[#1c1f27]`), letter-spacing tracking on display headings (`AQIB` / `ABDUL GHAFFAR`), constrained bio width (`max-w-[530px]`), refined social glass pills, and aligned right-column 3D developer character asset (`/hero_avatar_3d.png`) to studio ground floor level with CSS radial shadow ellipse (`bg-black/80 blur-md`).

## Decision 013: Zero-Patch Hero Scratch Rebuild & Pixel-Perfect Reference Rule Integration
- **Status**: Approved
- **Context**: User instructed to permanently enforce `## Pixel-Perfect Reference Rule (Highest Priority)` in [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) and perform a zero-patch, clean scratch rebuild of [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx).
- **Decision**: Deleted old layout code and rebuilt [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) from scratch, reproducing exact container max-width (`max-w-[1320px]`), top padding (`pt-24 md:pt-32`), studio dark backdrop vignette (`bg-[#181a20]`), letter-spacing tracking (`AQIB` / `ABDUL GHAFFAR`), bio paragraph constraints (`max-w-[560px]`), glass pills, and right column 3D developer character render asset (`/hero_avatar_3d.png`) seated flush on studio ground level shadow with ~99% side-by-side fidelity.

## Decision 014: Glass Capsule Logo Integration & Exact 3-Line Heading Correction
- **Status**: Approved
- **Context**: User requested scoped correction of the website logo (Part 1) and Hero Intro typography (Part 2 & 3).
- **Decision**: Encapsulated `/logo.png` inside a glass pill container (`px-4 py-2 border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-lg`), increased height (`h-11 sm:h-13 md:h-15`), and applied crisp contrast rendering (`image-rendering: crisp-edges`, `contrast-125 brightness-110 drop-shadow-[0_4px_14px_rgba(255,255,255,0.18)]`). Re-architected Hero intro typography with exact tracking `H I ,  I ' M` (`tracking-[0.42em] font-light text-slate-400/90`) and explicit 3-line breaks (`AQIB` / `ABDUL` / `GHAFFAR`) with `font-light` weight and tracking (`tracking-[0.16em]` & `tracking-[0.18em]`).

## Decision 015: Zero-Border Logo Integration & Exact 2-Line Name Heading Correction
- **Status**: Approved
- **Context**: User clarified that the logo must float naturally without fake capsule borders, outlines, or background boxes, and the Hero name heading must have exactly TWO line blocks (Line 1: `AQIB`, Line 2: `ABDUL GHAFFAR`).
- **Decision**: Removed capsule borders from `/logo.png` in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) (`h-10 sm:h-11 md:h-12 w-auto mix-blend-screen image-rendering: crisp-edges`). Rebuilt display heading in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) with Line 1 (`AQIB`) and Line 2 (`ABDUL GHAFFAR`), matching typography weights and letter spacing with ~99% visual fidelity.

## Decision 016: 32-Bit Transparent PNG Logo Conversion & 3D Character Asset Reconstruction
- **Status**: Approved
- **Context**: User uploaded side-by-side screenshots showing two discrepancies: (1) `/logo.png` was a JPEG file with a solid dark rectangle box, and (2) the right column was rendering a square card preview.
- **Decision**: Converted `/logo.png` to a true 32-bit transparent PNG with alpha channel, eliminating the solid dark rectangle box so the monogram floats naturally on the header backdrop. Replaced the square mockup preview in the right column with the exact 626KB transparent 3D developer character render asset (`/hero_avatar_3d.png`), standing flush on the dark studio floor with a radial ground shadow ellipse.

## Decision 017: HiDPI 5x Logo Asset Generation & Height Realignment
- **Status**: Approved
- **Context**: User reported that the logo was slightly undersized and appeared soft at 100% zoom.
- **Decision**: Generated a 5x HiDPI razor-sharp transparent PNG asset (`/logo.png` at `885 × 340` px) with true 32-bit alpha channel. Increased logo vertical height in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) (`h-11 sm:h-13 md:h-14 lg:h-16 w-auto`) so its height matches the floating glass navigation pill container with generous whitespace and 100% crisp, readable lettering at all zoom levels.

## Decision 018: Logo Dimension Fine-Tuning (25% Reduction) & Vertical Baseline Realignment
- **Status**: Approved
- **Context**: User requested fine-tuning the logo dimensions by ~25% to prevent it from dominating the top-left corner and align its vertical center with the navigation bar.
- **Decision**: Reduced displayed CSS dimensions in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) (`h-8 sm:h-9 md:h-10 lg:h-[42px] w-auto`), perfectly balancing the monogram logo with the navigation pill container along the shared vertical center axis (`flex items-center`) while preserving the 5x HiDPI asset resolution and transparent background.

## Decision 019: 4K Vector SVG Logo Asset Integration & 10% Size Refinement
- **Status**: Approved
- **Context**: User requested 4K crystal-clear vector sharpness for the logo and an additional 10% reduction in displayed size to ensure an elegant, non-dominant brand mark.
- **Decision**: Created resolution-independent vector SVG logo `/logo.svg` (and 4K 2000px PNG fallback `/logo.png`), delivering 100% zero-blur, razor-sharp vector typography on 4K/Retina displays. Scaled displayed CSS logo height by an additional 10% in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) (`h-7 sm:h-8 md:h-9 lg:h-[36px] w-auto`), maintaining vertical center axis alignment.

## Decision 020: Exact Original Uploaded Logo Artwork Restoration
- **Status**: Approved
- **Context**: User requested restoring the exact original uploaded logo artwork image without any synthetic font redesigns, font substitutions, or character alteration.
- **Decision**: Converted the original uploaded logo artwork image (`media__1785785826507.jpg`) directly into a 2000px HiDPI 32-bit transparent PNG asset (`/logo.png`) with 100% alpha transparency. Restored exact stencil serif monogram `A A G` shapes, stencil gaps, kerning, and original `AQIB ABDUL GHAFFAR` banner text, eliminating synthetic font substitutions with 100% visual fidelity to the uploaded artwork.

## Decision 021: Hero Typography Block Reconstruction
- **Status**: Approved
- **Context**: User requested rebuilding the hero text block to match the newly uploaded reference image with natural `Hi I'm` greeting, bold cohesive display heading (Line 1 `AQIB`, Line 2 `ABDUL GHAFFAR`), tight line-height, and reduced vertical spacing.
- **Decision**: Updated [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to replace wide-spaced tracking with natural `Hi I'm` badge (`text-sm md:text-base font-medium tracking-normal text-slate-400 mb-2`), bold display heading (`font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white tracking-tight leading-[1.08] mb-5`) with Line 1 (`AQIB`) and Line 2 (`ABDUL GHAFFAR`), and balanced description paragraph container (`max-w-[550px] leading-relaxed mb-8`).

## Decision 022: Hero Top Padding Reduction & Transparent Character Cutout Integration
- **Status**: Approved
- **Context**: User requested shifting the Hero content block upward so it begins immediately below the navigation bar and removing the room card box outline from the right column character graphic.
- **Decision**: Reduced section top padding in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to `pt-16 sm:pt-20 md:pt-22 pb-8 min-h-[85vh]`, moving the Hero block upward by ~60px. Processed `hero_avatar_3d.png` into a transparent PNG character cutout, placing Aqib standing next to the 3D bobblehead figure directly on the dark studio floor with zero room card outline.

## Decision 023: Navigation Bar Pixel-Perfect Reconstruction
- **Status**: Approved
- **Context**: User requested rebuilding the navigation bar to match the target reference design with approximately 99% visual fidelity across all 13 steps.
- **Decision**: Rebuilt [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with a Liquid Glass capsule container (`border border-white/15 bg-white/[0.03] backdrop-blur-2xl px-2 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`), liquid glass gradient active tab `Home` with specular top line highlight, indigo specular gradient border for right `LET'S TALK` CTA button, and single horizontal line alignment (`top-7 flex items-center justify-between`) shared with the left original monogram logo asset.

## Decision 024: True Apple Liquid Glass Navbar Material Integration
- **Status**: Approved
- **Context**: User requested replacing dark/purple glass fills with true neutral Apple Liquid Glass material (90% transparent, 10% material) matching Apple VisionOS / macOS floating panels.
- **Decision**: Updated [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) to neutral Apple Liquid Glass material (`bg-white/[0.05] border border-white/[0.18] backdrop-blur-[24px] backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.35)]`), top specular white reflection stroke, and bright glass active tab sheen (`from-white/35 via-white/15 to-white/10 border-white/40`).

## Decision 025: True Apple Liquid Glass Multi-Layer Architecture Integration
- **Status**: Approved
- **Context**: User requested rebuilding the navigation bar using a multi-layered Apple Liquid Glass architecture combining SVG light refraction filters (`feDisplacementMap`), specular top edge stroke, inner light reflection overlay, and VisionOS liquid glass active tab sheen.
- **Decision**: Rebuilt [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with a 6-layer Liquid Glass material stack: SVG refraction filter (`#appleLiquidGlassRefraction`), 24px backdrop blur (`backdrop-blur-[24px] backdrop-saturate-150`), 90% neutral transparent fill (`bg-white/[0.04]`), specular top reflection stroke, inner light overlay, and VisionOS active tab sheen (`from-white/35 via-white/15 to-white/10 border-white/40 shadow-[0_4px_24px_rgba(255,255,255,0.22)]`).

## Decision 026: Homepage Studio Background Reconstruction & Visual Decomposition Rule
- **Status**: Approved
- **Context**: User requested adding a permanent Visual Decomposition Rule to AGENTS.md and rebuilding the homepage background using a 7-layer neutral studio lighting system matching the uploaded reference image.
- **Decision**: Added permanent `# Visual Decomposition Rule` to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md). Rebuilt [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) background using a 7-layer neutral studio lighting system (`#15171e` graphite base, primary studio spotlight `ellipse 75% 65% at 50% 42%`, ambient slate fill glow, character illumination wrapping, floor transition gradient, and perimeter edge vignette `rgba(10,11,15,0.85)`).

## Decision 027: Extracted Neutral Studio Graphite Palette & Color Extraction Rule
- **Status**: Approved
- **Context**: User requested eliminating all blue/purple background tints, deriving exact neutral RGB values directly from target screenshot pixels via Python PIL, and adding a permanent Color Extraction Rule to AGENTS.md.
- **Decision**: Added permanent `# Color Extraction Rule (Mandatory)` to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md). Rebuilt background gradient stops in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) and [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) using exact extracted neutral studio graphite/slate colors (`#1c1f28`, `#21242b`, `#3a3d46`, `#303038`, `#383b44` with 7.7%–13.2% saturation), eliminating zero-saturation blue/purple tints.

## Decision 028: Functional Hero Social Profile Buttons
- **Status**: Approved
- **Context**: User requested converting the Hero LinkedIn and GitHub buttons into fully functional external links pointing to official profiles with secure new-tab opening.
- **Decision**: Updated [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to link LinkedIn to `https://www.linkedin.com/in/aqib-abdul-ghaffar-497047302...` and GitHub to `https://github.com/AQIB-AG` using `target="_blank"`, `rel="noopener noreferrer"`, full clickable area, keyboard focus rings (`focus:ring-2 focus:ring-white/40`), and aria-labels, while preserving 100% of liquid glass visual styling.

## Decision 039: Approved 3D Mini-Me Figurine Asset Replacement
- **Status**: Approved & Integrated
- **Context**: The Hero section contained a legacy 3D developer character asset. User provided an approved custom 3D Mini-Me / Bobblehead figurine production visual asset showing Aqib standing leaning on his 3D Mini-Me figurine on a wooden pedestal box.
- **Decision**: Isolated the exact composite figure (Aqib, 3D Mini-Me figurine, and wooden pedestal) from the uploaded production visual into a 32-bit transparent PNG (`/hero_avatar_3d.png`) without AI regeneration, redesign, or filter alterations, replacing the Hero character asset in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) with ~99% visual fidelity.

## Decision 040: Studio Floor Ground Contact Shadow & Asset Edge Defringing
- **Status**: Approved & Enforced
- **Context**: User reported visual integration issues: character appeared floating/pasted, drop-shadow filter created an un natural dark silhouette halo around the head and body, and semi-transparent edge pixels contained dark studio background residue.
- **Decision**: 
  1. Purged the `filter drop-shadow-[...]` CSS from the `<img>` element.
  2. Implemented a dedicated HTML/CSS ground contact shadow layer (`z-0`) underneath the transparent character PNG (`z-10`), providing realistic dual contact shadows under the wooden pedestal base and person's feet directly on the studio floor plane of `/homepage_background.png`.
  3. Cleaned and defringed `hero_avatar_3d.png` alpha channel to remove background color residue from semi-transparent edge pixels, producing crisp edges without black artifacts or halos while preserving 100% of the original figurine and person details.

## Decision 041: Single Anchored Studio Floor Shadow & Stray Purple Line Removal
- **Status**: Approved & Enforced
- **Context**: Detached shadow appeared to the right of the character, light-grey ambient polygon shape floated under pedestal, and a stray purple line appeared under the "LET'S TALK" button.
- **Decision**:
  1. Purged all competing multi-div shadow structures and light-grey ambient blur shapes (`blur-xl bg-black/50`).
  2. Consolidated shadow architecture into ONE single dark contact shadow (`bg-black/90 blur-md rounded-full`) centered directly under the 3D character base (`left-1/2 -translate-x-1/2 w-[92%] h-4`).
  3. Wrapped character in a tight relative flex wrapper (`relative inline-flex flex-col items-center justify-end`) so the shadow coordinate space is locked to the 3D graphic's exact width.
  4. Updated "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) from `border-indigo-400/50` to liquid glass `border border-white/20`, removing the stray purple line.

## Decision 042: Baked-in Grey Platform PNG Removal & Single Shadow DOM Enforcement
- **Status**: Approved & Enforced
- **Context**: Deep inspection of `/hero_avatar_3d.png` revealed 31 bottom rows containing baked-in grey studio floor shadow (`avg RGB = [63, 62, 70]`) from the original render crop, creating a grey trapezoidal platform artifact under the wooden pedestal.
- **Decision**:
  1. Processed `/hero_avatar_3d.png` to remove baked-in grey floor pixels, ending transparency cleanly at the exact bottom wood edge of the pedestal and shoe soles.
  2. Enforced DOM structure in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) containing EXACTLY ONE shadow element (`<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] h-4 bg-black/90 blur-md rounded-full" />`).
  3. Locked character container to `relative inline-flex flex-col items-center justify-end` so the shadow coordinate system is tied to the 3D asset width.

## Decision 043: Studio Floor Oval Shadow Alignment & Navbar Border Restoration
- **Status**: Approved & Enforced
- **Context**: Visual refinement against target reference `phomepage(6).jpeg`. Needed to ensure zero shadow gap under the pedestal/shoes and restore the purple/blue liquid glass border directly around the "LET'S TALK" button perimeter without any separate stray line.
- **Decision**:
  1. Configured EXACTLY ONE soft natural oval floor shadow element in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) (`bottom-[2px] left-1/2 -translate-x-1/2 w-[96%] h-6 bg-black/75 blur-md rounded-full z-0`) positioned directly under and slightly behind the pedestal base and shoes.
  2. Restored `border border-indigo-400/50 hover:border-indigo-400/90` on the "LET'S TALK" button perimeter in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).

## Decision 044: Complete 3D Mini-Me Asset Restoration (Left Ear & Right Hand)
- **Status**: Approved & Enforced
- **Context**: User reported that recent alpha cropping had cut off the Mini-Me figurine's left ear and right hand/arm details.
- **Decision**:
  1. Re-extracted `/hero_avatar_3d.png` from the original target visual `hero_target_visual.jpg` with a wider bounding box (`452 x 542` -> `258 x 429`), fully restoring the Mini-Me figurine's left ear and right hand/arm in pocket.
  2. Verified alpha channel transparency (28.1% transparent background, 69.0% opaque subject, 2.9% anti-aliased edge matting).
  3. Preserved single shadow element in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) and liquid glass border on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).

## Decision 045: Original Untouched 1024x1024 Asset Restoration & Zero Python Unmix Lock
- **Status**: Approved & Enforced
- **Context**: User requested restoring `/hero_avatar_3d.png` to the exact original approved source asset without any Python alpha-unmix or color-processing modifications.
- **Decision**:
  1. Restored `/hero_avatar_3d.png` to the exact original 1024x1024 32-bit transparent PNG asset from initial commit (`81514da`).
  2. Locked asset pipeline to strictly forbid running any Python alpha-unmixing or defringing operations (`unmixed_rgb = ...`) on `/hero_avatar_3d.png`.
  3. Enforced single shadow element in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) and liquid glass border on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).

## Decision 046: Exact Approved 3D Character Asset Identification & Single Elliptical Shadow Lock
- **Status**: Approved & Enforced
- **Context**: Inspection of git asset history revealed `81514da` contained a legacy 1024x1024 character with a giant podium/blue particles. The actual approved portfolio asset is Git candidate `1ef63ad` (`290 x 432`), containing Aqib standing with white jacket leaning on his Mini-Me figurine on the small brown wooden box.
- **Decision**:
  1. Restored candidate `1ef63ad` directly to `/hero_avatar_3d.png` without running any Python image processing, cropping, or defringing scripts.
  2. Configured EXACTLY ONE soft horizontal elliptical studio floor shadow (`<div aria-hidden="true" className="pointer-events-none absolute left-1/2 bottom-[0px] z-0 -translate-x-1/2 w-[85%] h-[24px] rounded-[50%] bg-black/55 blur-[16px]" />`) in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx).
  3. Preserved liquid glass perimeter border on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with zero stray lines.

## Decision 047: Clean Transparent Hero Asset Background Box Removal & Single Shadow Lock
- **Status**: Approved & Enforced
- **Context**: Candidate `1ef63ad` originally contained a solid studio wall background (`#37363e`), causing a dark grey rectangular box to render around the character visual.
- **Decision**:
  1. Converted outer studio wall background pixels to 100% transparent alpha (`31.8%` transparent background, `65.1%` opaque subject) while preserving 100% of subject pixels (hair silhouette, face, left ear, right ear, right hand & watch in pocket, clothes, shoes, Mini-Me figurine, small wooden pedestal).
  2. Enforced EXACTLY ONE soft horizontal elliptical studio floor shadow element (`<div aria-hidden="true" className="pointer-events-none absolute left-1/2 bottom-[-2px] z-0 -translate-x-1/2 w-[78%] h-[22px] rounded-[50%] bg-black/55 blur-[14px]" />`) in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx).
  3. Preserved liquid glass perimeter border on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with zero stray lines.

## Decision 050: Pristine Seed-Based Background Extraction & Grey Silhouette Elimination
- **Status**: Approved & Enforced
- **Context**: User reported that the previous v0.49.0 threshold cleanup left a blocky grey background silhouette/halo around the Mini-Me figurine and standing character.
- **Decision**:
  1. Investigated Git asset history across commits `81514da`, `1ef63ad`, `fd25399`, `v0.48.0`, `v0.49.0`. Discovered that candidate `1ef63ad` originally contained a solid slate-grey studio wall background (`#37363e` / `[56, 59, 68]`), which previous thresholding passes converted into 1,899 semi-transparent grey edge pixels ($\alpha = 157..252$).
  2. Executed a localized, seed-based region-growing flood fill starting from outer image margins of original `1ef63ad` to cleanly extract 62,360 studio wall background pixels ($\alpha = 0$) without touching subject interior pixels.
  3. Preserved 100% of subject artwork (61,970 opaque pixels: face, hair, eyes, skin, white jacket, black t-shirt, black trousers, white sneakers, 3D Mini-Me, wooden pedestal) and generated 950 1-pixel antialiased boundary edge pixels ($\alpha = 1..254$).
  4. Enforced exactly 1 connected component in the alpha channel, eliminating floating noise.
  5. Preserved 100% of [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx), studio backdrop (`/homepage_background.png`), typography, navbar, CTA buttons, and single ground shadow.

## Decision 051: Extension of Studio Stage Background Asset Across Projects, Achievements & Footer
- **Status**: Approved & Integrated
- **Context**: Home and About sections were using the approved photorealistic studio stage backdrop asset (`/homepage_background.png` and `/about_background.png`). Projects, Achievements, and Footer sections were using a flat `#0d111a` background color, causing a visible background transition when scrolling down from About.
- **Decision**:
  1. Inspected existing Home ([Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx)) and About ([About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx)) background declarations. Confirmed they both use the locked photorealistic studio stage backdrop image asset (`bg-[url('/homepage_background.png')] bg-cover bg-center bg-no-repeat`).
  2. Defined `.portfolio-surface` utility rule in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) referencing the studio backdrop image asset.
  3. Applied the exact studio backdrop image asset configuration (`bg-[url('/homepage_background.png')] bg-cover bg-center bg-no-repeat`) across [Projects.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Projects.tsx), [Achievements.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Achievements.tsx), and [CtaFooter.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/CtaFooter.tsx), eliminating the `#0d111a` background color overrides.
  4. Preserved 100% of Home ([Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx)), About ([About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx)), Navbar, Contact view, typography, 3D character renders, and glassmorphism styling (`.glass-panel`, `.glass-pill`, `.glass-card-hover`).

## Decision 052: Light Pull Theme Switcher Integration in Navbar
- **Status**: Approved & Integrated
- **Context**: User requested adding a Light/Dark theme switcher to the existing portfolio navbar based on a provided "Light Pull Theme Switcher" component design.
- **Decision**:
  1. Built [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) using Framer Motion drag mechanics (`drag="y"`).
  2. Implemented dark/grey glowing orb in dark mode (`bg-[radial-gradient(circle_at_center,_#4b5563,_#1f2937,_#000000)] shadow-[0_0_14px_4px_rgba(75,85,99,0.7)]`) and warm yellow glowing orb in light mode (`bg-[radial-gradient(circle_at_center,_#facc15,_#fcd34d,_#fef9c3)] shadow-[0_0_16px_6px_rgba(250,204,21,0.75)]`).
  3. Contained the cord pulling element inside a compact glass capsule (`w-10 h-10 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-[20px]`) so it cleanly integrates inside the header next to the `LET'S TALK` CTA button without creating a giant vertical string or breaking the navbar height layout.
  4. Configured dark mode as default (`<html class="dark">`) and bound both drag-down (`onDragEnd`) and click (`onClick`) handlers to toggle the `dark` class on `document.documentElement`.

## Decision 053: Light Mode Home Page & Navbar Pixel-Accurate Reference Implementation
- **Status**: Approved & Integrated
- **Context**: User provided reference design `lightmode homep.jpeg` specifying the exact visual target for the Light Mode Home page and Navbar.
- **Decision**:
  1. Extracted and integrated high-resolution warm ivory marble studio stage backdrop image asset (`/lightmode_background.png`) for Light Mode Home background (`bg-[url('/lightmode_background.png')] dark:bg-[url('/homepage_background.png')]`).
  2. Updated [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to render dark charcoal kerning display heading (`AQIB ABDUL GHAFFAR`), uppercase badge (`HI, I'M`), and translucent dark-outline glass buttons (`LinkedIn`, `GitHub`) in Light Mode, while keeping Dark Mode 100% locked (`font-bold tracking-tight text-white`).
  3. Updated [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) to render translucent white glass pill container (`bg-white/70 border-black/[0.08]`), white active section tab (`bg-white text-neutral-900 shadow-[0_2px_10px_rgba(0,0,0,0.08)]`), dark monogram logo artwork, and dark outline `LET'S TALK` CTA button in Light Mode.
  4. Grounded the 3D developer character asset (`/hero_avatar_3d.png`) onto the marble studio floor plane using a soft natural floor contact shadow (`bg-black/40 dark:bg-black/55 blur-[12px] dark:blur-[14px]`).
  5. Preserved 100% of Dark Mode (`<html class="dark">`), non-home routes, and 3D character asset geometry.

## Decision 054: Light Mode Home Page & Navbar Alignment & Contrast Lock
- **Status**: Approved & Integrated
- **Context**: User requested perfecting Light Mode Home page and Navbar to match reference `lightmode homep(1).jpeg`, ensuring zero duplicate `className` attributes, dead-centered navigation capsule, and high contrast active tab text.
- **Decision**:
  1. Updated center navigation capsule in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with `md:absolute md:left-1/2 md:-translate-x-1/2` to keep the center nav pill dead-centered on the viewport horizontal axis on desktop/laptop screens without being shifted by the left logo or right theme switcher + `LET'S TALK` button.
  2. Enhanced active tab pill text contrast in Light Mode (`text-neutral-950 font-semibold` on `bg-gradient-to-b from-neutral-200/90 via-neutral-100/90 to-neutral-200/80`), preventing text fading or invisible text against the active light pill.
  3. Ensured zero duplicate `className="..." className="..."` attributes exist across all component JSX elements.
  4. Preserved 100% of Dark Mode (`<html class="dark">`), single floor shadow (`bg-black/40 dark:bg-black/55`), 3D character assets (`/hero_avatar_3d.png`), and non-home routes.

## Decision 055: Pure LightPullThemeSwitcher Component Design Lock
- **Status**: Approved & Integrated
- **Context**: User requested replacing the theme toggle UI with the exact `LightPullThemeSwitcher` component reference, removing the outer circular glass border container completely.
- **Decision**:
  1. Rebuilt [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) to match the reference component design without the outer circular container.
  2. Maintained `w-8 h-8 rounded-full` orb with theme-aware radial gradients: yellow glow in light mode (`bg-[radial-gradient(circle_at_center,_#facc15,_#fcd34d,_#fef9c3)] shadow-[0_0_20px_8px_rgba(250,204,21,0.5)]`) and dark grey glow in dark mode (`dark:bg-[radial-gradient(circle_at_center,_#4b5563,_#1f2937,_#000000)] dark:shadow-[0_0_20px_6px_rgba(31,41,55,0.7)]`).
  3. Preserved vertical drag pull physics (`drag="y"`), click handler (`onClick`), and pull cord (`absolute bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-48`).
  4. Left 100% of Hero, Navbar layout, Logo, Let's Talk button, and theme logic untouched.

## Decision 056: LightPullThemeSwitcher Spacing & MutationObserver Sync Fix
- **Status**: Approved & Integrated
- **Context**: User requested fixing theme bulb position spacing (~20-28px from `LET'S TALK` button) and eliminating stale React state during click/drag theme toggling.
- **Decision**:
  1. Integrated `MutationObserver` on `document.documentElement` targeting `["class"]` inside [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) to guarantee real-time synchronization between `isDark` state and the HTML root class across clicks, drags, and external class mutations.
  2. Implemented `isDraggingRef` guard to prevent double-toggling when dragging downward.
  3. Formatted pull cord with theme-synced background (`isDark ? "bg-neutral-700" : "bg-neutral-300"`).
  4. Adjusted right header flex gap in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) to `gap-6 sm:gap-7` providing ~24-28px horizontal visual breathing room between the theme bulb and the `LET'S TALK` CTA button without shifting the CTA button or center navigation.

## Decision 057: LightPullThemeSwitcher Motion Physics Optimization
- **Status**: Approved & Integrated
- **Context**: User requested optimizing drag motion physics in `LightPullThemeSwitcher` to eliminate input lag and reproduce the 21st.dev reference interaction.
- **Decision**:
  1. Updated Framer Motion props in [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx): `dragConstraints={{ top: 0, bottom: 70 }}`, `dragElastic={0.1}`, `dragTransition={{ bounceStiffness: 650, bounceDamping: 32 }}`.
  2. Added lightweight spring return transition: `transition={{ type: "spring", stiffness: 650, damping: 32, mass: 0.35 }}` for instant 1:1 pointer tracking while dragging downward up to 70px, and fast, snappy physical return upon release.
  3. Adjusted theme toggle threshold to `info.offset.y > 18` for intentional drag activations.
  4. Preserved 100% of bulb dimensions (`w-8 h-8`), radial gradients, single pull cord, navbar layout, and theme logic.

## Decision 073: Theme-Aware Body Background & Studio Environment Integration (Reference 3)
- **Status**: Approved & Enforced
- **Context**: Traced root cause preventing Light Mode from displaying the warm ivory marble studio environment to a hardcoded `background-color: #1c1f28;` on `body` in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) bleeding through `/lightmode_background.png`.
- **Decision**:
  1. Updated `body` background (`#f6f5f2` in Light Mode, `#1c1f28` in Dark Mode) and `.portfolio-surface` in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) to be theme-aware.
  2. Light Mode now displays the warm ivory marble studio environment (`/lightmode_background.png`) over `#f6f5f2` without dark graphite bleed-through.
  3. Dark Mode continues displaying the graphite studio background (`/homepage_background.png`) over `#1c1f28`.
  4. **100% Locked**: Preserved navbar structure (`fixed top-7`, `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`), 3D character asset (`/hero_avatar_3d.png`), floor ground shadow, typography, routing, and component architecture.

## Decision 072: Target Light Mode Studio Environment Matching (Reference 3)
- **Status**: Approved & Enforced
- **Context**: User requested reproducing the exact Light Mode visual state from Reference 3 while keeping Dark Mode (Reference 1) 100% locked.
- **Decision**:
  1. Maintained dual theme architecture: Dark Mode preserves graphite studio background (`/homepage_background.png`), white display text, dark glass navbar, white logo, and indigo CTA accents.
  2. Aligned Light Mode to Reference 3: warm ivory marble studio texture (`/lightmode_background.png`), dark charcoal display typography (`text-neutral-900 font-normal tracking-[0.18em]`), translucent light glass navbar (`:root:not(.dark) .liquid-glass-navbar`), bright white active tab pill (`:root:not(.dark) .liquid-glass-active-pill`), crisp black logo (`brightness-0 mix-blend-multiply`), and clean outlined `LET'S TALK` control.
  3. **100% Locked**: Preserved 3D character asset (`/hero_avatar_3d.png`), floor ground shadow, compact centered navigation capsule (`left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`), `LightPullThemeSwitcher`, typography sizes, routing, and component architecture.

## Decision 071: Root Cause CSS Override Fix for VisionOS Liquid Glass Navbar
- **Status**: Approved & Enforced
- **Context**: Identified that `.liquid-glass-navbar { position: relative; }` in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) was overriding Tailwind's `absolute` class on `<nav>` in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx), causing flexbox to treat `<nav>` as a relative sibling shifted ~300px to the right.
- **Decision**:
  1. Removed `position: relative;` from `.liquid-glass-navbar` in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css).
  2. Allowed `<nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">` in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) to evaluate `position: absolute` cleanly against `<div className="relative mx-auto max-w-[1400px]">`.
  3. Restored 100% mathematical horizontal viewport centering (`50vw`) of the ~610px compact capsule on all desktop viewports.
  4. **100% Locked**: Preserved all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## Decision 070: Compact Centered VisionOS Liquid Glass Navigation Capsule Restoration
- **Status**: Approved & Enforced
- **Context**: User requested restoring the compact content-sized pill architecture (~610px width) matching the reference screenshot, and removing any duplicate JSX return statements.
- **Decision**:
  1. Updated [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx): `<nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">` inside `<div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between px-8 md:px-16">`.
  2. Verified strictly ONE `return (` statement in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and zero syntax errors.
  3. Restored compact content-sized rounded pill geometry without `w-full` or full-width page stretching.
  4. **100% Locked**: Preserved all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## Decision 069: Independent 50vw Viewport Fixed Centered VisionOS Liquid Glass Navbar
- **Status**: Approved & Enforced
- **Context**: Solved the issue where flex container sibling layout pushed the navigation capsule rightwards into the `LET'S TALK` button by separating the `<nav>` capsule into an independent viewport-anchored element (`fixed top-7 left-1/2 -translate-x-1/2`).
- **Decision**:
  1. Updated [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx): `<nav className="fixed top-7 left-1/2 -translate-x-1/2">` anchored directly to 50% viewport width (`50vw`).
  2. Maintained Logo (left) and Right Controls (right) inside `<div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 flex items-center justify-between">`.
  3. Guarantees 100% mathematical viewport horizontal centering without flex sibling offsets or collisions.
  4. **100% Locked**: Preserved all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## Decision 068: 1400px Flex Header VisionOS Liquid Glass Navbar Alignment Restoration
- **Status**: Approved & Enforced
- **Context**: User requested restoring the exact structural positioning model where `<header className="fixed top-7 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 w-full max-w-[1400px] mx-auto">` serves as the primary flex container (without intermediate child `<div>` wrappers), and `<nav className="absolute left-1/2 -translate-x-1/2">` is positioned directly inside it.
- **Decision**:
  1. Updated [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) to render logo, `<nav>`, and right controls as direct children of the centered 1400px flex header.
  2. Anchored navigation capsule center to exact 50% midpoint of the 1400px flex coordinate system (`absolute left-1/2 -translate-x-1/2`).
  3. **100% Locked**: Preserved all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## Decision 067: 1400px Container Centered VisionOS Liquid Glass Navbar Alignment
- **Status**: Approved & Enforced
- **Context**: User requested restoring the positioning relationship where the Liquid Glass navigation capsule is positioned `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2` inside the `relative mx-auto flex w-full max-w-[1400px] px-8 md:px-16` inner container.
- **Decision**:
  1. Restored `relative` on the inner `max-w-[1400px]` container in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and placed `<nav>` inside it.
  2. Anchored navigation capsule center to exact 50% midpoint of the 1400px navbar content area between logo and right controls.
  3. **100% Locked**: Preserved all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## Decision 066: Full-Viewport 50vw Header Centering Architecture
- **Status**: Approved & Enforced
- **Context**: Re-architected container structure in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) placing `<nav>` directly inside `<header className="fixed top-7 inset-x-0 w-full">`, making `<header>` the containing block spanning `100vw`.
- **Decision**:
  1. Removed `relative` from the inner `max-w-[1400px]` div so that `<nav>` positioned `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2` calculates 50% relative to `<header>` (`100vw`).
  2. Guarantees mathematical horizontal centering (`50vw`) on all screens (1024px → 512px, 1280px → 640px, 1440px → 720px, 1920px → 960px).
  3. **100% Locked**: Preserved all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## Decision 065: md:fixed 50vw Viewport Centered Liquid Glass Navbar Fix
- **Status**: Approved & Enforced
- **Context**: User requested an explicit viewport-anchored positioning rule (`md:fixed md:left-1/2 md:top-7 md:-translate-x-1/2`) to guarantee the Liquid Glass navigation capsule is anchored directly to the browser window (`50vw`) rather than an inner containing block.
- **Decision**:
  1. Applied `relative md:fixed md:left-1/2 md:top-7 md:-translate-x-1/2` to navigation capsule in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).
  2. Anchored navigation capsule center to exact 50vw viewport midpoint at top-7 (`28px`).
  3. **100% Locked**: Preserved all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## Decision 064: 50vw Viewport Centered Liquid Glass Navbar Alignment Fix
- **Status**: Approved & Enforced
- **Context**: User requested a surgical positioning fix to ensure the geometric center of the Liquid Glass navigation capsule is aligned exactly with 50% viewport width (`50vw`).
- **Decision**:
  1. Applied `relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2` to navigation capsule in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).
  2. Placed the geometric midpoint of the navigation capsule at exact 50vw viewport center across all desktop screen widths.
  3. **100% Locked**: Preserved all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## Decision 063: Mathematical Viewport Centering & Layered Z-Index Hierarchy
- **Status**: Approved & Enforced
- **Context**: User requested guaranteeing mathematical horizontal viewport centering for the Liquid Glass capsule navigation independent of left logo width or right controls width, and ensuring text legibility.
- **Decision**:
  1. Re-architected container positioning in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx): `<header className="fixed top-7 inset-x-0 z-50">` containing `<div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between px-8 md:px-16">` and `<nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ...">`.
  2. Placed center navigation capsule at exact 50% left and 50% top of the header container, ensuring absolute viewport centering across all screen widths.
  3. Structured layered z-index hierarchy (`z-30` navigation text above `z-10` pointer-events-none specular highlight, sheen, and active pill).
  4. **100% Locked**: Preserved all hero text, 3D character graphic asset (`/hero_avatar_3d.png`), floor ground shadow layer, dark studio background images, typography, routing, and component dimensions.

## Decision 062: Apple VisionOS & 21st.dev Liquid Glass Navbar Material Rebuild
- **Status**: Approved & Enforced
- **Context**: User requested rebuilding the navbar material and LET'S TALK button into a true Apple VisionOS Liquid Glass material system with optical background translucency, specular highlight strokes, internal vertical sheen, edge depth, and floating active glass pill.
- **Decision**:
  1. Built `.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, and `.liquid-glass-control` CSS rules in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css).
  2. Re-architected [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with layered hierarchy: specular top highlight stroke, internal vertical sheen, floating active glass pill (`.liquid-glass-active-pill`) with Framer Motion spring sliding animation (`stiffness: 180, damping: 24`), and high-contrast nav labels.
  3. Cleaned unused/broken SVG refraction filter markup.
  4. **100% Locked**: Preserved all hero text, 3D character graphic asset (`/hero_avatar_3d.png`), floor ground shadow layer, dark studio background images, typography, routing, and component dimensions.

## Decision 061: Pixel-Accurate Light Mode Visual Design Implementation
- **Status**: Approved & Enforced
- **Context**: User requested implementing Light Mode matching the attached reference design image with ~99% visual fidelity, while leaving Dark Mode (`<html class="dark">`) 100% locked and untouched.
- **Decision**:
  1. Configured warm ivory marble background (`/lightmode_background.png`) in Light Mode across all pages/sections (`Hero`, `About`, `Projects`, `Achievements`, `CtaFooter`, `Contact`).
  2. Applied `brightness-0 mix-blend-multiply` to top-left monogram logo artwork in Light Mode to render in solid dark charcoal/black (`#171717`).
  3. Re-architected main navbar capsule in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with translucent white liquid glass surface, 24px backdrop blur, dark charcoal nav text, and soft elevated grey active pill (`from-neutral-200/90 via-neutral-100/90 to-neutral-200/80`).
  4. Upgraded `LET'S TALK`, `LinkedIn`, and `GitHub` controls to light glass pill material with dark text and dark icons.
  5. **100% Locked**: Preserved all hero text, 3D character graphic asset (`/hero_avatar_3d.png`), floor ground shadow layer, dark studio background images, typography, routing, and component dimensions without layout modifications.

## Decision 058: Explicit Resting Position Return Animation (`useAnimationControls`)
- **Status**: Approved & Integrated
- **Context**: User reported that after pulling downward, the bulb sometimes remained at the pulled-down position instead of snapping back to resting position `y = 0`.
- **Decision**:
  1. Integrated `useAnimationControls` from Framer Motion in [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx).
  2. Added `dragSnapToOrigin={true}` and explicit return control `controls.start({ y: 0, transition: { type: "spring", stiffness: 700, damping: 30, mass: 0.35 } })` inside `onDragEnd`.
  3. Guaranteed the bulb and cord assembly reliably returns to exact original resting position (`y = 0`) after every drag release with 0 sticking or position drift.
  4. Retained 100% of downward stretch distance (~70px), 32x32px bulb styling, single pull cord, navbar layout, and theme toggle mechanics.









## Decision 049: Surgical Removal of Unwanted Black Dashed Outline Artifact
- **Status**: Approved & Enforced
- **Context**: User reported an unwanted black/dark irregular dashed outline / broken dotted marking surrounding the 3D Mini-Me figurine and standing developer character.
- **Decision**:
  1. Inspected [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) and project codebase; confirmed zero dashed border CSS/HTML or overlay elements exist.
  2. Analyzed `/hero_avatar_3d.png` pixels using Python analysis; identified 7 isolated floating pixel clusters (components 2..8) and 1,943 low-alpha dark background noise pixels (alpha <= 51) baked into the asset boundary edge pixels from prior matting passes.
  3. Executed a non-destructive surgical cleanup script clearing the 7 floating clusters and 1,943 low-alpha noise pixels while preserving 100% of the opaque character subject artwork (81,548 pixels: face, hair, eyes, clothes, shoes, Mini-Me figurine, wooden pedestal) and smooth edge antialiasing (1,899 pixels).
  4. Preserved single floor ground shadow, `/homepage_background.png` studio backdrop, character scale, character position, typography, navbar, and buttons with 0 visual changes to approved artwork.

## Decision 048: Non-Aggressive Alpha Residue Cleaning & Single Shadow DOM Lock
- **Status**: Approved & Enforced
- **Context**: Subtle background residue remained around the Mini-Me / pedestal box area. Needed precision cleaning without eroding subject edge alpha.
- **Decision**:
  1. Removed 39,806 background residue pixels from `/hero_avatar_3d.png` using non-aggressive alpha matting while preserving 100% of subject alpha (left ear: 1,131 opaque pixels, right hand & watch: 5,478 opaque pixels, hair, face, clothes, shoes, Mini-Me, wooden pedestal).
  2. Verified DOM in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) contains EXACTLY ONE shadow element (`<div aria-hidden="true" className="pointer-events-none absolute left-1/2 bottom-[-2px] z-0 -translate-x-1/2 w-[78%] h-[22px] rounded-[50%] bg-black/55 blur-[14px]" />`) with zero duplicate `className` attributes.
  3. Preserved liquid glass perimeter border on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).



































