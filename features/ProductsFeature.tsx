
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
                  <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Produto Criando</span>
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
                      className="group/btn px-10 py-6 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white border border-white/10 rounded-[2rem] font-bold flex items-center gap-6 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-1 transition-all duration-500 active:scale-95 shadow-xl"
                    >
                      <div className="p-3 bg-white/5 rounded-xl group-hover/btn:bg-blue-600/20 transition-colors">
                        <Download size={28} className="text-blue-400 group-hover/btn:scale-110 transition-transform" />
                      </div>
                      <div className="text-left leading-tight">
                        <p className="text-[10px] uppercase opacity-40 font-black tracking-[0.2em] mb-1">Disponível no</p>
                        <p className="text-xl font-black tracking-tight">Google Play</p>
                      </div>
                    </a>
                  )}

                  {product.appStore && (
                    <a 
                      href={product.appStore} 
                      target="_blank" 
                      rel="noopener" 
                      className="group/btn px-10 py-6 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white border border-white/10 rounded-[2rem] font-bold flex items-center gap-6 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-500 active:scale-95 shadow-xl"
                    >
                      <div className="p-3 bg-white/5 rounded-xl group-hover/btn:bg-blue-400/20 transition-colors">
                        <Download size={28} className="text-blue-400 group-hover/btn:scale-110 transition-transform" />
                      </div>
                      <div className="text-left leading-tight">
                        <p className="text-[10px] uppercase opacity-40 font-black tracking-[0.2em] mb-1">Disponível na</p>
                        <p className="text-xl font-black tracking-tight">App Store</p>
                      </div>
                    </a>
                  )}

                  {product.coCreatorLink && (
                    <a 
                      href={product.coCreatorLink} 
                      target="_blank" 
                      rel="noopener" 
                      className="group/btn px-10 py-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-900 text-gray-900 rounded-[2rem] font-bold flex items-center gap-6 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-1 transition-all duration-500 active:scale-95 shadow-sm"
                    >
                      <div className="p-3 bg-gray-100 rounded-xl group-hover/btn:bg-blue-50 transition-colors">
                        <ExternalLink size={28} className="text-blue-600 group-hover/btn:scale-110 transition-transform" />
                      </div>
                      <div className="text-left leading-tight">
                        <p className="text-[10px] uppercase opacity-50 font-black tracking-[0.2em] mb-1">Estúdio Co-criador</p>
                        <p className="text-xl font-black tracking-tight">Inative Studio</p>
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
