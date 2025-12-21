import { Gavel, Shield, Users, Sparkles } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const services = [
  {
    icon: Gavel,
    title: 'Intervención en conflictos complejos',
    description: 'Litigios donde la tecnología es parte del problema: evidencia digital, plataformas, sistemas, datos. Demandas, defensas y negociaciones con enfoque estratégico.',
    features: ['Litigio civil y comercial', 'Defensa penal tecnológica', 'Mediaciones y negociaciones'],
  },
  {
    icon: Shield,
    title: 'Asesoramiento preventivo',
    description: 'Anticiparse a los problemas antes de que escalen. Revisar contratos, políticas de privacidad, términos de servicio y flujos de datos para evitar conflictos futuros.',
    features: ['Auditoría de riesgos digitales', 'Políticas de privacidad', 'Compliance tecnológico'],
  },
  {
    icon: Users,
    title: 'Acompañamiento estratégico',
    description: 'Para personas, creadores de contenido y empresas que operan en entornos digitales. Asesoría continua para tomar decisiones informadas.',
    features: ['Creadores y streamers', 'Startups y tech', 'Personas afectadas'],
  },
  {
    icon: Sparkles,
    title: 'Tecnología e inteligencia artificial',
    description: 'Trabajo con IA generativa, sistemas automatizados, algoritmos de decisión. Los problemas jurídicos que la tecnología nueva trae consigo.',
    features: ['Regulación de IA', 'Sesgos algorítmicos', 'Responsabilidad automatizada'],
  },
];

export default function Servicios() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="servicios" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p
            className={`text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${
              isInView ? 'opacity-100 animate-fade-in' : 'opacity-0'
            }`}
          >
            Servicios
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 ${
              isInView ? 'opacity-100 animate-fade-in-up animation-delay-100' : 'opacity-0'
            }`}
          >
            Soluciones para problemas que antes no existían.
          </h2>
          <p
            className={`text-lg text-muted-foreground ${
              isInView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'
            }`}
          >
            No ofrezco un catálogo cerrado de servicios. Cada problema tecnológico 
            tiene sus particularidades. Lo que ofrezco es un enfoque claro y una 
            metodología para abordarlo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 md:p-10 bg-card rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-strong ${
                isInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6">
                <service.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
