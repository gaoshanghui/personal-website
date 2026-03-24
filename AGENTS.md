# AGENTS.md

This is a minimal Next.js personal website built with the App Router.

## Guidance

- Keep the site intentionally simple.
- Prefer modern Next.js patterns and official defaults where practical.
- Avoid reintroducing unused pages, components, or assets.
- Use `pnpm` for package management.
- Keep global styling in `app/globals.css`, including tokens, fonts, text styles, shadow styles, and minimal app-wide rules.
- Prefer Tailwind CSS for page layout, spacing, responsive behavior, and straightforward component styling.
- Use CSS Modules only when component styling becomes hard to express clearly with utilities, such as complex states, pseudo-elements, or dense visual rules.
- Do not redefine design tokens inside components; pull colors, typography, spacing, radius, and shadows from the shared global token layer.
- Prefer shared text style classes such as `text-display`, `text-headline-*`, and `text-body-*` instead of re-declaring font values in each component.
- Keep component APIs semantic, such as `variant`, `size`, or `tone`, rather than exposing styling implementation details.
- Match Figma faithfully first, then abstract only after repeated patterns are proven in the codebase.
