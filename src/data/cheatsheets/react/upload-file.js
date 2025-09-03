export default {
  title: "📤 REACT - Upload File",
  snippets: [
    {
      title: "Formulaire d’upload simple",
      language: "jsx",
      code: `import { useState } from "react";
import axios from "axios";

const Publish = () => {
  // -----------------------------
  // 🗂️ States du formulaire
  // -----------------------------
  const [file, setFile] = useState(null); // fichier sélectionné
  const [title, setTitle] = useState(""); // titre saisi
  const [message, setMessage] = useState(""); // message succès/erreur

  // ⚠️ Token en dur (uniquement pour l’exemple).
  // En pratique, tu dois le récupérer depuis les cookies ou le localStorage.
  const userToken =
    "OETakmmRCoA5DdejtaLIrei579yRja7P4i5VvYL12G6QNO6OAPff2Sapvp84NvqF";

  // -----------------------------
  // 📝 Fonction handleSubmit
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Création d’un FormData (spécial pour upload fichier)
      const formData = new FormData();
      formData.append("files", file);   // champ "files"
      formData.append("title", title);  // champ "title"

      // Envoi de la requête POST
      const response = await axios.post(
        "http://localhost:3100/api/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + userToken, // Auth sécurisée
            "Content-Type": "multipart/form-data", // Obligatoire pour upload
          },
        }
      );

      // Succès → affichage du retour
      setMessage("✅ Upload réussi : " + JSON.stringify(response.data));
    } catch (err) {
      // Gestion des erreurs
      if (err.response?.status === 500) {
        setMessage("❌ Erreur serveur (500)");
      } else {
        setMessage("❌ " + (err.response?.data?.msg || "Erreur inconnue"));
      }
    }
  };

  // -----------------------------
  // 🖼️ Rendu JSX
  // -----------------------------
  return (
    <section>
      <div className="container">
        <h1>Upload fichier</h1>

        {/* Affichage conditionnel du message */}
        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit}>
          {/* Champ texte */}
          <input
            type="text"
            placeholder="Titre"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          {/* Champ fichier */}
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {/* Bouton submit */}
          <input type="submit" value="Publier" />
        </form>
      </div>
    </section>
  );
};

export default Publish;`,
    },
  ],
};
