import { Search, Cpu, FileText, Target } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Entender qué pasó',
    description: 'Antes de hablar de derecho, necesito entender el sistema, la plataforma o la tecnología involucrada. Cómo funcionó, qué datos generó, dónde están las pruebas.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Mapear la evidencia',
    description: 'Identificar y preservar la evidencia digital relevante. Metadatos, logs, capturas, comunicaciones. Lo que existe en el mundo digital y puede probarse en el jurídico.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Traducir al derecho',
    description: 'Convertir lo técnico en lenguaje jurídico operativo. No basta con entender el problema: hay que saber cómo plantearlo para que el sistema legal lo procese.',
  },
  {
    icon: Target,
    number: '04',
    title: 'Diseñar la estrategia',
    description: 'Con el panorama completo, definir objetivos realistas y el camino para alcanzarlos. Negociación, mediación o litigio, según lo que tenga más sentido.',
  },
];

export default function ComoTrabajo() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="como-trabajo" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32">
            <p
              className={`text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${
                isInView ? 'opacity-100 animate-fade-in' : 'opacity-0'
              }`}
            >
              Cómo trabajo
            </p>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 ${
                isInView ? 'opacity-100 animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              Un enfoque diferente para problemas nuevos.
            </h2>
            <p
              className={`text-lg text-muted-foreground mb-8 ${
                isInView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'
              }`}
            >
              El abordaje jurídico tradicional asume que los hechos son claros y solo 
              hay que encuadrarlos en la ley. Pero en conflictos tecnológicos, muchas veces 
              ni siquiera es evidente qué pasó, cómo pasó, o dónde está la prueba.
            </p>
            <p
              className={`text-lg text-muted-foreground ${
                isInView ? 'opacity-100 animate-fade-in animation-delay-300' : 'opacity-0'
              }`}
            >
              Mi enfoque invierte el proceso: primero entender el plano técnico y fáctico, 
              y recién después construir la estrategia jurídica sobre bases sólidas.
            </p>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative group ${
                  isInView ? 'opacity-100 animate-fade-in-right' : 'opacity-0'
                }`}
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-16 bg-border" />
                )}

                <div className="flex gap-6 p-6 bg-card rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-medium transition-all duration-500">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon size={18} className="text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
