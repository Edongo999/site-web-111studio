import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // icône flèche vers le haut

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher le bouton seulement après avoir scrollé un peu
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // défilement fluide
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6
            bg-orange-600 text-white
            p-3 rounded-full shadow-lg
            hover:bg-orange-700 transition
            flex items-center justify-center
          "
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
