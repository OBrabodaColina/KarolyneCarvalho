"use client";
import { motion } from "framer-motion";
import { LineChart, Wallet, PieChart, Briefcase, Flag, Shield } from "lucide-react";

const servicos = [
  { icon: Wallet, title: "Gestão Financeira Pessoal", desc: "Controle e otimização das finanças pessoais para o seu dia a dia." },
  { icon: LineChart, title: "Planejamento Financeiro", desc: "Organização financeira estratégica para alcançar seus maiores objetivos." },
  { icon: PieChart, title: "Estratégias de Investimento", desc: "Construção de patrimônio alinhada ao seu perfil de investidor." },
  { icon: Briefcase, title: "Consultoria Empresarial", desc: "Estruturação financeira para o crescimento sustentável do seu negócio." },
  { icon: Flag, title: "Planejamento de Metas", desc: "Definição clara e execução prática de objetivos financeiros." },
  { icon: Shield, title: "Proteção Patrimonial", desc: "Estratégias avançadas para preservação e blindagem do seu patrimônio." },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Áreas de Atuação</h2>
          <p className="text-text">Soluções financeiras premium desenhadas sob medida para suas necessidades.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-light rounded-sm hover:bg-primary transition-all duration-500 cursor-pointer border border-gray-100 shadow-sm"
            >
              <servico.icon className="w-10 h-10 text-secondary mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{servico.title}</h3>
              <p className="text-text group-hover:text-white/80 transition-colors leading-relaxed">
                {servico.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}