# LM Website

A Modern redesign of the LM Distribuidora institutional website, focused on improving visual experience, brand perception, and user engagement while preserving the original content structure.
Built with React and Vite. The project is organized as a single-page experience with multiple branded sections focused on motorcycles, bicycles, logistics, company history, and contact.

## Tech Stack

- React 18
- Vite 6
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide React
- React Slick

## Project Structure

```
Site LM
├─ api
├─ ATTRIBUTIONS.md
├─ guidelines
│  └─ Guidelines.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ brazil-map.svg
│  ├─ choho.png
│  ├─ dahon.jpg
│  ├─ fsa.png
│  ├─ high one.jpg
│  ├─ Leovince.webp
│  ├─ logo.png
│  ├─ logoFooter.png
│  ├─ logoLM.png
│  ├─ mosso.png
│  ├─ scud.png
│  ├─ sentec.jpg
│  ├─ values
│  │  ├─ agimos-com-proposito.png
│  │  ├─ cultura-maior-ou-igual.png
│  │  ├─ edificamos-pessoas.png
│  │  ├─ eticos-em-todas-as-acoes.png
│  │  ├─ honra-coragem-tradicao.png
│  │  ├─ movidos-por-desafios.png
│  │  ├─ paixao-de-dono.png
│  │  └─ profissionalismo-simplicidade.png
│  ├─ vedamotors.jpg
│  ├─ videoHero.mp4
│  ├─ warehouse
│  │  ├─ careers-office.jpeg
│  │  ├─ galpao1.jpg
│  │  ├─ galpao2.jpg
│  │  ├─ galpao3.jpg
│  │  ├─ galpao4.jpg
│  │  ├─ galpao5.jpg
│  │  ├─ galpao6.jpg
│  │  ├─ galpao7.jpg
│  │  ├─ galpao8.jpg
│  │  ├─ galpaoFora.jpg
│  │  └─ galpaofora2.jpg
│  ├─ wg.jpg
│  └─ x11.png
├─ README.md
├─ server
├─ src
│  ├─ app
│  │  ├─ App.tsx
│  │  ├─ components
│  │  │  ├─ About.tsx
│  │  │  ├─ Brands.tsx
│  │  │  ├─ Careers.tsx
│  │  │  ├─ Contact.tsx
│  │  │  ├─ figma
│  │  │  │  └─ ImageWithFallback.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Hero.tsx
│  │  │  ├─ Logistics.tsx
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ Stats.tsx
│  │  │  ├─ Testimonials.tsx
│  │  │  ├─ Timeline.tsx
│  │  │  ├─ ui
│  │  │  │  ├─ accordion.tsx
│  │  │  │  ├─ alert-dialog.tsx
│  │  │  │  ├─ alert.tsx
│  │  │  │  ├─ aspect-ratio.tsx
│  │  │  │  ├─ avatar.tsx
│  │  │  │  ├─ badge.tsx
│  │  │  │  ├─ breadcrumb.tsx
│  │  │  │  ├─ button.tsx
│  │  │  │  ├─ calendar.tsx
│  │  │  │  ├─ card.tsx
│  │  │  │  ├─ carousel.tsx
│  │  │  │  ├─ chart.tsx
│  │  │  │  ├─ checkbox.tsx
│  │  │  │  ├─ collapsible.tsx
│  │  │  │  ├─ command.tsx
│  │  │  │  ├─ context-menu.tsx
│  │  │  │  ├─ dialog.tsx
│  │  │  │  ├─ drawer.tsx
│  │  │  │  ├─ dropdown-menu.tsx
│  │  │  │  ├─ form.tsx
│  │  │  │  ├─ hover-card.tsx
│  │  │  │  ├─ input-otp.tsx
│  │  │  │  ├─ input.tsx
│  │  │  │  ├─ label.tsx
│  │  │  │  ├─ menubar.tsx
│  │  │  │  ├─ navigation-menu.tsx
│  │  │  │  ├─ pagination.tsx
│  │  │  │  ├─ popover.tsx
│  │  │  │  ├─ progress.tsx
│  │  │  │  ├─ radio-group.tsx
│  │  │  │  ├─ resizable.tsx
│  │  │  │  ├─ scroll-area.tsx
│  │  │  │  ├─ select.tsx
│  │  │  │  ├─ separator.tsx
│  │  │  │  ├─ sheet.tsx
│  │  │  │  ├─ sidebar.tsx
│  │  │  │  ├─ skeleton.tsx
│  │  │  │  ├─ slider.tsx
│  │  │  │  ├─ sonner.tsx
│  │  │  │  ├─ switch.tsx
│  │  │  │  ├─ table.tsx
│  │  │  │  ├─ tabs.tsx
│  │  │  │  ├─ textarea.tsx
│  │  │  │  ├─ toggle-group.tsx
│  │  │  │  ├─ toggle.tsx
│  │  │  │  ├─ tooltip.tsx
│  │  │  │  ├─ use-mobile.ts
│  │  │  │  └─ utils.ts
│  │  │  └─ Values.tsx
│  │  └─ hooks
│  ├─ main.tsx
│  └─ styles
│     ├─ fonts.css
│     ├─ index.css
│     ├─ tailwind.css
│     └─ theme.css
└─ vite.config.ts

```

## Main Sections

- `Hero`: landing section with background video
- `About`: company positioning and feature highlights
- `Stats`: business scale and national distribution coverage
- `Timeline`: company history milestones
- `Brands`: motorcycle and bicycle brand carousel
- `Logistics`: logistics infrastructure and delivery positioning
- `Values`: company values grid
- `Testimonials`: partner testimonials carousel
- `Careers`: recruitment and culture section
- `Contact`: contact information and contact form

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

## Notes

- Static assets are served from `public/`.
- Most page content lives directly inside section components under `src/app/components/`.
- The website uses a light/dark section rhythm and custom theme utilities defined in `src/styles/theme.css`.
- Some UI dependencies are present in the project even if not all of them are currently used by the landing page.

## Customization

To update the website:

- edit text and layout inside `src/app/components/`
- replace or add assets inside `public/`
- update global colors, surfaces, and utility styles in `src/styles/theme.css`

## Scripts

- `npm run dev`: run the local Vite development server
- `npm run build`: generate the production build in `dist/`

## Acknowledgements

Special thanks to LM Distribuidora for the opportunity to work on this project and contribute to the modernization of its institutional presence.

Also, sincere thanks to my colleagues and team members for their collaboration, insights, and support throughout the development process.

