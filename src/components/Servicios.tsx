import React, { useRef, useState, useEffect } from 'react';
import { Gavel, ShieldCheck, Briefcase, Zap, Check } from 'lucide-react';

const services = [
  {
    icon: Gavel,
    title: "Intervención en Conflictos Complejos",
    forWho: "Empresas y particulares en crisis digitales.",
    includes: ["Defensa legal inmediata", "Gestión de reputación", "Recuperación de activos"],
    cta: "Consultar por intervención"
  },
  {
    icon: ShieldCheck,
    title: "Asesoramiento Preventivo",
    forWho: "Startups y negocios en expansión tech.",
    includes: ["Auditoría de TyC y Privacidad", "Blindaje de IP", "Privacy by design"],
    cta: "Consultar por blindaje"
  },
  {
    icon: Briefcase,
    title: "Acompañamiento Estratégico",
    forWho: "Departamentos legales y directivos.",
    includes: ["Consultoría en litigios tech", "Segunda opinión experta", "Análisis de riesgos"],
    cta: "Consultar por estrategia"
  },
  {
    icon: Zap,
    title: "Tecnología e Inteligencia Artificial",
    forWho: "Desarrolladores y proyectos Web3/AI.",
    includes: ["Contratos de entrenamiento", "Validación ética/legal", "Smart contracts audit"],
    isSpecial: true,
    cta: "Consultar por IA/Web3"
  }
];

export default function Servicios() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-deep/5 border border-navy-deep/10 mb-6">
            <span className="text-[10px] font-bold tracking-widest text-navy-deep/60 uppercase font-montserrat tracking-[0.2em]">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-deep mb-6 font-montserrat">
            Soluciones <span className="text-accent underline decoration-accent/30 underline-offset-8">escalables</span> para derechos digitales.
          </h2>
          <p className="text-lg md:text-xl text-slate font-medium leading-relaxed">
            Servicios estructurados como productos para brindar claridad, <br className="hidden md:block" />
            previsibilidad y resultados tangibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`tech-card p-10 md:p-12 rounded-[2.5rem] bg-white border border-navy-deep/10 transition-all duration-500 hover:shadow-strong group flex flex-col ${service.isSpecial ? 'ring-1 ring-accent/30' : ''}`}
              style={{
                '--mouse-x': `${mousePos.x}px`,
                '--mouse-y': `${mousePos.y}px`,
              } as React.CSSProperties}
            >
              <div className="flex-1">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 border-2 ${service.isSpecial ? 'bg-navy-deep text-white border-accent' : 'bg-navy-deep/5 text-navy-deep border-transparent'}`}>
                  <service.icon size={32} />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-navy-deep mb-4 group-hover:text-accent transition-colors font-montserrat">
                  {service.title}
                </h3>

                <div className="mb-8">
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase block mb-1 tracking-[0.15em]">Para quién</span>
                  <p className="text-navy-deep/60 font-bold">{service.forWho}</p>
                </div>

                <div className="space-y-4 mb-12">
                  <span className="text-[10px] font-bold tracking-widest text-navy-deep/40 uppercase block tracking-[0.15em]">Qué incluye</span>
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-slate font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 px-6 rounded-xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] ${service.isSpecial ? 'bg-accent text-white shadow-strong hover:bg-accent/90' : 'bg-navy-deep text-white hover:bg-navy-deep/90'}`}
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
