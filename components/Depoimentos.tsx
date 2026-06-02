"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Depoimentos() {
  const reviews = [
    { text: "Finalmente consegui organizar minha vida financeira e começar a investir com segurança. O acompanhamento é excepcional.", name: "Roberto M.", role: "Empresário" },
    { text: "A consultoria trouxe clareza para as finanças da minha empresa. Os resultados apareceram nos primeiros meses.", name: "Camila S.", role: "Diretora de Operações" },
    { text: "Hoje tenho controle financeiro e consigo planejar meu futuro e da minha família de forma estruturada.", name: "Fernando A.", role: "Médico" },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-primary mb-16">O que dizem nossos clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-light p-8 rounded-sm shadow-sm border border-gray-100 relative"
            >
              <div className="flex text-secondary mb-4">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={18} fill="#D4AF37" />)}
              </div>
              <p className="text-text italic mb-6">"{rev.text}"</p>
              <div>
                <h4 className="font-bold text-primary">{rev.name}</h4>
                <p className="text-sm text-gray-500">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}