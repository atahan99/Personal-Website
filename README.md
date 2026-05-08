# Portfolio Website

This repository contains a personal portfolio website built with Next.js and Chakra UI.

## Modernization and security upgrade

This project was upgraded from an older stack to a modern, security-hardened baseline.


| Area                  | Before                          | Current                         |
| --------------------- | ------------------------------- | ------------------------------- |
| Next.js               | 12.0.7                          | 15.5.15                         |
| React / React DOM     | 17.0.2 / 17.0.2                 | 18.3.1 / 18.3.1                 |
| eslint-config-next    | 12.0.7                          | 15.5.15                         |
| ESLint                | 8.6.0                           | 9.39.1                          |
| Prettier              | 2.5.1                           | 3.8.3                           |
| Security audit status | Multiple high/critical findings | 0 vulnerabilities (`npm audit`) |


### Notes about Next.js 16

- The repository is currently on **Next.js 15.5.15** because it is fully verified with this codebase.
- Next.js 16 requires newer runtime/tooling expectations (notably Node 20+ in environments).
- A follow-up upgrade from 15 to 16 can be done as a separate step once runtime parity is confirmed.

## Project timeline

- Original project publish period: 2021-2022
- Cleanup update: 2026 privacy and public-repo hardening pass
  - Removed direct PII from source and assets
  - Replaced identifying profile/cover images with placeholders
  - Moved configurable public profile fields to environment variables
  - Replaced hosted resume PDF with "available on request" flow

## Fork

[Forked from Craftzdog](https://github.com/craftzdog/craftzdog-homepage)

## Stack

- [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React
- [Framer Motion](https://www.framer.com/motion/) - An animation library for React

## Project structure

```
$PROJECT_ROOT
│   # Page files
├── pages
│   # React component files
├── components
│   # Non-react modules
├── lib
│   # Static files 
└── public
```

## Deployment

- Deployed on [Vercel](https://vercel.com/)

## Configuration

Copy `.env.example` to `.env` and fill in your own public profile values:

```bash
cp .env.example .env
```

## Local development

```bash
npm install
npm run dev
```

---

