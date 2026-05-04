# Charlie Chapman Personal Site Design System

This system is for a personal internet profile that behaves like a social profile page first and a blog/archive second. The strongest reference is a Twitter/X profile: profile header, banner, avatar, compact bio, location, social handles, then a reverse-chronological timeline.

The site should feel familiar immediately, but not like a copy of Twitter. It should be personal, playful in small details, clean, dense, and fast.

## Design Principles

### Profile First

The homepage should read as "Charlie's profile page" within the first few seconds.

- Banner image at the top.
- Avatar overlapping or attached to the banner area.
- Name, first-person bio, location, and social handles directly beneath.
- Timeline content starts immediately after profile tabs.
- No follower counts or social status metrics.

### Dense, Not Cramped

The layout should have the rhythm of a feed, not a marketing page.

- Avoid hero copy, large promotional sections, oversized cards, and decorative whitespace.
- Use borders, alignment, and type hierarchy for structure.
- Keep feed items compact by default.
- Expand only when content needs media, embeds, or article reading space.

### Personal, Not Corporate

The site should feel like a polished personal home on the internet.

- First-person voice.
- Direct, profile-like copy.
- No startup SaaS polish.
- No generic portfolio tropes.
- Let the profile, links, apps, posts, appearances, and talks create the identity.

### Custom Social UI

The site borrows from Twitter/X and native Apple UI, but should have its own flavor.

- Twitter-like shell, profile header, tabs, and timeline behavior.
- Apple-like clarity, touch target sizing, polish, and restraint.
- Warm background and subtle green/pink identity accents distinguish it from social networks.

## Layout System

### App Shell

Desktop layout:

- Left sidebar navigation.
- Main content column.
- No right rail by default.

Main column:

- Fixed max width.
- Slightly wider than Twitter is acceptable.
- Recommended range: `680px` to `740px`.
- Avoid going wide enough that 16:9 media dominates the vertical rhythm.

Sidebar:

- Icon + label navigation.
- Primary nav items: `Home`, `Apps`, `About`.
- A small avatar/name shortcut can be included if it visually balances the sidebar, but the main identity belongs in the profile header.

Mobile layout:

- Hamburger drawer for primary navigation.
- Keep profile/timeline tabs accessible near the top of the timeline.
- Avoid bottom tabs for the first version.

### Page Types

Home:

- Twitter-like profile page.
- Profile header followed by timeline tabs and feed items.
- Timeline is newest first.
- No pinned items.

Apps:

- Top-level page, not just a feed filter.
- Preserve the current app index structure.
- App icon, short description, links, and RevenueCat Verified Metrics iframe when available.
- Expanded-by-default metrics are fine for now.

About:

- Longer version of the profile bio.
- Projects, speaking, appearances, apps, and other identity context can live here.
- Should share the same shell and visual tokens, but can use a more readable page layout.

Detail pages:

- Internal detail page for every timeline item.
- Blog, appearance, and talk items share the same core content model.
- Appearance and talk detail pages should support embedded media near the top.
- Detail pages can be cleaner and more article-like than the feed, while remaining visually consistent with the site.

## Color System

The site has two separate color layers:

1. Site identity accents.
2. Content type colors.

Do not use content type colors as the main brand system.

### Light Theme

The default theme follows the user's system preference. Light mode is the primary design target.

Recommended tokens:

```scss
$color-bg: #fbfcf9;
$color-surface: #ffffff;
$color-surface-hover: #f3faf1;
$color-text: #1c211d;
$color-text-muted: #566157;
$color-border: #dfe6dc;
$color-border-strong: #aebcab;

$color-accent-green: #00843d;
$color-accent-pink: #cf247c;
$color-focus: #00843d;
```

Use near-white neutrals to keep the site bright and crisp. The background can carry a barely perceptible warm/green tint, but it should read much closer to white than cream. Use borders as the primary separator between profile, tabs, and feed rows.

### Dark Theme

Dark mode should never use pure black as a major background. It should reduce eye strain with dark grays and softened text.

Recommended tokens:

