# 🖼️ Interactive React Gallery Application

![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A lightweight, responsive image gallery showcase application built with **React** and **Vite**. Built to demonstrate modern component patterns, smooth image preview workflows, and clean responsive CSS styling without heavy third-party UI libraries.


##  Key Features

-  **Responsive Masonry/Grid Layout:** Automatically adjusts image placement and column counts based on screen width.
-  **Lightbox Modal Preview:** Click-to-enlarge modal dialog for high-resolution photo examination.
-  **Instant HMR & Optimized Bundling:** Lightning-fast cold start and dev server speeds powered by Vite.
-  **Modular Styling:** Styled using scoped CSS modules to prevent global style bleed and ensure clean component isolation.
-  **Accessible UI:** Keyboard navigation support (`Escape` key modal closing, focus management) and accessible ARIA attributes.

##  Tech Stack

- **Core Framework:** [React 18+](https://react.dev/)
- **Build Tooling:** [Vite](https://vitejs.dev/)
- **Language:** JavaScript (ES6+)
- **Styling:** CSS Modules / Vanilla CSS
- **Code Quality:** ESLint with React Fast Refresh rules

##  Repository Structure

```text
Gallery-Project/
├── public/              # Static media assets and favicons
├── src/
│   ├── assets/          # Project images, icons, and vector graphics
│   ├── components/      # Modular UI (GalleryGrid, ImageCard, ModalViewer)
│   ├── styles/          # Component-level CSS modules
│   ├── App.jsx          # Primary container and state manager
│   └── main.jsx         # Application mounting entry point
├── .gitignore
├── eslint.config.js     # Linter rules and environment setup
├── index.html
├── package.json
└── vite.config.js

```

---

##  Quick Start Guide

### Prerequisites

Ensure you have Node.js installed locally:

* **Node.js** (`>= 18.x`)
* **npm** (`>= 9.x`)

### Setup Instructions

1. **Clone the repository:**
```bash
git clone [https://github.com/SaqibShah-dev/Gallery-Project.git](https://github.com/SaqibShah-dev/Gallery-Project.git)
cd Gallery-Project

```


2. **Install project dependencies:**
```bash
npm install

```


3. **Launch the development server:**
```bash
npm run dev

```


4. Open your browser and navigate to `http://localhost:5173`.

---

## Build & Scripts

| Script | Action |
| --- | --- |
| `npm run dev` | Boots local Vite server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles optimized static bundle into `/dist` for deployment. |
| `npm run preview` | Runs a local server to inspect the production build. |
| `npm run lint` | Runs ESLint to verify code quality and style consistency. |

---

##  Development Roadmap

* [ ] Add category filter tags (e.g., Nature, Architecture, Abstract).
* [ ] Implement infinite scroll / lazy-loading for large image sets.
* [ ] Add search bar functionality to filter images by title or tag.
* [ ] Integrate external REST API (Unsplash or Pexels) for live data fetching.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

```

<FollowUp label="Would you like a description and GitHub topic keywords for this Gallery Project repository?" query="Give me a description and GitHub topic keywords for the Gallery Project repository."/>
