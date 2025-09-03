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
      code: `/* 🔄 Supprime les styles par défaut des navigateurs */
* {
  box-sizing: border-box; /* largeur = contenu + padding + bordure */
}

html, body, h1, h2, h3, p, ul, li {
  margin: 0; /* supprime les marges par défaut */
  padding: 0; /* supprime les espacements internes */
}

ul {
  list-style: none; /* supprime les puces */
}`,
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
