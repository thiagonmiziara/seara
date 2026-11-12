# Seara de Deus — Design System

## Visual direction

The site uses a warm, calm editorial world: a cream canvas, pale olive-green surfaces, deep olive typography, and moss-green actions. Local photography adds human warmth; color is used consistently for wayfinding, emphasis, and interaction.

## Color roles

- `#F9F6ED`: main canvas and light editorial surfaces.
- `#EAEEDC`: secondary surfaces and grouped content.
- `#30382A`: primary text and deep olive emphasis.
- `#526B38`: primary action, wayfinding, focus, and active emphasis.
- Muted text and borders use darker olive neutrals that maintain readable contrast on cream.

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

- Primary actions use moss-green surfaces with cream text; secondary actions are outlined or quiet text links.
- Image overlays use readable deep-olive surfaces, not decorative glass effects.
- Hover states move links subtly or change contrast; keyboard focus is a 2px moss-green outline with 4px offset.
- All links retain semantic anchors and content remains meaningful without motion.

## Responsive behavior

- Large layouts use a 7xl content rail with 3rem horizontal padding.
- Mobile starts at 1.25rem horizontal padding and stacks hero, schedule, and editorial content.
- Community grid changes from one column to two and then five; ministry rows stack naturally below the small breakpoint.

## Scope boundaries

The primary navigation and redirects omit Devocional, Seara News, and Estudos nos Lares. Communities, ministries, worship times, contact, and institutional information are the supported public paths.
