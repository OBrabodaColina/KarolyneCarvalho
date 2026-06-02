"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function LeadMagnet() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Receba Gratuitamente</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Guia Prático de Organização Financeira</h3>
          <p className="text-text mb-8">Descubra os pilares fundamentais para assumir o controle do seu dinheiro e iniciar sua jornada de construção de patrimônio hoje mesmo.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Seu Nome" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-secondary" required />
            <input type="email" placeholder="Seu E-mail" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-secondary" required />
            <button className="w-full bg-primary text-white py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition">
              Baixar Agora <Download size={18} />
            </button>
          </form>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center">
          <div className="w-64 h-80 bg-white shadow-2xl border border-gray-200 flex flex-col items-center justify-center p-6 text-center rounded-r-xl rounded-l-sm border-l-8 border-l-primary">
             <h4 className="font-serif font-bold text-primary text-xl mb-4">Guia Prático</h4>
             <div className="w-16 h-1 bg-secondary mb-4"></div>
             <p className="text-xs text-gray-500 uppercase tracking-widest">Organização Financeira</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}