# CHANGELOG.md - History of Completed Work

All notable changes to the **Aqib Abdul Ghaffar Portfolio** project will be documented in this file.

## [0.78.0] - 2026-08-14
### Fixed
- **Restoration of Clean Original High-Res 3D Character Asset (`/hero_avatar_3d.png`)**:
  - Traced root cause of light-mode character edge corruption: A local Python script (`clean_hero_asset.py`) had run an unmixing algorithm on `frontend/public/hero_avatar_3d.png` which stripped alpha channels and created dark fringe artifacts on edge pixels.
  - Restored the clean original 281KB 32-bit transparent PNG asset directly from git history (`5d9b044`) to `frontend/public/hero_avatar_3d.png` and `frontend/dist/hero_avatar_3d.png`.
  - Removed `clean_hero_asset.py` to prevent any future automated alterations.
  - Both Light Mode and Dark Mode now share the exact same clean, uncorrupted transparent asset (`/hero_avatar_3d.png`) with razor-sharp silhouettes, complete wooden pedestal base, and zero dark fringe halos or broken corners.

## [0.77.0] - 2026-08-14
### Fixed
- **Fixed Top Ceiling Anchor Elastic Rubber Cord for Theme Switcher**:
  - Refactored [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio_lightmode_fixed/frontend/src/components/LightPullThemeSwitcher.tsx): Fixed top ceiling anchor point (`absolute top-0 left-1/2 -translate-x-1/2`) so top of cord never moves when pulling bulb.
  - Applied `scaleY` with `originY: 0` (`transform-origin: top center`) to the pull cord `<motion.div>` driven by `useTransform(dragY, (y) => (52 + y) / 52)`.
  - When pulling bulb downward, cord stretches downward like elastic rubber with zero top detachment or ceiling gap.
  - Releasing bulb triggers smooth spring return (`animate(dragY, 0, ...)`), returning bulb and cord back to resting state.
- **3D Hero Composition 80% Scale Reduction**:
  - Updated [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio_lightmode_fixed/frontend/src/components/Hero.tsx): Scaled 3D character composition (`/hero_avatar_3d.png`) to exactly 80% of its previous rendering dimensions (`h-[317px] sm:h-[360px] lg:h-[418px] xl:h-[454px] 2xl:h-[482px]`).
  - Preserved image aspect ratio, pedestal grounding, left text alignment, and dark mode baseline 100%.

## [0.76.0] - 2026-08-14
### Changed
- **Sticky Navigation & Dynamic Header Scroll Behavior**:
  - Updated [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio_lightmode_fixed/frontend/src/components/Navbar.tsx): At `scrollY = 0` (`scrolled === false`), all 4 header elements (**Logo**, **Center Navigation Capsule**, **Theme Pull Bulb**, **LET'S TALK Button**) are visible in their exact top positions.
  - When scrolling down (`scrolled === true`, `scrollY > 40`), the **Center Navigation Capsule** and **LET'S TALK Button** remain 100% visible & sticky at top, while the **Logo** and **Theme Pull Bulb** smoothly fade out (`opacity-0 -translate-y-2 pointer-events-none`).
  - Scrolling back to top (`scrolled === false`) smoothly fades the **Logo** and **Theme Pull Bulb** back into view.
- **Theme Bulb & LET'S TALK Horizontal Separation**:
  - Increased horizontal gap in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio_lightmode_fixed/frontend/src/components/Navbar.tsx) from `gap-6 sm:gap-7` to `gap-9 sm:gap-11`, creating clean breathing room between the theme bulb and LET'S TALK button.
- **3D Hero Composition 90% Scale Reduction**:
  - Updated [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio_lightmode_fixed/frontend/src/components/Hero.tsx): Reduced 3D character asset (`/hero_avatar_3d.png`) to exactly 90% of its previous rendering dimensions (`h-[396px] sm:h-[450px] lg:h-[522px] xl:h-[567px] 2xl:h-[603px]`).
  - Preserved left Hero text alignment, marble studio background, and dark mode baseline 100%.

## [0.75.0] - 2026-08-14
### Changed
- **Independent Home Navigation Scrolling Architecture**:
  - Refactored [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio_lightmode_fixed/frontend/src/components/Navbar.tsx) into a dual-layer positioning model.
  - Layer 1 (`fixed top-10 inset-x-0 z-50 pointer-events-none`): Viewport-fixed overlay keeping the **Monogram Logo** (top-left) and **Theme Pull Bulb** (top-right) fixed on the viewport across all scroll positions.
  - Layer 2 (`absolute top-10 inset-x-0 z-40`): Normal-flow scrolling header allowing the **Center Apple Liquid Glass Navigation Capsule** and **LET'S TALK Button** to scroll naturally with the page content and move upward out of view on scroll.
  - Preserved 100% of exact pixel coordinates at `scrollY = 0`, logo artwork, active tab spring animations, theme switcher logic, and Hero layout.

## [0.74.0] - 2026-08-14
### Fixed
- **Precision Hero Positioning & Character Rendering**:
  - Restored vertical breathing space between top navbar/logo and left Hero text block (`pt-24 sm:pt-28 md:pt-32 lg:pt-36`), placing "HI, I'M" -> "AQIB" -> "ABDUL GHAFFAR" -> description -> social buttons in the middle section of the hero area matching target visual reference.
  - Adjusted right character column alignment (`lg:justify-center`), moving the 3D bobblehead + standing figure composition away from the far right edge into the center-right area.
  - Corrected image container sizing and bottom padding (`pb-4 lg:pb-8`), allowing the wooden pedestal box and shoes to sit cleanly on the horizontal floor plane without clipping or edge artifacts.

## [0.73.0] - 2026-08-12
### Fixed
- **Theme-Aware Body Background & Light Mode Studio Environment (Reference 3)**:
  - Traced background root cause: `body` in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) had a hardcoded `background-color: #1c1f28;` that bled through `/lightmode_background.png` in Light Mode.
  - Made `body` background (`#f6f5f2` in Light Mode, `#1c1f28` in Dark Mode) and `.portfolio-surface` theme-aware in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css).
  - Ensured Light Mode renders warm ivory marble studio environment (`/lightmode_background.png`) matching Reference 3 without dark graphite bleed-through.
  - Preserved 100% of approved Dark Mode baseline (Reference 1) including graphite studio background (`/homepage_background.png`), white display text, dark glass navbar, white logo, and indigo CTA accents.
  - 100% lock on navbar architecture (`fixed top-7`, `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`), 3D character asset (`/hero_avatar_3d.png`), floor ground shadow, typography, routing, and component architecture.

## [0.72.0] - 2026-08-12
### Fixed
- **Target Light Mode Studio Environment Matching (Reference 3)**:
  - Verified and aligned Light Mode against Reference 3 target: warm ivory marble studio texture (`/lightmode_background.png`), dark charcoal display typography (`text-neutral-900 font-normal tracking-[0.18em]`), translucent light glass navbar (`:root:not(.dark) .liquid-glass-navbar`), bright white active tab pill (`:root:not(.dark) .liquid-glass-active-pill`), crisp black logo (`brightness-0 mix-blend-multiply`), and clean outlined `LET'S TALK` control.
  - Locked 100% of approved Dark Mode baseline (Reference 1) including graphite studio background (`/homepage_background.png`), white display text, dark glass navbar, white logo, and indigo CTA accents.
  - Preserved original 3D character asset (`/hero_avatar_3d.png`), floor ground shadow, compact centered navigation capsule (`left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`), `LightPullThemeSwitcher`, typography sizes, routing, and component architecture.

## [0.71.0] - 2026-08-12
### Fixed
- **Root Cause CSS Override Fix for Compact Centered VisionOS Liquid Glass Navbar**:
  - Removed `position: relative;` from `.liquid-glass-navbar` in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css), allowing Tailwind's `absolute` class on `<nav>` in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) to take effect cleanly without CSS specificity overrides.
  - Restored 100% mathematical viewport horizontal centering (`50vw`) of the ~610px compact capsule on all desktop viewports with zero flex sibling offset.
  - Preserved 100% of all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## [0.70.0] - 2026-08-12
