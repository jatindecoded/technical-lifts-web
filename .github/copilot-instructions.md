# Technical Lifts - Copilot Instructions

## Project
Gym website for Technical Lifts, Vikaspuri, New Delhi.
We are adapting the mainline-nextjs-template (shadcnblocks) for this gym.

## Stack
- Next.js 15, React 19, TypeScript, App Router
- Tailwind CSS v4 (tokens in globals.css @theme, no tailwind.config.ts)
- shadcn/ui v4, lucide-react, next/font/google
- Static export for Cloudflare Pages

## Design tokens (use these Tailwind classes directly)
bg-primary, text-primary         -> neon yellow #E8FF00
bg-dark                          -> #0A0A0A
bg-surface                       -> #141414
bg-muted                         -> #2A2A2A
text-text-base                   -> #F5F5F5
text-text-muted                  -> #A0A0A0
font-heading                     -> Syne (bold, uppercase)
font-body                        -> Inter
py-section                       -> 6rem vertical padding
max-w-container                  -> 80rem max width

## Design identity
- Raw, editorial, premium training gym - NOT a wellness app
- Inspired by Nike Training / Gymshark editorial feel
- Dark backgrounds only, no light mode
- bg-primary used sparingly: one word in headlines, badges, main CTA only
- Typography uppercase and tight for headings: tracking-tight leading-none
- Cards: bg-surface border border-white/[0.08] rounded-xl, no box shadows
- Buttons: primary is bg-primary text-dark rounded-full font-heading uppercase
- Ghost button: border border-white/20 text-text-base rounded-full
- Left-aligned layouts on desktop, centered only for CTA sections
- Sections alternate between bg-dark and bg-surface

## Hard rules
- No inline styles
- No any types
- No hardcoded strings - everything from @/lib/constants.ts
- Semantic HTML: section, h2, p, ul, li
- Mobile-first responsive
- cn() from @/lib/utils for conditional classes
- Dark theme only, remove all light mode and theme toggle logic
- No login, no sign-up, no changelog, no blog routes needed

## Content source
All site content lives in src/lib/constants.ts
Never hardcode copy inside components.