export default {
  id: "javascript",
  title: "JavaScript",
  description: "Bases, DOM, ES6+ et requêtes API",
  image: "/images/javascript.svg",
  snippets: [
    {
      title: "Variables et constantes",
      language: "js",
      code: `// 🔑 Déclaration de variables et constantes

let age = 38;       // variable modifiable
const PI = 3.14;    // constante → sa valeur ne change pas

let name = "Flo";   // string
console.log(\`Bonjour \${name} 👋\`); // interpolation ES6 avec backticks`,
    },
    {
      title: "Conditions & Boucles",
      language: "js",
      code: `// 🔄 Condition if/else
if (age >= 18) {
  console.log("Majeur ✅");
} else {
  console.log("Mineur ❌");
}

// 🔁 Boucle for classique
for (let i = 0; i < 5; i++) {
  console.log("Compteur :", i);
}

// 🔁 Boucle for...of (parcourt un tableau)
const fruits = ["Pomme", "Banane", "Orange"];
for (const fruit of fruits) {
  console.log(fruit);
}`,
    },
    {
      title: "Fonctions & ES6",
      language: "js",
      code: `// 📦 Fonction classique
function addition(a, b) {
  return a + b;
}

// 📦 Fonction fléchée (ES6)
const multiply = (a, b) => a * b;

// ✅ Utilisation
console.log(addition(2, 3)); // affiche 5
console.log(multiply(4, 5)); // affiche 20`,
    },
    {
      title: "Manipulation du DOM",
      language: "js",
      code: `// 🎨 Sélection d'un élément par son id
const btn = document.getElementById("myBtn");

// 🔗 Ajout d'un event listener (clic)
btn.addEventListener("click", () => {
  // Change la couleur du body quand on clique
  document.body.style.backgroundColor = "lightblue";
});`,
    },
    {
      title: "Requête API (Fetch & Async/Await)",
      language: "js",
      code: `// 🌍 Requête API avec Fetch (promesses)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())         // transforme la réponse en JSON
  .then(data => console.log(data)) // affiche les données
  .catch(err => console.error(err)); // capture les erreurs

// 🌍 Même chose avec async/await (syntaxe moderne)
async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data); // affiche l'objet JSON
  } catch (err) {
    console.error("Erreur :", err);
  }
}

getData(); // appelle la fonction asynchrone`,
    },
  ],
};
