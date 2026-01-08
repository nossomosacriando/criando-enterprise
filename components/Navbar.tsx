
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a] shadow-2xl py-4 border-b border-white/5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          <img src="assets/layout/logo/logo.png" alt="Criando Logo" className="h-10 w-auto transition-transform group-hover:scale-110" />
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
