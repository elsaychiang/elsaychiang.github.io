
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        // Type assertion to HTMLElement which has offsetHeight and offsetTop properties
        const htmlSection = section as HTMLElement;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-xl font-medium font-montserrat text-morandi-blue-dark">
          Elsa Chiang
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "font-montserrat text-sm transition-colors hover:text-morandi-blue",
                activeSection === item.href.substring(1) 
                  ? "text-morandi-blue font-medium" 
                  : "text-morandi-blue-dark"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5"
          aria-label="Toggle menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-morandi-blue-dark transition-all duration-300",
            mobileMenuOpen && "rotate-45 translate-y-2"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-morandi-blue-dark transition-opacity duration-300",
            mobileMenuOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-morandi-blue-dark transition-all duration-300",
            mobileMenuOpen && "-rotate-45 -translate-y-2"
          )}></span>
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "opacity-100 visible max-h-screen" : "opacity-0 invisible max-h-0"
      )}>
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "font-montserrat transition-colors px-4 py-2 rounded-md",
                activeSection === item.href.substring(1)
                  ? "bg-morandi-neutral-light text-morandi-blue font-medium" 
                  : "text-morandi-blue-dark hover:bg-morandi-neutral-lightest"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