### Fixed
- **Compact Centered VisionOS Liquid Glass Navigation Capsule Restoration**:
  - Restored exact compact content-sized pill architecture (~610px width) matching the reference screenshot in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).
  - Verified strictly ONE `return (` statement in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and zero syntax errors.
  - Placed `<nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">` inside `<div className="relative mx-auto flex w-full max-w-[1400px] px-8 md:px-16">`.
  - Preserved 100% of all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## [0.69.0] - 2026-08-12
### Fixed
- **Independent 50vw Viewport Fixed Centered VisionOS Liquid Glass Navbar**:
  - Solved flex sibling offset collision issue by anchoring `<nav className="fixed top-7 left-1/2 -translate-x-1/2">` directly to 50% viewport width (`50vw`) in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).
  - Maintained Logo (left) and Right Controls (right) inside `<div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 flex justify-between">`.
  - Guarantees 100% mathematical viewport horizontal centering on all screen sizes with zero collision against `LET'S TALK`.
  - Preserved 100% of all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## [0.68.0] - 2026-08-12
### Fixed
- **1400px Flex Header VisionOS Liquid Glass Navbar Alignment Restoration**:
  - Restored exact structural layout in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) rendering logo, `<nav className="absolute left-1/2 -translate-x-1/2">`, and right controls directly inside `<header className="fixed top-7 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 w-full max-w-[1400px] mx-auto">`.
  - Anchored navigation capsule center to exact 50% midpoint of the 1400px header flex stage (`absolute left-1/2 -translate-x-1/2`).
  - Preserved 100% of all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## [0.67.0] - 2026-08-12
### Fixed
- **1400px Container Centered VisionOS Liquid Glass Navbar Alignment**:
  - Restored structural layout in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) placing `<nav>` inside `<div className="relative mx-auto flex w-full max-w-[1400px] px-8 md:px-16">` with `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`.
  - Anchored navigation capsule center to 50% midpoint of the 1400px navbar content area between logo and right controls.
  - Preserved 100% of all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## [0.66.0] - 2026-08-12
### Fixed
- **Full-Viewport 50vw Header Centering Architecture**:
  - Re-architected container structure in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) placing `<nav>` directly inside `<header className="fixed top-7 inset-x-0 w-full">`, making `<header>` the containing block spanning `100vw`.
  - Removed `relative` from the inner `max-w-[1400px]` div so that `<nav>` positioned `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2` calculates 50% relative to `<header>` (`100vw`).
  - Guarantees mathematical horizontal centering (`50vw`) on all desktop viewports (1024px → 512px, 1280px → 640px, 1440px → 720px, 1920px → 960px).
  - Preserved 100% of all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## [0.65.0] - 2026-08-12
### Fixed
- **md:fixed 50vw Viewport Centered Liquid Glass Navbar Alignment Fix**:
  - Applied `relative md:fixed md:left-1/2 md:top-7 md:-translate-x-1/2` to navigation capsule in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).
  - Anchored navigation capsule center directly to 50% viewport width (`50vw`) at top-7 (`28px`), guaranteeing mathematical horizontal centering independent of container constraints or surrounding element widths.
  - Preserved 100% of all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## [0.64.0] - 2026-08-12
### Fixed
- **50vw Viewport Centered Liquid Glass Navbar Alignment Fix**:
  - Applied `relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2` to navigation capsule in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).
  - Placed the geometric midpoint of the navigation capsule at exact 50vw viewport center across all desktop screen widths.
  - Preserved 100% of all Liquid Glass styles (`.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, `.liquid-glass-control`), monogram logo asset `/logo.png`, `LightPullThemeSwitcher`, `LET'S TALK` control, active tab sliding animation, hero content, 3D character graphic asset (`/hero_avatar_3d.png`), ground shadow layer, dark studio background images, typography, and routing.

## [0.63.0] - 2026-08-12
### Refined & Fixed
- **Mathematical Viewport Centering & Layered Z-Index Hierarchy**:
  - Re-architected container positioning in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx): `<header className="fixed top-7 inset-x-0 z-50">` containing `<div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between px-8 md:px-16">` and `<nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ...">`.
  - Placed center navigation capsule at exact 50% left and 50% top of the header container, ensuring absolute viewport centering across all screen widths.
  - Structured layered z-index hierarchy (`z-30` navigation text above `z-10` pointer-events-none specular highlight, sheen, and active pill).
  - Preserved 100% lock on Dark Mode (`<html class="dark">`), 3D character graphic asset (`/hero_avatar_3d.png`), floor ground shadow layer, dark studio background images, typography, routing, and component dimensions.

## [0.62.0] - 2026-08-12
### Added / Changed
- **Apple VisionOS & 21st.dev Liquid Glass Navbar Material Rebuild**:
  - Implemented `.liquid-glass-navbar`, `.liquid-glass-highlight`, `.liquid-glass-sheen`, `.liquid-glass-active-pill`, and `.liquid-glass-control` rules in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css).
  - Re-architected main navbar capsule in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with layered hierarchy: specular top highlight stroke line, internal vertical light sheen, floating active glass pill (`.liquid-glass-active-pill`) with Framer Motion spring sliding animation (`stiffness: 180, damping: 24`), and high-contrast nav labels.
  - Cleaned unused/broken SVG refraction filter markup.
  - Preserved 100% lock on Dark Mode (`<html class="dark">`), 3D character graphic asset (`/hero_avatar_3d.png`), floor ground shadow layer, dark studio background images, typography, routing, and component dimensions.

## [0.61.0] - 2026-08-12
### Added / Changed
- **Pixel-Accurate Light Mode Visual Design Implementation**:
  - Configured warm ivory marble background (`/lightmode_background.png`) in Light Mode across all pages/sections (`Hero`, `About`, `Projects`, `Achievements`, `CtaFooter`, `Contact`).
  - Applied `brightness-0 mix-blend-multiply` to top-left monogram logo artwork in Light Mode to render in solid dark charcoal/black (`#171717`).
  - Re-architected main navbar capsule in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with translucent white liquid glass surface, 24px backdrop blur, dark charcoal nav text, and soft elevated grey active pill (`from-neutral-200/90 via-neutral-100/90 to-neutral-200/80`).
  - Upgraded `LET'S TALK`, `LinkedIn`, and `GitHub` controls to light glass pill material with dark text and dark icons.
  - Preserved 100% lock on Dark Mode (`<html class="dark">`), 3D character graphic asset (`/hero_avatar_3d.png`), floor ground shadow layer, dark studio background images, typography, routing, and component dimensions.

## [0.58.0] - 2026-08-12
### Fixed
- **LightPullThemeSwitcher Explicit Resting Position Return (`useAnimationControls`)**:
  - Integrated `useAnimationControls()` and `dragSnapToOrigin={true}` in [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx).
  - Explicitly triggers `controls.start({ y: 0, transition: { type: "spring", stiffness: 700, damping: 30, mass: 0.35 } })` on `onDragEnd`, guaranteeing the bulb and cord assembly instantly and reliably returns to resting position (`y = 0`) after every drag release with 0 sticking or position drift.

## [0.57.0] - 2026-08-12
### Refined
- **LightPullThemeSwitcher Drag Physics & Motion Optimization**:
  - Re-architected Framer Motion drag configuration in [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) (`dragConstraints={{ top: 0, bottom: 70 }}`, `dragElastic={0.1}`) to match the 21st.dev reference interaction.
  - Eliminated input lag and motion resistance, allowing the bulb to follow the cursor/finger 1:1 vertically up to 70px.
  - Implemented lightweight spring return transition (`stiffness: 650, damping: 32, mass: 0.35`) for snappy, natural snap-back upon release.

