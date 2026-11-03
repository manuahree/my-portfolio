# Manushree Upadhyaya — Portfolio

A responsive portfolio built with HTML5, CSS3 and vanilla JavaScript. Includes an illustrated nighttime workspace, ambient lighting and coffee-steam animations, academic project case studies, resume downloads and a separate daytime imagination page.

## Run locally

Open index.html in your browser. No installation or build is required.

For an optional local server, open a terminal in this folder and run:

```sh
python -m http.server 8000
```

Visit http://localhost:8000. Clipboard copying may require HTTPS or localhost.

## Files

- index.html: portfolio, navigation, introduction, About, Resume and Contact.
- style.css: layout, typography, owl logo styling, scenery effects and responsive rules.
- script.js: PROFILE and PROJECTS data, project filters, dialogs and transition controls.
- imagination.html: separate daytime imagination page.
- imagination.js: THOUGHTS array and quote/pause controls.
- assets/: local artwork and both resume PDFs.

## Edit

Update personal details, skills and project content in PROFILE and PROJECTS in script.js. Change introductory/About copy directly in index.html. Edit THOUGHTS in imagination.js to change the personal quotes; also update the first static quote in imagination.html for the no-script fallback. Replace the resume PDFs in assets using their existing filenames. The layout and animations can be adjusted in style.css. Respect reduced-motion settings and retain accessible controls when changing effects.

## Push to a new GitHub repository

1. Create a new public repository named portfolio under manuahree. Leave it empty: do not initialize a README, license or gitignore because this folder supplies the source.
2. Open a terminal in this extracted folder and run:

```sh
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/manuahree/portfolio.git
git push -u origin main
```

Authenticate using your own GitHub account if prompted. If the repository already exists or uses a different name, use its actual remote URL instead. Do not force-push over existing work.

## Publish with GitHub Pages

Open the repository Settings → Pages. Choose Deploy from a branch, select main and /(root), then Save. When deployment finishes, use the Visit site link shown in Pages settings.

For a repository named portfolio under manuahree, the expected address is:

```text
https://manuahree.github.io/portfolio/
```

This address becomes live only after repository creation and successful Pages deployment. Relative asset paths support project-site hosting. Keep index.html at the repository root. The included .nojekyll file disables unnecessary processing.

Official setup reference: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Features and boundaries

The public portfolio requires no login or backend. Academic projects and illustrative covers are identified clearly. The scene uses painted artwork with ambient CSS/SVG animation, not full character-animation video. Original application screenshots can be added later. Personal data in the contact section and resume files becomes public when published.
