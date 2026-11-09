# Seara de Deus — Design System

## Visual direction

The site uses an energetic, music-inspired dark world: charcoal surfaces, a vivid green action color, local photography, and one bright editorial break for service times. It is inspired by Spotify's contrast and energy without reproducing its interface or brand assets.

## Color roles

- `#121212`: main canvas, navigation, and deep content fields.
- `#1b1b1b` / `#242424`: secondary surfaces and image containers.
- `#1ed760`: primary action, wayfinding, and active emphasis.
- `#f6f6f2`: light editorial surface for the service schedule.
- White and white-alpha text create the information hierarchy on dark fields.

## Typography and rhythm

- Geist is the UI typeface.
- Headlines are black weight with tight negative tracking, generally 2.25–5rem depending on viewport.
- Body copy is open, with 1.75–2rem line-height for key explanatory text.
- Section spacing is 5rem on compact viewports and 7rem on large screens.
- The page avoids eyebrow labels; hierarchy is carried by headings, scale, and color.

## Layout patterns

- Hero: local church image, proposition, primary next step, and current-week schedule. It is 640px minimum on mobile and 760px on desktop so a CTA remains visible early.
- Cultos: a three-column editorial schedule, rather than cards.
- Comunidades: a responsive image-led grid, five columns at large sizes.
- Ministérios: a typographic linked list, not a repeated-card grid.
- Institutional close: logo field, leadership message, and next actions.

## Components and interaction

- Primary actions are green pill buttons; secondary actions are outlined or quiet text links.
- Image overlays use readable dark surfaces, not decorative glass effects.
- Hover states move links subtly or change contrast; keyboard focus is a 2px green outline with 4px offset.
- All links retain semantic anchors and content remains meaningful without motion.

## Responsive behavior

- Large layouts use a 7xl content rail with 3rem horizontal padding.
- Mobile starts at 1.25rem horizontal padding and stacks hero, schedule, and editorial content.
- Community grid changes from one column to two and then five; ministry rows stack naturally below the small breakpoint.

## Scope boundaries

The primary navigation and redirects omit Devocional, Seara News, and Estudos nos Lares. Communities, ministries, worship times, contact, and institutional information are the supported public paths.