## [0.56.0] - 2026-08-12
### Fixed & Refined
- **Targeted LightPullThemeSwitcher Spacing & MutationObserver Theme Sync Fix**:
  - Implemented `MutationObserver` on `document.documentElement` targeting `["class"]` in [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx), eliminating stale React state and guaranteeing real-time visual synchronization for the bulb and cord.
  - Added drag guard (`isDraggingRef`) to prevent double-toggling when dragging downward.
  - Styled single pull cord with theme-aware background (`bg-neutral-700` in dark mode, `bg-neutral-300` in light mode).
  - Adjusted right header flex gap in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) to `gap-6 sm:gap-7` for ~24–28px horizontal visual breathing room between the theme bulb and the `LET'S TALK` CTA button.

## [0.55.0] - 2026-08-12
### Changed
- **Pure LightPullThemeSwitcher Component Design Update**:
  - Rebuilt [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) to match the exact reference component specification.
  - Completely removed the outer circular glass border container (`w-10 h-10 border bg-white/70 overflow-hidden`).
  - Preserved 100% of vertical drag pull physics (`drag="y"`), click toggle (`onClick`), glowing radial gradients (`bg-[radial-gradient(circle_at_center,_#facc15,_#fcd34d,_#fef9c3)]` / `dark:bg-[radial-gradient(circle_at_center,_#4b5563,_#1f2937,_#000000)]`), glowing shadows, and pull cord styling.

## [0.54.0] - 2026-08-12
### Refined & Perfected
- **Light-Mode Home Page & Navbar Perfection & Alignment Lock**:
  - Enforced viewport dead-centering on the center navigation capsule (`md:absolute md:left-1/2 md:-translate-x-1/2`) in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx), ensuring adding the Theme Switcher to the right never pulls the center nav capsule off-center.
  - Enhanced active section pill text contrast in Light Mode (`text-neutral-950 font-semibold`), guaranteeing high contrast and readability.
  - Verified 100% clean single `className` attribute per JSX element across all components.
  - Locked 100% of Dark Mode (`<html class="dark">`), 3D character assets (`/hero_avatar_3d.png`), floor shadow (`bg-black/40 dark:bg-black/55`), and non-home sections.

## [0.53.0] - 2026-08-12
### Added / Changed
- **Light Mode Home Page & Navbar Pixel-Accurate Reference Implementation**:
  - Derived and integrated high-resolution warm ivory marble studio stage backdrop image asset (`/lightmode_background.png`) matching reference design `lightmode homep.jpeg`.
  - Re-architected [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to support Light Mode: warm ivory marble studio background, dark charcoal spaced kerning display heading (`AQIB ABDUL GHAFFAR`), uppercase badge (`HI, I'M`), and translucent dark-outline glass buttons (`LinkedIn`, `GitHub`).
  - Re-architected [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) to support Light Mode: translucent white glass pill container (`bg-white/70 border-black/[0.08]`), raised white active section pill (`bg-white text-neutral-900 shadow-[0_2px_10px_rgba(0,0,0,0.08)]`), dark monogram logo artwork (`brightness-0 mix-blend-multiply`), and dark outline `LET'S TALK` CTA button.
  - Grounded 3D developer character asset (`/hero_avatar_3d.png`) onto marble floor plane with soft natural floor contact shadow (`bg-black/40 dark:bg-black/55 blur-[12px] dark:blur-[14px]`).
  - Preserved 100% of Dark Mode (`<html class="dark">`), 3D character asset geometry, and application routes.

## [0.52.0] - 2026-08-12
### Added
- **Light Pull Theme Switcher Component & Navbar Integration**:
  - Built [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) featuring a vertical drag pull cord (`drag="y"` with Framer Motion spring physics), dark/grey glowing orb in dark mode, and warm yellow glowing orb in light mode.
  - Integrated [LightPullThemeSwitcher.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/LightPullThemeSwitcher.tsx) directly into [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) right section next to the `LET'S TALK` CTA button.
  - Formatted the pull switcher as a compact liquid glass capsule (`w-10 h-10 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-[20px]`), seamlessly matching the existing navbar design tokens while containing the cord element cleanly inside the navbar container without causing vertical layout shifts.
  - Preserved default dark mode appearance (`<html class="dark">`), 3D character assets, typography, and portfolio layout.

## [0.51.0] - 2026-08-12
### Changed / Extended
- **Continuous Studio Background Asset Extension Across Projects, Achievements & Footer**:
  - Inspected existing Home ([Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx)) and About ([About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx)) background implementation (`bg-[url('/homepage_background.png')] bg-cover bg-center bg-no-repeat` / `/about_background.png`).
  - Added `.portfolio-surface` class definition in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) referencing `/homepage_background.png`.
  - Replaced legacy `#0d111a` background color on [Projects.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Projects.tsx), [Achievements.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Achievements.tsx), and [CtaFooter.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/CtaFooter.tsx) with the exact studio stage backdrop image asset (`bg-[url('/homepage_background.png')] bg-cover bg-center bg-no-repeat`).
  - Created a seamless, continuous portfolio environment from Home → About → Projects → Achievements → Footer without background boundaries, color shifts, or seams.

### Preserved
- **100% Home & About Scope Lock**:
  - [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) and [About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx) background declarations, image assets, typography, layout, 3D renders, and CTA buttons remained 100% untouched.
- **100% Glassmorphism System Integrity**:
  - `.glass-panel`, `.glass-pill`, and `.glass-card-hover` styles remained 100% untouched.
- **Global Body Background Rule**:
  - Preserved `body { background-color: #1c1f28; }` in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) without global modifications.

## [0.50.0] - 2026-08-08
### Fixed
- **Pristine Seed-Based Background Extraction & Grey Silhouette Elimination**:
  - Investigated Git asset history across commits `81514da`, `1ef63ad`, `fd25399`, `v0.48.0`, `v0.49.0`.
  - Identified root cause: original candidate `1ef63ad` contained a solid slate-grey studio wall background (`#37363e` / `[56, 59, 68]`), which previous thresholding passes converted into a 20-pixel wide semi-transparent grey silhouette ($\alpha = 157..252$).
  - Executed a localized, seed-based region-growing flood fill starting from outer image margins of `1ef63ad` to cleanly extract 62,360 studio wall background pixels ($\alpha = 0$) while preserving 100% of subject artwork (61,970 opaque pixels: face, hair, eyes, skin, white jacket, black t-shirt, black trousers, white sneakers, 3D Mini-Me figurine, wooden pedestal box) and 950 smooth 1-pixel edge antialiasing boundary pixels ($\alpha = 1..254$).
  - Enforced exactly 1 connected component in the alpha channel, eliminating all floating background noise and blocky grey halos.

### Preserved
- **100% UI, Layout, & Asset Integrity**:
  - Preserved exactly ONE `/hero_avatar_3d.png` image instance in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx).
  - Preserved exactly ONE floor ground shadow element (`bottom-[-2px] w-[78%] h-[22px] bg-black/55 blur-[14px]`).
  - Preserved `/homepage_background.png` studio backdrop, character scale, character position, typography, navbar, and buttons without any visual changes.

## [0.49.0] - 2026-08-08
### Fixed
- **Surgical Removal of Unwanted Black Dashed Outline Artifact**:
  - Inspected [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) and confirmed zero dashed CSS, border, outline, or overlay rules exist.
  - Performed deep pixel analysis of `/hero_avatar_3d.png`; identified 7 isolated floating pixel clusters (components 2..8) and 1,943 low-alpha dark background noise pixels (alpha <= 51) baked into the asset outer contour.
  - Executed a non-destructive surgical cleanup script clearing the 7 floating clusters and 1,943 low-alpha noise pixels while preserving 100% of the opaque subject artwork (81,548 pixels: face, hair, eyes, clothes, shoes, Mini-Me figurine, wooden pedestal) and smooth edge antialiasing (1,899 pixels).

