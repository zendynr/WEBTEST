import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <span className="text-2xl font-semibold">
              <span className="bg-gradient-to-r from-[#5f72be] to-[#9b59b6] bg-clip-text text-transparent">
                ZoneBroz
              </span>
              <span className="text-dark">Studios</span>
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={cn(
                "relative font-medium transition-colors hover:text-[#5f72be] cursor-pointer",
                location === link.href 
                  ? "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#5f72be] after:to-[#9b59b6] after:bottom-[-4px] after:left-0" 
                  : ""
              )}>
                {link.label}
              </div>
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "absolute w-full bg-white shadow-md md:hidden transition-transform duration-300",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div 
                className="py-2 font-medium transition-colors hover:text-[#5f72be] cursor-pointer"
                onClick={closeMenu}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
