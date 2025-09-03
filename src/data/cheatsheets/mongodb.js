export default {
  id: "mongodb", // ✅ doit correspondre à /category/mongodb
  title: "MongoDB",
  description: "Commandes essentielles pour bases NoSQL",
  image: "/images/mongodb.svg",
  snippets: [
    {
      title: "Connexion Mongo Shell",
      language: "bash",
      code: `mongosh "mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb"`,
    },
    {
      title: "Créer et utiliser une base",
      language: "js",
      code: `use myDatabase; // créer ou basculer sur une base`,
    },
    {
      title: "CRUD de base",
      language: "js",
      code: `// CREATE
db.users.insertOne({ name: "Flo", age: 38 });

// READ
db.users.find({ age: { $gte: 18 } });

// UPDATE
db.users.updateOne({ name: "Flo" }, { $set: { age: 39 } });

// DELETE
db.users.deleteOne({ name: "Flo" });`,
    },
    {
      title: "Index & Tri",
      language: "js",
      code: `// Créer un index sur "email"
db.users.createIndex({ email: 1 });

// Trier par âge descendant
db.users.find().sort({ age: -1 });`,
    },
  ],
};
