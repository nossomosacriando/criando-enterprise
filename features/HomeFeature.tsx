
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ArrowRight, Layers, Cpu } from 'lucide-react';
import { Page } from '../types';
import { ASSETS } from '../assets/index';

interface HomeFeatureProps {
  onNavigate: (page: Page) => void;
  onOpenContact: () => void;
}

export const HomeFeature = ({ onNavigate, onOpenContact }: HomeFeatureProps) => {
  return (
    <div className="bg-[#050505] text-white selection:bg-blue-600">
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" role="banner">
        {/* Background Layer with gradients as fallback */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.15] scale-110 blur-sm bg-cover bg-center bg-no-repeat bg-[#0a0a0a]" 
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), transparent), url("${ASSETS.layout.backgrounds.home}")`,
            backgroundColor: '#050505'
          }}
        ></div>

        <div 
          className="absolute inset-0 z-[1] opacity-[0.05]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '48px 48px' 
          }}
        ></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-[2]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 text-blue-400 text-[10px] font-black tracking-[0.5em] uppercase mb-12 backdrop-blur-md"
              >
                High-End Software Engineering
              </motion.span>
              
              <h1 className="text-6xl md:text-[11rem] font-black leading-[0.85] tracking-tighter mb-8 select-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                CRIANDO
              </h1>
              
              <p className="text-xs md:text-lg font-bold uppercase tracking-[1.2em] text-blue-500/80 mb-16 ml-[1.2em]">
                ENTERPRISE SOLUTIONS
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              <p className="text-xl md:text-3xl text-gray-300 font-light leading-snug tracking-tight">
                Arquitetamos ecossistemas digitais que transcendem dispositivos. 
                Sua visão, nossa engenharia de precisão.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                <button 
                  onClick={() => onNavigate('produtos')}
                  className="group relative px-12 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center gap-3 overflow-hidden shadow-2xl shadow-white/5"
                >
                  <span className="relative z-10">Explorar Portfolio</span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={onOpenContact}
                  className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
                >
                  Consultoria Técnica
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Matrix Section */}
      <section className="py-48 bg-white text-black" aria-labelledby="tech-title">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-32">
            <h2 id="tech-title" className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-gray-900 mb-10">
              Engenharia sem <br/> 
              <span className="text-blue-600">Fronteiras Digitais.</span>
            </h2>
            <p className="text-gray-500 text-xl font-light leading-relaxed">
              Não somos apenas uma agência mobile. Somos arquitetos de sistemas. Do backend escalável em nuvem à interface desktop de alta performance, garantimos que seu software seja impecável em qualquer tela.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor size={32} />,
                title: "Web & Desktop",
                desc: "Aplicações robustas para navegadores e sistemas OS nativos (Windows/macOS), focadas em produtividade corporativa.",
                techs: ["React", "Next.js", "Electron"]
              },
              {
                icon: <Cpu size={32} />,
                title: "Core & Infra",
                desc: "Arquitetura de microsserviços e APIs de ultra-baixa latência que sustentam ecossistemas complexos.",
                techs: ["Node.js", "Rust", "AWS"]
              },
              {
                icon: <Layers size={32} />,
                title: "Multi-Interface",
                desc: "Desenvolvimento híbrido e nativo que garante uma experiência fluida entre tablets, smartphones e wearables.",
                techs: ["Flutter", "React Native"]
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex flex-col h-full group transition-all hover:shadow-2xl hover:shadow-blue-600/5"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{card.title}</h3>
                <p className="text-gray-500 font-normal leading-relaxed mb-10 flex-grow">
                  {card.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {card.techs.map(t => (
                    <span key={t} className="text-[9px] font-black uppercase tracking-widest text-blue-600/50">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
