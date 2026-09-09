# AGENTS.md

Instructions for AI agents working in this repository.

## Repository purpose

This repository implements the **Dark Mode Toggle** feature described in `UIFeatureDesign.md`.
The design document is the single source of truth. Code, issues, and pull requests all trace
back to a numbered section of that document.

## Tech stack

- React, functional components only (no class components)
- CSS Modules for component styles, CSS custom properties for theme values
- Theme state lives in `useContext`; do not add Redux unless an issue asks for it

## Design-to-issue-to-code workflow

Follow these steps in order. Do not skip ahead.

### 1. Read the design first

Before writing any code, read `UIFeatureDesign.md`. Every change must map to a section of it.
If a request is not covered by the design, stop and ask before implementing.

### 2. Turn design sections into issues

- One issue per design section or per self-contained deliverable.
- Issue title states the outcome, not the task (e.g. "Persist theme preference across reloads").
- Issue body must contain:
  - The design section it comes from, e.g. "From `UIFeatureDesign.md` section 7."
  - An **Acceptance criteria** checklist copied from the design's stated requirements.
- Search existing issues before creating a new one. Do not create duplicates.

### 3. Implement one issue at a time

- Create a branch named `issue-<number>-<short-slug>`, e.g. `issue-3-persist-theme`.
- Only change files needed for that issue. Do not fix unrelated things along the way.
- Commit messages reference the issue number, e.g. `Persist theme to local storage (#3)`.
- Open a pull request whose body includes `Closes #<number>`.

### 4. Verify before closing

An issue may only be closed when every acceptance criteria box is checked and:
- The feature works in Chrome, Firefox, Safari, and Edge (design section 8)
- No new console errors or warnings appear
- Keyboard and screen reader behaviour still matches design section 7

## Coding rules

1. **Naming**: `camelCase` for variables and functions, `PascalCase` for components and files
   that export a component. CSS Module classes use `camelCase`.
2. **No magic values**: theme names, storage keys, DOM attribute names, icons, and label text
   are named constants. See `src/theme/themeConstants.js`.
3. **Functions do one thing**: if a component needs a comment to explain a block in the middle,
   pull that block into its own function or hook.
4. **Error handling at boundaries only**: validate data coming from local storage, the network,
   or user input. Do not guard against states the code cannot reach.
5. **Comments explain why, not what**: only comment when the reason is not visible in the code.
6. **Accessibility is not optional**: any interactive element needs a keyboard path, a visible
   focus style, and an accessible name. Contrast must stay at or above 4.5:1.
7. **Theme colours belong in CSS custom properties**, defined once per theme in
   `src/theme/theme.css`. Components read the variables; they never hard-code a colour.
8. **Minimal, targeted changes**: do not refactor or reformat files the issue does not touch.

## File layout

```
src/
  App.jsx                          app root, wraps everything in ThemeProvider
  theme/
    themeConstants.js              theme names, storage key, DOM attribute
    ThemeContext.jsx               ThemeProvider and useTheme hook
    theme.css                      light and dark custom properties
  components/
    AppHeader.jsx                  header, holds the toggle and profile icon
    DarkModeToggle.jsx             the toggle switch itself
    *.module.css                   styles matching the component of the same name
```

## Do not

- Do not commit secrets, tokens, or API keys.
- Do not add a dependency without an issue explaining why it is needed.
- Do not change the design document to match the code; change the code to match the design.
