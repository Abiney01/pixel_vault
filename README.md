# Pixel Vault — React + Vite + Redux Toolkit

A small React application scaffolded with Vite, using Redux Toolkit for state management and TailwindCSS for styling. This README describes how to run, build, and maintain the project.

## Live demo

Visit the live project: [Live link](https://abpixel.netlify.app)

**Quick summary**: React 19, Vite, Redux Toolkit, TailwindCSS, React Router, Axios, React Toastify.

**Main files & folders**
- `package.json`: project metadata & scripts.
- `vite.config.js`: Vite configuration and plugins.
- `src/`: source code (components, pages, api, redux slices).
- `src/api/mediaApi.js`: example API wrapper (Axios).
- `src/redux/`: store and feature slices (`collectionSlice.js`, `searchSlice.js`).
- `.gitignore`: files excluded from git (node_modules, build, env, caches).

**Tech stack**
- React 19
- Vite
- Redux Toolkit (`@reduxjs/toolkit`)
- React Router (`react-router-dom`)
- TailwindCSS
- Axios
- React Toastify

## Prerequisites
- Node.js (recommended 18+)
- npm (or pnpm/yarn if you prefer — `package.json` uses npm scripts)

## Setup

Install dependencies:

```bash
npm install
```

Start development server with hot reload:

```bash
npm run dev
```

Open http://localhost:5173 (or the URL shown by Vite).

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Environment variables
This project may use environment files for API keys or runtime config. Common names:
- `.env`
- `.env.local`

Do not commit sensitive environment files—this repo's `.gitignore` already excludes `.env*` files while keeping an example file pattern like `!.env.example`.

## Project structure (high level)

- `src/main.jsx` — app bootstrap and provider wiring (`react-redux` provider, router).
- `src/App.jsx` — top-level routes and layout.
- `src/pages/` — route pages (`HomePage.jsx`, `CollectionPage.jsx`).
- `src/components/` — UI components (`Navbar.jsx`, `SearchBar.jsx`, `ResultGrid.jsx`, `ResultCard.jsx`, `CollectionCard.jsx`, `Tabs.jsx`).
- `src/api/` — API clients (e.g. `mediaApi.js`).
- `src/redux/store.js` — Redux store configuration.
- `src/redux/features/` — feature slices (`collectionSlice.js`, `searchSlice.js`).

## Notes & recommendations
- Tailwind: `tailwindcss` and `@tailwindcss/vite` are included in `package.json`. Check `vite.config.js` for plugin setup.
- Redux Toolkit: use `createSlice` and `createAsyncThunk` for async logic and concise reducers.
- Routing: `react-router-dom` v7 APIs are in use; check `App.jsx` and route files.
- Linting: ESLint is configured; run `npm run lint` and fix issues before committing.

## Troubleshooting
- If the dev server fails to start, try removing `node_modules` and reinstalling:

```bash
rm -rf node_modules
npm install
```

- If ports are in use, Vite will prompt for a different port; follow the CLI instructions.



