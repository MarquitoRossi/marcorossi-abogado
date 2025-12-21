import { ArrowDown, MessageCircle } from 'lucide-react';
import AnimatedTerminal from './AnimatedTerminal';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid-dark opacity-50" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-navy-light/30 to-transparent" />

      {/* Animated Geometric Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary-foreground/10 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 border border-primary-foreground/5 rotate-45 animate-pulse-slow animation-delay-500" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/10 rounded-lg rotate-12 animate-float" />

      {/* Content */}
      <div className="relative z-10 section-container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Tagline */}
            <p className="text-primary-foreground/60 text-sm md:text-base font-medium tracking-widest uppercase mb-6 opacity-0 animate-fade-in">
              Derecho · Tecnología · Estrategia
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-8 opacity-0 animate-fade-in-up animation-delay-200">
              Conflictos tecnológicos traducidos a{' '}
              <span className="relative">
                <span className="relative z-10">lenguaje jurídico</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0" />
              </span>{' '}
              claro y operativo.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-10 opacity-0 animate-fade-in animation-delay-400">
              Trabajo en conflictos donde la tecnología, los datos, las plataformas 
              y los sistemas digitales afectan derechos. Entiendo ambos mundos 
              y construyo soluciones que funcionan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 opacity-0 animate-fade-in animation-delay-500">
              <button
                onClick={() => scrollToSection('#contacto')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-glow group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                Agendar consulta
              </button>
              <button
                onClick={() => scrollToSection('#que-hago')}
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-medium rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Conocer más
              </button>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="opacity-0 animate-fade-in animation-delay-600 hidden md:block">
            <AnimatedTerminal />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-700">
          <button
            onClick={() => scrollToSection('#que-hago')}
            className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Descubrir</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