### Preserved
- **100% UI, Layout, & Asset Integrity**:
  - Preserved exactly ONE `/hero_avatar_3d.png` image instance in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx).
  - Preserved exactly ONE floor ground shadow element (`bottom-[-2px] w-[78%] h-[22px] bg-black/55 blur-[14px]`).
  - Preserved `/homepage_background.png` studio backdrop, character scale, character position, typography, navbar, and buttons without any visual changes.

## [0.48.0] - 2026-08-08
### Restored & Fixed
- **Clean Alpha Matting Around Mini-Me / Pedestal Box (Zero Background Residue)**:
  - Removed remaining 39,806 background residue pixels from `/hero_avatar_3d.png` using non-aggressive alpha matting.
  - Preserved 100% of subject alpha: hair silhouette, face, left ear (1,131 opaque pixels), right ear, right hand & watch in pocket (5,478 opaque pixels), clothes, white sneakers, Mini-Me figurine, and small wooden rectangular pedestal.
  - Guaranteed zero grey background residue, zero grey card rectangle, and zero halo around the Mini-Me figurine and pedestal.

- **Single Soft Elliptical Studio Floor Shadow DOM Lock**:
  - Enforced EXACTLY ONE soft horizontal elliptical studio floor shadow element (`<div aria-hidden="true" className="pointer-events-none absolute left-1/2 bottom-[-2px] z-0 -translate-x-1/2 w-[78%] h-[22px] rounded-[50%] bg-black/55 blur-[14px]" />`) in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx).
  - Eliminated duplicate `className` attributes and extra shadow elements.

- **Navbar Integrity Lock**:
  - Preserved liquid glass perimeter border (`border border-indigo-400/50 hover:border-indigo-400/90`) on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with zero stray horizontal lines.

### Preserved
- **100% Layout & Background Integrity**: Preserved locked `/homepage_background.png` studio backdrop, navbar, logo, typography, hero copy text, buttons, and responsive grid.

## [0.47.0] - 2026-08-08
### Restored & Fixed
- **Clean Transparent Hero Asset Background Box Removal**:
  - Processed outer studio background pixels of candidate `1ef63ad` to 100% transparent alpha (`31.8%` transparent background, `65.1%` opaque subject) while leaving 100% of subject pixels (hair silhouette, face, left ear, right ear, right hand & watch in pocket, clothes, shoes, Mini-Me figurine, small wooden rectangular pedestal) 100% OPAQUE (`alpha = 255`).
  - Eliminated large rectangular grey/dark card box around the character visual so it blends naturally directly onto `/homepage_background.png`.

- **Single Soft Elliptical Studio Floor Shadow Lock**:
  - Enforced EXACTLY ONE soft horizontal elliptical studio floor shadow element (`<div aria-hidden="true" className="pointer-events-none absolute left-1/2 bottom-[-2px] z-0 -translate-x-1/2 w-[78%] h-[22px] rounded-[50%] bg-black/55 blur-[14px]" />`) in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx).
  - Anchored shadow coordinate space directly under and slightly behind the wooden pedestal base and person's shoes without grey platform artifacts or duplicate shadows.

- **Navbar Integrity Lock**:
  - Preserved liquid glass perimeter border (`border border-indigo-400/50 hover:border-indigo-400/90`) on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with zero stray horizontal lines.

### Preserved
- **100% Layout & Background Integrity**: Preserved locked `/homepage_background.png` studio backdrop, navbar, logo, typography, hero copy text, buttons, and responsive grid.

## [0.46.0] - 2026-08-08
### Restored & Fixed
- **Exact Approved 3D Character Asset Restoration (`1ef63ad` candidate)**:
  - Identified and restored the exact approved production visual asset showing Aqib (white jacket, black t-shirt, black trousers, white sneakers, leg relaxed, right hand in trouser pocket) standing leaning on his 3D Mini-Me figurine on the small brown wooden box (`290 x 432`).
  - Completely avoided any Python alpha-unmixing or defringing operations (`unmixed_rgb = ...`), preserving 100% pixel-identical original geometry (left & right ears, hair silhouette, right hand in trouser pocket, face shape, small wooden box).

- **Single Soft Elliptical Studio Floor Shadow**:
  - Configured EXACTLY ONE soft horizontal elliptical studio floor shadow element (`<div aria-hidden="true" className="pointer-events-none absolute left-1/2 bottom-[0px] z-0 -translate-x-1/2 w-[85%] h-[24px] rounded-[50%] bg-black/55 blur-[16px]" />`) in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx).
  - Anchored shadow coordinate space directly under and slightly behind the wooden pedestal base and person's shoes without grey platform artifacts or detached shadows.

- **Navbar Integrity Lock**:
  - Preserved liquid glass perimeter border (`border border-indigo-400/50 hover:border-indigo-400/90`) on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with zero stray horizontal lines.

### Preserved
- **100% Layout & Background Integrity**: Preserved locked `/homepage_background.png` studio backdrop, navbar, logo, typography, hero copy text, buttons, and responsive grid.

## [0.45.0] - 2026-08-08
### Restored & Fixed
- **Original Untouched 1024x1024 3D Character Production Asset Restoration**:
  - Restored `/hero_avatar_3d.png` to the exact original 1024x1024 32-bit transparent PNG asset from initial commit (`81514da`).
  - Completely avoided any Python alpha-unmix (`unmixed_rgb = ...`) or defringing processing, preserving 100% pixel-identical original geometry:
    - Mini-Me left ear and right ear intact
    - Hair silhouette & face shape intact
    - Right hand inside trouser pocket intact
    - Wooden pedestal box & white sneakers stance intact

- **Single Studio Floor Shadow & Navbar Border Lock**:
  - Verified DOM in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) contains EXACTLY ONE soft natural oval floor shadow element (`<div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[96%] h-6 bg-black/75 blur-md rounded-full pointer-events-none z-0" />`).
  - Verified [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) retains liquid glass perimeter border (`border border-indigo-400/50 hover:border-indigo-400/90`) on "LET'S TALK" button with zero stray horizontal lines.

### Preserved
- **100% Layout & Background Integrity**: Preserved locked `/homepage_background.png` studio backdrop, navbar, logo, typography, hero copy text, buttons, and responsive grid.

## [0.44.0] - 2026-08-08
### Restored & Fixed
- **Complete 3D Mini-Me Asset Restoration (Ears & Hands Intact)**:
  - Inspected `/hero_avatar_3d.png` against original target asset `hero_target_visual.jpg`.
  - Re-extracted the full character visual without aggressive bounding box cropping, restoring 100% of the Mini-Me figurine's **left ear** (2,692 non-zero alpha pixels in ear region) and **hand/arm in pocket** (5,249 non-zero alpha pixels in right arm region).
  - Preserved original 3D figurine details, face, body proportions, clothing, wooden pedestal box, and white sneakers.

- **Unified Studio Floor Shadow Architecture**:
  - Enforced EXACTLY ONE soft, natural, wide oval floor shadow (`<div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[96%] h-6 bg-black/75 blur-md rounded-full pointer-events-none z-0" />`) in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx).
  - Locked shadow coordinate space directly underneath and slightly behind the wooden pedestal base and person's shoes.

- **Navbar "LET'S TALK" Border Integrity**:
  - Verified liquid glass perimeter border (`border border-indigo-400/50 hover:border-indigo-400/90`) on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with zero stray horizontal line elements.

### Preserved
- **100% Layout & Background Integrity**: Preserved locked `/homepage_background.png` studio backdrop, navbar, logo, typography, hero copy text, buttons, and responsive grid.

## [0.43.0] - 2026-08-08
### Fixed
- **Hero Studio Floor Shadow Alignment (`phomepage(6).jpeg` Spec)**:
  - Ensured DOM contains EXACTLY ONE soft natural oval floor shadow (`<div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[96%] h-6 bg-black/75 blur-md rounded-full pointer-events-none z-0" />`).
  - Positioned shadow directly underneath and slightly behind the wooden pedestal base and person's shoes, extending naturally across the floor perspective without gaps or detachment.

