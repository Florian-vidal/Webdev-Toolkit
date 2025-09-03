export default {
  title: "🏠 REACT - Composant Home",
  snippets: [
    {
      title: "Composant Home basique avec props",
      language: "jsx",
      code: `const Home = ({ data }) => {
  return (
    <div>
      <h1>Bienvenue sur la Home 🏠</h1>

      {data ? (
        <div>
          <p>User ID : {data.userId}</p>
          <p>ID : {data.id}</p>
          <p>Titre : {data.title}</p>
          <p>Contenu : {data.body}</p>
        </div>
      ) : (
        <p>Aucune donnée disponible</p>
      )}
    </div>
  );
};

export default Home;`,
    },
  ],
};
