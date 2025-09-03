import { useState, useEffect } from "react";
import { StickyNote, Maximize2, Minimize2 } from "lucide-react";

function StickyNotes() {
  const [notes, setNotes] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLarge, setIsLarge] = useState(false); // ✅ plein écran ou non

  // Charger depuis localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem("stickyNotes");
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Sauvegarder à chaque changement
  useEffect(() => {
    localStorage.setItem("stickyNotes", notes);
  }, [notes]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg"
        aria-label="Toggle Notes"
      >
        <StickyNote size={24} />
      </button>

      {/* Bloc notes */}
      {isOpen && (
        <div
          className={`mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-3 flex flex-col transition-all ${
            isLarge ? "w-[500px] h-[400px]" : "w-72 h-auto"
          }`}
        >
          {/* Header du bloc */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">📝 Pense-bête</h2>
            <button
              onClick={() => setIsLarge(!isLarge)}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Toggle size"
            >
              {isLarge ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>

          {/* Zone de texte redimensionnable */}
          <textarea
            className="w-full flex-grow p-2 border rounded resize-y focus:ring-2 focus:ring-blue-400"
            style={{ minHeight: "150px" }}
            placeholder="Écris ton aide-mémoire ici..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default StickyNotes;
