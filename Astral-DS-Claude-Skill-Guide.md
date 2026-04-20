# Astral DS — Claude Skill Install Guide

## What it does

Activates Claude as a token-aware UI engineer. When you run `/astral-ds`, Claude reads the live design tokens and builds any screen or component using **only** Astral DS variables — no hardcoded colors, spacing, or fonts.

---

## Option 1 — Inside the repo (easiest)

The skill is already baked in. Just:

1. Clone the repo
   ```bash
   git clone https://github.com/Designer-duh/Astral-DS.git
   cd Astral-DS
   ```

2. Open Claude Code from inside that folder
   ```bash
   claude
   ```

3. Type `/astral-ds` — it appears in autocomplete, hit Enter

That's it. Claude reads `src/tokens/tokens.css` live and locks onto the tokens.

---

## Option 2 — Global install (works from any folder)

Do this once and `/astral-ds` is available everywhere on your machine, even outside the repo.

**Step 1** — Create the commands folder if it doesn't exist
```bash
mkdir -p ~/.claude/commands
```

**Step 2** — Copy the skill file
```bash
curl -o ~/.claude/commands/astral-ds.md \
  https://raw.githubusercontent.com/Designer-duh/Astral-DS/main/.claude/commands/astral-ds.md
```

**Step 3** — Restart Claude Code, then type `/astral-ds` from any project

> ⚠️ When using globally (outside the repo), Claude can't read `tokens.css` live. Paste the token CSS into your chat or point Claude at the Storybook URL for full context.

---

## Using it

Once the skill is active, just describe what you want:

```
/astral-ds

Build a settings page with a profile section, notification toggles,
and a danger zone for account deletion.
```

```
/astral-ds

Create a data table component with sortable columns, a search bar,
and row hover states.
```

Claude will use **only** Astral tokens — `var(--astral-color-*)`, `var(--astral-units-pos-*)`, `var(--astral-font-*)`, `var(--astral-border-radius-*)` — in every line of output.

---

## Requirements

- [Claude Code](https://claude.ai/download) installed (`npm install -g @anthropic-ai/claude-code` or via the app)
- An Anthropic account
