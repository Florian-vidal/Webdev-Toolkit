import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cheatsheets from "../data/cheatsheets";

function Home() {
  // ⚠️ Si cheatsheets est vide ou non défini
  if (!cheatsheets || cheatsheets.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 text-xl">❌ Aucune catégorie disponible</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        📚 Webdev Toolkit
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cheatsheets.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              to={`/category/${cat.id}`}
              className="border rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition bg-white"
            >
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-16 h-16 mb-4 object-contain"
                />
              )}
              <h2 className="text-xl font-semibold">{cat.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{cat.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
