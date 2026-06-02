"use client";
import { motion } from "framer-motion";
import { Heart, Target, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Sobre() {
  const cards = [
    { icon: <Heart className="text-secondary" />, title: "Atendimento Humanizado" },
    { icon: <Target className="text-secondary" />, title: "Planejamento Personalizado" },
    { icon: <TrendingUp className="text-secondary" />, title: "Crescimento Patrimonial" },
    { icon: <ShieldCheck className="text-secondary" />, title: "Acompanhamento Contínuo" },
  ];

  return (
    <section id="sobre" className="py-24 bg-light">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Coluna da Imagem */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[550px] w-full rounded-sm overflow-hidden shadow-xl border border-gray-200/50"
        >
          <Image 
            src="/KarolyneCarvalho/foto-karolyne-sobre.jpg" // <-- Adicionado o /KarolyneCarvalho
            alt="Karolyne Carvalho - Consultora Financeira Premium"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            priority
          />
        </motion.div>

        {/* Coluna do Texto */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-serif font-bold text-primary">Conheça Karolyne Carvalho</h2>
          <div className="space-y-4 text-text leading-relaxed">
            <p>Meu propósito é ajudar pessoas e empresas a conquistarem mais segurança financeira através de planejamento, organização e estratégias alinhadas aos seus objetivos.</p>
            <p>Ao longo da minha trajetória, acompanhei clientes em diferentes fases da vida financeira, auxiliando desde a organização do orçamento até a construção de patrimônio e planejamento de longo prazo.</p>
            <p>Acredito que educação financeira e planejamento são ferramentas fundamentais para transformar sonhos em resultados concretos.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-6">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white p-4 rounded-sm shadow-sm border border-gray-100 flex items-center gap-3">
                {card.icon}
                <span className="font-medium text-sm text-primary">{card.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}