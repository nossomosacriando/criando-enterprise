
import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';
import { ASSETS } from '../assets/index';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a] shadow-2xl py-4 border-b border-white/5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          {/* Logo Container with Fallback */}
          <div className="relative h-10 w-10 flex items-center justify-center overflow-hidden rounded-xl bg-blue-600/10 border border-white/10">
            {!logoError ? (
              <img 
                src={ASSETS.layout.logo} 
                alt="Criando Logo" 
                onError={() => setLogoError(true)}
                className="h-full w-auto transition-transform group-hover:scale-110 relative z-10 object-contain p-1" 
              />
            ) : (
              <Cpu size={20} className="text-blue-500 relative z-10" />
            )}
            
            {/* Dynamic Gradient Overlay */}
            <motion.div 
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ backgroundSize: '200% 200%' }}
              className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-transparent to-blue-400/30 mix-blend-overlay z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-black text-xl tracking-tighter text-white">CRIANDO</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5 text-blue-400">Enterprise</span>
          </div>
        </div>

        <div className="hidden md:flex gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-white ${
                activePage === item.id ? 'text-white border-b-2 border-blue-500 pb-1' : 'text-gray-300 hover:text-white opacity-60 hover:opacity-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] shadow-2xl overflow-hidden py-10 flex flex-col items-center gap-8 md:hidden border-t border-white/5"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`text-xl font-black uppercase tracking-widest ${
                  activePage === item.id ? 'text-blue-500' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
