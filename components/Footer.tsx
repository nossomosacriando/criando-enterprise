
import React from 'react';
import { Mail } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="pt-32 pb-16 bg-[#0a0a0a] text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Main Messaging */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              Dúvidas ou <br/> <span className="text-blue-600">Projetos?</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              Nossa equipe técnica está pronta para analisar seu desafio e transformar sua visão em uma solução digital de alto impacto.
            </p>
          </div>
          
          {/* Centered Contact Action */}
          <div className="flex justify-center">
            <div 
              className="group cursor-pointer inline-flex items-center gap-8 p-1 bg-white/5 border border-white/10 rounded-[3rem] pr-10 hover:bg-white/10 hover:border-blue-600/30 transition-all duration-500"
              onClick={() => window.location.href = 'mailto:nossomosacriando@gmail.com'}
            >
              <div className="p-6 bg-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-600/20 group-hover:scale-105 transition-transform duration-500">
                <Mail size={32} className="text-white" />
              </div>
              <div className="text-left">
                 <p className="text-[10px] uppercase font-black text-blue-400 tracking-[0.4em] mb-1">E-mail Direto</p>
                 <p className="text-xl md:text-2xl font-bold text-white tracking-tight">nossomosacriando@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Branding & Links */}
        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
              <img src="assets/layout/logo/logo.png" alt="Criando Logo" className="h-6 w-auto" />
              <span className="text-xs font-black tracking-tighter">CRIANDO ENTERPRISE</span>
           </div>
           
           <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
             © {new Date().getFullYear()} • Building for the New Era
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
