export default {
  title: "📝 REACT - Form Inscription",
  snippets: [
    {
      title: "Formulaire d’inscription avec FormData",
      language: "jsx",
      code: `import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const SignUpForm = () => {
  // State pour stocker les valeurs du formulaire
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State pour messages d’erreur / succès
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifications côté front
    if (!username || !email || !password || !confirmPassword) {
      setError("Tous les champs sont obligatoires !");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas !");
      setSuccess("");
      return;
    }

    try {
      // Requête POST vers ton backend (endpoint à adapter)
      const response = await axios.post("https://api.example.com/signup", {
        username,
        email,
        password,
      });

      // Sauvegarde du token en cookie
      Cookies.set("token", response.data.token, { expires: 7 });

      // Message de succès
      setSuccess("Inscription réussie 🎉");
      setError("");

      // Reset du formulaire
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      // Affichage d'une erreur si l’API échoue
      setError(err.response?.data?.message || "Erreur lors de l'inscription ❌");
      setSuccess("");
    }
  };

  return (
    <div>
      <h1>Inscription</h1>

      {/* Affichage conditionnel des messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d’utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmez le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">S’inscrire</button>
      </form>
    </div>
  );
};

export default SignUpForm;`,
    },
  ],
};
