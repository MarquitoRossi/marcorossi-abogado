import { useState } from 'react';
import { MessageCircle, Send, Mail, Clock, CheckCircle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useToast } from '@/hooks/use-toast';

export default function Contacto() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Mensaje enviado',
      description: 'Te responderé a la brevedad. Gracias por contactarte.',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Hola Marco, me gustaría agendar una consulta inicial.'
    );
    window.open(`https://wa.me/5491100000000?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <p
              className={`text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${
                isInView ? 'opacity-100 animate-fade-in' : 'opacity-0'
              }`}
            >
              Contacto
            </p>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 ${
                isInView ? 'opacity-100 animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              Hablemos de tu caso.
            </h2>
            <p
              className={`text-lg text-muted-foreground mb-8 ${
                isInView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'
              }`}
            >
              La consulta inicial es estratégica: sirve para entender qué pasó, 
              evaluar opciones y definir próximos pasos. Sin compromisos, 
              sin letra chica.
            </p>

            {/* Info Cards */}
            <div
              className={`space-y-4 ${
                isInView ? 'opacity-100 animate-fade-in animation-delay-300' : 'opacity-0'
              }`}
            >
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Respuesta rápida</h4>
                  <p className="text-sm text-muted-foreground">
                    Respondo en menos de 24 horas hábiles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Consulta inicial</h4>
                  <p className="text-sm text-muted-foreground">
                    Primera reunión para conocer tu situación y evaluar opciones.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsApp}
              className={`mt-8 inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20BD5A] transition-all duration-300 hover:shadow-lg ${
                isInView ? 'opacity-100 animate-fade-in animation-delay-400' : 'opacity-0'
              }`}
            >
              <MessageCircle size={22} />
              Escribime por WhatsApp
            </button>
          </div>

          {/* Right Column - Form */}
          <div
            className={`${
              isInView ? 'opacity-100 animate-fade-in-right animation-delay-200' : 'opacity-0'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 bg-card rounded-2xl border border-border/50 shadow-medium"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Enviar mensaje</h3>
                  <p className="text-sm text-muted-foreground">
                    O escribime directamente a contacto@marcorossi.com.ar
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    maxLength={1000}
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                    placeholder="Contame brevemente tu situación..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
