import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import QueHago from '@/components/QueHago';
import ComoTrabajo from '@/components/ComoTrabajo';
import Servicios from '@/components/Servicios';
import QuienSoy from '@/components/QuienSoy';
import Recursos from '@/components/Recursos';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <QueHago />
        <ComoTrabajo />
        <Servicios />
        <QuienSoy />
        <Recursos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
