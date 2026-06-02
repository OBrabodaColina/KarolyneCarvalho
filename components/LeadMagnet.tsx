"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, CheckCircle2, Loader2 } from "lucide-react";

export default function LeadMagnet() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simula um delay de requisição de 1.5 segundos
    setTimeout(() => {
      setStatus("success");
      
      // Opcional: Retorna ao estado inicial após 5 segundos
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Receba Gratuitamente</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Guia Prático de Organização Financeira</h3>
          <p className="text-text mb-8">Descubra os pilares fundamentais para assumir o controle do seu dinheiro e iniciar sua jornada de construção de patrimônio hoje mesmo.</p>
          
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="bg-white p-6 rounded-sm border-l-4 border-secondary shadow-md flex items-start gap-4"
            >
              <CheckCircle2 className="text-secondary w-8 h-8 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">Tudo certo!</h4>
                <p className="text-text text-sm">Seu guia foi "enviado" com sucesso. Verifique a sua caixa de entrada.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="nome" 
                placeholder="Seu Nome" 
                className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-secondary transition-colors" 
                required 
                disabled={status === "loading"}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Seu E-mail" 
                className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-secondary transition-colors" 
                required 
                disabled={status === "loading"}
              />
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-primary text-white py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    Processando... <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Baixar Agora <Download size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center">
          <div className="w-64 h-80 bg-white shadow-2xl border border-gray-200 flex flex-col items-center justify-center p-6 text-center rounded-r-xl rounded-l-sm border-l-8 border-l-primary relative overflow-hidden">
             {/* Detalhe visual premium: Efeito de reflexo no mockup do e-book */}
             <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 opacity-50 pointer-events-none"></div>
             
             <h4 className="font-serif font-bold text-primary text-xl mb-4 relative z-10">Guia Prático</h4>
             <div className="w-16 h-1 bg-secondary mb-4 relative z-10"></div>
             <p className="text-xs text-gray-500 uppercase tracking-widest relative z-10">Organização Financeira</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}