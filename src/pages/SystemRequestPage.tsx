import { SystemRequestForm } from '../components/SystemRequestForm/SystemRequestForm';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export function SystemRequestPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main className="py-16">
        <SystemRequestForm />
      </main>
      <Footer />
    </div>
  );
}
