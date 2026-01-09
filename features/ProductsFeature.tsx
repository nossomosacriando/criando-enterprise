
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, ChevronRight, ExternalLink } from 'lucide-react';
import { Carousel } from '../components/Carousel';
import { PRODUCTS } from '../constants';
import { Page } from '../types';

interface ProductsFeatureProps {
  onNavigate: (page: Page) => void;
}

export const ProductsFeature = ({ onNavigate }: ProductsFeatureProps) => {
  return (
    <section className="py-40 bg-gray-50 min-h-screen" aria-labelledby="products-title">
      <div className="container mx-auto px-6">
        <header className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="products-title" className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-gray-900">
              Nosso <span className="text-blue-600">Ecossistema.</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mt-6">
              Desenvolvemos aplicativos projetados para potencializar seu tempo e organizar suas paixões digitais.
            </p>
          </motion.div>
        </header>
        
        <div className="space-y-40">
          {PRODUCTS.map((product, i) => (
            <motion.article 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
            >
              {/* Image / Carousel Section */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl"></div>
                <Carousel images={product.images} />
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">{product.description}</p>
                </div>
                
                {/* Modernized Buttons Group */}
                <div className="flex flex-wrap gap-6">
                  {product.playStore && (
                    <a 
                      href={product.playStore} 
                      target="_blank" 
                      rel="noopener" 
                      className="group/btn w-full sm:w-auto sm:min-w-[240px] px-8 py-5 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-white border border-white/10 rounded-3xl font-bold flex items-center gap-5 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-500 active:scale-95 shadow-xl"
                    >
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover/btn:bg-blue-600 transition-all duration-500 group-hover/btn:rotate-[360deg]">
                        <Download size={26} className="text-white group-hover/btn:scale-110 transition-transform" />
                      </div>
                      <div className="text-left leading-tight">
                        <p className="text-[9px] uppercase opacity-50 font-black tracking-[0.2em] mb-1">Disponível no</p>
                        <p className="text-lg font-black tracking-tight whitespace-nowrap">Google Play</p>
                      </div>
                    </a>
                  )}

                  {product.appStore && (
                    <a 
                      href={product.appStore} 
                      target="_blank" 
                      rel="noopener" 
                      className="group/btn w-full sm:w-auto sm:min-w-[240px] px-8 py-5 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-white border border-white/10 rounded-3xl font-bold flex items-center gap-5 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-500 active:scale-95 shadow-xl"
                    >
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover/btn:bg-blue-500 transition-all duration-500 group-hover/btn:rotate-[360deg]">
                        <Download size={26} className="text-white group-hover/btn:scale-110 transition-transform" />
                      </div>
                      <div className="text-left leading-tight">
                        <p className="text-[9px] uppercase opacity-50 font-black tracking-[0.2em] mb-1">Disponível na</p>
                        <p className="text-lg font-black tracking-tight whitespace-nowrap">App Store</p>
                      </div>
                    </a>
                  )}

                  {product.coCreatorLink && (
                    <a 
                      href={product.coCreatorLink} 
                      target="_blank" 
                      rel="noopener" 
                      className="group/btn w-full sm:w-auto sm:min-w-[240px] px-8 py-5 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-white border border-white/10 rounded-3xl font-bold flex items-center gap-5 hover:shadow-2xl hover:shadow-gray-900/40 hover:-translate-y-1 transition-all duration-500 active:scale-95 shadow-xl"
                    >
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover/btn:bg-gray-600 transition-all duration-500 group-hover/btn:rotate-[360deg]">
                        <ExternalLink size={26} className="text-white group-hover/btn:scale-110 transition-transform" />
                      </div>
                      <div className="text-left leading-tight">
                        <p className="text-[9px] uppercase opacity-50 font-black tracking-[0.2em] mb-1">Estúdio <br/> Co-Fundador</p>
                        <p className="text-lg font-black tracking-tight whitespace-nowrap">Inative Studio</p>
                      </div>
                    </a>
                  )}
                </div>
                
                {/* Secondary Action */}
                <button 
                  onClick={() => onNavigate(product.policyPage)}
                  className="flex items-center gap-4 text-gray-400 font-black uppercase text-[10px] tracking-[0.4em] hover:text-blue-600 transition-all group/policy"
                >
                  <ShieldCheck size={18} className="group-hover/policy:rotate-12 transition-transform" /> 
                  <span className="border-b border-transparent group-hover/policy:border-blue-600/30 pb-1">Política de Privacidade</span>
                  <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/policy:opacity-100 group-hover/policy:translate-x-0 transition-all" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
