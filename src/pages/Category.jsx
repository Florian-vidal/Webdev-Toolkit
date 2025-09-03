import { useParams } from "react-router-dom";
import cheatsheets from "../data/cheatsheets";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Prism langages nécessaires
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";

function Category() {
  const { id } = useParams();
  const category = cheatsheets.find((cat) => cat.id === id);

  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    Prism.highlightAll();
  }, [search, category, activeSection]);

  if (!category) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-red-500 text-2xl">❌ Catégorie introuvable</h1>
      </div>
    );
  }

  // Filtre les snippets
  const filterSnippets = (items) =>
    items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        (item.code && item.code.toLowerCase().includes(search.toLowerCase()))
    );

  // Filtre les liens
  const filterLinks = (links) =>
    links.filter(
      (link) =>
        link.label.toLowerCase().includes(search.toLowerCase()) ||
        (link.description &&
          link.description.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Titre */}
      <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {category.description}
      </p>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher dans cette catégorie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
      />

      {/* Onglets */}
      {category.sections && category.sections.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {category.sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSection(idx)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeSection === idx
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      )}

      {/* Contenu section active */}
      {category.sections ? (
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 🔗 Liens avec résumé */}
          {category.sections[activeSection].links && (
            <ul className="space-y-3 mb-6">
  {filterLinks(category.sections[activeSection].links).map((link, i) => (
    <li
      key={i}
      className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 flex flex-col"
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-600 hover:underline flex items-center gap-2"
      >
        {link.icon && <span>{link.icon}</span>}
        {link.label}
      </a>
      {link.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {link.description}
        </p>
      )}
    </li>
  ))}
</ul>

          )}

          {/* 📜 Snippets */}
          {category.sections[activeSection].snippets &&
            filterSnippets(category.sections[activeSection].snippets).map(
              (snippet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="mb-6"
                >
                  <h3 className="text-xl font-medium mb-2">{snippet.title}</h3>
                  <pre className="rounded-lg overflow-x-auto shadow bg-gray-900 text-gray-100">
                    <code
                      className={`language-${snippet.language || "jsx"}`}
                    >
                      {snippet.code}
                    </code>
                  </pre>
                </motion.div>
              )
            )}
        </motion.div>
      ) : (
        // Cas sans sections
        category.snippets &&
        filterSnippets(category.snippets).map((snippet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="mb-6"
          >
            <h2 className="text-xl font-semibold mb-2">{snippet.title}</h2>
            <pre className="rounded-lg overflow-x-auto shadow bg-gray-900 text-gray-100">
              <code className={`language-${snippet.language || "jsx"}`}>
                {snippet.code}
              </code>
            </pre>
          </motion.div>
        ))
      )}
    </div>
  );
}

export default Category;
