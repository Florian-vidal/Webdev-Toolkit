// Card.jsx
// ⚡ Composant réutilisable pour afficher une catégorie

function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md p-6 rounded hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
