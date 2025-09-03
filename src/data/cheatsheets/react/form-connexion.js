export default {
  title: "🔑 REACT - Form Connexion",
  snippets: [
    {
      title: "Formulaire de connexion",
      language: "jsx",
      code: `import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const LoginForm = () => {
  // State pour stocker les valeurs du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State pour gérer les messages d’erreur / succès
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Vérification basique côté front
    if (!email || !password) {
      setError("Tous les champs sont obligatoires !");
      setSuccess("");
      return;
    }

    try {
      // Requête POST vers ton backend
      const response = await axios.post("https://api.example.com/login", {
        email,
        password,
      });

      // Si connexion réussie → on stocke le token en cookie
      Cookies.set("token", response.data.token, { expires: 7 });

      // On affiche un message de succès
      setSuccess("Connexion réussie ✅");
      setError("");

      // On reset le formulaire
      setEmail("");
      setPassword("");
    } catch (err) {
      // Si erreur côté API → on affiche un message d'erreur
      setError(err.response?.data?.message || "Erreur de connexion ❌");
      setSuccess("");
    }
  };

  return (
    <div>
      <h1>Connexion</h1>

      {/* Affichage conditionnel des messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          // onChange met à jour le state email
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          // onChange met à jour le state password
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;`,
    },
  ],
};
