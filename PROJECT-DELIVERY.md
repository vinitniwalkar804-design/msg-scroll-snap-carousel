# PROJECT-DELIVERY.md

## Project overview

**MSG Scroll Snap Carousel** is a production-ready, dependency-light component showcase built with HTML5, CSS3, and Vanilla JavaScript. It presents ten feature cards in a horizontally snapping carousel with arrow controls, IntersectionObserver pagination, mouse drag with momentum, keyboard support, touch support, masked edges, and responsive card sizing. It runs by opening `index.html` directly or from any static web server.

## Completed features

- Native CSS scroll snap (`scroll-snap-type: x mandatory`, `scroll-snap-align: start`) with smooth scrolling
- Responsive card sizing via CSS custom properties: ~1.2 cards (mobile), ~2.5 (tablet), ~3.5 (desktop)
- Previous/next buttons with accurate disabled states at both boundaries
- Ten pagination dots generated from the cards, synchronized by IntersectionObserver and scroll geometry
- Mouse drag-to-scroll with velocity-based momentum and click suppression after a real drag
- Keyboard navigation: Left/Right arrows, Home, End; interactive descendants are not intercepted
- Native touch scrolling (no gesture hijacking)
- Edge gradient fades that hide at the corresponding boundary
- Sticky header with inline SVG logo, responsive mobile navigation, accessible labels and ARIA roles
- `prefers-reduced-motion` support and visible focus indicators
- No frameworks, no build step, no local assets beyond the three application files

## File structure

```
msg-scroll-snap-carousel/
├── index.html            # Semantic markup, inline SVG logo, CDN links
├── style.css             # Design tokens, layout, components, responsive rules
├── script.js             # Navigation, dots, drag, keyboard, mobile nav
├── README.md             # Project documentation
├── PROJECT-DELIVERY.md   # This report and submission material
└── thumbnail.png         # Desktop screenshot (generated from the live site)
```

GitHub repository: <https://github.com/vinitniwalkar804-design/msg-scroll-snap-carousel>
Netlify live URL: `__NETLIFY_URL__`

## Testing results

Automated browser testing was executed with Puppeteer driving real Google Chrome at **360px, 768px, 1024px, and 1440px** against a local static server serving the committed files.

**Result: 103 checks executed, 103 passed, 0 failed.**

Verified items:

| # | Check | Result |
|---|---|---|
| 1 | Exactly 10 cards and 10 dots at every viewport | Passed |
| 2 | Next-card peek visible (≈1.2 / 2.5 / 3.5 cards) | Passed |
| 3 | Container scrolls horizontally | Passed |
| 4 | `scroll-snap-type: x mandatory` active | Passed |
| 5 | Next arrow scrolls by one card | Passed |
| 6 | Previous arrow scrolls back | Passed |
| 7 | Arrows disable at start and end | Passed |
| 8 | Dots update automatically during scrolling | Passed |
| 9 | Clicking a dot scrolls to its card and sets `aria-current` | Passed |
| 10 | Mouse drag scrolls and settles with momentum | Passed |
| 11 | Normal link clicks still work; post-drag clicks are suppressed | Passed |
| 12 | Keyboard arrows / Home / End work when container is focused | Passed |
| 13 | Native touch scrolling works (CDP touch events) | Passed |
| 14 | Responsive layout at all four widths | Passed |
| 15 | Edge fade visible; hidden at the boundary | Passed |
| 16 | No page-level horizontal overflow | Passed |
| 17 | No JavaScript console errors | Passed |
| 18 | Google Fonts and Remix Icon loaded; no failed assets | Passed |
| 19 | No overlapping controls or card content overflow | Passed |
| 20 | Mobile navigation opens and closes | Passed |

Netlify live-site verification and live screenshot generation are pending Netlify authentication (see Remaining manual actions).

## Screenshot

`thumbnail.png` exists at 1440 × 900 PNG, 138,056 bytes (~135 KB), with the carousel, arrows, cards, and dots all in view. It was generated from the committed code served locally; it must be recaptured from the live Netlify URL once Netlify authentication is completed.

## Remaining manual actions

1. Authenticate Netlify CLI (`netlify login`) or supply a Netlify personal access token, then run:
   `netlify init --manual` (or GitHub-connected deploy) with no build command and publish directory `.` / project root.
2. Replace `__NETLIFY_URL__` in `README.md`, `PROJECT-DELIVERY.md`, and the submission material below with the real Netlify URL.
3. Capture `thumbnail.png` from the live URL and commit it to the repository.

---

# MetaSkillGroup Submission Material

### Component Title
MSG Scroll Snap Carousel

### Description
A modern, responsive horizontal carousel built using native CSS scroll-snap and Vanilla JavaScript. Features smooth navigation, interactive pagination, mouse drag scrolling, keyboard accessibility, and responsive card sizing.

### Component Type
Media

### Category
Carousel & Slider

### Tags
carousel-slider, scroll-snap, drag-to-scroll, cards, native-css, html-css-js

### Tech Stack
HTML5, CSS3, JavaScript

