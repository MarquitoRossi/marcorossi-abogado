import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-dark.png';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#que-hago', label: 'Qué hago' },
  { href: '#como-trabajo', label: 'Cómo trabajo' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#quien-soy', label: 'Quién soy' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass border-b border-border/50 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="relative z-10"
          >
            <img
              src={logo}
              alt="Marco Rossi Abogado"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contacto');
            }}
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-accent transition-all duration-300 hover:shadow-medium"
          >
            Agendar consulta
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="section-container py-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contacto');
                }}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg"
              >
                Agendar consulta
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
