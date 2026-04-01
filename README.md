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

```text
src/
  app/
    App.tsx
    components/
      Navbar.tsx
      Hero.tsx
      About.tsx
      Stats.tsx
      Timeline.tsx
      Brands.tsx
      Logistics.tsx
      Values.tsx
      Testimonials.tsx
      Careers.tsx
      Contact.tsx
      Footer.tsx
  styles/
    fonts.css
    index.css
    tailwind.css
    theme.css
public/
  logo assets
  section images
  videoHero.mp4
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
