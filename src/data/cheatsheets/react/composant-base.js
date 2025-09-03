export default {
  title: "⚙️ REACT - Composant de base",
  snippets: [
    {
      title: "Composant principal avec fetch API et routing",
      language: "jsx",
      code: `// 🔑 Imports essentiels de React, axios et react-router-dom
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Exemple de composant principal
function App() {
  // -----------------------------
  // 🗂️ Déclaration des states
  // -----------------------------
  const [data, setData] = useState(null);       // stocker les données de l’API
  const [isLoading, setIsLoading] = useState(true); // savoir si on charge encore
  const [error, setError] = useState("");       // message d’erreur éventuel

  // -----------------------------
  // 🔄 useEffect → appel API au montage
  // -----------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requête GET avec axios
        const res = await axios.get("URL_API");
        setData(res.data); // stockage dans le state
      } catch (err) {
        // Si erreur → on met à jour le state error
        setError("Erreur lors du fetch : " + err.message);
      } finally {
        // Dans tous les cas → on arrête le "chargement"
        setIsLoading(false);
      }
    };

    fetchData(); // appel de la fonction asynchrone
  }, []); // [] → se lance uniquement au montage

  // -----------------------------
  // 🖼️ Rendu JSX avec routing
  // -----------------------------
  return (
    <Router>
      <Routes>
        {/* Route principale */}
        <Route
          path="/"
          element={
            isLoading ? (
              // Cas 1 → affichage si en cours de chargement
              <p>Chargement...</p>
            ) : error ? (
              // Cas 2 → affichage si erreur
              <p style={{ color: "red" }}>{error}</p>
            ) : (
              // Cas 3 → données prêtes → rendu du composant Home
              <Home data={data} />
            )
          }
        />

        {/* Redirection → si aucune route ne correspond, on renvoie à "/" */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;`,
    },
  ],
};
