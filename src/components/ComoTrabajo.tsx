import React, { useEffect, useRef, useState } from 'react';
import { Search, Compass, Target, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Consulta Inicial",
    description: "Evaluación técnica y jurídica profunda del conflicto.",
    details: ["Mapeo de actores involucrados", "Análisis de impacto legal inmediato", "Identificación de urgencias"]
  },
  {
    icon: Compass,
    title: "Diagnóstico Táctico",
    description: "Identificación de vulnerabilidades y puntos de presión en el sistema.",
    details: ["Auditoría de evidencia digital", "Revisión de marcos técnicos/normativos", "Definición de rutas de acción"]
  },
  {
    icon: Target,
    title: "Estrategia de Intervención",
    description: "Diseño de un plan táctico orientado a resultados operativos claros.",
    details: ["Planificación de defensa/negociación", "Redacción estratégica", "Preparación de contingencias"]
  },
  {
    icon: Rocket,
    title: "Ejecución & Resolución",
    description: "Intervención directa y resolución efectiva de la situación.",
    details: ["Acciones legales directas", "Seguimiento en tiempo real", "Cierre y blindaje futuro"]
  }
];

export default function ComoTrabajo() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const stepElements = sectionRef.current.querySelectorAll('.step-item');
      let currentActive = 0;

      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // If the step is in the mid-viewport area, it becomes active
        if (rect.top < window.innerHeight / 1.5) {
          currentActive = index;
        }
      });

      setActiveStep(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="como-trabajo" ref={sectionRef} className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
      {/* Decorative background visual */}
      <div className="absolute inset-0 tech-grid-dark opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden lg:block" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Metodología</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Un workflow <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">diseñado para ganar.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium">
            No acumulamos carpetas. Resolvemos problemas. <br className="hidden md:block" />
            Nuestra estructura de trabajo es ágil, transparente y orientada a la ejecución.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => {
            const isActive = activeStep >= index;
            const isCurrent = activeStep === index;

            return (
              <div
                key={index}
                className={`step-item relative transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block absolute top-[2.75rem] left-[5.5rem] w-full h-0.5 z-0 transition-all duration-1000 ${isActive ? 'bg-accent/40' : 'bg-white/10'}`}>
                    <div className={`h-full bg-blue-400 transition-all duration-1000 shadow-[0_0_15px_rgba(59,130,246,0.5)] ${isActive && activeStep > index ? 'w-full' : isCurrent ? 'w-1/2' : 'w-0'}`} />
                  </div>
                )}

                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 border-2 ${isCurrent ? 'bg-accent text-white border-accent shadow-[0_0_30px_rgba(59,130,246,0.5)] rotate-3' : isActive ? 'bg-navy-light text-accent border-accent/30' : 'bg-navy-light/50 text-white/20 border-white/10'}`}>
                    <step.icon size={36} />
                    <span className="absolute -top-3 -right-3 text-2xl font-black italic text-white/10 select-none">0{index + 1}</span>
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 transition-colors font-montserrat ${isCurrent ? 'text-white' : 'text-white/60'}`}>
                    {step.title}
                  </h3>

                  <p className="text-white/40 text-base mb-8 leading-relaxed font-medium">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-white/30 group">
                        <CheckCircle2 size={16} className={`shrink-0 transition-colors mt-0.5 ${isActive ? 'text-accent' : 'text-white/10'}`} />
                        <span className="group-hover:text-white/60 transition-colors uppercase tracking-tight font-bold">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
