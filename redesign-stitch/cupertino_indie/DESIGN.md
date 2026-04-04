# Design System Document

## 1. Overview & Creative North Star

### Creative North Star: "The Native Editorial"
This design system is built to bridge the gap between high-end digital publishing and the functional precision of iOS. For an indie developer, the website shouldn't just be a portfolio; it should feel like a first-party system app—intentional, buttery smooth, and integrated. 

The layout breaks the traditional "card-based" web template in favor of a **Timeline Flow**. By removing heavy borders and shadow-heavy cards, we treat content as a continuous stream of consciousness. We use intentional asymmetry in the sidebar and high-contrast typographic scales to ensure that even a simple text update feels curated and authoritative.

---

## 2. Colors

The palette is rooted in the vibrancy of Apple’s "System" colors but refined through the lens of Material Design’s tonal hierarchy to provide depth.

### Core Palette
- **Primary (`#006e28` / `#34C759`):** The "Indie Developer" Green. Used for primary actions and system-level branding.
- **Secondary (`#ba0034` / `#FF2D55`):** The "Accent" Pink. Used sparingly for high-interest calls to action or unique media markers (like a Live indicator or Podcast artwork highlights).
- **Tertiary (`#8300f2`):** A sophisticated purple for deep-linked content and special metadata.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional borders create visual noise that breaks the "native" feel. Instead:
- Use background color shifts: Place a `surface_container_low` sidebar against a `surface` main content area.
- Use spacing: Let whitespace (Scale 8 or 10) act as the primary separator.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials:
1.  **Base Layer:** `surface` (#fbf9f9) – The canvas.
2.  **Navigation Layer:** `surface_container_low` (#f5f3f3) – The left sidebar.
3.  **Floating Elements:** `surface_container_lowest` (#ffffff) – Used for tooltips or "Glass" overlays.

### The "Glass & Gradient" Rule
To elevate the experience, main CTAs (like "Download on App Store") should utilize a subtle linear gradient from `primary` to `primary_container`. For floating navigation elements on mobile or headers, use a `backdrop-blur` (20px) with 80% opacity on the `surface` color to create a signature "Frosted Glass" effect.

---

## 3. Typography

The system uses a highly intentional scale to mimic the hierarchy of an editorial magazine.

- **Display Scale:** Use `display-md` (2.75rem) for the main developer name. It should feel massive and confident.
- **Headline Scale:** `headline-sm` (1.5rem) is the workhorse for blog post titles and video names.
- **Body Scale:** `body-lg` (1rem) for long-form reading. It provides the breathing room necessary for technical explanations.
- **Label Scale:** `label-md` (0.75rem) in all-caps is used for metadata (e.g., "PODCAST • 45 MIN").

**Identity through Type:** By sticking to a clean sans-serif but utilizing extreme weight contrasts (e.g., a `headline-lg` in Bold next to a `label-md` in Regular), we achieve a look that is both professional and distinct.

---

## 4. Elevation & Depth

We avoid the "shadow-heavy" look of 2010s web design in favor of **Tonal Layering**.

- **The Layering Principle:** A Podcast artwork thumbnail doesn't need a shadow; it needs a `surface_container_high` background if the artwork is light, or a "Ghost Border" if it’s dark.
- **Ambient Shadows:** Only for floating menus.
    - **Blur:** 24px
    - **Color:** `on_surface` at 6% opacity.
    - **Spread:** -4px (to keep it "tucked" under the element).
- **The "Ghost Border" Fallback:** If a YouTube embed or image requires a boundary, use the `outline_variant` token at **15% opacity**. This creates a hint of an edge that disappears into the background, maintaining the "No-Line" rule.
- **Glassmorphism:** Apply to the left sidebar navigation on scroll-up or for hover states. 
    - `background: rgba(251, 249, 249, 0.8)`
    - `backdrop-filter: blur(12px)`

---

## 5. Components

### Sidebar Navigation (Left)
- **Style:** Fixed position, `surface_container_low`.
- **Active State:** A `primary` vertical pill (4px wide) on the far left of the active link. 
- **Typography:** `title-md`.

### The Timeline Feed
- **Layout:** Vertical list, no cards.
- **Separation:** Use a `1px` separator only if it uses `outline_variant` at 10% opacity, with a `2rem` margin between items.
- **Social Links:** Icons (SF Symbols style) with handles in `on_surface_variant`. Use `body-md`.

### Content Blocks
- **Blog Post:** Lead with `headline-sm` title, followed by `body-md` excerpt. Date in `label-sm`.
- **Podcast Episode:** `120px` square artwork with `xl` (1.5rem) rounded corners. Text is stacked to the right.
- **YouTube Embed:** `lg` (1rem) rounded corners. A "Ghost Border" (10% opacity) for containment.
- **Conference Talk:** YouTube embed followed by a "Talk Notes" chip using `secondary_container` background with `on_secondary_container` text.

### Buttons
- **Primary:** `primary` background, `on_primary` text. `full` (pill) roundedness.
- **Secondary:** `surface_container_high` background. No border.

---

## 6. Do's and Don'ts

### Do
- **Do** use `xl` (1.5rem) rounding for all media (images, videos). It mimics the curvature of the latest iPhone hardware.
- **Do** leverage the `surface_container` tiers to separate the sidebar from the main feed.
- **Do** use `secondary` (Pink) for "Live" indicators or "New" badges to create a focal point.

### Don't
- **Don't** use 100% black text. Always use `on_surface` (#1b1c1c) for a softer, more premium look.
- **Don't** use cards with heavy drop shadows. Content should feel like it's printed *on* the surface, not floating wildly above it.
- **Don't** use generic system fonts on non-Apple devices if possible—ensure the CSS stack prioritizes `-apple-system, San Francisco, Inter, sans-serif`.

---