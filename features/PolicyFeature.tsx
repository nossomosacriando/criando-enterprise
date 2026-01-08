
import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, Mic, Shield, Baby, Info, ExternalLink, RefreshCw } from 'lucide-react';

interface PolicyFeatureProps {
  type: 'leitor' | 'harvest';
  onBack: () => void;
}

export const PolicyFeature = ({ type, onBack }: PolicyFeatureProps) => {
  const isLeitor = type === 'leitor';
  const productName = isLeitor ? 'O Leitor' : 'Harvest Words: Inglês Jogando';
  const lastUpdate = isLeitor ? '11 de Fevereiro de 2023' : '14 de Novembro de 2025';

  return (
    <section className="py-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack} 
          className="mb-14 flex items-center gap-3 text-gray-400 hover:text-blue-600 font-black uppercase text-xs tracking-[0.3em] transition-all group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Voltar para Produtos
        </button>
        
        <div className="prose prose-slate prose-xl max-w-none text-gray-900">
          <header className="mb-16 border-b border-gray-100 pb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl">
                <ShieldCheck size={32} className="text-blue-600" />
              </div>
              <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm">Privacidade e Segurança</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900">
              Política de Privacidade <br/> <span className="text-blue-800 opacity-80">— {productName}</span>
            </h1>
          </header>

          <div className="space-y-16">
            {isLeitor ? (
              <>
                {/* CONTEÚDO O LEITOR */}
                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> Termos Gerais
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-normal">
                    A plataforma <strong>“O Leitor”</strong> oferece um aplicativo com suporte de anúncios. Este serviço é fornecido pela <strong>“Criando Enterprise”</strong> sem custos e destina-se a ser utilizado como está.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4 font-normal">
                    Esta página tem o propósito de informar os usuários sobre nossas políticas relacionadas à coleta, uso e divulgação de informações pessoais, caso optem por utilizar nosso serviço.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4 font-normal">
                    Ao utilizar nosso serviço, você concorda com a coleta e o uso de informações de acordo com esta Política de Privacidade.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> Coleta e Uso de Informações
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-normal">
                    Para proporcionar uma melhor experiência, podemos solicitar determinadas informações pessoais, incluindo nome e gênero literário favorito. Fornecedores de terceiros utilizados pelo aplicativo incluem:
                  </p>
                  <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 mt-8">
                    <ul className="list-none space-y-3 text-gray-700 font-bold">
                      <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Google Play Services</li>
                      <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> AdMob</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> Cookies e Segurança
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-normal">
                    Este serviço não utiliza cookies explicitamente. Valorizamos a confiança depositada ao fornecer informações pessoais e empregamos meios comercialmente aceitáveis para protegê-las.
                  </p>
                </section>
              </>
            ) : (
              <>
                {/* CONTEÚDO HARVEST WORDS */}
                <p className="text-gray-700 leading-relaxed font-normal">
                  Obrigado por utilizar o <strong>Harvest Words: Inglês Jogando</strong>. Esta Política de Privacidade explica como tratamos as informações dos usuários enquanto você utiliza o aplicativo.
                </p>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> 1. Informações Coletadas
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-normal">
                    O aplicativo não coleta, armazena ou transmite informações pessoais identificáveis. No entanto, para funcionamento adequado, o app utiliza alguns recursos:
                  </p>
                  <div className="space-y-6 mt-8">
                    <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                      <h3 className="text-lg font-black text-gray-900 flex items-center gap-3 mb-4"><Mic className="text-blue-600" size={20}/> 1.1. Microfone (RECORD_AUDIO)</h3>
                      <p className="text-gray-600 text-base">O jogo utiliza o microfone exclusivamente para recursos de reconhecimento de fala dentro das atividades do app. Nenhuma gravação é armazenada pelo aplicativo.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                      <h3 className="text-lg font-black text-gray-900 flex items-center gap-3 mb-4"><Info className="text-blue-600" size={20}/> 1.2. Dados de Terceiros (AdMob)</h3>
                      <p className="text-gray-600 text-base">O aplicativo utiliza anúncios fornecidos pelo Google (AdMob). O Google pode coletar identificadores de dispositivo e dados de uso. Esses dados são administrados conforme as políticas do Google.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> 2. Uso das Informações
                  </h2>
                  <ul className="list-none space-y-4 text-gray-700 font-medium">
                    <li className="flex items-start gap-4"><div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div> Para recursos de reconhecimento de fala no jogo.</li>
                    <li className="flex items-start gap-4"><div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div> Para exibição de anúncios.</li>
                    <li className="flex items-start gap-4"><div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div> Nenhum dado é vendido ou compartilhado fora dos serviços integrados.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> 3. Segurança
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-normal flex items-start gap-4">
                    <Shield className="text-blue-600 shrink-0 mt-1" size={20} />
                    O app não armazena dados pessoais em servidores próprios. Serviços de terceiros seguem padrões adequados de proteção.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> 4. Permissões
                  </h2>
                  <p className="text-gray-700 font-normal">O jogo solicita as seguintes permissões:</p>
                  <div className="mt-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50 text-blue-900 font-bold flex items-center gap-4">
                    <Mic size={24} /> Microfone: essencial para o reconhecimento de fala.
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> 5. Crianças
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-normal flex items-start gap-4">
                    <Baby className="text-blue-600 shrink-0 mt-1" size={20} />
                    O aplicativo pode ser utilizado por crianças, mas não faz coleta intencional de dados pessoais delas.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> 6. Links Externos
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-normal flex items-start gap-4">
                    <ExternalLink className="text-blue-600 shrink-0 mt-1" size={20} />
                    O app pode exibir conteúdo de terceiros (como anúncios), cada um com suas próprias políticas de privacidade.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> 7. Alterações
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-normal flex items-start gap-4">
                    <RefreshCw className="text-blue-600 shrink-0 mt-1" size={20} />
                    Esta política pode ser atualizada. Sempre consulte esta página para ver a versão mais recente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> 8. Contato
                  </h2>
                  <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="font-medium text-gray-300">Dúvidas sobre esta Política de Privacidade?</p>
                    <a href="mailto:nossomosacriando@gmail.com" className="flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-xl font-black hover:bg-blue-500 transition-colors">
                      <Mail size={20} /> nossomosacriando@gmail.com
                    </a>
                  </div>
                </section>
              </>
            )}
          </div>
          
          <footer className="mt-24 pt-10 border-t border-gray-100">
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
              Última atualização: {lastUpdate}
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};
