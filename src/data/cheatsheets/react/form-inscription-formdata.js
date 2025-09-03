export default {
  title: "📝 REACT - Form Inscription (FormData)",
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
      // Création d'un FormData
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);

      // Requête POST avec FormData
      const response = await axios.post("https://api.example.com/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
          type="email"
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
