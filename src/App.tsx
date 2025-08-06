import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { initGA, logPageView } from './utils/analytics';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({
  default: module.HomePage
})));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({
  default: module.ServicesPage
})));
const CreativeSolutionsPage = lazy(() => import('./pages/CreativeSolutionsPage').then(module => ({
  default: module.CreativeSolutionsPage
})));
const SystemRequestPage = lazy(() => import('./pages/SystemRequestPage').then(module => ({
  default: module.SystemRequestPage
})));

// Initialize GA
initGA();

// Prefetch component
function PrefetchLinks() {
  const location = useLocation();

  useEffect(() => {
    // Log page view on route change
    logPageView();

    // Prefetch other routes based on current location
    const prefetchRoutes = async () => {
      if (location.pathname === '/') {
        // Prefetch services and creative solutions pages when on home
        const [servicesModule, creativeSolutionsModule] = await Promise.all([
          import('./pages/ServicesPage'),
          import('./pages/CreativeSolutionsPage')
        ]);
      } else if (location.pathname === '/services') {
        // Prefetch creative solutions when on services
        const creativeSolutionsModule = await import('./pages/CreativeSolutionsPage');
      }
    };

    prefetchRoutes();
  }, [location]);

  return null;
}

// Loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <PrefetchLinks />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/creative-solutions" element={<CreativeSolutionsPage />} />
            <Route path="/system-request" element={<SystemRequestPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;