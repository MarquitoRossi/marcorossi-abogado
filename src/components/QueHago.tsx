import React, { useRef, useState, useEffect } from 'react';
import { Network, Briefcase, Scale, ShoppingBag, Fingerprint } from 'lucide-react';

const conflicts = [
  {
    icon: Network,
    title: "Conflictos con plataformas y servicios digitales",
    description: "Defensa jurídica frente a bloqueos, moderación algorítmica y disputas en entornos de grandes proveedores tecnológicos.",
    detail: "Manejo de términos de servicio y responsabilidad de intermediarios."
  },
  {
    icon: Briefcase,
    title: "Relaciones laborales con componente tecnológico",
    description: "Abordaje de despidos, vigilancia remota y conflictos derivados del uso de herramientas digitales en el ámbito del trabajo.",
    detail: "Litigio sobre teletrabajo, control patronal y desconexión digital."
  },
  {
    icon: Scale,
    title: "Responsabilidad civil y comercial con rastro digital",
    description: "Reclamos por daños, incumplimientos contractuales y disputas societarias donde la evidencia electrónica es el eje central.",
    detail: "Estrategias basadas en registros de auditoría y flujos de datos."
  },
  {
    icon: ShoppingBag,
    title: "Conflictos de consumo y servicios esenciales",
    description: "Protección de usuarios ante fallos en plataformas bancarias, fintech y servicios digitales masivos.",
    detail: "Defensa del consumidor en ecosistemas digitales complejos."
  },
  {
    icon: Fingerprint,
    title: "Proceso judicial y prueba electrónica",
    description: "Dirección técnica en la obtención, conservación y presentación de evidencia digital para asegurar su validez en juicio.",
    detail: "Certificación de mensajes, metadatos y evidencia volátil."
  }
];

export default function QueHago() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="que-hago" ref={sectionRef} className="py-24 md:py-32 bg-ice-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-20 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-deep/5 border border-navy-deep/10 mb-6">
            <span className="text-[10px] font-bold tracking-widest text-navy-deep/60 uppercase font-montserrat">Áreas de Práctica</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-deep mb-8 leading-tight font-montserrat">
            En qué conflictos <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-8">intervenimos.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate leading-relaxed font-medium">
            Intervenimos en conflictos civiles, laborales y penales de cualquier índole. Hoy casi ningún caso es solo "de papel": siempre hay mensajes, sistemas, cámaras, plataformas o bases de datos que dejan rastro. Somos un equipo de litigio que trabaja justamente ahí, donde la prueba digital se vuelve decisiva para orientar la estrategia y definir el resultado del caso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {conflicts.map((item, index) => (
            <div
              key={index}
              className="tech-card p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-sm shadow-soft border border-navy-deep/5 transition-all duration-500 hover:shadow-strong group"
              style={{
                '--mouse-x': `${mousePos.x}px`,
                '--mouse-y': `${mousePos.y}px`,
              } as React.CSSProperties}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-navy-deep/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-navy-deep mb-4 group-hover:text-accent transition-colors font-montserrat leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate/70 text-base mb-6 leading-relaxed font-medium">
                  {item.description}
                </p>
                <div className="pt-6 border-t border-navy-deep/5">
                  <span className="text-[10px] font-black text-accent/80 tracking-widest uppercase block mb-1 font-montserrat">Enfoque Estratégico</span>
                  <span className="text-sm text-navy-deep/60 italic leading-snug font-medium">
                    {item.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
