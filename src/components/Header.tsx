import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
}

const navLinks: NavLinkProps[] = [
  { href: '#informacoes', label: 'Informações' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre-mim', label: 'Sobre mim' },
  { href: '#agendamento', label: 'Agendamento' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-custom-background/95 shadow-md backdrop-blur-sm py-2" : "py-4"
    )}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-custom-secondary">
          <span className="font-mayonice text-3xl tracking-wide">Taynara Maria</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-custom-secondary hover:text-custom-dark transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-custom-secondary" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-custom-background shadow-md animate-fade-in">
          <nav className="container px-4 py-4 mx-auto flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-custom-secondary hover:text-custom-dark transition-colors py-2 border-b border-custom-secondary/20 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}