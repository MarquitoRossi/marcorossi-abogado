import { Award, BookOpen, Scale } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function QuienSoy() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="quien-soy" className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid-dark opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/20 to-transparent" />

      <div ref={ref} className="section-container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image Placeholder / Abstract */}
          <div
            className={`lg:col-span-2 ${
              isInView ? 'opacity-100 animate-fade-in-left' : 'opacity-0'
            }`}
          >
            <div className="relative">
              {/* Abstract representation instead of photo */}
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-navy-light/20 border border-primary-foreground/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-4 border border-primary-foreground/5 rounded-xl" />
                <div className="absolute inset-8 border border-primary-foreground/5 rounded-lg" />
                <div className="text-8xl font-bold text-primary-foreground/10">MR</div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary-foreground/10 rounded-full animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-lg rotate-12 animate-float" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-3">
            <p
              className={`text-sm font-semibold text-primary-foreground/60 uppercase tracking-widest mb-4 ${
                isInView ? 'opacity-100 animate-fade-in' : 'opacity-0'
              }`}
            >
              Quién soy
            </p>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8 ${
                isInView ? 'opacity-100 animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              Un abogado que conoce el sistema por dentro.
            </h2>

            <div
              className={`space-y-6 text-primary-foreground/80 text-lg leading-relaxed ${
                isInView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'
              }`}
            >
              <p>
                Soy Marco Rossi. Abogado con experiencia en la Justicia, donde aprendí 
                cómo funciona realmente el sistema: sus tiempos, sus códigos, sus 
                limitaciones y sus posibilidades.
              </p>
              <p>
                Pero también soy alguien que creció rodeado de tecnología, que entiende 
                cómo funcionan los sistemas, las plataformas y los datos. Eso me permite 
                trabajar en un territorio que muchos abogados evitan: el cruce entre 
                lo jurídico y lo digital.
              </p>
              <p>
                Elegí ejercer desde otro lugar. Sin la formalidad excesiva, sin el 
                lenguaje incomprensible, sin prometer imposibles. Con criterio, con 
                honestidad y con un enfoque que prioriza entender antes de actuar.
              </p>
            </div>

            {/* Credentials */}
            <div
              className={`grid sm:grid-cols-3 gap-6 mt-12 ${
                isInView ? 'opacity-100 animate-fade-in animation-delay-300' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Scale size={20} className="text-primary-foreground/50" />
                <span className="text-sm">Experiencia en Justicia</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <BookOpen size={20} className="text-primary-foreground/50" />
                <span className="text-sm">Formación continua</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Award size={20} className="text-primary-foreground/50" />
                <span className="text-sm">Enfoque moderno</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
