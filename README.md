# Huayi Chen — Research Portfolio

A clean, single-page research portfolio focused on computer vision, machine learning, publications, selected engineering work, and experience.

Live site: [huayi-chen.com](https://huayi-chen.com/)

## Highlights

- Semantic, accessible HTML with a responsive mobile navigation
- Research-first layout with publications placed before projects
- Lightweight vanilla CSS and JavaScript with no frontend framework or runtime dependency
- Optimized project imagery and reduced page weight
- Open Graph, structured data, canonical URL, sitemap, and robots metadata

## Local preview

From the repository root, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```text
index.html              Page content and metadata
css/style.css           Design system and responsive layout
js/script.js            Navigation and active-section behavior
images/portfolio/       Optimized project images
robots.txt              Search crawler guidance
sitemap.xml             Canonical page location
```

## Deployment

The site is a static GitHub Pages site served from the repository's default branch. The custom domain is configured through `CNAME`.

When updating research or project content, keep descriptions factual and update both the visible page and its metadata where relevant.
