# Personal Website

A full-stack developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Local development

```sh
npm ci
npm run dev
```

The development server runs on port 8080.

## Production build

```sh
npm run build
npm run preview
```

Production files are generated in `dist/`. The production base path is `/Portfolio/`, configured in `vite.config.ts`.

## Deployment

```sh
npm run deploy
```

This builds the site and publishes `dist/` to the `gh-pages` branch.

## Linting

```sh
npm run lint
```
