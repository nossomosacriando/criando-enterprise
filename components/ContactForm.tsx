
import React, { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  dark?: boolean;
}

export const ContactForm = ({ dark = false }: ContactFormProps) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulando uma chamada de API (ex: Formspree, SendGrid, etc)
      // Para tornar real, basta substituir este bloco por um fetch()
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Dados enviados para nossomosacriando@gmail.com:', formData);
      setStatus('success');
    } catch (err) {
      console.error('Erro ao enviar:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-20 text-center flex flex-col items-center animate-in fade-in zoom-in duration-700">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
          <CheckCircle2 size={40} />
        </div>
        <h3 className={`text-3xl font-black tracking-tight mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
          Sua mensagem decolou!
        </h3>
        <p className={`text-lg max-w-xs mx-auto leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          Recebemos seus dados. Nossa equipe técnica analisará seu desafio e entrará em contato em breve.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-10 text-blue-600 font-bold uppercase text-[10px] tracking-[0.4em] hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold">
          <AlertCircle size={18} />
          Houve um problema ao enviar. Tente novamente ou use o e-mail direto.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className={`text-[10px] font-black uppercase tracking-[0.3em] ml-1 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            Identificação
          </label>
          <input 
            required
            disabled={status === 'submitting'}
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome" 
            className={`w-full px-7 py-5 rounded-2xl outline-none transition-all placeholder:text-gray-300 font-medium border ${
              dark 
                ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-blue-600 focus:bg-white/10' 
                : 'bg-gray-50 border-gray-100 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:bg-white'
            } disabled:opacity-50`} 
          />
        </div>
        <div className="space-y-2">
          <label className={`text-[10px] font-black uppercase tracking-[0.3em] ml-1 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            Contato
          </label>
          <input 
            required
            disabled={status === 'submitting'}
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail profissional" 
            className={`w-full px-7 py-5 rounded-2xl outline-none transition-all placeholder:text-gray-300 font-medium border ${
              dark 
                ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-blue-600 focus:bg-white/10' 
                : 'bg-gray-50 border-gray-100 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:bg-white'
            } disabled:opacity-50`} 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className={`text-[10px] font-black uppercase tracking-[0.3em] ml-1 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
          Seu Desafio
        </label>
        <textarea 
          required
          disabled={status === 'submitting'}
          rows={4} 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Descreva brevemente sua ideia ou necessidade..." 
          className={`w-full px-7 py-5 rounded-2xl outline-none resize-none transition-all placeholder:text-gray-300 font-medium border ${
            dark 
              ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-blue-600 focus:bg-white/10' 
              : 'bg-gray-50 border-gray-100 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:bg-white'
          } disabled:opacity-50`}
        ></textarea>
      </div>

      <button 
        type="submit"
        disabled={status === 'submitting'}
        className="group relative w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl shadow-blue-600/10 active:scale-[0.98] disabled:bg-gray-400 disabled:shadow-none flex items-center justify-center overflow-hidden"
      >
        <span className={`flex items-center gap-3 transition-transform duration-300 ${status === 'submitting' ? 'translate-y-20' : 'translate-y-0'}`}>
          Enviar Proposta
        </span>
        
        {status === 'submitting' && (
          <div className="absolute inset-0 flex items-center justify-center animate-in slide-in-from-bottom-10 duration-500">
            <Loader2 className="animate-spin" size={24} />
            <span className="ml-3">Enviando...</span>
          </div>
        )}
      </button>
    </form>
  );
};
