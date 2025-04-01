
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Adjust for header height
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="lg:hidden relative w-10 h-10 rounded-md grid place-items-center bg-secondary hover:bg-accent transition-colors duration-300 pixel-corners"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex space-x-1">
        {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="bg-muted text-foreground font-pixel uppercase px-5 py-3 pixel-corners transition-all duration-300 hover:bg-pixel-green hover:text-black hover:scale-105"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-12 right-0 w-48 bg-card border border-border pixel-corners shadow-lg animate-pixel-fade-in">
          <div className="py-2">
            {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 transition-all duration-300 font-pixel text-sm uppercase text-foreground hover:bg-pixel-green hover:text-black hover:pl-6"
              >
                {'> '}{item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