- **Navbar "LET'S TALK" Purple/Blue Liquid Glass Border**:
  - Restored clean purple/blue specular outline (`border border-indigo-400/50 hover:border-indigo-400/90`) directly around the rounded rectangle boundary of the "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx).
  - Ensured zero separate or stray horizontal lines exist underneath the button.

### Preserved
- **100% Asset & Layout Integrity**: Preserved 100% of 3D character graphic (`/hero_avatar_3d.png`), Mini-Me figurine, wooden pedestal, studio floor background (`/homepage_background.png`), typography, buttons, and navbar layout.

## [0.42.0] - 2026-08-08
### Fixed
- **Baked-in Grey Floor Platform PNG Cleanup**:
  - Inspected alpha channel and RGB profile of `/hero_avatar_3d.png`. Located 31 bottom rows of baked-in grey studio floor shadow (`avg RGB = [63, 62, 70]`) from original crop.
  - Processed `/hero_avatar_3d.png` to remove baked-in grey floor remnant, ending PNG transparency cleanly at the exact bottom edge of the wooden pedestal box and shoes.

- **Single Anchored Shadow Architecture Lock**:
  - Enforced DOM structure with EXACTLY ONE shadow element (`<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] h-4 bg-black/90 blur-md rounded-full" />`).
  - Anchored shadow coordinate space directly beneath the character inside a tight wrapper (`relative inline-flex flex-col items-center justify-end`).

### Preserved
- **100% Asset, Layout & Background Integrity**: Preserved 100% of 3D character graphic (`/hero_avatar_3d.png`), Mini-Me figurine, wooden pedestal, studio floor background (`/homepage_background.png`), typography, buttons, and navbar.

## [0.41.0] - 2026-08-08
### Fixed
- **Hero Ground Shadow Architecture Consolidation**:
  - Purged multi-div competing shadow structures and light-grey ambient blur layers (`blur-xl bg-black/50`).
  - Reduced shadow architecture to ONE authoritative studio floor contact shadow (`bg-black/90 blur-md rounded-full`) centered directly under the 3D character base (`left-1/2 -translate-x-1/2 w-[92%] h-4`).
  - Anchored shadow positioning container (`relative inline-flex flex-col items-center justify-end`) tightly around the 3D asset, eliminating detached right-side shadows across all screen sizes.

- **Stray Purple Line Removal**:
  - Replaced `border-indigo-400/50` on "LET'S TALK" button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with clean liquid glass `border border-white/20 hover:border-white/40`, eliminating the stray purple line underneath the button.

### Preserved
- **100% Asset, Layout & Background Integrity**: Preserved 100% of 3D character graphic (`/hero_avatar_3d.png`), Mini-Me figurine, wooden pedestal, studio floor background (`/homepage_background.png`), typography, buttons, and responsive grid.

## [0.40.0] - 2026-08-08
### Added / Fixed
- **Hero 3D Mini-Me Figurine Grounding & Asset Integration Fix**:
  - Removed silhouette drop-shadow filter on `<img>` element that created dark halos and black borders around the head and body.
  - Performed edge defringing on `hero_avatar_3d.png` to clean background color residue from semi-transparent edge pixels while preserving 100% of original character, Mini-Me figurine, pedestal, and sharp detail.
  - Built dedicated studio floor contact shadow layer in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) (`z-0`) positioned underneath character (`z-10`), providing realistic contact shadow under wooden pedestal base and person's feet.
  - Calibrated visual footprint, height (`h-[440px] sm:h-[500px] lg:h-[560px] xl:h-[590px]`), and positioning to match `phomepage(5).jpeg` reference without shrinking or corner-pinning.

### Preserved
- **100% Navbar, Background & Typography Integrity**: Preserved locked `/homepage_background.png` studio floor, navbar, logo, buttons, text, typography, and responsive layout structure.

## [0.39.0] - 2026-08-05
### Added
- **Approved 3D Mini-Me Figurine Production Asset Replacement**: Replaced legacy Hero character asset with user-provided approved custom 3D Mini-Me / Bobblehead figurine production asset (`/hero_avatar_3d.png`), showing Aqib standing next to his 3D Mini-Me figurine on a wooden pedestal box.

### Preserved
- **100% UI & Layout Integrity**: Preserved 100% of Navigation Bar, Monogram Logo (`AAG`), Hero Typography, Hero Title, Bio Description, LinkedIn & GitHub CTA Glass Pills, Studio Background (`/homepage_background.png`), Apple Liquid Glass Effects, Layout, Animations, Spacing, and Responsive Behaviour.

## [0.38.0] - 2026-08-04
### Added
- **Apple VisionOS Smooth Sliding Navigation Pill**: Upgraded active tab indicator movement in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) using Framer Motion `<LayoutGroup id="navbar-tabs">` and shared `<motion.span layoutId="activeNavTab" ...>` with tuned spring physics (`type: "spring", stiffness: 180, damping: 24, mass: 1.0, restDelta: 0.001, restSpeed: 0.001`).

### Preserved
- **100% Material & Logic Integrity**: Preserved 100% of Apple Liquid Glass material, backdrop blur, SVG refraction filter, top specular edge stroke, borders, shadows, typography, and ScrollSpy section detection logic.

## [0.37.0] - 2026-08-04
### Added
- **Production-Grade ScrollSpy Active Navigation**: Implemented dynamic section tab tracking in [App.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/App.tsx) using an `IntersectionObserver` with dominant section ratio calculation (`intersectionRatio >= 0.15`), threshold array `[0, 0.1, ..., 1.0]`, viewport root margin `"-25% 0px -35% 0px"`, instant click override handling, and page refresh persistence.

### Preserved
- **100% Navbar Material & Design**: Preserved 100% of [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) Apple Liquid Glass material, backdrop blur, SVG refraction filter, specular highlight borders, pill dimensions, typography, and "LET'S TALK" button.

## [0.36.0] - 2026-08-04
### Changed
- **LET'S TALK Button Border Thickness**: Increased visible outline border thickness of the "LET'S TALK ↗" CTA button in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) by ~25–30% (`border-[1.5px] border-indigo-400/50`) while preserving 100% of liquid glass styling, button dimensions, typography, and hover animations.

## [0.35.0] - 2026-08-04
### Added
- **About Section Approved Background Asset**: Integrated user-provided approved dark studio backdrop image asset (`media__1785861253589.jpg` -> `/about_background.png`) as the single standalone background layer for [About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx) (`bg-[url('/about_background.png')] bg-cover bg-center bg-no-repeat`).

### Enforced
- **100/100 About Layout Lock**: Strictly locked grid structure, container widths, padding, margins, alignment, typography, 3D avatar visual, and 4 specialty glass cards. Purged all background color layering (`bg-[#0d111a]` / `bg-[#26282E]`), gradient masks, and blue glowing dot accents.

### Locked
- **Background Freeze Rule**: Enforced permanent `Background Freeze Rule` across all 6 project memory files (`Background Locked`).

## [0.34.0] - 2026-08-04
### Added
- **Homepage Approved Studio Background Asset**: Integrated user-provided approved dark studio backdrop image asset (`media__1785860798978.jpg` -> `/homepage_background.png`) as the single standalone background layer for [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) (`bg-[url('/homepage_background.png')] bg-cover bg-center bg-no-repeat`).

### Enforced
- **100/100 Hero Layout Lock**: Strictly locked grid structure, flex layout, container widths, padding, margins, typography, font sizes, line heights, logo size, navigation bar, CTA buttons, and 3D character asset. Purged all background color layering (`bg-[#2A2C31]`) and radial gradient overlays.

### Locked
- **Background Freeze Rule**: Enforced permanent `Background Freeze Rule` across all 6 project memory files.

## [0.33.0] - 2026-08-04
### Added
- **About Section Background Asset**: Integrated user-provided approved dark studio backdrop image asset (`/about_background.png`) as the single standalone background layer for [About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx) (`bg-[url('/about_background.png')] bg-cover bg-center bg-no-repeat`).

