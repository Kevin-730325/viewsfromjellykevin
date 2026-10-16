# JellyKevin — The Red Studio

A static portfolio for AIGC direction, screenwriting, brand operations and videography.

Open `index.html` locally, or serve the folder with any static web server. GitHub Pages publishes the root of the `main` branch.

- Responsive masonry galleries with image previews.
- King Card, You Call the Shots and The Beat link directly to YouTube.
- AIGC Commercial features UI Demo V8 and selected AIGC imagery.
- `ui-demo.html` provides a standalone player. The web video is H.264/AAC, 720p, with fast-start playback; the original source video is unchanged.
- All gallery posters are stored locally. Google Fonts and YouTube playback require an internet connection.

## Film project pages

- `the-beat.html`: concise English story interpretation, 12 selected stills, and a Lovart workflow board.
- `king-card.html`: creative theme, selected frames, and a Lovart workflow board.
- `you-call-the-shots.html`: product capability breakdown.
- `projects.css` and `projects.js`: shared responsive design and accessible image viewer.
- `index.html#film` links directly to the film collection.

Project stills use WebP, explicit image dimensions and lazy loading. The two workflow boards retain their original resolution for full-size viewing.

## Hosting

Production: https://www.jellykevin.com (Vercel project `jellykevin/jellykevin-portfolio`). The GitHub `main` branch deploys automatically.

Fonts are served locally under their included SIL Open Font Licenses. The studio video loads on interaction; covered and idle animation work is suspended. Vercel serves the repository root as a static site, with browser caching for media.
