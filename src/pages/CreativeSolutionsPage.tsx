import { CreativeSolutions } from '../components/CreativeSolutions/CreativeSolutions';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export function CreativeSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <CreativeSolutions />
      </main>
      <Footer />
    </>
  );
}