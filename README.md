# Astral DS

A TypeScript + React design system built with Storybook 8. Single source of truth for tokens, components, and design decisions across every product your team ships.

---

## Quick start

```bash
# Clone the repo
git clone https://github.com/Designer-duh/Astral-DS.git
cd Astral-DS

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

Storybook runs at **http://localhost:6006**

---

## Token system

All design tokens live in `src/tokens/tokens.css` as CSS custom properties.

| Namespace | Prefix | Example |
|-----------|--------|---------|
| Colors | `--astral-color-*` | `var(--astral-color-brand-9)` |
| Font size | `--astral-font-size-*` | `var(--astral-font-size-m)` |
| Font weight | `--astral-font-weight-*` | `var(--astral-font-weight-700)` |
| Font family | `--astral-font-family-*` | `var(--astral-font-family-sans)` |
| Spacing | `--astral-units-pos-*` | `var(--astral-units-pos-16)` |
| Border radius | `--astral-border-radius-*` | `var(--astral-border-radius-m)` |

The raw primitive values are in `export.json` — `tokens.css` is auto-derived from it.

---

## Design MCP — AI-assisted design with token consistency

The repo ships a **Claude Code skill** at `.claude/commands/use-astral-ds.md`.

Open Claude Code from inside this folder and run:

```
/use-astral-ds
```

Claude will read `tokens.css` live, load all token context, and then build any screen or component you describe — using **only** Astral DS tokens. No raw hex values, no hardcoded px, no guessing.

**What it enforces:**
- Every color → `var(--astral-color-*)`
- Every spacing value → `var(--astral-units-pos-*)`
- Every font value → `var(--astral-font-*)`
- Every border radius → `var(--astral-border-radius-*)`

See the **Guides → Design MCP** page in Storybook for full documentation and the shareable copy-paste prompt for designers who don't use Claude Code.

---

## Project structure

```
Astral-DS/
├── .claude/
│   └── commands/
│       └── use-astral-ds.md     ← Claude Code skill
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   ├── astral-theme.ts          ← Sidebar/UI theme
│   └── manager-head.html        ← Custom sidebar CSS
├── src/
│   ├── tokens/
│   │   └── tokens.css           ← All CSS custom properties
│   └── stories/
│       ├── Introduction.mdx
│       ├── HowToUse.mdx
│       ├── DesignMCP.mdx        ← AI design workflow guide
│       └── foundation/
│           ├── Colors.stories.tsx
│           ├── Typography.stories.tsx
│           ├── Spacing.stories.tsx
│           └── BorderRadius.stories.tsx
└── export.json                  ← Raw token primitives
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook dev server |
| `npm run build-storybook` | Build static Storybook for hosting |

---

## Token source of truth

`export.json` → `tokens.css` → components

Never hardcode a value. Always reference a token variable.
