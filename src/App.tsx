import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Platform from './pages/Platform';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  // Simple routing for demo purposes
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'solutions', 'infrastructure', 'platform', 'contact'].includes(hash)) {
        if (hash === 'solutions' || hash === 'infrastructure') setCurrentPage('business');
        else setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Layout>
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'business' && <Business />}
      {currentPage === 'platform' && <Platform />}
      {currentPage === 'contact' && <Contact />}
    </Layout>
  );
}

export default App;
