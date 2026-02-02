import React from 'react';
import {
  Mail,
  Mic,
  Shield,
  Baby,
  Info,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';

interface PolicyFeatureProps {
  type: 'leitor' | 'harvest';
}

export const PolicyFeature = ({ type }: PolicyFeatureProps) => {
  const isLeitor = type === 'leitor';

  return (
    <div className="space-y-16">
      {isLeitor ? (
        <>
          {/* ================= O LEITOR ================= */}

          <section>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-blue-600 rounded-full" />
              Termos Gerais
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A plataforma <strong>“O Leitor”</strong> oferece um aplicativo com
              suporte de anúncios. Este serviço é fornecido pela{' '}
              <strong>Criando Enterprise</strong> sem custos e destina-se a ser
              utilizado como está.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Esta página tem o propósito de informar os usuários sobre nossas
              políticas relacionadas à coleta, uso e divulgação de informações
              pessoais.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Ao utilizar nosso serviço, você concorda com a coleta e o uso de
              informações de acordo com esta Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-blue-600 rounded-full" />
              Coleta e Uso de Informações
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para proporcionar uma melhor experiência, podemos solicitar
              determinadas informações pessoais, incluindo nome e gênero
              literário favorito. Fornecedores de terceiros utilizados:
            </p>

            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 mt-8">
              <ul className="space-y-3 font-bold text-gray-700">
                <li>• Google Play Services</li>
                <li>• AdMob</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-blue-600 rounded-full" />
              Cookies e Segurança
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este serviço não utiliza cookies explicitamente. Empregamos meios
              comercialmente aceitáveis para proteger as informações fornecidas.
            </p>
          </section>
        </>
      ) : (
        <>
          {/* ================= HARVEST WORDS ================= */}

          <p className="text-gray-700 leading-relaxed">
            Obrigado por utilizar o{' '}
            <strong>Harvest Words: Inglês Jogando</strong>. Esta Política de
            Privacidade explica como tratamos as informações enquanto você
            utiliza o aplicativo.
          </p>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-blue-600 rounded-full" />
              Informações Coletadas
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                <h3 className="font-black flex items-center gap-3 mb-4">
                  <Mic className="text-blue-600" size={20} />
                  Microfone (RECORD_AUDIO)
                </h3>
                <p className="text-gray-600">
                  Utilizado exclusivamente para reconhecimento de fala. Nenhuma
                  gravação é armazenada.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                <h3 className="font-black flex items-center gap-3 mb-4">
                  <Info className="text-blue-600" size={20} />
                  Dados de Terceiros (AdMob)
                </h3>
                <p className="text-gray-600">
                  O Google pode coletar identificadores e dados de uso conforme
                  suas próprias políticas.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-blue-600 rounded-full" />
              Uso das Informações
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Reconhecimento de fala</li>
              <li>• Exibição de anúncios</li>
              <li>• Nenhum dado é vendido</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-blue-600 rounded-full" />
              Segurança
            </h2>
            <p className="flex items-start gap-3 text-gray-700">
              <Shield className="text-blue-600 mt-1" size={20} />
              O app não armazena dados pessoais em servidores próprios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-blue-600 rounded-full" />
              Crianças
            </h2>
            <p className="flex items-start gap-3 text-gray-700">
              <Baby className="text-blue-600 mt-1" size={20} />
              O aplicativo não coleta intencionalmente dados de crianças.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-blue-600 rounded-full" />
              Contato
            </h2>
            <a
              href="mailto:nossomosacriando@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-xl font-black text-white hover:bg-blue-500"
            >
              <Mail size={20} />
              nossomosacriando@gmail.com
            </a>
          </section>
        </>
      )}
    </div>
  );
};
