export default {
  id: "html", // ✅ doit correspondre à /category/html
  title: "HTML5",
  description: "Balises essentielles et bonnes pratiques",
  image: "/images/html.svg",
  snippets: [
    {
      title: "Structure de base",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mon site</title>
</head>
<body>
  <h1>Hello World 🌍</h1>
</body>
</html>`,
    },
    {
      title: "Balises de texte",
      language: "html",
      code: `<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<p>Paragraphe classique</p>
<strong>Texte en gras</strong>
<em>Texte en italique</em>`,
    },
    {
      title: "Liens & Images",
      language: "html",
      code: `<a href="https://google.com" target="_blank">Lien vers Google</a>
<img src="/images/example.png" alt="Description de l'image" />`,
    },
    {
      title: "Formulaire simple",
      language: "html",
      code: `<form action="/submit" method="POST">
  <input type="text" name="username" placeholder="Nom" />
  <input type="email" name="email" placeholder="Email" />
  <button type="submit">Envoyer</button>
</form>`,
    },
  ],
};
