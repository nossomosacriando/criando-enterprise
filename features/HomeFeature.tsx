
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ArrowRight, Terminal } from 'lucide-react';
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
        <div 
          className="absolute inset-0 z-0 opacity-[0.25] bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${ASSETS.layout.backgrounds.home})`,
          }}
        ></div>

        <div 
          className="absolute inset-0 z-[1] opacity-[0.1]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }}
        ></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-[2]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="flex flex-col items-center mb-12">
              <span className="inline-block px-5 py-1.5 rounded-full border border-white/5 bg-white/5 text-blue-500 text-[10px] font-black tracking-[0.6em] uppercase mb-16">
                Engineering & Design Studio
              </span>
              
              <h1 className="text-7xl md:text-[13rem] font-black leading-none tracking-tighter mb-6 select-none text-white drop-shadow-2xl">
                CRIANDO
              </h1>
              
              <p className="text-sm md:text-xl font-medium uppercase tracking-[0.9em] text-gray-500 mb-20 ml-[0.9em]">
                A Nova Era Digital
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-16">
              <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
                Desenvolvemos arquiteturas de software sólidas e interfaces funcionais. 
                Nossa especialidade é traduzir necessidades de negócio em ferramentas tecnológicas escaláveis e intuitivas.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <button 
                  onClick={() => onNavigate('produtos')}
                  className="group px-14 py-6 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center gap-4"
                >
                  Ver Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={onOpenContact}
                  className="px-14 py-6 bg-transparent border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/5 hover:border-white/30 transition-all"
                >
                  Falar com um Consultor
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-48 bg-white text-black overflow-hidden" aria-labelledby="tech-title">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
            <div className="lg:col-span-8">
              <p className="text-blue-700 font-black uppercase tracking-[0.4em] text-[11px] mb-6">Expertise Técnica</p>
              <h2 id="tech-title" className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-gray-900">
                Soluções para o <br/> 
                <span className="text-blue-600">
                  Mundo Real.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pl-12">
              <p className="text-gray-500 text-xl font-medium leading-relaxed">
                Abordagem multiplataforma: criamos ecossistemas digitais que funcionam onde seu usuário está.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#050505] rounded-[3rem] p-12 md:p-20 text-white flex flex-col justify-between group shadow-2xl shadow-black/20"
            >
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-12 shadow-2xl shadow-blue-600/20">
                  <Monitor size={32} />
                </div>
                <h3 className="text-4xl font-black mb-6 tracking-tight">Sistemas Web & Desktop</h3>
                <p className="text-gray-400 text-xl leading-relaxed max-w-lg font-light">
                  Aplicações de alto desempenho otimizadas para navegadores e sistemas operacionais de mesa, garantindo produtividade e robustez.
                </p>
              </div>
              <div className="mt-16 flex gap-4 flex-wrap">
                {['React.js', 'Next.js', 'Typescript', 'Rust'].map(tech => (
                  <span key={tech} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-200 transition-colors">{tech}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-gradient-to-br from-white to-gray-50 rounded-[3rem] p-12 border border-gray-100 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 mb-10">
                  <Terminal className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic">Infraestrutura</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  Backend escalável e APIs seguras que sustentam toda a lógica do seu negócio com estabilidade total.
                </p>
              </div>
              <div className="w-full h-px bg-gray-200 mt-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
