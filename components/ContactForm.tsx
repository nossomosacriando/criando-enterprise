
import React, { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "6ff7eabf-9d13-4ef0-82a4-65b61a0cc937", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Site Criando: Novo contato de ${formData.name}`,
          from_name: "Criando Enterprise Web"
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 text-center flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-blue-600/20">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-4xl font-black tracking-tighter mb-4 text-gray-900">Mensagem Enviada</h3>
        <p className="text-gray-500 max-w-sm mx-auto leading-relaxed text-lg">
          Obrigado pelo contato. Nossa equipe técnica responderá diretamente no seu e-mail em breve.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-10 text-blue-600 font-black uppercase text-[10px] tracking-[0.4em] hover:bg-blue-50 px-8 py-4 rounded-xl transition-all"
        >
          Enviar Outra Mensagem
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">Seu Nome</label>
            <input 
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-gray-900"
              placeholder="Ex: Carlos Silva"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">E-mail para Retorno</label>
            <input 
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-gray-900"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">Como podemos ajudar?</label>
          <textarea 
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'submitting'}
            rows={5}
            className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium resize-none text-gray-900"
            placeholder="Descreva brevemente seu projeto ou dúvida..."
          />
        </div>

        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-6 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-blue-600 transition-all shadow-xl disabled:bg-gray-300 flex items-center justify-center gap-4 overflow-hidden group"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Processando...</span>
            </>
          ) : (
            <>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Enviar via E-mail</span>
            </>
          )}
        </button>
      </form>

      {status === 'error' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 bg-red-50 text-red-600 rounded-2xl text-xs font-bold flex items-center gap-3 border border-red-100"
        >
          <AlertCircle size={18} />
          <span>Ocorreu um problema ao enviar. Por favor, tente novamente em instantes.</span>
        </motion.div>
      )}

      <div className="pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-400">Canal Oficial Criando Enterprise</p>
        <div className="flex items-center gap-2 text-blue-600 opacity-60">
          <Mail size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Atendimento via Chamados</span>
        </div>
      </div>
    </div>
  );
};
