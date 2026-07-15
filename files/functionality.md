# Functionality

> Status: scaffold. Fill in `[TODO]` blocks once resume + reference vibe are shared.

## 1. Core Sections / Features

### Hero
- [TODO: name/title from resume]
- Short tagline / role (e.g. "Frontend Engineer" / "Product Designer")
- CTA buttons: View Work, Contact, Download Resume
- Entry animation on load

### About
- Bio paragraph — [TODO: pull/condense from resume summary]
- Profile photo or illustration
- Quick facts (location, current role, years of experience)

### Skills
- Categorized list — [TODO: populate from resume: languages, frameworks, tools, soft skills]
- Visual treatment: tags, progress bars, icon grid, or animated marquee — decide in design.md

### Experience / Timeline
- [TODO: populate roles, companies, dates, bullet achievements from resume]
- Layout: vertical timeline, stacked cards, or accordion

### Projects — "File Rail"
- Styled as a stack of file/tab panels (see design.md), not a plain grid — matches the archive concept.
- Four projects to display: LLM-Cost-Guard, Focus Lock, RagBench, Vectorized Neural Network from Scratch.
- Each "file" needs: mono-label tag (e.g. `FILE_01 // LLM-COST-GUARD`), title, short description, tech-stack pills, key metric callouts (e.g. "p95 110ms," "97.2% recall"), GitHub link.
- Click/tap opens the file to full detail (bullets from content.md); collapses back on close.
- Filtering: not needed at 4 projects — skip for v1.

### Education / Certifications (if applicable)
- [TODO: from resume]

### Contact
- Form fields: name, email, message
- Direct links: email, LinkedIn, GitHub, other socials — [TODO: pull from resume]
- Optional: downloadable resume PDF link

### Footer
- Social links, copyright, "back to top"

## 2. Interactions
- Custom cursor (optional, depends on vibe) — [TODO after reference]
- Smooth scroll / scroll-snap between sections
- Nav highlights active section on scroll
- Hover states on project cards (image reveal, tilt, overlay info)
- Loading/intro animation on first visit
- Dark/light mode toggle — wanted? [TODO]

## 3. Forms & Data Handling
- Contact form validation (required fields, email format)
- Submission handler: [TODO: Formspree / Resend / EmailJS / custom API route]
- Success/error states with feedback animation

## 4. Responsiveness
- Breakpoints: mobile (<640px), tablet (640–1024px), desktop (1024px+)
- Mobile nav: hamburger menu with animated drawer
- Animation intensity reduced on mobile for performance

## 5. Accessibility
- Respect `prefers-reduced-motion` — fallback to simple fades/no animation
- Keyboard navigable, focus states visible
- Alt text on all images
- Sufficient color contrast (check once palette is set in design.md)

## 6. Nice-to-haves (optional, flag if wanted)
- Blog/writing section
- Testimonials/recommendations
- View resume as PDF inline (not just download)
- Analytics (Plausible/GA)
- Easter egg / personality touch matching your "vibe"

---
### Open questions for you
1. Do you want a contact form, or just links (email/LinkedIn)?
2. Dark mode toggle, or single fixed theme?
3. Any sections beyond the standard (blog, testimonials, resume viewer)?
