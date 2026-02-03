import { ArrowLeft } from 'lucide-react';

interface NotFoundFeatureProps {
  onBackHome: () => void;
}

export const NotFoundFeature = ({ onBackHome }: NotFoundFeatureProps) => {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-8">
        <p className="text-xs font-black tracking-[0.5em] uppercase text-blue-500">
          Criando Enterprise
        </p>

        <h1 className="text-6xl md:text-7xl font-black tracking-tighter">
          404
        </h1>

        <p className="text-lg md:text-xl text-gray-400">
          A página que você tentou acessar não existe ou foi movida.
        </p>

        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition"
        >
          <ArrowLeft size={18} />
          Voltar para Home
        </button>
      </div>
    </main>
  );
};
