import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface PolicyLayoutProps {
  productName: string;
  lastUpdate: string;
  onBack: () => void;
  children: React.ReactNode;
}

export const PolicyLayout = ({
  productName,
  lastUpdate,
  onBack,
  children,
}: PolicyLayoutProps) => {

  const BackToProductsButton = ({ className = '' }: { className?: string }) => (
    <button
      onClick={onBack}
      className={`
        flex items-center gap-3
        text-gray-400 hover:text-blue-600
        font-black uppercase text-xs
        tracking-[0.3em]
        transition-all group
        ${className}
      `}
    >
      <ArrowLeft
        size={18}
        className="group-hover:-translate-x-1 transition-transform"
      />
      Voltar para Produtos
    </button>
  );

  return (
    <section className="py-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Botão superior */}
        <BackToProductsButton className="mb-14" />

        <div className="prose prose-slate prose-xl max-w-none text-gray-900">
          <header className="mb-16 border-b border-gray-100 pb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl">
                <ShieldCheck size={32} className="text-blue-600" />
              </div>
              <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm">
                Privacidade e Segurança
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
              Política de Privacidade <br />
              <span className="text-blue-800 opacity-80">
                — {productName}
              </span>
            </h1>
          </header>

          {children}

          <footer className="mt-24 pt-10 border-t border-gray-100 flex flex-col gap-8">
            {/* Botão inferior */}
            <BackToProductsButton />

            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
              Última atualização: {lastUpdate}
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};
