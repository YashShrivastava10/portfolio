"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { navigation } from "@/constants/navigationData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-primary/90 backdrop-blur-sm">
      <nav className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-xl font-bold text-accent"
          >
            Yash
          </button>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 md:flex">
            <div className="flex gap-6">
              {navigation.map((item) => (
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="transition-colors hover:text-accent"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-textColor"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 w-full py-4 md:hidden top-full bg-secondary">
            <div className="flex flex-col items-center gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="transition-colors hover:text-accent"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