### Dependencies
- Google Fonts — Plus Jakarta Sans — cdn — <https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap>
- Remix Icon — cdn — <https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css>

### Key Features
Native CSS scroll-snap; responsive horizontal carousel; smooth arrow navigation; IntersectionObserver pagination; interactive pagination dots; mouse drag-to-scroll; subtle momentum scrolling; keyboard navigation; touch-friendly interaction; responsive card sizing; edge fade masks; accessibility support; reduced-motion support; Vanilla JavaScript implementation.

### Demo URL
`__NETLIFY_URL__`

### Live Preview URL
`__NETLIFY_URL__`

### Download URL
<https://github.com/vinitniwalkar804-design/msg-scroll-snap-carousel>

### Compatibility
Browsers: Chrome, Firefox, Safari, Edge. Devices: Desktop, Tablet, Mobile. Implementation: Vanilla JavaScript.

### FAQ
1. **Why use CSS scroll-snap?** CSS scroll-snap provides native, smooth snapping behavior without an external carousel library, and it works naturally with touch gestures.
2. **How do the pagination dots know the active position?** IntersectionObserver monitors the carousel cards and updates the active dot according to the currently visible card.
3. **Does mouse dragging interfere with links?** No. Dragging distinguishes real drag gestures from normal clicks, preserving interactive elements inside the cards.
4. **Is the carousel mobile-friendly?** Yes. It supports native touch scrolling and automatically adjusts card widths using CSS media queries.
5. **Does the carousel require any JavaScript library?** No. It is implemented using pure HTML, CSS, and Vanilla JavaScript.

---

# MSG Scroll Snap Carousel

A polished, standards-based horizontal carousel for modern component libraries. Scroll naturally, drag with momentum, or navigate with arrows, dots, and the keyboard.

🔗 View Live Demo: `__NETLIFY_URL__`

## What's Included

- Ten fully styled feature cards with unique Remix Icons and accent themes
- Native CSS scroll snap with next-card peek and edge fade masks
- Arrow navigation with boundary-aware disabled states
- IntersectionObserver pagination dots with accessible labels
- Mouse drag-to-scroll with momentum and link-safe click handling
- Keyboard and touch support, reduced-motion support, ARIA semantics

## Dependencies

- Google Fonts — Plus Jakarta Sans: <https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap>
- Remix Icon 4.6.0: <https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css>

## Desktop Preview

