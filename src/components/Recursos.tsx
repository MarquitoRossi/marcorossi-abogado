import { FileText, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const placeholderResources = [
  {
    title: 'Próximamente',
    description: 'Notas, análisis y explicaciones sobre derecho y tecnología.',
    tag: 'En desarrollo',
  },
  {
    title: 'Guías prácticas',
    description: 'Recursos para entender tus derechos en entornos digitales.',
    tag: 'Próximamente',
  },
  {
    title: 'Análisis de casos',
    description: 'Estudio de situaciones reales y cómo se resolvieron.',
    tag: 'Próximamente',
  },
];

export default function Recursos() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="recursos" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p
              className={`text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${
                isInView ? 'opacity-100 animate-fade-in' : 'opacity-0'
              }`}
            >
              Recursos
            </p>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground ${
                isInView ? 'opacity-100 animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              Ideas y herramientas.
            </h2>
          </div>
          <p
            className={`text-muted-foreground max-w-md ${
              isInView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'
            }`}
          >
            Un espacio en construcción para compartir análisis, explicaciones 
            y recursos sobre derecho y tecnología.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {placeholderResources.map((resource, index) => (
            <div
              key={resource.title}
              className={`group relative p-6 md:p-8 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-500 ${
                isInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <FileText size={20} />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-1 bg-muted rounded">
                  {resource.tag}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {resource.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-accent/60">
                <span>Disponible pronto</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter placeholder */}
        <div
          className={`mt-12 md:mt-16 p-8 md:p-12 bg-card rounded-2xl border border-border/50 text-center ${
            isInView ? 'opacity-100 animate-fade-in animation-delay-500' : 'opacity-0'
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Mantenete informado
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Próximamente, un newsletter con novedades sobre derecho y tecnología. 
            Sin spam, solo contenido relevante.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              disabled
              className="flex-1 px-4 py-3 bg-muted border border-border rounded-lg text-sm placeholder:text-muted-foreground/50 opacity-50 cursor-not-allowed"
            />
            <button
              disabled
              className="px-6 py-3 bg-muted text-muted-foreground font-medium rounded-lg text-sm opacity-50 cursor-not-allowed"
            >
              Próximamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
