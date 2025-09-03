export default {
  title: "🔑 REACT - Form Connexion (FormData)",
  snippets: [
    {
      title: "Formulaire de connexion avec FormData",
      language: "jsx",
      code: `import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const LoginForm = () => {
  // State unique pour tous les champs du formulaire
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State pour messages d’erreur / succès
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fonction générique pour gérer les changements d’input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Vérifications côté front
    if (!email || !password) {
      setError("Tous les champs sont obligatoires !");
      setSuccess("");
      return;
    }

    try {
      // Requête POST vers ton backend (endpoint à adapter)
      const response = await axios.post("https://api.example.com/login", {
        email,
        password,
      });

      // Sauvegarde du token en cookie
      Cookies.set("token", response.data.token, { expires: 7 });

      // Message de succès
      setSuccess("Connexion réussie ✅");
      setError("");

      // Reset du formulaire
      setFormData({ email: "", password: "" });
    } catch (err) {
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
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
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
