import { Services } from '../components/Services/Services';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}