```scss
$color-bg-dark: #20231f;
$color-surface-dark: #282d27;
$color-surface-hover-dark: #30362f;
$color-text-dark: #f5f3ee;
$color-text-muted-dark: #c4beb6;
$color-border-dark: #465044;
$color-border-strong-dark: #667160;

$color-accent-green-dark: #6dde88;
$color-accent-pink-dark: #ff78b8;
$color-focus-dark: #86e99f;
```

Dark accents can be more saturated than the first pass, but should still avoid neon glare.

### Content Type Colors

Content type colors are fixed semantic markers for timeline items. They should appear as a colored dot plus text, not heavy filled badges.

Recommended light/dark pairs:

```scss
$type-blog: #e07900;
$type-blog-dark: #ffb347;

$type-appearance: #4d56ff;
$type-appearance-dark: #aeb3ff;

$type-talk: #e04b37;
$type-talk-dark: #ff897a;
```

Usage:

- `Blog`: amber.
- `Appearance`: indigo.
- `Talk`: coral/red.

The label text should use normal muted text. The colored dot carries the type color.

## Typography

Use sans-serif fonts throughout.

Recommended stack:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

Type should feel like a modern app UI, not a magazine and not a code-heavy developer site.

### Scale

Use a compact scale.

```scss
$font-size-xs: 0.8125rem;
$font-size-sm: 0.9375rem;
$font-size-md: 1rem;
$font-size-lg: 1.125rem;
$font-size-xl: 1.375rem;
$font-size-2xl: 1.75rem;
```

Feed:

- Compact metadata.
- Clear title.
- Short excerpt.
- Markdown formatting in excerpts is allowed.
- Title and `Read more` both open the full detail page.

Article/detail pages:

- Tune for reading, not strict feed width.
- Larger body text and more generous line-height are appropriate.
- Full date should appear on detail pages.

## Spacing, Borders, Radius

Spacing should be compact and systematic.

```scss
$space-1: 4px;
$space-2: 8px;
$space-3: 12px;
$space-4: 16px;
$space-5: 20px;
$space-6: 24px;
$space-8: 32px;
```

Borders:

- Use `1px` borders for primary structure.
- Border color should be visible but low contrast.
- Borders separate profile header, timeline tabs, and feed rows.

Radii:

```scss
$radius-sm: 8px;
$radius-md: 12px;
$radius-lg: 16px;
$radius-xl: 22px;
$radius-round: 999px;
```

The site should be friendlier and more rounded than Twitter.

- Avatars are circular.
- Buttons and social links are rounded.
- Feed rows may have subtle rounding on hover or within the main column.
- Avoid heavy nested cards.

## Components

### Logo / Favicon

Create a new mark. The current favicon should not carry forward.

Direction:

- Compact `CC`-based mark if it can look good at small sizes.
- Simple logo/mark, not a full wordmark.
- More playful than corporate: rounded strokes, loose geometry, a small dot/spark accent, or a slightly offbeat rhythm are better than heavy block letters.
- Mostly neutral with green/pink accents.
- Must work at favicon size.
- Can appear in the sidebar and browser favicon.

### Profile Header

Structure:

- Banner image from the current Twitter/X profile.
- Avatar from the current Twitter/X profile.
- Name: `Charlie Chapman`.
- Short first-person bio.
- Location metadata: `St. Louis, MO, USA`.
- Social/contact links.

Do not include:

- Follower counts.
- View counts.
- Like counts.
- A primary CTA that makes email more important than the other links.

### Social Links

Priority order:

1. Twitter/X.
2. LinkedIn.
3. Mastodon.
4. Bluesky.
5. GitHub.
6. Email.

Treatment:

- Icon + handle.
- Equal visual weight.
- Handles should be visible because people may search manually.
- Links can wrap.
- Copy-handle behavior is useful where it fits, especially Mastodon and email.

### Timeline Tabs

Tabs should feel like Twitter profile tabs.

Tabs:

- `All`
- `Blog`
- `Appearances`
- `Talks`

Behavior:

- Filter the unified timeline.
- Shareable filter state.
- Recommended URL format: `/?type=appearance`.
- Active tab should use the site accent system, not the content type color system.

### Feed Item

Feed items should be tweet-compact, but without redundant author chrome.

Do include:

- Content type dot + label.
- Compact date.
- Title.
- Short excerpt with Markdown support.
- `Read more`.
- Optional media preview or playable embed.

Do not include:

- Avatar.
- Author name.
- Handle.
- Follower/social metrics.

Interaction:

- Title opens the internal detail page.
- `Read more` opens the internal detail page.
- Appearance/talk items can include full playable embeds in the feed when available.
- Items stay compact when no media exists.

### Media And Embeds

Images, avatars, banners, videos, and embeds should remain natural/native.

Rules:

- Do not over-style media.
- Use only basic spacing, radius, and border consistency.
- Feed media should support 16:9 previews.
- Full playable embeds are acceptable in feed items.
- Detail pages can place media or embeds more prominently.

### Article / Detail Content

Detail pages are calmer than the timeline.

Rules:

- Keep the same shell, colors, type, and nav language.
- Tune line length, font size, and spacing for reading.
- Use full dates.
- Support Markdown.
- Support code snippets as a normal blog feature.

Code blocks:

- Use site-themed syntax highlighting.
- Light mode code blocks should sit on a subtly tinted surface.
- Dark mode code blocks should use dark gray, not black.
- Syntax colors must maintain accessible contrast.

### App Cards

Apps are secondary to the homepage design system, but they should use the same tokens.

Current content model:

- App icon.
- App name.
- Short description.
- Website link when available.
- App Store link.
- RevenueCat Metrics link when available.
- Expanded RevenueCat Verified Metrics iframe when available.
- Note when metrics are unavailable.

App cards can be more spacious than feed items because the iframe content requires it.

## Motion And Interaction

Motion should feel fast.

Rules:

- Snappy transitions.
- Small playful details are okay for hover/focus states.
- Avoid slow, bouncy, cinematic, or decorative animation.
- Avoid persistent movement.
- Avoid motion that changes layout unexpectedly.

Recommended timing:

```scss
$motion-fast: 120ms;
$motion-standard: 180ms;
$motion-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
```

Good uses:

- Tab underline movement.
- Button hover background.
- Tiny hover lift on social links.
- Copy-handle confirmation.
- Drawer open/close.

Avoid:

- Page-load animations.
- Large parallax.
- Slow content reveals.
- Animated backgrounds.

## Accessibility

Contrast should meet WCAG AA.

Requirements:

- Body text and UI text meet WCAG AA contrast.
- Links are distinguishable by more than color when needed.
- Keyboard focus is visible.
- Interactive controls should target roughly `44px` minimum height where practical.
- Dark mode avoids pure black and pure white contrast fatigue.
- Do not rely on content type color alone; include text labels with color dots.

## Content Model

The homepage timeline is one unified content stream.

Supported initial types:

- `Blog`
- `Appearance`
- `Talk`

Each timeline item should support:

- `type`
- `title`
- `date`
- `excerpt`
- `slug`
- `content`
- optional `media`
- optional `embed`
- optional `external_url`

Every item should have an internal detail page first, even if it also links externally.

Sorting:

- Newest first across all types.

Filtering:

- `All`, `Blog`, `Appearances`, and `Talks`.
- Shareable filter state via query string.

## Voice

The visual system does not need strict copy rules, but the voice should be consistent.

- First person.
- Tweet bio/direct.
- Casual and concise.
- Personal before professional.
- No marketing-page narration.

## Implementation Priorities

1. Build the shell: sidebar, mobile drawer, main timeline column.
2. Rebuild the homepage as profile header + tabs + unified feed.
3. Add content type support for `Blog`, `Appearance`, and `Talk`.
4. Add internal detail pages for every item type.
5. Re-theme existing blog posts into the new article layout.
6. Bring `Apps` and `About` into the same shell and token system.
7. Replace the favicon/logo with the new `CC` mark.
