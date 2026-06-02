"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "A consultoria é online?", a: "Sim, os atendimentos podem ser realizados de forma 100% online via videoconferência para clientes de qualquer lugar do mundo, ou presencialmente sob consulta." },
    { q: "Quanto tempo dura o acompanhamento?", a: "Depende do modelo escolhido. Temos desde consultorias pontuais de estruturação até acompanhamentos recorrentes (mensais, trimestrais ou semestrais)." },
    { q: "Atende empresas?", a: "Sim. Oferecemos consultoria financeira empresarial focada em estruturação de fluxo de caixa, precificação e planejamento estratégico de crescimento." },
    { q: "Como funciona a primeira reunião?", a: "A primeira reunião é um diagnóstico gratuito onde entenderemos o seu cenário atual, seus objetivos e definiremos se o nosso modelo de consultoria é ideal para você." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-serif font-bold text-center text-primary mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-sm overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex justify-between items-center p-6 bg-light hover:bg-gray-100 transition-colors text-left"
              >
                <span className="font-bold text-primary">{faq.q}</span>
                <ChevronDown className={`transform transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 py-4 bg-white text-text"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}