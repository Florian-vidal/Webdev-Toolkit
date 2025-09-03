export default {
  id: "css",
  title: "CSS3",
  description: "Mise en forme, organisation et bonnes pratiques",
  image: "/images/css.svg",
  snippets: [
    {
      title: "Organisation des fichiers",
      language: "css",
      code: `/* 📂 Structure recommandée d’un projet */
css/
  reset.css   → supprime les styles par défaut des navigateurs
  style.css   → styles globaux
  font.css    → gestion des polices
fonts/        → polices (.woff, .woff2, .ttf, etc.)
index.html    → fichier principal`,
    },
    {
      title: "Imports dans index.html",
      language: "html",
      code: `<!-- 📌 Ordre recommandé -->
<link rel="stylesheet" href="./css/reset.css">  <!-- Reset en premier -->
<link rel="stylesheet" href="./css/font.css">   <!-- Polices -->
<link rel="stylesheet" href="./css/style.css">  <!-- Styles globaux -->`,
    },
    {
      title: "Gestion des polices (font.css)",
      language: "css",
      code: `/* 🔤 Définition d’une police personnalisée */
@font-face {
  font-family: "MaPolicePerso";
  src: url("../fonts/mapolice.woff2") format("woff2"),
       url("../fonts/mapolice.woff") format("woff"),
       url("../fonts/mapolice.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* Utilisation de la police */
body {
  font-family: "MaPolicePerso", sans-serif;
}`,
    },
    {
      title: "Starter - fichier CSS global de base (global.css)",
      language: "css",
      code: `/* -------------------------------
   RESET DE BASE
-------------------------------- */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px; /* Base 1rem = 16px */
}

body {
  font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* -------------------------------
   VARIABLES GLOBALES
-------------------------------- */
:root {
  /* Couleurs principales */
  --color-primary: #2563eb;   /* Bleu */
  --color-secondary: #9333ea; /* Violet */
  --color-accent: #f59e0b;    /* Orange */

  /* Couleurs neutres */
  --color-bg: #f9fafb;
  --color-text: #1f2937;
  --color-light: #ffffff;
  --color-dark: #111827;

  /* Typographie */
  --font-base: 'Inter', sans-serif;
  --font-heading: 'Poppins', sans-serif;

  /* Espacements */
  --spacing-xs: 0.25rem; /* 4px */
  --spacing-sm: 0.5rem;  /* 8px */
  --spacing-md: 1rem;    /* 16px */
  --spacing-lg: 2rem;    /* 32px */
  --spacing-xl: 4rem;    /* 64px */

  /* Rayon de bordure */
  --radius: 0.5rem;

  /* Ombres */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.2);
}

/* -------------------------------
   TITRES & TEXTE
-------------------------------- */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
}

p {
  margin-bottom: var(--spacing-md);
  font-size: 1rem;
  color: var(--color-text);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: var(--color-secondary);
}

/* -------------------------------
   BOUTONS
-------------------------------- */
button {
  display: inline-block;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  background-color: var(--color-primary);
  color: var(--color-light);
  transition: background 0.3s ease;
}

button:hover {
  background-color: var(--color-secondary);
}

/* -------------------------------
   IMAGES & MEDIA
-------------------------------- */
img,
video {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius);
}

/* -------------------------------
   LAYOUT
-------------------------------- */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* -------------------------------
   UTILITAIRES
-------------------------------- */
.text-center {
  text-align: center;
}

.mt-md { margin-top: var(--spacing-md); }
.mb-md { margin-bottom: var(--spacing-md); }
`,
    },
    {
      title: "Reset CSS (reset.css)",
      language: "css",
      code: `/* -----------------------------
   🔄 Reset CSS (reset.css)
   ----------------------------- */

/* Supprime les styles par défaut pour partir d’une base neutre */
* {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* Pour compatibilité HTML5 */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none; /* supprime les puces par défaut */
}

blockquote, q {
  quotes: none;
}

blockquote::before, blockquote::after,
q::before, q::after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`,
    },
    {
      title: "Flexbox",
      language: "css",
      code: `/* 🔀 Disposition flexible */
.container {
  display: flex;
  justify-content: center; /* aligne horizontalement */
  align-items: center;     /* aligne verticalement */
  gap: 1rem;               /* espace entre les éléments */
}`,
    },
    {
      title: "Grid",
      language: "css",
      code: `/* 🟦 Disposition en grille */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
  gap: 10px;
}`,
    },
    {
      title: "Variables CSS",
      language: "css",
      code: `:root {
  --main-color: #3498db;
  --text-color: #333;
}

body {
  color: var(--text-color);
  background: var(--main-color);
}`,
    },
  ],
};
