import React from "react";
import { motion } from "framer-motion";

const partenaires = [
  { src: "/logos/kaspersky.png", alt: "Kaspersky", url: "https://www.kaspersky.com" },
  { src: "/logos/fortinet.png", alt: "Fortinet", url: "https://www.fortinet.com" },
  { src: "/logos/veeam.png", alt: "Veeam", url: "https://www.veeam.com" },
  { src: "/logos/ec-council.png", alt: "EC-Council", url: "https://www.eccouncil.org" },
  { src: "/logos/sophos.png", alt: "Sophos", url: "https://www.sophos.com" },
  { src: "/logos/wallix.png", alt: "Wallix", url: "https://www.wallix.com" },
  { src: "/logos/pecb.jpg", alt: "PECB", url: "https://www.pecb.com" },
];

const PartenairesTech: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12"
        >
          Partenaires technologiques
        </motion.h2>

        <div className="relative overflow-hidden group">
          <div className="flex animate-marquee gap-16 group-hover:[animation-play-state:paused]">
            {partenaires.concat(partenaires).map(({ src, alt, url }, index) => (
              <div
                key={index}
                onClick={() => window.open(url, "_blank")}
                className="bg-white rounded-lg shadow-md p-3 h-24 w-40 flex items-center justify-center 
                           cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              >
                <img
                  src={src}
                  alt={alt}
                  className="max-h-16 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartenairesTech;
