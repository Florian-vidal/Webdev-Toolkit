const expressCheatsheet = {
  id: "express",
  title: "Backend (Express)",
  description: "Création d'un serveur Node.js avec Express et MongoDB",
  image: "/images/express.svg",
  snippets: [
    {
      title: "📂 Création projet",
      code: `mkdir my-app
cd my-app-backend
npm install express mongoose cors dotenv
code .
npx nodemon`,
    },
    {
      title: "📦 Imports des packages",
      code: `const express = require("express"); // framework serveur
const cors = require("cors"); // autorise les requêtes cross-origin
const mongoose = require("mongoose"); // pour la BDD MongoDB
const dotenv = require("dotenv"); // variables d'environnement
const fileUpload = require("express-fileupload"); // upload de fichiers`,
    },
    {
      title: "⚙️ Configuration",
      code: `dotenv.config(); // charge les variables d'environnement (.env)
const app = express(); // initialise express

// Middleware globaux
app.use(express.json()); // lire du JSON dans req.body
app.use(cors()); // autorise toutes les origines
app.use(fileUpload()); // active l'upload de fichiers`,
    },
    {
      title: "🔌 Connexion à MongoDB",
      code: `mongoose
  .connect(process.env.MONGODB_URI) // MONGODB_URI doit être dans .env
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => console.error("❌ Erreur MongoDB :", err.message));`,
    },
    {
      title: "🌍 Routes",
      code: `// Route GET (test)
app.get("/", (req, res) => {
  try {
    return res.status(200).json("Bienvenue sur mon serveur 🚀");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Route POST (formulaire ou API)
app.post("/form", (req, res) => {
  try {
    const { name, email } = req.body;
    return res.status(201).json({ message: "Données reçues ✅", name, email });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Catch-all → toute route non définie renvoie 404
app.all(/.*/, (req, res) => {
  res.status(404).json("Not found ❌");
});`,
    },
    {
      title: "🚀 Lancement du serveur",
      code: `app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});`,
    },
  ],
};

export default expressCheatsheet;
