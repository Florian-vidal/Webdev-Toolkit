// Composant principal qui définit la structure globale (Navbar, Footer, Routes)

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import StickyNotes from "./components/StickyNotes";


function App() {
  return (
    <Router>
      {/* Layout général de l'application */}
      <div className="flex flex-col min-h-screen">

        <Header />
        
        {/* Contenu principal : il s'adapte en fonction de la route */}
        <main className="flex-grow px-6 py-8 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Page d'accueil */}
            <Route path="/category/:id" element={<Category />} /> {/* Page par catégorie */}
            <Route path="/about" element={<About /> /> {/* Page About me */}
          </Routes>
        </main>

        {/* Pied de page */}
        <Footer />

        {/* Le pense-bête est toujours visible */}
      <StickyNotes />
      </div>
    </Router>
  );
}

export default App;