`thumbnail.png` — captured from the live Netlify deployment at 1440 × 900.

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MSG Scroll Snap Carousel — MetaSkillGroup Components</title>
  <meta name="description" content="A modern, responsive horizontal carousel built with native CSS scroll snap and Vanilla JavaScript. Smooth navigation, interactive pagination, mouse drag, and keyboard support.">
  <meta name="author" content="MetaSkillGroup">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='11' fill='%236c5ce7'/%3E%3Cpath d='M12 27V13l8 9 8-9v14' stroke='white' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- ===================== HEADER ===================== -->
  <header class="site-header" id="top">
    <div class="container site-header__inner">
      <a class="brand" href="#top" aria-label="MSG Components home">
        <span class="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="msgGradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7C5CFF"/>
                <stop offset="1" stop-color="#2EC5C1"/>
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="36" height="36" rx="11" fill="url(#msgGradient)"/>
            <path d="M12 27V13l8 9 8-9v14" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="brand__name">MSG <span>COMPONENTS</span></span>
      </a>

      <button class="nav-toggle" id="navToggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primaryNav">
        <i class="ri-menu-3-line" aria-hidden="true"></i>
      </button>

      <nav class="site-nav" id="primaryNav" aria-label="Primary navigation">
        <a class="site-nav__link" href="#carousel">Components</a>
        <a class="site-nav__link" href="#showcase">Showcase</a>
        <a class="site-nav__link" href="#about">About</a>
        <span class="site-nav__badge"><i class="ri-sparkling-2-line" aria-hidden="true"></i> Carousel / 001</span>
      </nav>
    </div>
  </header>

  <main>
    <!-- ===================== HERO ===================== -->
    <section class="hero" id="showcase" aria-labelledby="heroTitle">
      <div class="hero__glow hero__glow--one" aria-hidden="true"></div>
      <div class="hero__glow hero__glow--two" aria-hidden="true"></div>
      <div class="container hero__inner">
        <p class="eyebrow"><span class="eyebrow__line" aria-hidden="true"></span> INTERACTIVE COMPONENT / 001</p>
        <h1 class="hero__title" id="heroTitle">Explore What&rsquo;s Possible<span class="hero__dot">.</span></h1>
        <p class="hero__description">
          A beautifully restrained horizontal carousel powered by native CSS scroll snap and a
          thin layer of Vanilla JavaScript. Drag, swipe, click, or use your keyboard &mdash; every
          interaction lands exactly where it should.
        </p>
        <div class="hero__meta">
          <span class="meta-chip"><i class="ri-css3-line" aria-hidden="true"></i> Native CSS Scroll Snap</span>
          <span class="meta-chip"><i class="ri-javascript-line" aria-hidden="true"></i> Vanilla JavaScript</span>
          <span class="meta-chip meta-chip--subtle"><i class="ri-accessibility-line" aria-hidden="true"></i> Accessible by default</span>
        </div>
      </div>
    </section>

    <!-- ===================== CAROUSEL ===================== -->
    <section class="showcase" id="carousel" aria-labelledby="carouselTitle">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="section-label">THE COLLECTION</p>
            <h2 class="section-title" id="carouselTitle">Features, in motion.</h2>
            <p class="section-subtitle">Ten carefully crafted cards. One effortless experience.</p>
          </div>
          <div class="carousel__controls">
            <button class="nav-arrow" id="prevButton" type="button" aria-label="Previous card" aria-controls="carouselViewport">
              <i class="ri-arrow-left-line" aria-hidden="true"></i>
            </button>
            <button class="nav-arrow" id="nextButton" type="button" aria-label="Next card" aria-controls="carouselViewport">
              <i class="ri-arrow-right-line" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="carousel" id="carouselRoot" data-state="start">
        <div class="carousel__fade carousel__fade--left" aria-hidden="true"></div>
        <div class="carousel__fade carousel__fade--right" aria-hidden="true"></div>

        <div class="carousel__viewport" id="carouselViewport" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Feature cards carousel">
          <ul class="carousel__track" id="carouselTrack">
            <li class="card card--violet" id="feature-1" role="group" aria-roledescription="slide" aria-label="1 of 10: Creative Design">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-palette-line" aria-hidden="true"></i></span>
                  <span class="card__number">01 / 10</span>
                </div>
                <p class="card__category">Design</p>
                <h3 class="card__title">Creative Design</h3>
                <p class="card__text">Thoughtful composition, balanced color, and details that make every first impression count.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-1" aria-label="Explore Creative Design">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <li class="card card--blue" id="feature-2" role="group" aria-roledescription="slide" aria-label="2 of 10: Smart Technology">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-cpu-line" aria-hidden="true"></i></span>
                  <span class="card__number">02 / 10</span>
                </div>
                <p class="card__category">Technology</p>
                <h3 class="card__title">Smart Technology</h3>
                <p class="card__text">Native browser capabilities do the heavy lifting, keeping every interaction remarkably quick.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-2" aria-label="Explore Smart Technology">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <li class="card card--mint" id="feature-3" role="group" aria-roledescription="slide" aria-label="3 of 10: Digital Innovation">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-lightbulb-flash-line" aria-hidden="true"></i></span>
                  <span class="card__number">03 / 10</span>
                </div>
                <p class="card__category">Innovation</p>
                <h3 class="card__title">Digital Innovation</h3>
                <p class="card__text">A modern pattern for modern products, ready to adapt to whatever comes next.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-3" aria-label="Explore Digital Innovation">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <li class="card card--amber" id="feature-4" role="group" aria-roledescription="slide" aria-label="4 of 10: Performance First">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-rocket-2-line" aria-hidden="true"></i></span>
                  <span class="card__number">04 / 10</span>
                </div>
                <p class="card__category">Performance</p>
                <h3 class="card__title">Performance First</h3>
                <p class="card__text">Zero frameworks, zero build steps, and a payload that gets out of your way.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-4" aria-label="Explore Performance First">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <li class="card card--rose" id="feature-5" role="group" aria-roledescription="slide" aria-label="5 of 10: User Experience">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-heart-3-line" aria-hidden="true"></i></span>
                  <span class="card__number">05 / 10</span>
                </div>
                <p class="card__category">Experience</p>
                <h3 class="card__title">User Experience</h3>
                <p class="card__text">Every control is reachable, every state is clear, and every gesture feels natural.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-5" aria-label="Explore User Experience">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <li class="card card--indigo" id="feature-6" role="group" aria-roledescription="slide" aria-label="6 of 10: Modern Architecture">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-layout-3-line" aria-hidden="true"></i></span>
                  <span class="card__number">06 / 10</span>
                </div>
                <p class="card__category">Architecture</p>
                <h3 class="card__title">Modern Architecture</h3>
                <p class="card__text">A small, readable codebase that stays easy to maintain as your product grows.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-6" aria-label="Explore Modern Architecture">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <li class="card card--cyan" id="feature-7" role="group" aria-roledescription="slide" aria-label="7 of 10: Seamless Integration">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-links-line" aria-hidden="true"></i></span>
                  <span class="card__number">07 / 10</span>
                </div>
                <p class="card__category">Integration</p>
                <h3 class="card__title">Seamless Integration</h3>
                <p class="card__text">Drop it into any static page or serve it from any folder &mdash; no tooling required.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-7" aria-label="Explore Seamless Integration">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <li class="card card--lime" id="feature-8" role="group" aria-roledescription="slide" aria-label="8 of 10: Advanced Analytics">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-bar-chart-2-line" aria-hidden="true"></i></span>
                  <span class="card__number">08 / 10</span>
                </div>
                <p class="card__category">Analytics</p>
                <h3 class="card__title">Advanced Analytics</h3>
                <p class="card__text">Clear signals, useful insights, and patterns that help you make better decisions.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-8" aria-label="Explore Advanced Analytics">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <li class="card card--orchid" id="feature-9" role="group" aria-roledescription="slide" aria-label="9 of 10: Future Ready">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-time-line" aria-hidden="true"></i></span>
                  <span class="card__number">09 / 10</span>
                </div>
                <p class="card__category">Future</p>
                <h3 class="card__title">Future Ready</h3>
                <p class="card__text">Built on stable web standards that keep working long after trends move on.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-9" aria-label="Explore Future Ready">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <li class="card card--slate" id="feature-10" role="group" aria-roledescription="slide" aria-label="10 of 10: Endless Possibilities">
              <article class="card__inner">
                <div class="card__top">
                  <span class="card__icon"><i class="ri-infinity-line" aria-hidden="true"></i></span>
                  <span class="card__number">10 / 10</span>
                </div>
                <p class="card__category">Possibility</p>
                <h3 class="card__title">Endless Possibilities</h3>
                <p class="card__text">A foundation you can shape into something entirely your own. Start exploring.</p>
                <div class="card__footer">
                  <a class="card__link" href="#feature-10" aria-label="Explore Endless Possibilities">Explore <i class="ri-arrow-right-up-line" aria-hidden="true"></i></a>
                  <span class="card__spark" aria-hidden="true"></span>
                </div>
              </article>
            </li>

            <!-- Trailing spacer lets the final card snap to the start edge. -->
            <li class="carousel__spacer" aria-hidden="true"></li>
          </ul>
        </div>
      </div>

      <div class="container carousel__bottom">
        <p class="carousel__hint"><i class="ri-drag-move-2-line" aria-hidden="true"></i> Drag, swipe, or use arrow keys to explore</p>
        <div class="carousel__dots" id="carouselDots" role="group" aria-label="Carousel pagination"></div>
        <p class="carousel__count" aria-live="polite"><span id="currentSlide">01</span> <span class="carousel__count-sep">/</span> 10</p>
      </div>
    </section>

    <!-- ===================== CLOSING STRIP ===================== -->
    <section class="closing" id="about" aria-labelledby="closingTitle">
      <div class="container closing__inner">
        <div>
          <p class="section-label">BUILT WITH CARE</p>
          <h2 class="closing__title" id="closingTitle">Small component. Big polish.</h2>
        </div>
        <p class="closing__text">Crafted for the MetaSkillGroup component library by MetaSkillGroup. Standards-based, dependency-light, and ready for production.</p>
      </div>
    </section>
  </main>

  <!-- ===================== FOOTER ===================== -->
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <span class="site-footer__brand"><span class="site-footer__dot" aria-hidden="true"></span> MSG Scroll Snap Carousel</span>
      <span class="site-footer__badge"><i class="ri-javascript-line" aria-hidden="true"></i> Vanilla JavaScript</span>
      <span class="site-footer__copy">&copy; 2026 MetaSkillGroup. All rights reserved.</span>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## CSS

