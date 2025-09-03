export default {
  title: "⚡ REACT - Initialisation Projet",
  snippets: [
    {
      title: "Création du projet avec Vite & installation des dépendances",
      language: "bash",
      code: `yarn create vite my-app-frontend --template react
cd my-app-frontend
yarn add react-router-dom axios js-cookie
code .
yarn dev`,
    },
    {
      title: "🚫 Supprimer StrictMode",
      language: "jsx",
      code: `// Dans main.jsx, supprime <React.StrictMode> pour éviter de voir deux fois les mêmes erreurs dans la console
ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);`,
    },
    {
      title: "Code de base App.jsx",
      language: "jsx",
      code: `// Imports essentiels
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";

// Composant principal
function App() {
  // -----------------------------
  // 🗂️ States de base
  // -----------------------------
  const [data, setData] = useState(null);     // stocker les données
  const [isLoading, setIsLoading] = useState(true); // état de chargement
  const [error, setError] = useState("");     // message d’erreur éventuel

  // -----------------------------
  // 🔄 useEffect → appel API au montage
  // -----------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        // 🔗 à adapter
        setData(response.data);
      } catch (err) {
        setError("Erreur lors du fetch : " + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // [] → exécution une seule fois (au montage)

  // -----------------------------
  // 🖼️ Rendu JSX
  // -----------------------------
  return (
    <Router>
      <Routes>
        {/* Route Home */}
        <Route
          path="/"
          element={
            isLoading ? (
              <p>Chargement...</p>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : (
              <Home data={data} />
            )
          }
        />

        {/* Route non trouvée */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;`,
    },
  ],
};
