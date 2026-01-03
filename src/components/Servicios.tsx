import React, { useRef, useState, useEffect } from 'react';
import { Shield, Briefcase, ShoppingBag, Users, Gavel, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: "Abogacía para influencers y creadores digitales",
    description: "Representamos a influencers, streamers y creadores de contenido. Asistimos en negociaciones con marcas y agencias, contratos, uso de imagen, desmonetizaciones, bloqueos de cuentas, conflictos reputacionales y denuncias vinculadas a su actividad en redes."
  },
  {
    icon: Briefcase,
    title: "Defensa integral para empresas",
    description: "Acompañamos a empresas en conflictos civiles y laborales. Intervenimos en reclamos de trabajadores, demandas de consumidores, incumplimientos contractuales, gestión de conflictos internos y crisis reputacionales. Diseñamos estrategias judiciales y preventivas ajustadas a la normativa vigente."
  },
  {
    icon: ShoppingBag,
    title: "Protección avanzada del consumidor",
    description: "Asistimos a personas frente a bancos, aerolíneas, plataformas digitales, concesionarias, servicios financieros y comercios electrónicos. Actuamos en compras incumplidas, débitos indebidos, fraudes, cancelaciones, retención de dinero y trato indigno."
  },
  {
    icon: Users,
    title: "Defensa en conflictos laborales personales",
    description: "Acompañamos a quienes atraviesan presiones para renunciar, sanciones, despidos, denuncias internas o situaciones de acoso laboral. Evaluamos la situación completa y definimos la estrategia más adecuada, ya sea negociación, vía administrativa o demanda judicial."
  },
  {
    icon: Gavel,
    title: "Denuncias penales, mediaciones y juicios orales",
    description: "Intervenimos desde el inicio del conflicto penal. Brindamos asistencia en denuncias policiales y fiscales, mediaciones, audiencias y juicios orales. Construimos defensas técnicas serias y también representamos a víctimas que requieren acompañamiento jurídico."
  }
];

export default function Servicios() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
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
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-deep/5 border border-navy-deep/10 mb-6">
            <span className="text-[10px] font-bold tracking-widest text-navy-deep/60 uppercase font-montserrat tracking-[0.2em]">Ecosistema Legal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-deep mb-8 leading-tight font-montserrat">
            Servicios <span className="text-accent underline decoration-accent/30 underline-offset-8">profesionales.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate font-medium leading-relaxed max-w-3xl">
            Ofrecemos servicios jurídicos orientados a resolver problemas concretos de personas, empresas y organizaciones. Trabajamos con seriedad, estrategia y experiencia real en tribunales. Cada servicio está pensado para acompañarte desde la consulta inicial hasta la instancia judicial que corresponda.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                {/* Numbering and layout indicator */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="text-4xl font-black text-accent/10 font-montserrat group-hover:text-accent/30 transition-all duration-500 scale-90 group-hover:scale-100">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="w-[2px] h-32 bg-gradient-to-b from-accent/20 via-accent/5 to-transparent mt-6 group-last:hidden" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent md:hidden">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-navy-deep group-hover:text-accent transition-all duration-500 font-montserrat leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-lg md:text-xl text-navy-deep/60 font-medium leading-relaxed mb-8 max-w-4xl">
                    {service.description}
                  </p>

                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-accent hover:gap-5 transition-all duration-300 group/btn"
                  >
                    Consultar por este servicio <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Subtle divider for all screens */}
              <div className="w-full h-px bg-gradient-to-r from-navy-deep/5 via-navy-deep/5 to-transparent mt-16 md:mt-24 group-last:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
