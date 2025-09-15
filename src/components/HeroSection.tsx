import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Shield } from "lucide-react";
import { SmoothScroll } from "./Navigation";
import Particles from "react-tsparticles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Liste des images de fond pour le slider
const backgroundImages = [
  "/images/slide 1.jpg",
  "/images/slide 2.jpg",
  "/images/slide 3.jpg",
  "/images/slide 4.jpg",
  "/images/slide 5.jpg",
];

const HeroSection: React.FC = () => {
  // Variables pour l'effet de typographie
  const phrases = ["Sécurité", "Sauvegarde", "Expertise", "Formation"];
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!deleting && charIndex <= phrases[phraseIndex].length) {
      timer = setTimeout(() => {
        setDisplayedText(phrases[phraseIndex].substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150);
    } else if (deleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setDisplayedText(phrases[phraseIndex].substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 75);
    } else if (charIndex > phrases[phraseIndex].length) {
      // Pause avant de commencer à supprimer
      timer = setTimeout(() => setDeleting(true), 1000);
    } else if (charIndex < 0) {
      // Passer à la phrase suivante
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  // Paramètres du slider
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section id="home" className="relative text-white overflow-hidden h-[600px]">
      {/* Particules en fond */}
      <Particles
        options={{
          fpsLimit: 30,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#f97316" }, // orange clair
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Slider en arrière-plan */}
      <div className="absolute inset-0 z-10 h-[600px]">
        <Slider {...settings}>
          {backgroundImages.map((img, i) => (
            <div key={i} className="relative h-[600px]">
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Contenu texte au-dessus */}
      <div className="relative z-20 container mx-auto px-6 h-[600px] flex items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Expertise<br />
            <span className="text-primary-500">Spécialisation</span><br />
            Expérience
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-lg">
            Esay Coporation protège votre entreprise contre les cybermenaces avec nos
            services de sécurité managés 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <SmoothScroll
              to="services"
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              <Shield size={22} className="inline-block mr-3" />
              Nos Services
            </SmoothScroll>
            <SmoothScroll
              to="contact"
              className="border border-white/40 text-white py-4 px-10 rounded-lg hover:bg-white/10 transition"
            >
              Nous Contacter
            </SmoothScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
