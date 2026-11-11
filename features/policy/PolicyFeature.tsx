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
import { OLEITOR_POLICY_SECTIONS } from './content/oleitor';

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
          {/* Mesmo texto do app: content/oleitor.ts é gerado a partir dele */}
          {OLEITOR_POLICY_SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-blue-600 rounded-full" />
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph, i) => (
                <p key={i} className={`text-gray-700 leading-relaxed${i > 0 ? " mt-4" : ""}`}>
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 mt-8">
                  <ul className="space-y-3 text-gray-700">
                    {section.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
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