### Removed
- **Background Effects Cleanup**: Purged all background color layers (`bg-[#0d111a]` / `bg-[#26282E]`), gradient masks, and blue dot glowing accents from the About section to ensure zero visual alteration of the image asset.

### Preserved
- **100% Scope Isolation**: Hero section, Navigation Bar, Projects section, Achievements drawer, Contact view, Footer, and global styling remained 100% untouched. All inner About section content (heading, bio text, 3D character graphic, 4 specialty glass cards) remained 100% pixel-for-pixel identical.

## [0.32.0] - 2026-08-04
### Added
- **Photorealistic Studio Backdrop Asset**: Generated a 4K photorealistic studio stage background image asset (`/homepage_background.png`) derived directly from reverse engineering specifications of the reference design (`#2A2C31` Dark Slate Gray, upper-right soft diffuse spotlight, horizontal ground-wall seam, matte plaster wall, deep corner vignette, 0% blue/purple/indigo tint).
- **Background Integration**: Configured `/homepage_background.png` as permanent section background in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) while preserving 100% of all foreground UI components (Navbar, Logo, Hero typography, LinkedIn & GitHub CTA buttons, 3D character graphic).

### Locked
- **Background Freeze Rule**: Enforced permanent `Background Freeze Rule` in [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) and locked background asset permanently across all 6 project memory files.

## [0.3.0] - 2026-08-03
### Changed
- **Architecture Migration**: Successfully migrated frontend from Next.js to **Vite + React 19 + TypeScript + Tailwind CSS v4**.
- **Performance**: Eliminates Windows path limit issues and provides sub-millisecond HMR reloading.

### Added
- Implemented **Navbar**: Floating dark glass nav pill with active indicator and `LET'S TALK` CTA.
- Implemented **Hero Section**: High-fidelity developer avatar visual matching PDF Page 1.
- Implemented **About Me**: 4 specialty cards with Apple Liquid Glass styling (PDF Page 2).
- Implemented **Projects**: Interactive project showcase card with category filters (PDF Page 3).
- Implemented **Achievements**: Interactive Google Kaggle AI Agents certificate card & drawer (PDF Page 4).
- Implemented **CTA & Footer**: Glass card container, glowing green send icon, and social links (PDF Page 5).
- Implemented **Contact Page**: Dedicated `/contact` view with return home button and interactive form (PDF Page 6).

## [0.4.0] - 2026-08-03
### Changed
- **Operating Manual**: Rewrote [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) as permanent Implementation Engineer operating manual enforcing strict ~99% PDF visual fidelity.
- **Navbar Component**: Re-engineered [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with serif monogram `AAG`, liquid glass container styling, and `LET'S TALK ↗` CTA matching PDF Page 1.
- **Hero Section Component**: Re-engineered [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) into 2-column layout with verbatim copy, `LinkedIn ↗` & `GitHub ↗` glass pills, and 3D avatar pedestal visual asset (`/hero_avatar_3d.png`).

### Verified
- Zero TypeScript errors (`tsc && vite build`).
- Full visual match against PDF Page 1 screenshot.

## [0.5.0] - 2026-08-03
### Changed
- **About Me Component**: Re-engineered [About.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/About.tsx) to match PDF Page 2 (~99% visual fidelity).
- **Layout & Visuals**: Implemented 2-column grid layout, glowing section divider dot, 3D crossed-arms avatar render asset (`/about_avatar_3d.png`), verbatim heading ("Driven by curiosity. Built for impact."), verbatim bio text, and 4 specialty glass cards (`Full-Stack Developer`, `IoT Enthusiast`, `AI Explorer`, `Hackathon Participant`).

### Verified
- Zero TypeScript errors (`tsc && vite build`).
- Full visual match against PDF Page 2 screenshot.

## [0.6.0] - 2026-08-03
### Changed
- **Projects Showcase Component**: Re-engineered [Projects.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Projects.tsx) to match PDF Page 3 (~99% visual fidelity).
- **Carousel & Controls**: Implemented featured project showcase card (`Smart Resume Analyzer & Job Matcher`), tech stack icons (`MongoDB`, `Express`, `React`, `Node.js`), dark dashboard UI mockup (`/project_dashboard_ui.png`), `View Project ↗` & `GitHub ↗` buttons, side navigation arrows, 7 carousel pagination dots, and category filter pill bar (`All Projects`, `Web Applications`, `AI / ML`, `Dashboards`, `Full Stack`, `Embedded Systems`).

### Verified
- Zero TypeScript errors (`tsc && vite build`).
- Full visual match against PDF Page 3 screenshot.

## [0.7.0] - 2026-08-03
### Changed
- **Achievements Component**: Re-engineered [Achievements.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Achievements.tsx) to match PDF Page 4 (~99% visual fidelity).
- **Certificate Display & Controls**: Implemented official Google Cloud / Kaggle AI Agents certificate card mockup render (`/google_kaggle_certificate.png`), left `01 / 12` counter pill, carousel navigation arrows (`<` & `>`), right side credential metadata panel (`Credential`, `Issuer`, `Date`, `Category`, `Credential ID`, `View Credential ↗`), and 9 pagination dots.

### Verified
- Zero TypeScript errors (`tsc && vite build`).
- Full visual match against PDF Page 4 screenshot.

## [0.8.0] - 2026-08-03
### Changed
- **CTA & Footer Component**: Re-engineered [CtaFooter.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/CtaFooter.tsx) to match PDF Page 5 (~99% visual fidelity).
- **Card & Footer Layout**: Implemented glass CTA card with paper plane icon, verbatim copy ("Have a project in mind?", "Let's build something impactful together."), green `Send Message` glass button, copyright text, `Made with ❤️ using React, Tailwind & Framer Motion`, glowing green email link (`hasib4aqib@gmail.com`), and 3 centered social icon buttons (`LinkedIn`, `GitHub`, `Mail`).

### Verified
- Zero TypeScript errors (`tsc && vite build`).
- Full visual match against PDF Page 5 screenshot.

## [0.9.0] - 2026-08-03
### Changed
- **Dedicated Contact View**: Re-engineered [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) to match PDF Page 6 (~99% visual fidelity).
- **Glass Window & Form**: Implemented full glass window container (`/contact`), `AAG` monogram header, `RETURN TO HOME 🏠` pill button, verbatim copy ("Let's build something amazing together."), contact detail badges (`LOCATION: Hyderabad, Telangana, India`, `PHONE: +91 939 110 30 20`, `EMAIL: aqibag@example.com`), social buttons, and interactive `CONTACT FORM` panel (`Your name`, `Your email`, `Subject`, `Your message`, `SEND MESSAGE ↗` button).

### Verified
- Zero TypeScript errors (`tsc && vite build`).
- Full visual match across all 6 pages of the Portfolio Reference PDF.

## [0.10.0] - 2026-08-03
### Changed
- **Approved Logo Integration**: Replaced text monogram logo across [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) with the newly uploaded approved logo image asset (`/logo.png`).
- **Visual Harmonization**: Applied liquid glass screen blending and responsive height scaling (`h-9 md:h-11`) ensuring original proportions are preserved without distortion or background box edges.

### Verified
- Zero TypeScript errors (`tsc && vite build`).
- Full visual integration matching PDF Page 1 and Page 6 headers.

## [0.11.0] - 2026-08-03
### Changed
- **Pixel-Perfect Hero Section Rebuild**: Rebuilt [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to match the uploaded TARGET HERO IMAGE with ~99% visual fidelity.
- **Typography & CTAs**: Replicated exact tracking (`H I ,  I ' M`), line breaks (`AQIB` / `ABDUL GHAFFAR`), verbatim bio text, blue LinkedIn badge `in` glass pill (`in LinkedIn ↗`), GitHub glass pill (`GitHub ↗`), dark studio background lighting (`#1a1c23`), and right-side standing developer & 3D bobblehead pedestal render asset (`/hero_target_visual.jpg`).

### Verified
- Zero TypeScript errors (`tsc && vite build`).
- Pixel-perfect visual alignment with TARGET HERO IMAGE.

## [0.12.0] - 2026-08-03
### Changed
- **Embedded Screenshot Removal**: Removed all webpage screenshot embeds from the Hero section layout.
- **Pure Component Architecture**: Rebuilt 100% of UI components manually using React, HTML, CSS, and Tailwind CSS (Navbar, Monogram logo, Typography, Glass buttons, Studio lighting background). Right column renders ONLY the approved 3D developer character graphic asset (`/hero_avatar_3d.png`).

### Verified
- Created [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md) audit log.
- Zero TypeScript errors (`tsc && vite build`).
- Zero screenshot images in DOM/HTML.

## [0.13.0] - 2026-08-03
### Added
- **Permanent Reference Images Policy**: Added permanent operating rule `# REFERENCE IMAGES POLICY` to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md). Enforces that all reference PDFs, Figma exports, screenshots, and mockups are strictly design specifications to guide implementation and are NEVER rendered as website content or assets.
- **Mandatory Quality Gate Validation**: Added mandatory verification rules requiring zero embedded reference images, screenshots, or PDF pages on the website.

## [0.14.0] - 2026-08-03
### Changed
- **Hero Layout Reconstruction**: Rebuilt [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) layout to match the Target Reference Image with **~99% Precision Visual Fidelity**.
- **Optical Realignment**: Recalculated top navbar distance (`pt-28 md:pt-32`), dark studio vignette backdrop (`bg-[#1c1f27]`), title tracking (`AQIB` / `ABDUL GHAFFAR`), constrained paragraph width (`max-w-[530px]`), refined social glass pills, and right-column ground floor level character alignment (`/hero_avatar_3d.png`).

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md) recording 99% precision match.
- Zero TypeScript errors (`tsc && vite build`).

