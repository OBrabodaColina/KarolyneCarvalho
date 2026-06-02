"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern pt-24 overflow-hidden">
      {/* Elementos de iluminação de fundo para a seção inteira */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-800/50 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Coluna Esquerda: Textos e CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white space-y-8"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-secondary/40 bg-secondary/5 text-secondary text-xs font-medium tracking-widest uppercase">
            Consultoria Financeira Premium
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
            Planejamento Financeiro Inteligente para Construir o Futuro que Você Deseja
          </h1>
          
          <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed font-sans">
            Organize suas finanças, proteja seu patrimônio e tome decisões mais seguras com acompanhamento profissional e estratégias personalizadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#contato" 
              className="bg-secondary text-primary px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all shadow-lg shadow-secondary/10 group font-sans"
            >
              Agendar Consultoria 
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-2 hover:bg-white/5 transition-all font-sans"
            >
              <MessageCircle size={18} className="text-secondary" /> 
              Falar no WhatsApp
            </a>
          </div>
          
          {/* Indicadores de Autoridade */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
            <div className="space-y-1">
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-secondary">+200</h4>
              <p className="text-xs md:text-sm text-white/60 font-sans">Clientes Atendidos</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-secondary">+R$ 5M</h4>
              <p className="text-xs md:text-sm text-white/60 font-sans">Planejados</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-secondary">95%</h4>
              <p className="text-xs md:text-sm text-white/60 font-sans">Satisfação</p>
            </div>
          </div>
        </motion.div>

        {/* Coluna Direita: Retrato Corporativo com Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[550px] lg:h-[620px] w-full hidden md:flex items-center justify-center"
        >
          {/* Efeitos de Profundidade Atrás do Vidro */}
          <div className="absolute top-12 left-12 w-40 h-40 bg-secondary/20 rounded-full filter blur-2xl animate-pulse duration-[4000ms]"></div>
          <div className="absolute bottom-16 right-12 w-52 h-52 bg-slate-700/50 rounded-full filter blur-3xl"></div>
          
          {/* Moldura Geométrica Externa Fina */}
          <div className="absolute inset-4 border border-secondary/15 rounded-sm pointer-events-none transform translate-x-2 translate-y-2"></div>

          {/* Contêiner do Painel de Vidro (Glassmorphism) */}
          <div className="relative w-[90%] h-[95%] rounded-sm overflow-hidden bg-white/[0.04] backdrop-blur-md border border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-end group">
            
            {/* Retrato de Estúdio Otimizado */}
            <Image 
              src="/foto-karolyne-hero.jpg"
              alt="Karolyne Carvalho - Consultora Financeira"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.02]"
              priority
            />

            {/* Gradiente sutil inferior para fusão de cores e legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>

            {/* Selo Flutuante Interno de Alta Credibilidade */}
            <div className="absolute top-6 right-6 bg-primary/40 backdrop-blur-md border border-white/10 p-4 rounded-sm shadow-2xl max-w-[190px] transform transition-transform group-hover:-translate-y-1 duration-500">
              <p className="text-[10px] text-secondary uppercase font-bold tracking-widest mb-1 font-sans">Diferencial</p>
              <p className="text-xs text-white/90 font-medium leading-tight font-sans">Gestão Patrimonial de Alto Padrão</p>
            </div>

            {/* Detalhe decorativo linear dourado na base do card */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}