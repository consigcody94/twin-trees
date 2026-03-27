# The Twin Trees

### Etz Chaim & Qliphoth — United Through Da'at

A real-time interactive 3D visualization of the Kabbalistic Tree of Life and Tree of Death, connected through the invisible sephira Da'at, built entirely in the browser with Three.js and WebGL.

---

## Overview

This project renders the complete dual-tree system of Hermetic Qabalah in full 3D:

- **Tree of Life (Etz Chaim)** — The 10 Sephiroth with golden paths, representing divine emanation from Kether (Crown) down to Malkuth (Kingdom)
- **Tree of Death (Qliphoth)** — The 10 shadow shells with crimson tunnels, representing the adverse forces that mirror each Sephira
- **Da'at (The Abyss)** — The hidden 11th sephira positioned between the Supernal Triad and the lower seven, serving as the gateway between both trees
- **22 Paths** — Each labeled with its Hebrew letter, English meaning, Tarot correspondence, and astrological attribution

The two trees are rendered as flat planes stacked vertically (like pancakes), with Da'at floating between them — connected by energy tunnels — following the 3D interpretation described in traditional Kabbalistic texts.

---

## Features

| Feature | Description |
|---|---|
| **Pancake Layout** | Trees rendered as flat horizontal planes stacked with Da'at between them |
| **Interactive Nodes** | Click any sephira/qlipha to see its Hebrew name, meaning, divine name, archangel, and description |
| **22 Path Labels** | Every path displays its Hebrew letter and is clickable for Tarot + element info |
| **Lightning Flash** | Animated bolt tracing the path of divine emanation (1 → 2 → 3 → ... → 10) |
| **Sacred Geometry** | Toggleable Metatron's Cube / Flower of Life overlay |
| **Da'at Shell** | Pulsing torus rings and energy tunnels connecting both trees through the Abyss |
| **Layout Toggle** | Switch between Vertical and Horizontal orientations with smooth animated transitions |
| **Four Worlds** | Color-coded world labels (Atziluth, Briah, Yetzirah, Assiah) along the side |
| **Starfield** | Procedural background star field with depth |
| **Bloom Post-Processing** | UnrealBloomPass for glowing ethereal light effects |
| **Orbit Controls** | Full 3D camera rotation, zoom, and pan |
| **Mobile Responsive** | Touch controls, adaptive UI sizing |

---

## Tech Stack

- **Three.js r164** — 3D rendering engine
- **WebGL 2** — Hardware-accelerated graphics
- **UnrealBloomPass** — Post-processing glow effects
- **OrbitControls** — Camera interaction
- **Vanilla JS** — Zero dependencies beyond Three.js (loaded via CDN)
- **Single HTML file** — Entire application in one `index.html`

---

## Kabbalistic Accuracy

Positions and correspondences are sourced from traditional texts:

- **Sephiroth positions** follow the standard three-pillar layout (Severity, Mildness, Mercy)
- **Da'at** is correctly placed below Chokmah/Binah and above Chesed/Geburah — in the Abyss — per the Zohar and Lurianic tradition
- **Qliphoth** use the same pillar layout as their sephirotic mirrors (not inverted)
- **22 Paths** map to the Hebrew alphabet with Golden Dawn Tarot correspondences
- **Divine Names, Archangels, Demonic rulers** for each sphere follow the Hermetic Qabalah system

---

## Deployment

Hosted on **Cloudflare Pages**:

```
https://twin-trees.pages.dev
```

To deploy your own:

```bash
npx wrangler pages deploy . --project-name=twin-trees
```

---

## Local Development

No build step required — just serve the HTML file:

```bash
npx serve .
# or
python -m http.server 8080
```

Open `http://localhost:8080` in a WebGL-capable browser.

---

## Controls

| Input | Action |
|---|---|
| **Left drag** | Rotate camera |
| **Right drag** | Pan camera |
| **Scroll** | Zoom in/out |
| **Click node** | Show sephira/qlipha info panel |
| **Click path** | Show path Hebrew letter, Tarot, element |
| **Toggle buttons** | Show/hide trees, Da'at, sacred geometry, lightning flash |
| **Layout button** | Switch between Vertical / Horizontal orientation |

---

## License

MIT

---

*As above, so below. As within, so without.*
