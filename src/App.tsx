import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Platform from './pages/Platform';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted.tsx';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [lang, setLang] = React.useState<'ko' | 'en'>('ko');

  // Simple routing for demo purposes
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'solutions', 'infrastructure', 'platform', 'contact', 'get-started', 'service'].includes(hash)) {
        // 서비스(#service), 솔루션/인프라(#solutions/#infrastructure) → 비즈니스 페이지로 연결
        if (hash === 'solutions' || hash === 'infrastructure' || hash === 'service') setCurrentPage('business');
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
    <Layout lang={lang} setLang={setLang}>
      {currentPage === 'home' && <Home lang={lang} />}
      {currentPage === 'about' && <About />}
      {currentPage === 'business' && <Business />}
      {currentPage === 'platform' && <Platform />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'get-started' && <GetStarted />}
    </Layout>
  );
}

export default App;
