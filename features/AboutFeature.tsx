
import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { Mail, Globe } from 'lucide-react';

export const AboutFeature = () => {
  return (
    <div className="bg-white">
      <section className="relative py-40 bg-white min-h-screen overflow-hidden" aria-labelledby="about-title">
        {/* Background Decorativo sutil */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <img src="assets/layout/backgrounds/about-bg.png" alt="" className="w-full h-full object-cover grayscale" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className="absolute -inset-6 bg-blue-100 rounded-[4rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                src="assets/layout/presentation/hero-image.png" 
                alt="Carlos Santana e Willian Gonçalves - Criando Enterprise" 
                className="relative z-10 w-full rounded-[3.5rem] shadow-2xl border-8 border-white object-cover" 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 space-y-10"
            >
              <header className="space-y-4">
                <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm">Empresa de Desenvolvimento Brasileira</p>
                <h1 id="about-title" className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900">Dando forma à <span className="text-blue-600">inovação digital.</span></h1>
              </header>
              
              <div className="prose prose-xl text-gray-800 space-y-8 leading-relaxed font-normal">
                <p>
                  A <strong className="text-gray-900 font-black">Criando Enterprise</strong> é uma software house brasileira que nasceu da visão compartilhada de transformar ideias inovadoras em soluções tecnológicas tangíveis para o mercado global. Fundada em 2022, nossa empresa dedica-se a produzir tecnologia com propósito e usabilidade excepcional.
                </p>
                <p>
                  Nossa missão é clara: oferecer soluções de desenvolvimento de aplicativos de alta qualidade que não apenas atendam às necessidades de nossos clientes, mas que superem expectativas através da inovação tecnológica constante e design focado no usuário.
                </p>
                <p>
                  Com um compromisso inabalável com a excelência técnica e o design intuitivo, focamos em entregar resultados que dão vida à imaginação, transformando desafios de software complexos em ferramentas simples, elegantes e poderosas para o cotidiano digital.
                </p>
                
                <footer className="pt-8 border-t border-gray-100">
                   <div className="flex gap-12">
                      <article>
                         <p className="text-4xl font-black text-gray-900">2022</p>
                         <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Fundação no Brasil</h3>
                      </article>
                      <article>
                         <p className="text-4xl font-black text-gray-900">Apps</p>
                         <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Foco em Mobile</h3>
                      </article>
                   </div>
                </footer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW CONTACT SECTION IN ABOUT PAGE */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tighter text-gray-900 leading-none">Vamos <br/><span className="text-blue-600">Conversar?</span></h2>
                <p className="text-gray-500 leading-relaxed font-medium">
                  Pronto para transformar sua visão em código? Preencha o formulário e nossa equipe responderá em até 24h.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-900">
                  <Mail className="text-blue-600" size={20} />
                  <span className="font-bold text-sm">nossomosacriando@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-900">
                  <Globe className="text-blue-600" size={20} />
                  <span className="font-bold text-sm">Brasil • Atendimento Global</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 w-full bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
