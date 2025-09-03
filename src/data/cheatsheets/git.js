const gitCheatsheet = {
  id: "git",
  title: "Git & GitHub",
  description: "Commandes essentielles, workflow et bonnes pratiques",
  image: "/images/html.svg",
  snippets: [
    {
      title: "🔐 Sécurité & préparation avant un push",
      code: `1. Installer dotenv pour gérer les variables sensibles :
   npm install dotenv

2. Créer un fichier .env à la racine du projet pour stocker les clés secrètes (ex: MONGODB_URI, API_KEY).

3. Créer un fichier .gitignore à la racine du projet et y ajouter :
   node_modules
   .env

4. Vérifier que dans package.json, la commande start est définie :
   "scripts": {
     "start": "node index.js"
   }`,
    },
    {
      title: "📌 Initialisation & premier push",
      code: `git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin URL_DU_REPO
git push -u origin main`,
    },
    {
      title: "🔄 Workflow classique après le 1er push",
      code: `git status   
git add .    
git commit -m "feat: message clair"
git push`,
    },
    {
      title: "📥 Cloner un projet existant",
      code: `git clone URL_DU_REPO
cd nom-du-projet
npm install`,
    },
    {
      title: "⬇️ Récupérer les dernières modifications",
      code: `git pull origin main`,
    },
    {
      title: "🌿 Travailler avec des branches",
      code: `git checkout -b feature/ma-feature
git add .
git commit -m "feat: ajout de ma feature"
git push origin feature/ma-feature`,
    },
    {
      title: "📦 Importer du code externe dans un repo existant",
      code: `git init
git branch -M main
git add .
git commit -m "chore: import external code"
git remote remove origin 2>/dev/null || true
git remote add origin URL DU REPO
git fetch origin
git push --force-with-lease origin main:main`,
    },
    {
      title: "✅ Bonnes pratiques Git",
      code: `* Toujours écrire des messages de commit clairs :
   feat: nouvelle fonctionnalité
   fix: correction de bug
   chore: tâche technique (config, dépendances)
   docs: documentation

* Ne jamais commit tes clés sensibles (toujours dans .env).
* Faire des petits commits fréquents plutôt qu’un gros commit flou.
* Utiliser les branches pour développer → merge ensuite dans main.`,
    },
  ],
};

export default gitCheatsheet;
