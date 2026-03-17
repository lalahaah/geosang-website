import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
