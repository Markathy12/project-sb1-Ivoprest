import React, { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpenSolutions, setDropdownOpenSolutions] = useState(false);
  const [dropdownOpenPrestations, setDropdownOpenPrestations] = useState(false);
  const [language, setLanguage] = useState("fr");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${scrolled
      ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
      : "bg-transparent py-5"
    }`;

  const linkClass = `relative font-medium transition-colors duration-300 ${scrolled
      ? "text-gray-800 hover:text-orange-600"
      : "text-white hover:text-orange-300"
    }`;

  return (
    <>
      <motion.nav
        className={navbarClasses}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="focus:outline-none">
            <img src="/Ivoprest-logo.png" alt="Ivoprest" className="h-12" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass}>
              Accueil
              {location.pathname === "/" && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-600 rounded-full animate-pulse" />
              )}
            </Link>

            {/* Dropdown Solutions */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpenSolutions(true)}
              onMouseLeave={() => setDropdownOpenSolutions(false)}
            >
              <button className={`${linkClass} flex items-center gap-1`}>
                Solutions <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {dropdownOpenSolutions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg w-56 py-2"
                  >
                    {[
                      {
                        to: "/services/securite-reseaux",
                        label: "Sécurité des réseaux",
                      },
                      {
                        to: "/services/sauvegarde-replication",
                        label: "Sauvegarde & réplication",
                      },
                      {
                        to: "/services/securite-donnees",
                        label: "Sécurité des données",
                      },
                      {
                        to: "/services/securite-applications",
                        label: "Sécurité des endpoints",
                      },
                      {
                        to: "/services/securite-managee",
                        label: "Sécurité Managée",
                      },
                      {
                        to: "/prestations/audit-si",
                        label: "Audit & Conformité SI",
                      },
                    ].map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown Prestations */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpenPrestations(true)}
              onMouseLeave={() => setDropdownOpenPrestations(false)}
            >
              <button className={`${linkClass} flex items-center gap-1`}>
                Prestations <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {dropdownOpenPrestations && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg w-56 py-2"
                  >
                    {[
                      {
                        to: "/services/integration-solution",
                        label: "Intégration de solution",
                      },
                      {
                        to: "/centre-formation",
                        label: "Cabinet de Formation",
                      },
                      {
                        to: "/prestations/audit-si",
                        label: "Audit informatique",
                      },
                      {
                        to: "/prestations/test-examen",
                        label: "Centre d'Examen",
                      },
                    ].map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="#contact" className={linkClass}>
              Contact
            </Link>

            <button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200"
            >
              <Globe size={16} className="mr-1" />{" "}
              {language === "fr" ? "EN" : "FR"}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"
              }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col space-y-4"
            >
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 font-medium"
              >
                Accueil
              </Link>

              {/* Mobile Dropdown Solutions */}
              <details className="group">
                <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                  Solutions
                  <ChevronDown
                    size={16}
                    className="group-open:rotate-180 transition-transform"
                  />
                </summary>
                <nav className="flex flex-col ml-4 mt-2 space-y-1">
                  <Link
                    to="/services/securite-reseaux"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-orange-600"
                  >
                    Sécurité des réseaux
                  </Link>
                  <Link
                    to="/services/sauvegarde-replication"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-orange-600"
                  >
                    Sauvegarde & réplication
                  </Link>
                  <Link
                    to="/services/securite-donnees"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-orange-600"
                  >
                    Sécurité des données
                  </Link>
                  <Link
                    to="/services/securite-applications"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-orange-600"
                  >
                    Sécurité Managée
                  </Link>
                </nav>
              </details>

              {/* Mobile Dropdown Prestations */}
              <details className="group">
                <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                  Prestations
                  <ChevronDown
                    size={16}
                    className="group-open:rotate-180 transition-transform"
                  />
                </summary>
                <nav className="flex flex-col ml-4 mt-2 space-y-1">
                  <Link
                    to="/prestations/integration-solution"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-orange-600"
                  >
                    Intégration de solution
                  </Link>
                  <Link
                    to="/centre-formation"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-orange-600"
                  >
                    Centre de formation
                  </Link>
                  <Link
                    to="/prestations/audit-si"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-orange-600"
                  >
                    Audit informatique
                  </Link>
                  <Link
                    to="/prestations/test-examen"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-orange-600"
                  >
                    Centre d'examen
                  </Link>
                </nav>
              </details>

              <Link
                to="#contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 font-medium"
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setLanguage(language === "fr" ? "en" : "fr");
                  setIsOpen(false);
                }}
                className="flex items-center px-3 py-2 rounded-full bg-orange-100 text-orange-700 w-fit"
              >
                <Globe size={16} className="mr-1" />{" "}
                {language === "fr" ? "EN" : "FR"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
