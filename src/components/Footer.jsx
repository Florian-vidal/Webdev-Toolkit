// Footer.jsx
// ⚡ Pied de page avec la date dynamique

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>© {new Date().getFullYear()} Florian Vidal | Webdev Toolkit | <Link to="/about">À propos</Link></p>
    </footer>
  );
}

export default Footer;
