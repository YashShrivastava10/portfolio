"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MobileNavigation from "@/components/Header/MobileNavigation";
import DesktopNavigation from "@/components/Header/DesktopNavigation";
import { AnimatePresence } from "framer-motion";

export type HeaderProps = {
  scrollToSection: (href: string) => void;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
};
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    };

    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

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
      <div className="container px-4 py-4 mx-auto">
        <DesktopNavigation
          scrollToSection={scrollToSection}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
        <AnimatePresence>
          {isMenuOpen && (
            <MobileNavigation
              scrollToSection={scrollToSection}
              setIsMenuOpen={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
