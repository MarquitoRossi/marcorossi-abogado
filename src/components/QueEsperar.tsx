import React, { useRef, useState, useEffect } from 'react';
import { ClipboardCheck, DollarSign, Search, Users, MessageSquare, ShieldCheck } from 'lucide-react';

const expectations = [
    {
        icon: ClipboardCheck,
        title: "Evaluación responsable del caso",
        description: "Analizamos cada consulta con criterio jurídico y probatorio. No tomamos todos los casos. Aceptamos aquellos en los que creemos que podemos aportar una estrategia seria y técnicamente sostenible. Si consideramos que no es conveniente litigar, lo decimos con claridad."
    },
    {
        icon: DollarSign,
        title: "Honorarios y costos",
        description: "Nuestro trabajo es profesional y tiene costo. Informamos con transparencia los honorarios y los gastos estimados antes de iniciar cualquier intervención. Evitamos prometer resultados y evitamos también sorpresas económicas: todo se acuerda por escrito."
    },
    {
        icon: Search,
        title: "Cómo saber si podemos asumir tu caso",
        description: "Podés contactarte para una consulta inicial. En esa instancia revisamos la situación, la documentación disponible y la prueba digital vinculada al conflicto. A partir de ese encuentro definimos si corresponde avanzar y en qué modalidad de intervención."
    },
    {
        icon: Users,
        title: "Trabajo pro bono",
        description: "Destinamos un cupo limitado de casos pro bono a situaciones de especial vulnerabilidad o relevancia social. La selección de estos casos es discrecional del estudio y se realiza mediante evaluación fundada. Creemos que el ejercicio profesional también tiene una dimensión de responsabilidad pública."
    },
    {
        icon: MessageSquare,
        title: "Cómo contactarnos",
        description: "Atendemos únicamente con agenda previa. Podés escribirnos a través del formulario de contacto del sitio o por los canales de comunicación indicados. Toda la información que nos envíes es tratada con confidencialidad profesional."
    }
];

export default function QueEsperar() {
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
        <section id="que-esperar" ref={sectionRef} className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 tech-grid-dark opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent blur-[120px]" />

            <div className="section-container relative z-10">
                <div className="max-w-4xl mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase font-montserrat">Transparencia & Compromiso</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight font-montserrat">
                        Qué podés esperar <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">de nuestro estudio.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium">
                        Trabajamos con seriedad, realismo y trato respetuoso. Sabemos que cuando alguien nos contacta no está buscando discursos, sino respuestas claras. Por eso definimos desde el inicio qué pueden esperar quienes confían sus conflictos en nuestro equipo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {expectations.map((item, index) => (
                        <div
                            key={index}
                            className={`tech-card p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 group ${index === 3 || index === 4 ? 'lg:col-span-1.5 md:col-span-1' : ''
                                }`}
                            style={{
                                '--mouse-x': `${mousePos.x}px`,
                                '--mouse-y': `${mousePos.y}px`,
                            } as React.CSSProperties}
                        >
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors font-montserrat leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-white/40 text-base leading-relaxed font-medium italic">
                                    “{item.description}”
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Decorative block to fill the 6th slot or maintain layout */}
                    <div className="hidden lg:flex p-10 rounded-3xl border border-white/5 items-center justify-center opacity-20 grayscale">
                        <ShieldCheck size={80} className="text-white/20" />
                    </div>
                </div>
            </div>
        </section>
    );
}
