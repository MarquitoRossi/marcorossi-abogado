import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>Marco Rossi Abogado | Derecho y Tecnología</title>
        <meta
          name="description"
          content="Conflictos tecnológicos traducidos a lenguaje jurídico claro y operativo. Abogado especializado en derecho digital, evidencia electrónica, datos y plataformas."
        />
        <meta
          name="keywords"
          content="abogado tecnología, derecho digital, evidencia digital, privacidad datos, conflictos plataformas, abogado tech"
        />
        <link rel="canonical" href="https://marcorossi.com.ar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Marco Rossi Abogado | Derecho y Tecnología" />
        <meta
          property="og:description"
          content="Conflictos tecnológicos traducidos a lenguaje jurídico claro y operativo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marco Rossi Abogado | Derecho y Tecnología" />
        <meta
          name="twitter:description"
          content="Conflictos tecnológicos traducidos a lenguaje jurídico claro y operativo."
        />
      </Helmet>

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
    </>
  );
}
