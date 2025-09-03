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
