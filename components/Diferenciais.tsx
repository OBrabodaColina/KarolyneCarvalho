"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Diferenciais() {
  const itens = ["Atendimento Personalizado", "Transparência Total", "Visão Estratégica", "Acompanhamento Próximo"];
  
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Por que escolher a Karolyne?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {itens.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center space-y-4"
            >
              <CheckCircle2 className="w-12 h-12 text-secondary" />
              <h4 className="text-lg font-medium tracking-wide">{item}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}