import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icônes
import { motion, AnimatePresence } from "framer-motion"; // animations

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Catégories à afficher
  const navItems = [
    { id: "html", label: "HTML5" },
    { id: "css", label: "CSS3" },
    { id: "javascript", label: "JavaScript" },
    { id: "react", label: "React" },
    { id: "express", label: "Express.js" },
    { id: "mongodb", label: "MongoDB" },
    { id: "git", label: "Git & GitHub" },
    { id: "tools", label: "Outils" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo + Titre */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.webp"
            alt="Webdev Toolkit Logo"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold tracking-wide">
            Webdev Toolkit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/category/${item.id}`}
              className="hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bouton Burger (mobile) */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}   // départ : transparent et au-dessus
            animate={{ opacity: 1, y: 0 }}     // entrée : fade + descend
            exit={{ opacity: 0, y: -20 }}      // sortie : fade + remonte
            transition={{ duration: 0.25, ease: "easeInOut" }} // animation douce
            className="md:hidden bg-gray-800 px-6 py-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={`/category/${item.id}`}
                className="block hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)} // ferme après clic
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