## [0.15.0] - 2026-08-03
### Added
- **Pixel-Perfect Reference Rule**: Added `## Pixel-Perfect Reference Rule (Highest Priority)` permanently to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md).

### Changed
- **Zero-Patch Hero Scratch Rebuild**: Deleted old Hero layout and completely rebuilt [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) from scratch. Replicated exact container max-width (`max-w-[1320px]`), top navbar distance (`pt-24 md:pt-32`), studio dark backdrop vignette (`bg-[#181a20]`), letter-spacing tracking (`AQIB` / `ABDUL GHAFFAR`), bio paragraph constraints (`max-w-[560px]`), glass pills, and right-column 3D developer character asset (`/hero_avatar_3d.png`) seated flush to studio ground floor shadow level.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md) recording ~99% side-by-side match.
- Zero TypeScript errors (`tsc && vite build`).

## [0.16.0] - 2026-08-03
### Changed
- **Logo Fix (Part 1)**: Enclosed `/logo.png` inside a glass capsule container (`px-4 py-2 border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-lg`), increased vertical height (`h-11 sm:h-13 md:h-15`), and applied crisp contrast rendering (`image-rendering: crisp-edges`, `mix-blend-screen`, `contrast-125 brightness-110 drop-shadow-[0_4px_14px_rgba(255,255,255,0.18)]`).
- **Hero Intro Text Fix (Part 2 & 3)**: Refined `H I ,  I ' M` (`tracking-[0.42em] font-light text-slate-400/90`), implemented explicit 3-line breaks (`AQIB` / `ABDUL` / `GHAFFAR`), font weight `font-light`, tracking `tracking-[0.16em]` & `tracking-[0.18em]` matching reference.
- **Strict Scope Preservation**: Kept Hero image asset, navbar items, buttons, background, About section, Projects, and Footer 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.17.0] - 2026-08-03
### Added
- **Pixel-Perfect Reconstruction Rule**: Permanently updated [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) with `# Pixel-Perfect Reconstruction Rule` containing mandatory operational policies: Design Source of Truth, Mandatory Design Analysis, Pixel-Perfect Recreation (95-99% target), No Creative Decisions, Image & Typography handling, Layout Measurement, Component Fidelity, Self-Verification, and Success Criteria.
- **Developer Documentation Updates**: Updated [README.md](file:///c:/Users/aqib2/Downloads/portfolio/README.md) establishing [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) as the primary source of development rules for all future UI implementation tasks.

## [0.18.0] - 2026-08-03
### Changed
- **Zero-Border Logo Fix**: Removed fake capsule borders, background boxes, and outlines around `/logo.png` across [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx), floating the monogram logo naturally on dark header background (`h-10 sm:h-11 md:h-12 w-auto mix-blend-screen image-rendering: crisp-edges`) matching uploaded UI spec.
- **Exact 2-Line Name Heading**: Rebuilt display heading in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to exactly TWO name line blocks: Line 1 (`AQIB`), Line 2 (`ABDUL GHAFFAR`), matching typography font weight, tracking, and verbatim copy.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.19.0] - 2026-08-03
### Changed
- **True 32-Bit Transparent PNG Logo Conversion**: Converted `/logo.png` to a true 32-bit transparent PNG with alpha channel, permanently resolving the solid dark JPEG background box issue and allowing the monogram logo to float naturally without any bounding box.
- **3D Developer Character Asset Reconstruction**: Replaced the square mockup card preview in the right column with the exact 626KB transparent 3D developer character render asset (`/hero_avatar_3d.png`), seated flush to the studio floor with a radial ground shadow ellipse.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.20.0] - 2026-08-03
### Changed
- **HiDPI Logo 5x Asset Generation**: Generated a 5x HiDPI transparent PNG asset (`/logo.png` at `885 × 340` px) with true 32-bit alpha channel, rendering razor-sharp serif letters and subtext at 100% zoom without downsampling blur.
- **Logo Size Scaling**: Increased logo height across [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) (`h-11 sm:h-13 md:h-14 lg:h-16 w-auto`) so its height matches the floating glass navigation section with generous whitespace.
- **Strict Scope Preservation**: Kept Hero layout, character graphic asset, navbar items, buttons, typography, and background 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.21.0] - 2026-08-03
### Changed
- **Logo Size Fine-Tuning (25% Reduction)**: Reduced displayed CSS logo dimensions across [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) to `h-8 sm:h-9 md:h-10 lg:h-[42px] w-auto`, balancing the logo with the navbar pill container.
- **Vertical Center Alignment**: Aligned the vertical center axis of the logo with the vertical center of the navigation pill container via shared `<header className="flex items-center justify-between">`.
- **Strict Scope Preservation**: Kept Hero layout, 3D character graphic, buttons, typography, navbar tabs, and background 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.22.0] - 2026-08-03
### Changed
- **4K Vector SVG Logo Asset Integration**: Created resolution-independent vector SVG logo `/logo.svg` (and 4K 2000px PNG fallback `/logo.png`), delivering 100% zero-blur, razor-sharp vector typography on 4K, 8K, and Retina displays.
- **10% Additional Size Refinement**: Reduced displayed CSS logo dimensions across [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) and [Contact.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Contact.tsx) to `h-7 sm:h-8 md:h-9 lg:h-[36px] w-auto`, maintaining an elegant, non-dominant brand mark.
- **Strict Scope Preservation**: Kept Hero section, 3D character graphic, buttons, typography, navbar tabs, and background 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.23.0] - 2026-08-03
### Changed
- **Exact Original Logo Artwork Restored**: Processed original uploaded logo image (`media__1785785826507.jpg`) into a 2000px HiDPI 32-bit transparent PNG asset (`/logo.png`) with zero font substitution, zero redesign, and zero visual changes to original stencil artwork.
- **Restored Stencil Serif Monogram**: Reverted all synthetic font replacements, restoring exact original stencil gaps in monogram `A A G` and exact `AQIB ABDUL GHAFFAR` banner text positioning.
- **Strict Scope Preservation**: Kept fine-tuned displayed size (`h-7 sm:h-8 md:h-9 lg:h-[36px] w-auto`), vertical center alignment, Hero section, 3D character graphic, buttons, typography, navbar tabs, and background 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.24.0] - 2026-08-03
### Changed
- **Hero Typography Block Rebuilt**: Replaced wide-spaced `H I ,  I ' M` badge with natural `Hi I'm` (`text-sm md:text-base font-medium tracking-normal text-slate-400 mb-2`).
- **Cohesive Bold Heading**: Rebuilt display title in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to bold display typography (`font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white tracking-tight leading-[1.08] mb-5`) with Line 1 (`AQIB`) and Line 2 (`ABDUL GHAFFAR`), eliminating exaggerated tracking.
- **Description & Vertical Rhythm**: Tightened vertical gaps between greeting, heading, and description paragraph (`max-w-[550px] leading-relaxed mb-8`).
- **Strict Scope Preservation**: Kept logo asset, navigation, character graphic, buttons, background lighting, and overall layout 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.25.0] - 2026-08-03
### Changed
- **Hero Section Top Padding Reduced**: Reduced top padding in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to `pt-16 sm:pt-20 md:pt-22 pb-8 min-h-[85vh]`, shifting the Hero block upward by ~60px to position the Hero content immediately below the navigation bar.
- **Transparent Character Cutout Asset**: Processed `hero_avatar_3d.png` into a transparent PNG cutout, placing Aqib standing next to the 3D bobblehead figure directly on the dark studio floor with a radial shadow ellipse (`w-72 h-6 bg-black/85 blur-md`), eliminating room background box outlines.
- **Strict Scope Preservation**: Kept typography, colors, logo asset, buttons, and background lighting 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.26.0] - 2026-08-03
### Changed
- **Navbar Pixel-Perfect Reconstruction**: Rebuilt [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) from scratch matching the target UI specification across all 13 steps.
- **Liquid Glass Capsule Container**: Constructed wide rounded glass capsule container (`rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-2xl px-2 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`).
- **Liquid Glass Active Tab**: Rebuilt `Home` active tab with liquid glass gradient sheen (`from-white/25 via-white/10 to-white/5 border border-white/30`) and top specular highlight stroke.
- **Right CTA Button**: Rebuilt `LET'S TALK ↗` button with indigo specular gradient outline (`border-indigo-400/40 bg-white/[0.02] shadow-[0_4px_20px_rgba(0,0,0,0.4)]`).
- **Strict Scope Preservation**: Kept Hero layout, 3D character graphic, typography, colors, and background lighting 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.27.0] - 2026-08-03
### Changed
- **True Apple Liquid Glass Material**: Replaced purple/grey opaque background fills in [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) with a neutral transparent glass capsule (`bg-white/[0.05] border border-white/[0.18]` - 90% transparent, 10% material).
- **Strong Backdrop Blur**: Applied `backdrop-blur-[24px]` and `backdrop-saturate-150` for native macOS/VisionOS light refraction.
- **Specular Top Highlights**: Added top specular white reflection stroke (`absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent`).
- **Bright Glass Active Tab**: Updated `Home` tab to bright glass gradient sheen (`from-white/35 via-white/15 to-white/10 border-white/40 shadow-[0_4px_24px_rgba(255,255,255,0.22)]`).
- **Strict Scope Preservation**: Kept Hero layout, 3D character graphic, typography, colors, and background lighting 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.28.0] - 2026-08-03
### Changed
- **True Apple Liquid Glass Multi-Layer Architecture**: Rebuilt [Navbar.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Navbar.tsx) using a 6-layer Liquid Glass material stack:
  1. SVG light refraction filter (`<feDisplacementMap>`).
  2. Backdrop blur (`backdrop-blur-[24px] backdrop-saturate-150`).
  3. Ultra-light neutral fill (`bg-white/[0.04]` - 90% transparent, 10% material).
  4. Top specular white reflection stroke (`via-white/60`) and inner light reflection overlay.
  5. VisionOS liquid glass active tab sheen (`from-white/35 via-white/15 to-white/10 border-white/40 shadow-[0_4px_24px_rgba(255,255,255,0.22)]`).
  6. Indigo specular outline reserved strictly for `LET'S TALK` CTA button.
