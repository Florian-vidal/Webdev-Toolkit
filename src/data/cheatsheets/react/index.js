import composantHome from "./composant-home";
import initialisationProjet from "./initialisation-projet";
import uploadFileDropzone from "./upload-file-dropzone";
import formInscription from "./form-inscription";
import composantBase from "./composant-base";
import uploadFile from "./upload-file";
import formConnexionFormdata from "./form-connexion-formdata";
import formInscriptionFormdata from "./form-inscription-formdata";
import formConnexion from "./form-connexion";

const reactCheatsheet = {
  id: "react",
  title: "React",
  description: "Snippets et exemples organisés par thèmes",
  image: "/images/react.svg",
  sections: [
    initialisationProjet,
    composantHome,
    composantBase,
    formInscription,
    formInscriptionFormdata,
    formConnexion,
    formConnexionFormdata,
    uploadFile,
    uploadFileDropzone,
  ],
};

export default reactCheatsheet;
