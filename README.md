# Expandable Profile Card

An interactive profile card that expands from an avatar preview into a profile and social-statistics layout. A single JavaScript class toggle coordinates the CSS transition sequence.

**Stack:** HTML5 · CSS3 · JavaScript

## Highlights

- Circular avatar, gradient action button, and layered shadows.
- Expand/collapse behavior through the `.change` class.
- Staggered reveal of the profile name, role, and social statistics.
- Plus icon rotation and button-width animation.
- Font Awesome icons loaded from a CDN.

## Run locally

Clone the repository and open `index.html` in a browser. There is no package installation or build step.

```sh
git clone https://github.com/itzhoman/CssCard.git
cd CssCard
```

Alternatively, serve the directory with your editor's static-server extension.

## Project structure

| Path | Responsibility |
| --- | --- |
| `index.html` | Profile card structure and social-statistics markup |
| `main.css` | Collapsed/expanded states and staggered transitions |
| `main.js` | Click handler that toggles the card state |
| `img.jpg` | Local avatar image |

## Customize

- Replace the name, role, and sample statistics in `index.html`.
- Replace `img.jpg` with your own avatar or update the image path.
- Tune animation durations and stagger delays in `main.css`.

## Current scope

The displayed follower counts are sample text, not data fetched from social platforms. Icons need access to the Font Awesome CDN. The card has a fixed width and height, so check small screens when adapting it.

## Try the interaction

1. Click the plus button to reveal the card details.
2. Click again to return to the collapsed state.

## Repository

[Source on GitHub](https://github.com/itzhoman/CssCard) · [Hooman Hajimohamadi](https://github.com/itzhoman)

Documentation reviewed against source commit [`e152116`](https://github.com/itzhoman/CssCard/commit/e152116e3d75c95cc6ba4e369cd40983b8125f8d).
