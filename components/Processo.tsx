"use client";
import { motion } from "framer-motion";

export default function Processo() {
  const steps = [
    { title: "Diagnóstico Financeiro", desc: "Análise profunda da sua situação atual." },
    { title: "Planejamento Estratégico", desc: "Criação do plano de ação personalizado." },
    { title: "Implementação", desc: "Execução das estratégias definidas." },
    { title: "Acompanhamento", desc: "Revisões periódicas e ajustes de rota." },
  ];

  return (
    <section id="processo" className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-primary mb-16">Nossa Metodologia</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary text-secondary rounded-full flex items-center justify-center font-serif text-2xl font-bold mb-6 shadow-lg border-4 border-light">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-text text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}