import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Platform from './pages/Platform';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted.tsx';
import Process from './pages/Process';
import ESG from './pages/ESG';
import Blog from './pages/Blog';
import Careers from './pages/Careers';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [lang, setLang] = React.useState<'ko' | 'en'>('ko');

  // Simple routing for demo purposes
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'solutions', 'infrastructure', 'platform', 'contact', 'get-started', 'service', 'process', 'esg', 'blog', 'careers'].includes(hash)) {
        // 서비스(#service) → business, 프로세스(#process) → process
        if (hash === 'solutions' || hash === 'infrastructure' || hash === 'service') setCurrentPage('business');
        else setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'instant' });
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
      {currentPage === 'about' && <About lang={lang} />}
      {currentPage === 'business' && <Business lang={lang} />}
      {currentPage === 'platform' && <Platform lang={lang} />}
      {currentPage === 'contact' && <Contact lang={lang} />}
      {currentPage === 'get-started' && <GetStarted lang={lang} />}
      {currentPage === 'process' && <Process lang={lang} />}
      {currentPage === 'esg' && <ESG lang={lang} />}
      {currentPage === 'blog' && <Blog lang={lang} />}
      {currentPage === 'careers' && <Careers lang={lang} />}
    </Layout>
  );
}

export default App;
