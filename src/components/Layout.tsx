import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display selection:bg-primary/10 selection:text-primary">
      <Navbar lang={lang} setLang={setLang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default Layout;
