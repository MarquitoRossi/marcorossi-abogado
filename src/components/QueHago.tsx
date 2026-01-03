import React, { useRef, useState, useEffect } from 'react';
import { Network, ShieldCheck, Fingerprint, AlertCircle, FileCode, Handshake } from 'lucide-react';

const expertises = [
  {
    icon: Network,
    title: "Responsabilidad en Plataformas",
    description: "Gestión de conflictos por contenido, algoritmos y bloqueos en redes sociales.",
    example: "Ej: Recuperación de cuentas o defensa ante censura automatizada."
  },
  {
    icon: ShieldCheck,
    title: "Protección de Datos & IA",
    description: "Cumplimiento normativo y defensa en el uso estratégico de grandes volúmenes de datos.",
    example: "Ej: Auditoría legal de modelos LLM y privacidad por diseño."
  },
  {
    icon: Fingerprint,
    title: "Forensics & Prueba Digital",
    description: "Aseguramiento y validez jurídica de evidencia recolectada en entornos digitales.",
    example: "Ej: Certificación de cadenas de custodia para litigios complejos."
  },
  {
    icon: AlertCircle,
    title: "Daños & Ciberseguridad",
    description: "Litigios derivados de brechas de seguridad, suplantación y estafas tecnológicas.",
    example: "Ej: Reclamos por responsabilidad civil ante fallos de seguridad."
  },
  {
    icon: FileCode,
    title: "IP & Activos Digitales",
    description: "Protección de software, algoritmos y nuevas formas de propiedad intelectual.",
    example: "Ej: Blindaje de código fuente y registro de activos intangibles."
  },
  {
    icon: Handshake,
    title: "Smart Contracts & SaaS",
    description: "Diseño y ejecución de acuerdos tecnológicos robustos para el mundo real.",
    example: "Ej: Redacción de SLA y estructuración legal de software crítico."
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
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-deep/5 border border-navy-deep/10 mb-6">
            <span className="text-[10px] font-bold tracking-widest text-navy-deep/60 uppercase">Especialidades</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-deep mb-6">
            Resolvemos lo que la <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-8">justicia tradicional</span> no entiende.
          </h2>
          <p className="text-lg md:text-xl text-slate leading-relaxed">
            Arquitectura legal aplicada a los retos más complejos del entorno digital. No solo aplicamos la ley, entendemos el código.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertises.map((item, index) => (
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
                <h3 className="text-xl md:text-2xl font-bold text-navy-deep mb-4 group-hover:text-accent transition-colors font-montserrat">
                  {item.title}
                </h3>
                <p className="text-slate text-base mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-6 border-t border-navy-deep/5">
                  <span className="text-xs font-bold text-accent/80 tracking-wide uppercase block mb-1">Misión</span>
                  <span className="text-sm text-navy-deep/60 italic leading-snug">
                    {item.example}
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
