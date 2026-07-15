# Design (with Animation)

> Status: scaffold. This file gets the biggest rewrite once you send reference vibes — everything below is placeholder structure, not final direction.

## 1. Visual Direction
- **Overall vibe: "Personal Archive" / File-Folder System.** Minimal, professional, editorial — but built around the metaphor of files, folders, tabs, and index cards rather than generic cards/grids. Reads as "here is my organized body of work," fitting for an engineering/research background (research logs, project files, appointment letters).
- **Reference notes:**
  - Ref 1 (folder desktop mockup): warm cream/paper background, oversized blue file-folder icon as a hero element, mixed serif-script + bold serif wordmark ("designer" script + "portfolio" bold), small labeled thumbnails scattered like desktop files, generous whitespace, restrained color — overall calm and professional despite the playful folder icon.
  - Ref 2 (Grid Daily): stacked vertical "tabbed folder" panels, each with a index-tab header (e.g. `CODE_002 //`, `FILE_01//`), textured paper backgrounds, monospace/technical labels mixed with bold display type, muted earthy palette (olive, tan, cream, near-black), archival/logbook feel.
- **Synthesis for this site:** treat each **project as a "file"** in a tabbed archive — a vertical or horizontal stack of folder-tab panels the user can click/hover to "open." Use monospace micro-labels (`FILE_01 // LLM-COST-GUARD`) for structure, paired with a confident serif or bold sans for headings. Keep the palette calm and paper-like, not neon-techy — professional first, playful/engaging second (via the folder/tab motif, not via color).

## 2. Color Palette
| Role | Color | Notes |
|---|---|---|
| Background | `#F3EEE4` (warm cream/paper) | matches ref 1's desktop background |
| Primary text | `#241C15` (near-black warm brown) | avoid pure black — softer, archival |
| Accent | `#4A7FB5` (folder blue) | from ref 1's file-folder icon — used for CTAs, folder icons, links |
| Secondary accent | `#6B6B4A` (olive/tan) | from ref 2 — used for tab labels, dividers, "FILE_//" tags |
| Muted/border | `#D8D0C0` | hairline borders, card edges, paper texture shadows |

- Dark mode: optional, not essential to this concept — the paper/archive aesthetic is inherently light-mode. Can revisit later if wanted.

## 3. Typography
- **Display/heading font:** a confident serif or bold slab (e.g. "Fraunces," "Instrument Serif," or "Bricolage Grotesque") for section titles — echoes the bold "portfolio" wordmark in ref 1.
- **Accent/script font (sparing use):** an italic script (e.g. "Playfair Display Italic" or "Instrument Serif Italic") for one or two signature moments — name treatment on the hero, section eyebrows — like the "designer" script in ref 1. Don't overuse; it's a seasoning, not the whole system.
- **Label/monospace font:** e.g. "JetBrains Mono" or "IBM Plex Mono" for file tabs, tags, metadata (`FILE_01 //`, tech-stack pills, dates) — echoes ref 2's tab labels.
- **Body font:** a clean grotesk/sans (e.g. "Inter" or "General Sans") for readability.
- **Weight usage:** headings bold, mono labels medium/uppercase with letter-spacing, body regular.

## 4. Layout & Spacing
- Grid system: 12-col desktop, single column mobile.
- Spacing scale: Tailwind default (4px base).
- Max content width: ~1200px, with the folder/tab stack allowed to breathe wider on desktop.
- Whitespace philosophy: airy and spacious like ref 1 (not dense) — the "archive" should feel curated, not cluttered, even though the underlying metaphor is a stack of files.

## 5. Animation Strategy

### Principles
- **Snappy and confident, not slow/cinematic** — this is a systems/backend engineer's site; the motion should feel precise and mechanical (like a drawer sliding, a tab clicking into place), not dreamy or floaty.
- Consistent easing curve: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) for opens/reveals; a slightly snappier `cubic-bezier(0.4, 0, 0.2, 1)` for clicks/toggles.
- Duration guide: micro-interactions 150–250ms, section reveals 400–600ms, folder-open transitions 350–500ms.

### Page Load / Intro
- Hero folder icon (echoing ref 1) animates in first — subtle drop/settle motion, like a file landing on a desk.
- Name types in or staggers in letter-by-letter in the script accent font, immediately followed by the bold role/title line.
- Nav and tab labels fade/slide in last, in sequence, mimicking tabs "clicking" into a folder rail.

### Scroll Animations
- Each project "file" panel slides/fades up into place as it enters viewport, tab label animating in slightly ahead of the content (label first, then content — mimics a tab being pulled forward).
- Skill tags stagger in as small mono-font "chips," like index cards being dealt out.
- Subtle parallax on background paper-texture layer only — never on text, to keep it feeling precise rather than dreamy.

### Page Transitions (project list → detail)
- Clicking a project "file" expands/opens it — a shared-element transition where the tab panel grows to fill the viewport (like opening a folder), rather than a generic route crossfade. This is the signature interaction of the whole site.
- Closing returns it to its place in the stack with the reverse animation.

### Micro-interactions
- Project tab hover: tab shifts forward slightly (translateX), label brightens, a thin accent-blue underline draws in.
- Button hover: subtle scale (1.02) + background color shift, no bounce.
- Nav link hover: underline draws left-to-right in the mono font's letter-spacing rhythm.
- Cursor-follow effects: skip — keep interactions grounded in the elements themselves (tabs, folders) rather than a custom cursor gimmick; it fits the "precise, professional" read better.

### Reduced Motion
- All animations degrade gracefully to simple opacity fades when `prefers-reduced-motion: reduce` is set

## 6. Imagery & Iconography
- Icon set: [TODO — Lucide, Phosphor, custom]
- Photography vs illustration vs 3D — [TODO]
- Project thumbnails: consistent aspect ratio, treatment (grayscale-to-color on hover, etc.)

## 7. Design Tokens (for implementation)
```css
:root {
  --color-bg: [TODO];
  --color-text: [TODO];
  --color-accent: [TODO];
  --font-display: [TODO];
  --font-body: [TODO];
  --ease-default: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 200ms;
  --duration-medium: 500ms;
  --duration-slow: 800ms;
}
```

---
### Remaining open questions for you
1. Does the "each project = a file/tab you open" interaction feel right as the *main* mechanic, or would you rather keep it as a visual motif (tab-styled cards) without the full open/expand animation?
2. OK with dropping phone number from the public site (keeping email + LinkedIn + GitHub as primary contact)?
3. Any preference between the two font pairing options above, or want me to just pick one and run with it?
