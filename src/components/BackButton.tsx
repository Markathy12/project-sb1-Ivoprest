// components/BackButton.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") return null; // Pas sur la page d'accueil

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        fixed bottom-6 left-6
        flex items-center justify-center
        w-12 h-12
        bg-white text-gray-900
        rounded-full shadow-lg
        border border-gray-200
        hover:shadow-2xl hover:scale-110 hover:bg-gray-100
        transition-all duration-300 ease-in-out
      "
      aria-label="Retour"
    >
      <ArrowLeft size={20} />
    </button>
  );
};

export default BackButton;
