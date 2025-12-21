import { Shield, Globe, Scale, Database, Lock, AlertTriangle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const areas = [
  {
    icon: Globe,
    title: 'Plataformas y redes',
    description: 'Conflictos con redes sociales, marketplaces, apps y servicios digitales. Cuando las reglas del juego cambian sin aviso.',
  },
  {
    icon: Database,
    title: 'Datos y privacidad',
    description: 'Uso indebido de información personal, filtraciones, perfilamiento. La frontera entre lo que pueden y no pueden hacer con tus datos.',
  },
  {
    icon: Lock,
    title: 'Evidencia digital',
    description: 'Preservación, análisis y presentación de prueba electrónica. Que lo que pasó en el mundo digital se pueda probar en el jurídico.',
  },
  {
    icon: AlertTriangle,
    title: 'Daños en entornos digitales',
    description: 'Estafas online, suplantación de identidad, difamación, phishing. Cuando el daño se produce a través de pantallas.',
  },
  {
    icon: Shield,
    title: 'Propiedad intelectual digital',
    description: 'Contenido, creaciones, marcas y obras en el ecosistema online. Proteger lo que creás en el mundo digital.',
  },
  {
    icon: Scale,
    title: 'Contratos tecnológicos',
    description: 'SaaS, licencias, términos de servicio, desarrollo de software. El derecho detrás de los clicks de "Acepto".',
  },
];

export default function QueHago() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="que-hago" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-32 gradient-fade-top" />

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p
            className={`text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${
              isInView ? 'opacity-100 animate-fade-in' : 'opacity-0'
            }`}
          >
            Qué hago
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 ${
              isInView ? 'opacity-100 animate-fade-in-up animation-delay-100' : 'opacity-0'
            }`}
          >
            Cuando la tecnología complica, el derecho tiene que resolver.
          </h2>
          <p
            className={`text-lg text-muted-foreground ${
              isInView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'
            }`}
          >
            No se trata solo de entender códigos o leyes por separado. Se trata de 
            conectar lo que pasó en el sistema con lo que dice el derecho, y construir 
            una estrategia que funcione en ambos mundos.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className={`group p-6 md:p-8 bg-card rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-medium transition-all duration-500 ${
                isInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <area.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
