# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 with static output, plus Keystatic 6 as the content source, deployed to GitHub Pages by a GitHub Actions workflow on every push to `main`. Content lives in `content/` and is authored through the Keystatic admin while running `astro dev`; the admin is deliberately absent from production builds because GitHub Pages cannot serve its server-rendered API routes, so the shipped artifact is fully prerendered with no adapter and no secrets. No client-side framework on the public page: the only script is a small hand-written vanilla file. Fonts are self-hosted.

## Users

Primary: potential clients and contractors evaluating Tomás Banchio for a build — small businesses, municipal or enterprise teams, agencies that need a full-stack hand. They arrive from a referral, a message, or a repo link, usually on desktop, sometimes on a phone, and they decide in under two minutes whether this person can own a project end to end.

Secondary: recruiters and technical leads running the same scan for a full-stack role (local or remote). They need stack, time in the job, and evidence of shipped work.

## Product Purpose

A one-page professional record: who he is, where he has worked, what he can build with, what he has shipped, and how to reach him. Success is a visitor who can name his stack, his two employers, one thing he built, and the way to contact him — without scrolling twice.

## Positioning

Full stack in the ownership sense, not the keyword sense: he takes a workflow from the client conversation to a deployed system. The evidence is concrete — a municipal paperwork product (React, TypeScript, NestJS, SQL) with Mercado Pago and Plus Pago payment gateways, OIDC identity through Keycloak, an admin back office, and Docker on on-premise infrastructure; an enterprise AI-agent platform in Next.js with per-organization access control and .NET integrations.

## Operating Context

GitHub Pages, one static page. Visitors compare him against agency quotes and other devs' portfolios. Employers in the record are private/proprietary: their products cannot be linked and their internals cannot be shown. Public repositories are the only linkable evidence and they are documented on GitHub itself.

## Capabilities and Constraints

- Languages: C#, TypeScript, JavaScript, PHP, SQL.
- Frontend: React, Next.js. Backend: ASP.NET Core, NestJS, Node.js, Laravel, REST APIs, OIDC, Keycloak, GeneXus, WorkWithPlus.
- Data and infrastructure: PostgreSQL, SQL Server, Docker, Terraform, Linux, AWS, Azure.
- Practices: Git, CI/CD, Claude Code (AI-assisted development), agile teams.
- Employment: Crombie, Santa Fe (Sep 2025 – present); Neuronic, Rosario (May 2023 – Jun 2025).
- Education: Tecnicatura Superior en Desarrollo de Software, Instituto Tecnológico El Molino (Mar 2023 – Dec 2025); Bootcamp Full Stack, Cloud y CI/CD, Crombie Code Academy (Nov 2024 – Jul 2025).
- Certifications: GeneXus Bootcamp 180h (Neuronic, 2024); Argentina Programa 4.0 #YoProgramo (CESSI, 2022); Diplomatura en Programación Web Full Stack (UTN); .NET 8 Web y Azure Services (Udemy); Diploma Crombie Code Academy.
- Languages: Spanish native, English B1.
- Location and contact are exactly the ones in the CV: Esperanza, Santa Fe, Argentina; the phone number and email already published on the site's predecessor; linkedin.com/in/tbanchio; github.com/tomiban.
- Constraint: employer product internals are private; no screenshots, no invented metrics, no client names beyond the employer.
- Constraint: one page, static output, no client framework, no hosted stylesheets or third-party runtime. The CMS is an authoring tool, never a production dependency.

## Brand Commitments

- Spanish copy with English technical jargon, as in the CV.
- Voice: direct, technical, no marketing register. The predecessor site already signs off with "Low Tek, High Life." — keep the signature.
- No invented claims: no fake clients, metrics, testimonials, or benchmarks.
- Aesthetic pinned by the owner: brutalist, early-2000s web and print culture. Not a modern-minimal portfolio wearing a retro typeface.
- Explicitly rejected: anything that reads as an AI-generated template, aesthetics at the cost of readability, fabricated achievements.

## Evidence on Hand

- CV: `/home/tomiban/Descargas/CV-TomasBanchio.pdf` (source of every employment, education, certification, and skill fact).
- Public repositories under github.com/tomiban (verified 2026-10-28): `agentic-pm`, `peso-a-peso-app`, `modikra-website`, `restaurant-clean-architecture`, `veterinariapp-API`, `veterinariapp-FE`, `mi-tienda-react`, `simulador-sorteo-qatar`, `hotel-management-sys`, `tomiban` (profile README).
- Live demo: `https://tomiban.github.io/mi-tienda-react/`.
- Product record for design work: `PRODUCT.md`; recorded visual system: `DESIGN.md`.
- Absent: employer product URLs, screenshots, usage metrics, client testimonials, published benchmarks. None may be fabricated.

## Product Principles

1. Evidence over adjectives: every claim points at a job, a repo, or a certificate.
2. One screen of scanning beats one page of reading: the record must survive a two-minute visit.
3. Own the whole path: the story is integration and delivery (payments, identity, deploy), not a stack list.
4. Private work stays described in terms of what was built, never dressed as a public case study.
5. The aesthetic is a commitment, the information is the product: no ornament that costs a fact its legibility.

## Accessibility & Inclusion

Semantic HTML, keyboard reachable, visible focus, contrast at WCAG AA or better, `prefers-reduced-motion` honoured, no text conveyed solely by colour. Language: `es`.