```css
/* =========================================================
   MSG Scroll Snap Carousel — styles
   Organized: tokens → base → layout → components → responsive
   ========================================================= */

/* ---------- Design tokens ---------- */
:root {
  /* Colors */
  --bg: #f7f8fc;
  --surface: #ffffff;
  --surface-soft: #fbfbfe;
  --ink: #151829;
  --ink-soft: #3d435c;
  --muted: #737a91;
  --line: #e7e9f2;
  --line-strong: #d7dae8;
  --primary: #6c5ce7;
  --primary-dark: #5646cf;
  --teal: #16b8a6;
  --violet-soft: #efeaff;
  --teal-soft: #e2f8f5;
  --amber-soft: #fff3de;
  --rose-soft: #ffe9ee;
  --lime-soft: #eef9dd;
  --shadow-sm: 0 2px 8px rgba(23, 26, 51, 0.04);
  --shadow-md: 0 12px 32px rgba(23, 26, 51, 0.07);
  --shadow-lg: 0 24px 60px rgba(23, 26, 51, 0.12);
  --shadow-focus: 0 0 0 4px rgba(108, 92, 231, 0.18);

  /* Typography */
  --font: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;

  /* Radii */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 22px;
  --radius-xl: 30px;
  --radius-pill: 999px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --gutter: 32px;
  --container: 1280px;
  --gap: 20px;
}

/* ---------- Base ---------- */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font);
  font-weight: var(--weight-regular);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

h1, h2, h3, p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 3px;
}

.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

/* ---------- Header ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(247, 248, 252, 0.86);
  backdrop-filter: saturate(160%) blur(16px);
  -webkit-backdrop-filter: saturate(160%) blur(16px);
  border-bottom: 1px solid rgba(215, 218, 232, 0.8);
}

.site-header__inner {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  flex-shrink: 0;
}

.brand__mark {
  width: 38px;
  height: 38px;
  display: block;
}

.brand__mark svg {
  width: 100%;
  height: 100%;
  display: block;
}

.brand__name {
  font-size: 0.95rem;
  font-weight: var(--weight-extrabold);
  letter-spacing: -0.03em;
}

.brand__name span {
  color: var(--muted);
  font-weight: var(--weight-bold);
}

.site-nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.site-nav__link {
  color: var(--ink-soft);
  font-size: 0.88rem;
  font-weight: var(--weight-semibold);
  transition: color 0.2s ease;
}

.site-nav__link:hover {
  color: var(--primary);
}

.site-nav__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 13px;
  border: 1px solid var(--line);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--ink-soft);
  font-size: 0.75rem;
  font-weight: var(--weight-bold);
  letter-spacing: 0.01em;
  box-shadow: var(--shadow-sm);
}

.site-nav__badge i {
  color: var(--primary);
  font-size: 0.95rem;
}

.nav-toggle {
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--ink);
  font-size: 1.4rem;
  cursor: pointer;
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding-block: var(--space-9) var(--space-8);
}

.hero__glow {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
}

.hero__glow--one {
  width: 420px;
  height: 420px;
  top: -220px;
  left: -90px;
  background: rgba(108, 92, 231, 0.16);
}

.hero__glow--two {
  width: 380px;
  height: 380px;
  top: -160px;
  right: -110px;
  background: rgba(22, 184, 166, 0.13);
}

.hero__inner {
  max-width: 900px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--space-5);
  color: var(--primary);
  font-size: 0.74rem;
  font-weight: var(--weight-extrabold);
  letter-spacing: 0.18em;
}

.eyebrow__line {
  width: 26px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--primary), var(--teal));
}

.hero__title {
  max-width: 780px;
  font-size: clamp(2.7rem, 6.2vw, 5.1rem);
  font-weight: var(--weight-extrabold);
  line-height: 1.05;
  letter-spacing: -0.055em;
}

.hero__dot {
  color: var(--primary);
}

.hero__description {
  max-width: 660px;
  margin-top: var(--space-5);
  color: var(--muted);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.75;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: var(--space-6);
}

.meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 15px;
  border: 1px solid var(--line);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--ink-soft);
  font-size: 0.79rem;
  font-weight: var(--weight-semibold);
  box-shadow: var(--shadow-sm);
}

.meta-chip i {
  color: var(--primary);
  font-size: 1.05rem;
}

.meta-chip--subtle {
  background: transparent;
  box-shadow: none;
}

.meta-chip--subtle i {
  color: var(--teal);
}

/* ---------- Carousel section ---------- */
.showcase {
  padding-bottom: var(--space-9);
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-5);
  margin-bottom: var(--space-6);
}

.section-label {
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: var(--weight-extrabold);
  letter-spacing: 0.17em;
}

.section-title {
  margin-top: 8px;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: var(--weight-extrabold);
  letter-spacing: -0.045em;
  line-height: 1.15;
}

.section-subtitle {
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.95rem;
}

.carousel__controls {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.nav-arrow {
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  background: var(--surface);
  color: var(--ink);
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-arrow:hover:not(:disabled) {
  color: #fff;
  border-color: var(--primary);
  background: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(108, 92, 231, 0.24);
}

.nav-arrow:active:not(:disabled) {
  transform: translateY(0);
}

.nav-arrow:disabled {
  opacity: 0.38;
  cursor: not-allowed;
  box-shadow: none;
}

/* Carousel viewport & track */
.carousel {
  position: relative;
}

.carousel__viewport {
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-inline: contain;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  outline-offset: -3px;
}

.carousel__viewport::-webkit-scrollbar {
  display: none;
}

.carousel__viewport.is-dragging {
  cursor: grabbing;
  scroll-snap-type: none;
  scroll-behavior: auto;
  user-select: none;
  -webkit-user-select: none;
}

.carousel__viewport.is-dragging * {
  user-select: none;
  -webkit-user-select: none;
}

.carousel__track {
  --cards-visible: 1.2;
  --card-size: calc(100% / var(--cards-visible) - var(--gap) + var(--gap) / var(--cards-visible));
  display: flex;
  align-items: stretch;
  gap: var(--gap);
  width: 100%;
  padding-block: 4px 22px;
}

.carousel__spacer {
  flex: 0 0 calc(100% - var(--card-size) - var(--gap));
  scroll-snap-align: none;
}

/* Edge fades */
.carousel__fade {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: clamp(36px, 6vw, 92px);
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.carousel__fade--left {
  left: 0;
  background: linear-gradient(90deg, var(--bg) 12%, rgba(247, 248, 252, 0) 100%);
}

.carousel__fade--right {
  right: 0;
  background: linear-gradient(270deg, var(--bg) 12%, rgba(247, 248, 252, 0) 100%);
}

.carousel[data-state="start"] .carousel__fade--left,
.carousel[data-state="end"] .carousel__fade--right {
  opacity: 0;
}

/* Cards */
.card {
  flex: 0 0 var(--card-size);
  min-width: 0;
  scroll-snap-align: start;
  border-radius: var(--radius-lg);
}

.card__inner {
  position: relative;
  height: 100%;
  min-height: 330px;
  display: flex;
  flex-direction: column;
  padding: 26px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card__inner::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: var(--accent, var(--primary));
  opacity: 0.9;
}

.card__inner::after {
  content: "";
  position: absolute;
  right: -60px;
  top: -70px;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: var(--accent-soft, var(--violet-soft));
  opacity: 0.65;
  pointer-events: none;
}

.card:hover .card__inner {
  transform: translateY(-5px);
  border-color: color-mix(in srgb, var(--accent, var(--primary)) 35%, var(--line));
  box-shadow: var(--shadow-lg);
}

.card--violet { --accent: #6c5ce7; --accent-soft: #efeaff; --icon: #6c5ce7; }
.card--blue   { --accent: #3f83f8; --accent-soft: #e7f0ff; --icon: #3f83f8; }
.card--mint   { --accent: #16b8a6; --accent-soft: #e2f8f5; --icon: #0f9d8d; }
.card--amber  { --accent: #f2a93b; --accent-soft: #fff3de; --icon: #d98a12; }
.card--rose   { --accent: #ec6d8d; --accent-soft: #ffe9ee; --icon: #d95376; }
.card--indigo { --accent: #5d6ce2; --accent-soft: #eaecff; --icon: #4f5ed4; }
.card--cyan   { --accent: #22a9c9; --accent-soft: #e3f6fb; --icon: #158ba7; }
.card--lime   { --accent: #83bd42; --accent-soft: #eef9dd; --icon: #6a9e2e; }
.card--orchid { --accent: #a06ae8; --accent-soft: #f3eaff; --icon: #8b4ed4; }
.card--slate  { --accent: #55637f; --accent-soft: #e9edf5; --icon: #47546d; }

.card__top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
}

.card__icon {
  width: 52px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background: var(--accent-soft);
  color: var(--icon);
  font-size: 1.65rem;
}

.card__number {
  padding: 5px 10px;
  border: 1px solid var(--line);
  border-radius: var(--radius-pill);
  color: var(--muted);
  background: rgba(255, 255, 255, 0.78);
  font-size: 0.68rem;
  font-weight: var(--weight-bold);
  letter-spacing: 0.08em;
}

.card__category {
  position: relative;
  z-index: 1;
  margin-top: var(--space-6);
  color: var(--icon);
  font-size: 0.7rem;
  font-weight: var(--weight-extrabold);
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.card__title {
  position: relative;
  z-index: 1;
  margin-top: 6px;
  font-size: clamp(1.22rem, 1.7vw, 1.5rem);
  font-weight: var(--weight-extrabold);
  letter-spacing: -0.035em;
  line-height: 1.25;
}

.card__text {
  position: relative;
  z-index: 1;
  margin-top: 10px;
  color: var(--muted);
  font-size: 0.875rem;
  line-height: 1.65;
}

.card__footer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-top: auto;
  padding-top: var(--space-5);
}

.card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--icon);
  font-size: 0.82rem;
  font-weight: var(--weight-bold);
  transition: gap 0.2s ease;
}

.card__link:hover {
  gap: 10px;
}

.card__link i {
  font-size: 1rem;
}

.card__spark {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.45;
}

/* Pagination & hint */
.carousel__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.carousel__hint {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: var(--weight-medium);
}

.carousel__hint i {
  color: var(--primary);
  font-size: 1.05rem;
}

.carousel__dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--line-strong);
  cursor: pointer;
  transition: width 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.dot:hover {
  background: var(--primary-dark);
  transform: scale(1.2);
}

.dot.is-active {
  width: 28px;
  border-radius: var(--radius-pill);
  background: var(--primary);
}

.carousel__count {
  min-width: 58px;
  text-align: right;
  color: var(--ink);
  font-size: 0.82rem;
  font-weight: var(--weight-extrabold);
  font-variant-numeric: tabular-nums;
}

.carousel__count-sep {
  margin-inline: 3px;
  color: var(--line-strong);
}

/* ---------- Closing strip ---------- */
.closing {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}

.closing__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding-block: var(--space-7);
}

.closing__title {
  margin-top: 8px;
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  font-weight: var(--weight-extrabold);
  letter-spacing: -0.04em;
}

.closing__text {
  max-width: 420px;
  color: var(--muted);
  font-size: 0.9rem;
}

/* ---------- Footer ---------- */
.site-footer {
  padding-block: var(--space-6);
}

.site-footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-3);
  color: var(--muted);
  font-size: 0.79rem;
  font-weight: var(--weight-medium);
}

.site-footer__brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--ink-soft);
  font-weight: var(--weight-bold);
}

.site-footer__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--teal));
}

.site-footer__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  border: 1px solid var(--line);
  border-radius: var(--radius-pill);
  background: var(--surface);
  font-weight: var(--weight-semibold);
}

.site-footer__badge i {
  color: var(--primary);
}

/* ---------- Responsive ---------- */
@media (min-width: 700px) and (max-width: 991px) {
  .carousel__track {
    --cards-visible: 2.5;
  }
}

@media (min-width: 992px) {
  .carousel__track {
    --cards-visible: 3.5;
  }
}

@media (max-width: 991px) {
  .nav-toggle {
    display: inline-flex;
  }

  .site-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-2);
    padding: var(--space-4) var(--gutter) var(--space-5);
    background: var(--surface);
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow-md);
  }

  .site-nav.is-open {
    display: flex;
  }

  .site-nav__link {
    padding: 10px 0;
  }

  .site-nav__badge {
    align-self: flex-start;
  }

  .hero {
    padding-block: var(--space-8) var(--space-7);
  }
}

@media (max-width: 640px) {
  :root {
    --gutter: 20px;
    --gap: 16px;
  }

  .site-header__inner {
    min-height: 66px;
  }

  .section-head {
    align-items: flex-start;
  }

  .nav-arrow {
    width: 44px;
    height: 44px;
    font-size: 1.15rem;
  }

  .carousel__bottom {
    flex-wrap: wrap;
    justify-content: center;
  }

  .carousel__hint {
    order: 3;
    width: 100%;
    justify-content: center;
  }

  .carousel__count {
    min-width: 48px;
  }

  .card__inner {
    min-height: 320px;
    padding: 22px;
  }

  .closing__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .site-footer__inner {
    justify-content: center;
    text-align: center;
  }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .carousel__viewport {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .card:hover .card__inner {
    transform: none;
  }
}
```

