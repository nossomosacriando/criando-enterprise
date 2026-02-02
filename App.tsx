import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ContactForm } from './components/ContactForm';

import { HomeFeature } from './features/HomeFeature';
import { AboutFeature } from './features/AboutFeature';
import { ProductsFeature } from './features/ProductsFeature';

import { PolicyOLeitor } from './features/policy/pages/PolicyOLeitor';
import { PolicyHarvestWords } from './features/policy/pages/PolicyHarvestWords';

import { Page, PAGE_ROUTES } from './types';

/**
 * Mapeia URL → Page
 * Fonte única de verdade para entrada via browser
 */
const ROUTE_TO_PAGE = Object.entries(PAGE_ROUTES).reduce(
  (acc, [page, route]) => {
    acc[route] = page as Page;
    return acc;
  },
  {} as Record<string, Page>
);

export const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  /**
   * Sincroniza URL inicial (deep link / refresh)
   */
  useEffect(() => {
    const path = window.location.pathname;
    const resolvedPage = ROUTE_TO_PAGE[path];

    if (resolvedPage) {
      setCurrentPage(resolvedPage);
    }
  }, []);

  /**
   * Navegação semântica centralizada
   */
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', PAGE_ROUTES[page]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Renderização por Page
   */
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeFeature
            onNavigate={handlePageChange}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        );

      case 'quem-somos':
        return <AboutFeature />;

      case 'produtos':
        return <ProductsFeature onNavigate={handlePageChange} />;

      case 'politica-o-leitor':
        return <PolicyOLeitor onBack={() => handlePageChange('produtos')} />;

      case 'politica-harvest-words':
        return <PolicyHarvestWords onBack={() => handlePageChange('produtos')} />;

      default:
        return (
          <HomeFeature
            onNavigate={handlePageChange}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        );
    }
  };

  const isMainPage =
    currentPage === 'home' ||
    currentPage === 'produtos' ||
    currentPage === 'quem-somos';

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

      {isMainPage && (
        <Footer
          onNavigate={handlePageChange}
          onOpenContact={() => setIsContactModalOpen(true)}
        />
      )}

      {!isMainPage && (
        <footer className="bg-[#0a0a0a] py-10 text-center border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Criando Enterprise. Todos os direitos reservados.
          </p>
        </footer>
      )}

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
