
import React, { useState } from 'react';
import { Mail, Cpu, MessageCircle, Copy, Check } from 'lucide-react';
import { Page } from '../types';
import { ASSETS } from '../assets/index';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenContact: () => void;
}

export const Footer = ({ onNavigate, onOpenContact }: FooterProps) => {
  const [logoError, setLogoError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nossomosacriando@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="pt-32 pb-16 bg-[#0a0a0a] text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              Pronto para <br/> <span className="text-blue-600">Começar?</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              Transformamos desafios complexos em produtos digitais elegantes. Escolha seu canal de preferência.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button 
              onClick={onOpenContact}
              className="w-full md:w-auto px-12 py-6 bg-blue-600 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/20 active:scale-95"
            >
              Iniciar Projeto
            </button>
          </div>

          <div className="pt-8">
            <button 
              onClick={handleCopyEmail}
              className="group flex items-center gap-4 mx-auto px-6 py-3 bg-white/5 rounded-full border border-white/5 hover:border-blue-600/30 transition-all"
            >
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">nossomosacriando@gmail.com</span>
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-gray-500 group-hover:text-blue-400" />}
            </button>
          </div>
        </div>

        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group/footer-logo"
           >
              <div className="relative h-8 w-8 flex items-center justify-center overflow-hidden rounded-lg bg-white/5 border border-white/10 group-hover/footer-logo:bg-blue-600/20 group-hover/footer-logo:border-blue-600/50 transition-all duration-500">
                {!logoError ? (
                  <img 
                    src={ASSETS.layout.logo} 
                    alt="Criando Logo" 
                    onError={() => setLogoError(true)}
                    className="h-full w-auto object-contain p-1 transition-transform duration-500 group-hover/footer-logo:scale-110" 
                  />
                ) : (
                  <Cpu size={16} className="text-blue-500" />
                )}
              </div>
              <span className="text-xs font-black tracking-tighter">
                CRIANDO <span className="text-gray-400 group-hover/footer-logo:text-blue-400 transition-colors duration-300">ENTERPRISE</span>
              </span>
           </div>
           
           <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
             © {new Date().getFullYear()} • Excellence in Software
           </p>

           <div className="flex gap-8">
              {['home', 'quem-somos', 'produtos'].map((id) => (
                <button 
                  key={id}
                  onClick={() => onNavigate(id as Page)}
                  className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                  {id.replace('-', ' ')}
                </button>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
};
