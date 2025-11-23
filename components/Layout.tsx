
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Linkedin, Facebook, Search, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }> = ({ href, children, mobile, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`
      uppercase tracking-wider text-sm transition-colors duration-300
      ${mobile ? 'block py-3 border-b border-gray-100 text-stone-700' : 'text-stone-700 hover:text-sage-600'}
    `}
  >
    {children}
  </a>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar - Contact Info */}
      <div className="bg-white border-b border-gray-100 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-stone-600 font-sans tracking-wide">
          <div className="flex space-x-6">
            <a href="tel:0689408566" className="flex items-center hover:text-sage-600 transition-colors">
              <Phone className="w-3 h-3 mr-2" /> 06 89 40 85 66
            </a>
            <a href="mailto:maisonmikasa@gmail.com" className="flex items-center hover:text-sage-600 transition-colors">
              <Mail className="w-3 h-3 mr-2" /> maisonmikasa@gmail.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-sage-600"><Facebook className="w-3 h-3" /></a>
            <a href="#" className="hover:text-sage-600"><Instagram className="w-3 h-3" /></a>
            <a href="#" className="hover:text-sage-600"><Linkedin className="w-3 h-3" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between">
            
            {/* Logo Left */}
            <div className="flex-shrink-0">
               <a href="#home" className="flex flex-col items-start group">
                 <div className={`flex flex-col items-start transition-all duration-300 ${scrolled ? 'scale-90 origin-left' : 'scale-100 origin-left'}`}>
                    <div className="font-serif text-sage-600 font-bold leading-none">
                        <span className="text-2xl md:text-3xl">Maison Mikasa</span>
                    </div>
                    <span className={`
                         text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.25em] text-sage-600 mt-1.5 font-sans pl-0.5
                         transition-all duration-300
                         ${scrolled ? 'opacity-0 h-0 overflow-hidden mt-0' : 'opacity-100'}
                    `}>
                        Architecte d'intérieur
                    </span>
                 </div>
               </a>
            </div>

            {/* Desktop Menu - Right */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink href="#home">Accueil</NavLink>
              <NavLink href="#about-page">À propos</NavLink>
              <NavLink href="#prestations">Prestations</NavLink>
               
               {/* Dropdown for Réalisations */}
               <div className="relative group">
                 <a href="#realisations" className="flex items-center text-stone-700 hover:text-sage-600 uppercase tracking-wider text-sm transition-colors duration-300 py-4">
                   Réalisations <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                 </a>
                 <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-48">
                    <div className="bg-white shadow-lg border-t-2 border-sage-500 rounded-b-sm py-2 flex flex-col">
                       <a href="#realisations-maison" className="px-6 py-3 text-sm text-stone-600 hover:text-sage-600 hover:bg-stone-50 transition-colors text-center uppercase tracking-wider">Maisons</a>
                       <a href="#realisations-appartement" className="px-6 py-3 text-sm text-stone-600 hover:text-sage-600 hover:bg-stone-50 transition-colors text-center uppercase tracking-wider">Appartements</a>
                       <a href="#realisations-professionnel" className="px-6 py-3 text-sm text-stone-600 hover:text-sage-600 hover:bg-stone-50 transition-colors text-center uppercase tracking-wider">Professionnels</a>
                       <div className="border-t border-gray-100 mt-1 mx-4"></div>
                       <a href="#realisations" className="px-6 py-3 text-xs text-stone-400 hover:text-sage-600 transition-colors text-center uppercase tracking-widest">Tout voir</a>
                    </div>
                 </div>
               </div>

               <NavLink href="#contact">Contact</NavLink>
               <button className="text-stone-600 hover:text-sage-600"><Search className="w-4 h-4" /></button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-stone-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 bg-white border-t border-gray-100 flex flex-col">
            <NavLink href="#home" mobile onClick={() => setIsMenuOpen(false)}>Accueil</NavLink>
            <NavLink href="#about-page" mobile onClick={() => setIsMenuOpen(false)}>À propos</NavLink>
            <NavLink href="#prestations" mobile onClick={() => setIsMenuOpen(false)}>Prestations</NavLink>
            
            <div className="border-b border-gray-100 py-3">
               <span className="block uppercase tracking-wider text-sm text-stone-700 mb-3">Réalisations</span>
               <div className="pl-4 flex flex-col space-y-3">
                  <a href="#realisations-maison" onClick={() => setIsMenuOpen(false)} className="text-sm text-stone-500 hover:text-sage-600 uppercase tracking-widest flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-sage-200 mr-2"></span>Maisons</a>
                  <a href="#realisations-appartement" onClick={() => setIsMenuOpen(false)} className="text-sm text-stone-500 hover:text-sage-600 uppercase tracking-widest flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-sage-200 mr-2"></span>Appartements</a>
                  <a href="#realisations-professionnel" onClick={() => setIsMenuOpen(false)} className="text-sm text-stone-500 hover:text-sage-600 uppercase tracking-widest flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-sage-200 mr-2"></span>Professionnels</a>
                  <a href="#realisations" onClick={() => setIsMenuOpen(false)} className="text-xs text-stone-400 hover:text-stone-600 uppercase tracking-widest pl-3.5">Tout voir</a>
               </div>
            </div>

            <NavLink href="#contact" mobile onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-serif text-sm italic text-stone-700 mb-6">Suivez Maison Mikasa sur les réseaux !</p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-stone-600 hover:text-sage-600 transition-transform hover:-translate-y-1 duration-300"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-stone-600 hover:text-sage-600 transition-transform hover:-translate-y-1 duration-300"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-stone-600 hover:text-sage-600 transition-transform hover:-translate-y-1 duration-300"><Linkedin className="w-5 h-5" /></a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-stone-600 uppercase tracking-widest border-t border-gray-100 pt-8">
             <a href="#" className="hover:text-stone-800">Mentions légales</a>
             <a href="tel:0689408566" className="hover:text-stone-800">06 89 40 85 66</a>
             <a href="mailto:maisonmikasa@gmail.com" className="hover:text-stone-800 lowercase">maisonmikasa@gmail.com</a>
             <span>56870 Baden</span>
          </div>
          
          <div className="mt-8 text-[10px] text-stone-500">
            © 2025 • Maison Mikasa
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
