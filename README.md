# Sepsensor Website

Static website for Sepsensor, prepared for GitHub Pages.

## Structure

- `index.html`: landing page
- `styles.css`: site styles
- `script.js`: small interaction layer
- `assets/`: public images used by the site
- `.nojekyll`: prevents Jekyll processing on GitHub Pages

## Local Preview

Run:

```bash
python3 -m http.server 4173 --directory .
```

Then open:

```text
http://127.0.0.1:4173
```

## Publish To GitHub Pages

This folder is intended to be pushed as its own repository.

Recommended flow:

1. Create a new GitHub repository.
2. Push the contents of this folder to the repository root.
3. In GitHub Pages settings, deploy from the default branch root.

## Current Content Standards

- Product name: `Sepsensor`
- Time claim: `under 30 minutes`
