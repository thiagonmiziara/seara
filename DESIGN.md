# Seara de Deus — Design System

## Visual direction

The site uses a clean, welcoming editorial world led by the Seara logo: leaf green actions, lime highlights, touches of logo blue, charcoal typography, and light sage surfaces. Local photography adds human warmth; color is used consistently for wayfinding and interaction.

## Color roles

- `#FFFFFF`: main canvas, navigation, and primary surfaces.
- `#F1F6EC`: secondary surfaces and grouped content.
- `#494545`: primary text and body copy.
- `#3F7229`: accessible deep-green actions, focus, and emphasis on photography.
- `#498427`: leaf-green identity from the logo.
- `#A7E551`: lime highlights and selected surfaces with dark text.
- `#3D87F1`: blue accents for icons and highlights where contrast is sufficient.
- `#DDE5D7`: borders and separators.

## Typography and rhythm

- Geist is the UI typeface.
- Headlines are black weight with tight negative tracking, generally 2.25–5rem depending on viewport.
- Body copy is open, with 1.75–2rem line-height for key explanatory text.
- Homepage sections use a balanced 3.5rem compact / 4.5rem large spacing rhythm, with shorter gaps inside related groups.
- The page avoids eyebrow labels; hierarchy is carried by headings, scale, and color.

## Layout patterns

- Hero: a full-height deep-green layout layers a concise church-and-city introduction over edge-to-edge local worship footage. A restrained deep-green overlay keeps the copy readable while the video fills the hero; a photo poster is shown when reduced motion is preferred. Lime accents and white text carry the existing Seara palette, with a subtle entrance and scroll cue.
- Cultos: a three-column editorial schedule, rather than cards.
- Comunidades: original branch posters shown whole in a responsive portrait grid, with no text overlays.
- Ministérios: a typographic linked list, not a repeated-card grid.
- Internal pages: ministry and school pages share a bold green introduction, sage mission section, white activity list, and green participation close. Other content pages use the same wide editorial rail, sage canvas, and readable white content surfaces.
- Institutional close: a text-led leadership message and next actions on a solid deep-green surface; no decorative logo.
- Homepage sections alternate solid white and sage `#E7F0DF`, ending with a deep-green close. Section backgrounds remain solid; the hero footage uses a localized readability overlay.

## Components and interaction

- Primary actions use deep-green surfaces with white text; secondary actions are outlined or quiet text links.
- Image overlays use readable deep-green surfaces, not decorative glass effects.
- Hover states move links subtly or change contrast; keyboard focus is a 2px deep-green outline with 4px offset.
- All links retain semantic anchors and content remains meaningful without motion.

## Responsive behavior

- Large layouts use a 7xl content rail with 3rem horizontal padding.
- Mobile starts at 1.25rem horizontal padding and stacks hero, schedule, and editorial content.
- Community grid changes from one column to two and then five; ministry rows stack naturally below the small breakpoint.

## Scope boundaries

The primary navigation and redirects omit Devocional, Seara News, and Estudos nos Lares. Communities, ministries, worship times, contact, and institutional information are the supported public paths.
