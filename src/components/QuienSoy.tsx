import { Award, BookOpen, Scale, Terminal, Radio, Mic2, Tv, Youtube } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useRef, useState } from 'react';

export default function QuienSoy() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="quien-soy" className="relative py-24 md:py-32 bg-navy-deep overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid-dark opacity-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent blur-[120px]" />

      <div ref={ref} className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left Column: Visual / MR Graphic */}
          <div
            className={`order-2 lg:order-1 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              } transition-all duration-1000`}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: rotate.x === 0 ? 'transform 0.5s ease-out' : 'none'
              }}
              className="relative group"
            >
              <div className="aspect-square max-w-sm mx-auto rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-md">
                <div className="absolute inset-4 border border-white/5 rounded-[2.5rem]" />
                <div className="absolute inset-12 border border-blue-400/10 rounded-[2rem]" />
                <div className="text-[12rem] font-black text-white/5 select-none tracking-tighter group-hover:text-accent/10 transition-colors duration-700 font-montserrat">
                  MR
                </div>

                {/* Micro-tech details */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 p-4 bg-accent rounded-2xl shadow-strong animate-float hidden md:block z-20">
                <Scale size={32} className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase font-montserrat">Trayectoria Profesional</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] font-montserrat">
              Marco Rossi: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Visión Jurídica.</span>
            </h2>

            <div className="space-y-6 text-white/60 text-lg md:text-xl leading-relaxed font-medium mb-12">
              <p>
                Como abogado con una sólida formación en la <span className="text-white font-bold">Justicia Federal</span>, he liderado la defensa de derechos en casos donde la tecnología redefine los límites de la ley.
              </p>
              <p>
                Mi ventaja competitiva radica en mi profundidad técnica: comprendo la <span className="text-white/80">arquitectura de sistemas y el código</span> desde adentro para transformarlos en una estrategia jurídica invulnerable.
              </p>
            </div>

            {/* Authority Pillars Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Derecho Tecnológico", desc: "Consultoría & Litigio", icon: Scale },
                { label: "Docencia Universitaria", desc: "Cátedra de Grado y Posgrado", icon: BookOpen },
                { label: "Especialista Técnico", desc: "Análisis de Infraestructura", icon: Terminal },
                { label: "Divulgación Científica", desc: "Liderazgo de Opinión", icon: Radio }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3 group hover:bg-white/10 transition-all duration-300">
                  <item.icon size={20} className="text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-black text-xs uppercase tracking-wider">{item.label}</div>
                    <div className="text-white/40 text-[9px] font-bold uppercase">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Presence / Authority Section */}
        <div className={`pt-16 border-t border-white/5 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">Presencia en Medios y Academia</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3 text-white group cursor-default">
              <Tv size={24} className="group-hover:text-red-500 transition-colors" />
              <span className="font-black tracking-tighter text-xl uppercase">Análisis en TV</span>
            </div>
            <div className="flex items-center gap-3 text-white group cursor-default">
              <Mic2 size={24} className="group-hover:text-accent transition-colors" />
              <span className="font-black tracking-tighter text-xl uppercase">Podcast Especializado</span>
            </div>
            <div className="flex items-center gap-3 text-white group cursor-default">
              <Youtube size={24} className="group-hover:text-red-600 transition-colors" />
              <span className="font-black tracking-tighter text-xl uppercase">Streaming & Media</span>
            </div>
            <div className="flex items-center gap-3 text-white group cursor-default">
              <BookOpen size={24} className="group-hover:text-accent transition-colors" />
              <span className="font-black tracking-tighter text-xl uppercase">Publicaciones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
