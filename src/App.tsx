import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Platform from './pages/Platform';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import Process from './pages/Process';
import ESG from './pages/ESG';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import { type Lang } from './translations';

const VALID_PAGES = ['home', 'about', 'solutions', 'infrastructure', 'platform', 'contact', 'get-started', 'service', 'process', 'esg', 'blog', 'careers'] as const;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState<Lang>('ko');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as typeof VALID_PAGES[number];
      if ((VALID_PAGES as readonly string[]).includes(hash)) {
        if (hash === 'solutions' || hash === 'infrastructure' || hash === 'service') {
          setCurrentPage('business');
        } else {
          setCurrentPage(hash);
        }
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
      {currentPage === 'home'        && <Home        lang={lang} />}
      {currentPage === 'about'       && <About       lang={lang} />}
      {currentPage === 'business'    && <Business    lang={lang} />}
      {currentPage === 'platform'    && <Platform    lang={lang} />}
      {currentPage === 'contact'     && <Contact     lang={lang} />}
      {currentPage === 'get-started' && <GetStarted  lang={lang} />}
      {currentPage === 'process'     && <Process     lang={lang} />}
      {currentPage === 'esg'         && <ESG         lang={lang} />}
      {currentPage === 'blog'        && <Blog        lang={lang} />}
      {currentPage === 'careers'     && <Careers     lang={lang} />}
    </Layout>
  );
}

export default App;