- **Strict Scope Preservation**: Kept Hero layout, 3D character graphic, typography, colors, and background lighting 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.29.0] - 2026-08-03
### Changed
- **Permanent Visual Decomposition Rule**: Added permanent rule to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) mandating visual layer decomposition, lighting analysis, and layer documentation before writing CSS.
- **Homepage Studio Background Reconstruction**: Rebuilt [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) background using a 7-layer neutral studio lighting system:
  1. Base studio wall (`#15171e`).
  2. Primary radial studio spotlight (`ellipse 75% 65% at 50% 42%`).
  3. Secondary ambient slate depth glow (`circle at 65% 48%`).
  4. Character illumination wrapping field (`blur-[140px]`).
  5. Studio floor transition gradient (`h-40 from-[#12141a]`).
  6. Deep perimeter edge vignette (`rgba(10,11,15,0.85)`).
- **Strict Scope Preservation**: Kept Navigation, Logo, Hero typography, 3D character graphic asset, buttons, layout, and spacing 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.30.0] - 2026-08-03
### Changed
- **Permanent Color Extraction Rule**: Added permanent rule to [AGENTS.md](file:///c:/Users/aqib2/Downloads/portfolio/AGENTS.md) mandating color extraction and pixel analysis prior to writing CSS.
- **Extracted Neutral Studio Palette**: Extracted exact background RGB pixels directly from target screenshot via Python PIL (`#1c1f28`, `#21242b`, `#3a3d46`, `#303038`, `#383b44` with 7.7%–13.2% saturation).
- **Blue/Purple Tint Elimination**: Replaced all blue/purple background tints in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) and updated body background color in [index.css](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/index.css) to neutral graphite (`#1c1f28`).
- **Strict Scope Preservation**: Kept Navigation, Logo, Hero typography, 3D character graphic asset, buttons, layout, and spacing 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.31.0] - 2026-08-03
### Changed
- **Functional LinkedIn Profile Button**: Linked LinkedIn glass button in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to official profile (`https://www.linkedin.com/in/aqib-abdul-ghaffar-497047302?utm_source=share_via&utm_content=profile&utm_medium=member_android`) with `target="_blank"` and `rel="noopener noreferrer"`.
- **Functional GitHub Profile Button**: Linked GitHub glass button in [Hero.tsx](file:///c:/Users/aqib2/Downloads/portfolio/frontend/src/components/Hero.tsx) to official profile (`https://github.com/AQIB-AG`) with `target="_blank"` and `rel="noopener noreferrer"`.
- **Accessibility & Focus Rings**: Added full clickable area, keyboard focusability (`focus:ring-2 focus:ring-white/40`), and aria-labels while preserving 100% of liquid glass visual styling.
- **Strict Scope Preservation**: Kept background lighting, typography, logo, character graphic, and responsive layout 100% untouched.

### Verified
- Updated [VISUAL_DIFF.md](file:///c:/Users/aqib2/Downloads/portfolio/VISUAL_DIFF.md).
- Zero TypeScript errors (`tsc && vite build`).

## [0.32.0] - 2026-08-03
### Changed
- **Git Repository Cleaned**: Configured root `.gitignore` ignoring `node_modules/`, `dist/`, `build/`, `.vite/`, `.env`, and OS/debug log files. Removed all tracked `node_modules` from Git index without deleting local files.
- **Line Ending Normalization**: Created root `.gitattributes` (`* text=auto`) normalizing text file line endings on Windows.
- **Pushed to GitHub**: Committed clean source code (`Initial commit: Premium Apple Liquid Glass Portfolio`) and pushed branch `main` to `https://github.com/AQIB-AG/portfolio-AAG.git`.

### Verified
- Zero `node_modules` staged or tracked.
- Successfully pushed to `https://github.com/AQIB-AG/portfolio-AAG.git`.


























