import React from "react";
import { navigation } from "@/constants/navigationData";
import { HeaderProps } from "@/pages/Header";
import { ChartNoAxesGantt } from "lucide-react";

const DesktopNavigation = ({
  scrollToSection,
  setIsMenuOpen,
  isMenuOpen,
}: HeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => scrollToSection("#hero")}
        className="text-xl font-semibold lg:text-3xl"
      >
        Yash<span className="text-3xl text-accent">.</span>
      </button>

      {/* Desktop Navigation */}
      <div className="items-center hidden gap-8 sm:flex">
        <div className="flex gap-6">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="transition-all duration-500 hover:text-accent hover:scale-90"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-textColor"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ChartNoAxesGantt size={24} className="text-accent" />
      </button>
    </div>
  );
};

export default DesktopNavigation;
