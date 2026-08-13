# Jude Watimongo Portfolio

A dependency-free static portfolio designed for GitHub Pages. It uses relative asset links, so it works from a repository subpath without configuration.

## Run locally

Open `index.html` in a browser, or use a local static server such as `npx serve .`.

## Publish with GitHub Pages

1. Create a GitHub repository named `jude-watimongo-portfolio` and push this folder to its `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. Save. GitHub will provide the public address after deployment.

## Updating content

- Biography, projects, skills, experience and contact details: `index.html`
- Project modal details: `script.js`
- Theme, layout and responsive design: `styles.css`
- Portrait/project images: `assets/images/`
- Downloadable CV: `assets/cv/Jude-Watimongo-CV.pdf`

When replacing an asset, preserve its filename or update each matching reference in `index.html`.
