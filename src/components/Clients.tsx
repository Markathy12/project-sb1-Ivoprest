import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "BGFI Bank", logo: "/clients/bgfi.png" },
  { name: "CNAM", logo: "/clients/cnam.png" },
  { name: "GUCE CI", logo: "/clients/guce.png" },
  { name: "PAC CI", logo: "/clients/pacci.png" },
  { name: "BSIC", logo: "/clients/bsic.png" },
  { name: "ORANGE CI", logo: "/clients/orange.png" },
  { name: "PORT COTONOU", logo: "/clients/port-cotonou.jpg" },
  { name: "SODECI", logo: "/clients/sotici.jpg" },
  { name: "PORT ABIDJAN", logo: "/clients/port-d-abidjan.jpg" },
  { name: "YAKO Assurance", logo: "/clients/yako-assurance.jpg" },
];

const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-[#0e1523] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10"
        >
          Ils nous font confiance
        </motion.h2>

        <div className="relative w-full overflow-hidden group">
          <div className="flex animate-slide group-hover:[animation-play-state:paused]">
            {clients.concat(clients).map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 h-20 mx-3 bg-white dark:bg-[#1c2433]
                           rounded-md shadow flex justify-center items-center p-3
                           hover:shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
