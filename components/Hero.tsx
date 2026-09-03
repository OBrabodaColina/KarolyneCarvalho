"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 1. Animação em cascata para os textos e botões
    anime({
      targets: sectionRef.current?.querySelectorAll('.anime-hero-text'),
      translateY: [40, 0], // Sobe 40px
      opacity: [0, 1],
      delay: anime.stagger(150), // 150ms de intervalo entre cada elemento
      easing: 'easeOutExpo',
      duration: 1200,
    });

    // 2. Animação suave de entrada para a imagem (com um pequeno atraso)
    anime({
      targets: sectionRef.current?.querySelector('.anime-hero-image'),
      scale: [0.95, 1], // Leve zoom out inicial
      opacity: [0, 1],
      easing: 'easeOutQuart',
      duration: 1500,
      delay: 500, // Começa depois que os textos já começaram a aparecer
    });
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-primary"
    >
      {/* Elementos visuais de fundo (Mantidos com classes estáticas) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-primary to-primary"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Coluna de Texto */}
          <div className="max-w-xl">
            <h2 className="anime-hero-text opacity-0 text-sm font-bold tracking-widest uppercase text-secondary mb-4">
              Consultoria Premium
            </h2>
            
            <h1 className="anime-hero-text opacity-0 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Construa e Proteja o seu <span className="text-secondary">Patrimônio</span>
            </h1>
            
            <p className="anime-hero-text opacity-0 text-lg text-gray-300 mb-8 leading-relaxed">
              Planejamento financeiro inteligente e estratégico para quem deseja assumir o controle do presente e garantir a tranquilidade do futuro.
            </p>
            
            <div className="anime-hero-text opacity-0 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                className="bg-secondary text-primary px-8 py-4 rounded-sm font-bold text-center hover:bg-yellow-500 transition-colors shadow-lg"
              >
                Agendar Diagnóstico
              </a>
              <a 
                href="#servicos" 
                className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-sm font-bold text-center hover:bg-white/10 transition-colors"
              >
                Conhecer Serviços
              </a>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="relative h-[600px] w-full hidden md:block anime-hero-image opacity-0">
            {/* Elemento de design atrás da imagem */}
            <div className="absolute top-8 -right-8 w-full h-full border border-secondary/30 rounded-sm"></div>
            
            <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
              <Image 
                src="/KarolyneCarvalho/foto-karolyne-hero.jpg"
                alt="Karolyne Carvalho - Consultora Financeira Premium"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
              
              {/* Overlay suave para integrar a foto ao fundo escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent mix-blend-multiply"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}