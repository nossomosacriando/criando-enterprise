
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ContactForm } from './components/ContactForm';
import { HomeFeature } from './features/HomeFeature';
import { AboutFeature } from './features/AboutFeature';
import { ProductsFeature } from './features/ProductsFeature';
import { PolicyFeature } from './features/PolicyFeature';
import { Page } from './types';

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeFeature onNavigate={handlePageChange} onOpenContact={() => setIsContactModalOpen(true)} />;
      case 'quem-somos':
        return <AboutFeature />;
      case 'produtos':
        return <ProductsFeature onNavigate={handlePageChange} />;
      case 'politica-leitor':
        return <PolicyFeature type="leitor" onBack={() => handlePageChange('produtos')} />;
      case 'politica-harvest':
        return <PolicyFeature type="harvest" onBack={() => handlePageChange('produtos')} />;
      default:
        return <HomeFeature onNavigate={handlePageChange} onOpenContact={() => setIsContactModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      <Navbar activePage={currentPage} onNavigate={handlePageChange} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>

      {(currentPage === 'home' || currentPage === 'produtos') && (
        <Footer onNavigate={handlePageChange} />
      )}
      
      {/* Small footer for other pages */}
      {currentPage !== 'home' && currentPage !== 'produtos' && (
         <footer className="bg-[#0a0a0a] py-10 text-center border-t border-white/10">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Criando Enterprise. Todos os direitos reservados.</p>
         </footer>
      )}

      {/* Global Contact Modal */}
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        title="Inicie seu Projeto"
      >
        <ContactForm />
      </Modal>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
