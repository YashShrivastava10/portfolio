import { navigation } from "@/constants/navigationData";
import { HeaderProps } from "@/pages/Header";
import { X } from "lucide-react";
import MotionContainer from "../common/MotionContainer";

const MobileNavigation = ({
  scrollToSection,
  setIsMenuOpen,
  isMenuOpen,
}: HeaderProps) => {
  return (
    <MotionContainer
      key="hello"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className={`absolute top-0 right-0 flex flex-col items-center justify-center w-5/6 h-screen gap-24 py-6 overflow-hidden sm:hidden bg-secondary`}
    >
      <button
        className="absolute top-0 right-0 pt-6 pr-4 text-accent"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <X size={24} />
      </button>
      <button
        onClick={() => scrollToSection("#hero")}
        className="text-xl font-bold lg:text-3xl"
      >
        Yash<span className="text-xl font-bold text-accent">.</span>
      </button>
      <div className="flex flex-col items-center gap-4">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="py-2 transition-all duration-500 hover:text-accent hover:scale-90"
          >
            {item.name}
          </button>
        ))}
      </div>
    </MotionContainer>
  );
};

export default MobileNavigation;
