# BenSarks.github.io

My personal portfolio, built with React and Vite and served on GitHub Pages at **https://bensarks.github.io**.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Editing content

All text, projects, links and skills are in [`src/data.js`](src/data.js). Each project in `FEATURED` or `MORE` has a `links` array. To add a demo or video, add an entry such as `{ label: 'Demo video', href: 'https://...' }` and it appears on the card and in the details pop-up.

Local screenshots go in `public/assets/` and are referenced as `/assets/<file>`.

## Project structure

```
src/
  data.js              site content
  App.jsx              page layout and project-modal state
  components/          Header, Hero, Stats, FeaturedProjects, MoreProjects,
                       Skills, About, Contact, Footer, ProjectModal, ...
  hooks/useReveal.js   scroll-reveal and count-up animations
  styles/modernist.css Modernist design-system tokens and components
  styles/app.css       dark theme and page styles
```

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main`. One-time setup: in the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
