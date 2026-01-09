import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, PenTool, Code2, Rocket, Brain, Heart, Sparkles } from 'lucide-react';
import { ASSETS } from '../assets/index';

export const AboutFeature = () => {
  const steps = [
    { icon: <Search />, title: "Discovery", desc: "Análise profunda de mercado e requisitos técnicos." },
    { icon: <PenTool />, title: "Design", desc: "UX/UI centrada no usuário e prototipagem de alta fidelidade." },
    { icon: <Code2 />, title: "Engineering", desc: "Desenvolvimento ágil com foco em código limpo e escalável." },
    { icon: <Rocket />, title: "Deployment", desc: "Lançamento estratégico e monitoramento contínuo." }
  ];

  return (
    <div className="bg-white">
      <section className="relative py-40 bg-white min-h-screen overflow-hidden" aria-labelledby="about-title">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
          {/* Fix: Access the specific 'about' background instead of the entire backgrounds object */}
          <img src={ASSETS.layout.backgrounds.about} alt="" className="w-full h-full object-cover grayscale" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24 mb-40">
            <motion.div 
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  className="w-full lg:w-1/2 relative group"
>
  {/* Efeito de brilho ao fundo */}
  <div className="absolute -inset-6 bg-blue-100 rounded-[4rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
  
  {/* Container da Imagem */}
  <div className="relative z-10 w-full aspect-[4/3] rounded-[3.5rem] shadow-2xl border-8 border-white bg-gray-50 overflow-hidden">
      {/* Aqui chamamos a imagem do seu arquivo de assets */}
      <img 
        src={ASSETS.layout.backgrounds.about} 
        alt="Equipe Criando" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay sutil para manter o estilo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Tag flutuante opcional (mantendo seu estilo) */}
      <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-lg">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">Engineering Team</p>
      </div>
  </div>
</motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 space-y-10"
            >
              <header className="space-y-4">
                <h1 id="about-title" className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-gray-900">Propósito por trás <br/> de cada <span className="text-blue-600">Bit.</span></h1>
              </header>
              
              <div className="prose prose-xl text-gray-700 space-y-8 leading-relaxed font-light">
                <p>
                  Na <strong className="text-gray-900 font-black tracking-tight">Criando</strong>, acreditamos que códigos são apenas lines vazias se não houver um propósito estratégico por trás deles. Fundada em 2022, a empresa consolidou-se a partir da sinergia profissional entre <strong className="text-gray-900 font-bold">Carlos Santana</strong> e <strong className="text-gray-900 font-bold">Willian Gonçalves</strong>, com a missão de converter tecnologia bruta em soluções que geram valor e impacto real.
                </p>
                
                <p className="italic text-xl text-gray-400 border-l-4 border-blue-600 pl-6 py-2">
                  Para nós, desenvolver software não é apenas uma entrega técnica; é um ato de dar forma.
                </p>

                <div className="grid grid-cols-1 gap-8 pt-4">
                  <div className="flex gap-4">
                    <div className="mt-1 text-blue-600"><Brain size={24} /></div>
                    <div>
                      <h3 className="text-gray-900 font-black text-lg uppercase tracking-wider mb-1">A Mente que Projeta</h3>
                      <p className="text-base text-gray-600">Usamos nosso conhecimento técnico e visão estratégica para arquitetar soluções robustas e inovadoras.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 text-blue-600"><Heart size={24} /></div>
                    <div>
                      <h3 className="text-gray-900 font-black text-lg uppercase tracking-wider mb-1">O Coração que Impulsiona</h3>
                      <p className="text-base text-gray-600">Colocamos paixão em cada projeto, entendendo que do outro lado da tela existe um sonho, uma empresa e uma necessidade humana.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 text-blue-600"><Sparkles size={24} /></div>
                    <div>
                      <h3 className="text-gray-900 font-black text-lg uppercase tracking-wider mb-1">A Habilidade que Transforma</h3>
                      <p className="text-base text-gray-600">Unimos criatividade e tecnologia para criar ferramentas que não apenas funcionam, mas inspiram e conectam.</p>
                    </div>
                  </div>
                </div>

                <p className="pt-8 border-t border-gray-100">
                  Nossa marca é o reflexo dessa união. Um símbolo de convergência onde a inteligência dos circuitos encontra a fluidez da criação. Não somos apenas uma Software House; somos o porto seguro onde sua ideia ganha estrutura, vida e movimento.
                </p>

                <p className="text-slate-800 font-black text-2xl tracking-tighter italic">
                  Criando: Unindo mente, coração e tecnologia.
                </p>
                
                <footer className="pt-8">
                   <div className="flex gap-12">
                      <article>
                         <p className="text-4xl font-black text-gray-900 tracking-tighter">2022</p>
                         <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estúdio Fundado</h3>
                      </article>
                      <article>
                         <p className="text-4xl font-black text-gray-900 tracking-tighter">100%</p>
                         <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Multiplataforma</h3>
                      </article>
                   </div>
                </footer>
              </div>
            </motion.div>
          </div>

          {/* New Methodology Section */}
          <div className="pt-20 border-t border-gray-100">
            <div className="text-center mb-24">
              <p className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Como trabalhamos</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Nossa Metodologia</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium px-4">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};