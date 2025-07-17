import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import lingoLogo from "@assets/2_1752710962823.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Tokenomics", id: "tokenomics" },
    { label: "Distribution", id: "distribution" },
    { label: "Whitepaper", id: "whitepaper" },
    { label: "Community", id: "community" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-lingo-black' : 'bg-lingo-black/90'
    } backdrop-blur-md border-b border-lingo-yellow/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-lingo-yellow rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-lingo-black">LD</span>
            </div>
            <span className="text-xl font-bold text-lingo-yellow">Lingo Dingo</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-lingo-yellow transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="bg-lingo-yellow text-lingo-black hover:bg-lingo-light-yellow transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <a 
                href="https://www.dextools.io/app/en/ether/pair-explorer/0x44e72c1239d42f9e92004e70a3dd294288e61183?t=1752711018465" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                DexTools
              </a>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-lingo-yellow">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-lingo-dark-gray border-lingo-yellow/20">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg hover:text-lingo-yellow transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
