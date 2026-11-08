# Brand direction — TriByte × aon scéal (provisional name)

**Company:** TriByte.  
**Product / collection name:** aon scéal (**provisional; previously Pocket Post**).  
**Concept:** Irish souvenirs plus a digital companion that lets international students discover peer advice and make playful postcards.

## Creative direction

**Blend A + D:**

- **Retro Irish:** bold tourism-poster typography, shamrock/clover-inspired graphic accents, nostalgic green-and-cream palette.
- **Travel journal:** photo frames, collage spacing, paper textures, casual captions, friendly modern UX.
- **Personality:** approachable, upbeat, lightly nostalgic; not a farewell eulogy or stiff corporate brochure.

## Vintage postcard palette

Define colours once in `src/index.css`; components and inline SVG artwork use these global CSS custom properties. Do not add local copies or hardcoded brand colours. Translucent texture, borders and hover washes use `color-mix()` with these tokens; monochrome grain is decorative only.

| CSS token | Hex | Role |
|---|---|---|
| `--color-paper` | `#F8F0DE` | Principal aged-paper background; light text on green buttons and postcard |
| `--color-stamp-green` | `#245641` | Headings, primary buttons, links and outer frame |
| `--color-faded-ink` | `#55765A` | Secondary decorative lines, ornaments and landscape |
| `--color-postmark-blue` | `#526B79` | Subtle postmark and handwritten-note accents |
| `--color-vintage-rust` | `#BE6948` | Lighter terracotta-orange for large headline highlights and decorative accents |
| `--color-dark-ink` | `#293D33` | Body and small text; primary-button hover background |

### Readability

Calculated sRGB contrast against solid paper: stamp green **7.46:1**, dark ink **10.23:1**, faded ink **4.49:1**, postmark blue **4.95:1**, rust **3.49:1**. Faded ink is decorative, not small text. The lighter rust is reserved for large text and decoration; coming-soon labels use stamp green. Keep small text in dark ink or stamp green. Preserve the visible 3px stamp-green focus outline with a 5px offset. Texture is deliberately faint; check the rendered result on desktop/mobile because textured backgrounds and opacity alter contrast. Postcard text stays paper on stamp green; do not use faded ink for its small labels.

The product name remains provisional. TriByte is the company; the current interface uses aon scéal, replacing the earlier Pocket Post placeholder. This does not establish name or trademark clearance.

## Working copy

- **Site headline:** 'Discover Dublin through students who've been there.'
- **Guide CTA:** 'Explore student tips'
- **Postcard CTA:** 'Make a postcard'
- **Supporting concept:** 'Made here. Shared with whoever comes next.'
- **Postcard prompt tone:** 'My Dublin era', 'What I did instead of studying', 'Favourite Dublin discovery'.

Use a plain friendly voice with practical details; avoid pretending that students have posted content when they haven't.

## Visual system across physical and digital

The keychain, vacuum-formed packaging, logo, QR card, site and postcard should look like one family, without forcing the same image or layout everywhere.

- Physical packaging: clear product explanation and tested QR path.
- Website: legible navigation and practical guide first, creative experience second.
- Postcard: downloadable artwork with optional student captions; use original graphics and properly licensed photos.
- Pitch: show the *same* problem, brand, actual prototype and evidence of testing.

## Brand/legal guardrails

- Do not assume 'Pocket Post' is available as a business/product trademark or domain.
- Verify permission before commercial use of Guinness branding, UCD logos or copyrighted tourism artwork.
- Do not use another designer's mockups as deliverables.
- Do not print final QR URL until the domain, availability and user flow are tested.

## What not to perfect yet

No full brand book, 10 logo variants, decorative micro-interactions, merchandise catalogue, or paid logo licensing before actual users can browse the guide.

## Heading font

The top “aon scéal” heading uses Uncial Antiqua (Astigmatic), a Celtic-style uncial display font. Button labels use the same Georgia serif font as the “Discover Dublin…” introduction. The decorative top title alone uses Uncial Antiqua; body copy retains its existing font. It is self-hosted from `public/fonts/uncial-antiqua/` with `font-display: swap` and a serif fallback; visitors do not contact a font service.

Source: [Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/uncialantiqua). The font is copyrighted and released under the SIL Open Font License 1.1, which permits free use, embedding and redistribution, including commercial websites. Keep the accompanying `OFL.txt` copyright and licence notice when distributing the font; do not sell the font by itself. The font name is reserved under that licence. This font licence does not establish clearance for the provisional product name.

Paper was lightened to `#F8F0DE` to retain the aged-paper feel with a brighter reading surface.

## Letterpress title treatment

Apply `.vintage-title` only to decorative display titles (currently the top “aon scéal”). Sharp subpixel text shadows suggest uneven ink edges and a shallow pressed impression, using the existing dark ink, paper and text colours. A faint 1.5px-blur shadow adds depth without blurring the letter shapes; there is no image replacement or text opacity reduction. Keep paragraphs and interactive controls untreated. A 1.3px outline (0.2px on screens below 600px) mixes 90% paper with 10% vintage rust for a slight orange tint. `paint-order: stroke fill` preserves the letter interiors. Forced-colours mode disables the shadows and outline. The title stays selectable HTML with an Irish language label.

Sparse flecks and small worn patches use the same pale orange as the outline, clipped inside the decorative title with CSS background clipping. A solid ink layer (94% vintage rust, 6% dark ink) slightly deepens the title while preserving the letter shapes. Browsers without clipping retain solid text; forced-colours mode restores the normal text fill. No image assets or duplicated text are used.

On mobile the decorative title uses a 1.8rem size and a 0.2px outline. The decorative title retains its full letterpress shadow treatment alongside the clipped flecks and outline. Programmatically focused route headings do not show an extra outline; interactive controls retain visible keyboard focus.

The mobile decorative title uses a reference-matched warm taupe fill (`#B59A82`, approximate visual match) and a 0.2px paper/rust outline. This is a title-only exception; the desktop title and global palette remain unchanged. Flecks and shadows remain in place.