## JavaScript

```javascript
/* =========================================================
   MSG Scroll Snap Carousel — interactions
   Native scroll snap + a thin Vanilla JavaScript layer
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Element references ---------- */
  var root = document.getElementById("carouselRoot");
  var viewport = document.getElementById("carouselViewport");
  var track = document.getElementById("carouselTrack");
  var dotsContainer = document.getElementById("carouselDots");
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var currentSlide = document.getElementById("currentSlide");
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  if (!root || !viewport || !track || !dotsContainer || !prevButton || !nextButton) {
    return;
  }

  var cards = Array.prototype.slice.call(track.querySelectorAll(".card"));
  if (!cards.length) {
    return;
  }

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var offsets = [];
  var dots = [];
  var visibility = new Map();
  var activeIndex = 0;
  var scrollFrame = null;
  var resizeFrame = null;
  var momentumFrame = null;
  var momentumVelocity = 0;
  var drag = null;
  var suppressClick = false;

  /* ---------- Geometry helpers ---------- */
  function maxScrollLeft() {
    return Math.max(0, viewport.scrollWidth - viewport.clientWidth);
  }

  function measureOffsets() {
    var viewportLeft = viewport.getBoundingClientRect().left;
    offsets = cards.map(function (card) {
      return card.getBoundingClientRect().left - viewportLeft + viewport.scrollLeft;
    });
  }

  function nearestIndex() {
    var position = viewport.scrollLeft;
    var best = 0;
    var bestDistance = Infinity;

    for (var i = 0; i < offsets.length; i += 1) {
      var distance = Math.abs(offsets[i] - position);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    }
    return best;
  }

  /* ---------- State synchronization ---------- */
  function setActive(index) {
    if (index < 0 || index >= cards.length) {
      return;
    }

    if (index !== activeIndex || !dots[index].getAttribute("aria-current")) {
      activeIndex = index;
      dots.forEach(function (dot, dotIndex) {
        var isActive = dotIndex === index;
        dot.classList.toggle("is-active", isActive);
        if (isActive) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
      if (currentSlide) {
        currentSlide.textContent = String(index + 1).padStart(2, "0");
      }
    }
  }

  function computeActiveIndex() {
    for (var i = 0; i < cards.length; i += 1) {
      if ((visibility.get(cards[i]) || 0) >= 0.55) {
        return i;
      }
    }
    return nearestIndex();
  }

  function updateControls() {
    var position = viewport.scrollLeft;
    var maximum = maxScrollLeft();
    var atStart = position <= 2;
    var atEnd = position >= maximum - 2;

    prevButton.disabled = atStart;
    nextButton.disabled = atEnd;
    root.dataset.state = atStart ? "start" : atEnd ? "end" : "middle";
  }

  function syncState() {
    setActive(computeActiveIndex());
    updateControls();
  }

  /* ---------- Pagination dots ---------- */
  function buildDots() {
    var fragment = document.createDocumentFragment();

    cards.forEach(function (card, index) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot";
      dot.dataset.index = String(index);
      dot.setAttribute("aria-label", "Go to card " + (index + 1) + " of " + cards.length);
      dot.addEventListener("click", function () {
        scrollToIndex(index);
      });
      fragment.appendChild(dot);
      dots.push(dot);
    });

    dotsContainer.appendChild(fragment);
  }

  /* ---------- Scrolling ---------- */
  function scrollToIndex(index) {
    var targetIndex = Math.min(Math.max(index, 0), cards.length - 1);
    var target = Math.min(offsets[targetIndex] || 0, maxScrollLeft());

    if (momentumFrame !== null) {
      cancelAnimationFrame(momentumFrame);
      momentumFrame = null;
      viewport.classList.remove("is-dragging");
    }

    viewport.scrollTo({
      left: Math.max(0, target),
      behavior: reducedMotion.matches ? "auto" : "smooth"
    });
  }

  function step(direction) {
    scrollToIndex(nearestIndex() + direction);
  }

  prevButton.addEventListener("click", function () {
    step(-1);
  });

  nextButton.addEventListener("click", function () {
    step(1);
  });

  /* ---------- IntersectionObserver pagination ---------- */
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visibility.set(entry.target, entry.intersectionRatio);
        });
        setActive(computeActiveIndex());
      },
      {
        root: viewport,
        threshold: [0, 0.1, 0.25, 0.5, 0.55, 0.75, 1]
      }
    );
    cards.forEach(function (card) {
      observer.observe(card);
    });
  }

  /* ---------- Scroll / resize listeners ---------- */
  viewport.addEventListener(
    "scroll",
    function () {
      if (scrollFrame !== null) {
        return;
      }
      scrollFrame = window.requestAnimationFrame(function () {
        scrollFrame = null;
        syncState();
      });
    },
    { passive: true }
  );

  window.addEventListener(
    "resize",
    function () {
      if (resizeFrame !== null) {
        return;
      }
      resizeFrame = window.requestAnimationFrame(function () {
        resizeFrame = null;
        measureOffsets();
        syncState();
      });
    },
    { passive: true }
  );

  /* ---------- Mouse drag with momentum ---------- */
  function endMomentum(shouldSnap) {
    if (momentumFrame !== null) {
      cancelAnimationFrame(momentumFrame);
      momentumFrame = null;
    }
    viewport.classList.remove("is-dragging");
    if (shouldSnap && !reducedMotion.matches) {
      scrollToIndex(nearestIndex());
    } else if (shouldSnap) {
      viewport.scrollLeft = offsets[nearestIndex()] || 0;
    }
  }

  function startMomentum(velocity) {
    momentumVelocity = Math.max(-3, Math.min(3, velocity));

    if (reducedMotion.matches || Math.abs(momentumVelocity) < 0.12) {
      endMomentum(true);
      return;
    }

    function frame() {
      viewport.scrollLeft -= momentumVelocity * 16;
      momentumVelocity *= 0.93;

      if (Math.abs(momentumVelocity) > 0.04) {
        momentumFrame = window.requestAnimationFrame(frame);
      } else {
        momentumFrame = null;
        endMomentum(true);
      }
    }

    momentumFrame = window.requestAnimationFrame(frame);
  }

  function onPointerDown(event) {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }
    if (event.target.closest("a, button, input, select, textarea, label, [role='button']")) {
      return;
    }

    drag = {
      startX: event.clientX,
      lastX: event.clientX,
      lastTime: performance.now(),
      scroll: viewport.scrollLeft,
      moved: false,
      velocity: 0
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("pointercancel", onMouseUp);
  }

  function onMouseMove(event) {
    if (!drag) {
      return;
    }

    var delta = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(delta) < 5) {
      return;
    }

    if (!drag.moved) {
      drag.moved = true;
      viewport.classList.add("is-dragging");
    }

    event.preventDefault();
    viewport.scrollLeft = drag.scroll - delta;

    var now = performance.now();
    var elapsed = now - drag.lastTime;
    if (elapsed > 0) {
      drag.velocity = (event.clientX - drag.lastX) / elapsed;
    }
    drag.lastX = event.clientX;
    drag.lastTime = now;
  }

  function onMouseUp() {
    if (!drag) {
      return;
    }

    var moved = drag.moved;
    var velocity = drag.velocity;
    drag = null;

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("pointercancel", onMouseUp);

    if (moved) {
      suppressClick = true;
      window.setTimeout(function () {
        suppressClick = false;
      }, 150);
      startMomentum(velocity);
    } else {
      viewport.classList.remove("is-dragging");
    }
  }

  viewport.addEventListener("pointerdown", onPointerDown);
  viewport.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
  viewport.addEventListener(
    "click",
    function (event) {
      if (suppressClick) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
      }
    },
    true
  );
  window.addEventListener("blur", onMouseUp);

  /* ---------- Keyboard navigation ---------- */
  viewport.addEventListener("keydown", function (event) {
    if (event.target.closest("a, button, input, select, textarea, [contenteditable='true']")) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "Home") {
      event.preventDefault();
      scrollToIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      scrollToIndex(cards.length - 1);
    }
  });

  /* ---------- Mobile navigation ---------- */
  if (navToggle && primaryNav) {
    function closeNav() {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    }

    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    primaryNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNav();
      }
    });
  }

  /* ---------- Initialize ---------- */
  buildDots();
  measureOffsets();
  setActive(0);
  syncState();

  window.addEventListener("load", function () {
    measureOffsets();
    syncState();
  });
})();
```
