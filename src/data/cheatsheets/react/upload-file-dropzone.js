export default {
  title: "📂 REACT - Upload File (Dropzone + Preview)",
  snippets: [
    {
      title: "Upload multi-fichiers avec suppression et preview",
      language: "jsx",
      code: `// REACT - UPLOAD MULTI-FICHIERS AVEC SUPPRESSION PREVIEW

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Publish = () => {
  // -----------------------------
  // 🗂️ States du formulaire
  // -----------------------------
  const [files, setFiles] = useState([]);       // fichiers sélectionnés
  const [previews, setPreviews] = useState([]); // previews
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // ⚠️ Token en dur (exemple uniquement)
  const userToken =
    "OETakmmRCoA5DdejtaLIrei579yRja7P4i5VvYL12G6QNO6OAPff2Sapvp84NvqF";

  // -----------------------------
  // 📥 Fonction handleDrop (dropzone)
  // -----------------------------
  const onDrop = useCallback((acceptedFiles) => {
    // Ajout des fichiers sélectionnés
    setFiles((prev) => [...prev, ...acceptedFiles]);

    // Génération des previews pour les nouveaux fichiers
    const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  }, []);

  // Initialisation dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  // -----------------------------
  // ❌ Suppression d’un fichier
  // -----------------------------
  const handleRemoveFile = (index) => {
    // Retire le fichier et son preview par index
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // -----------------------------
  // 📝 Fonction handleSubmit
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      setMessage("❌ Merci de sélectionner au moins un fichier !");
      return;
    }

    try {
      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));
      formData.append("title", title);

      const response = await axios.post(
        "http://localhost:3100/api/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + userToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("✅ Upload réussi : " + JSON.stringify(response.data));
      setTitle("");
      setFiles([]);
      setPreviews([]);
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.msg || "Erreur lors de l’upload"));
    }
  };

  // -----------------------------
  // 🖼️ Rendu JSX
  // -----------------------------
  return (
    <section>
      <div className="container">
        <h1>Upload multi-fichiers</h1>

        {/* Message de retour */}
        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit}>
          {/* Champ texte */}
          <input
            type="text"
            placeholder="Titre"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          {/* Zone de drop */}
          <div
            {...getRootProps()}
            style={{
              border: "2px dashed gray",
              padding: "20px",
              marginTop: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Déposez vos fichiers ici...</p>
            ) : (
              <p>Glissez-déposez ou cliquez pour sélectionner plusieurs fichiers</p>
            )}
          </div>

          {/* Galerie de previews avec suppression */}
          {previews.length > 0 && (
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              {previews.map((src, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    src={src}
                    alt={\`preview-\${index}\`}
                    style={{ width: "150px", borderRadius: "8px" }}
                  />
                  {/* Bouton suppression */}
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-5px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Bouton submit */}
          <input type="submit" value="Publier" style={{ marginTop: "15px" }} />
        </form>
      </div>
    </section>
  );
};

export default Publish;`,
    },
  ],
};
