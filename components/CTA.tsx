// components/CTA.tsx
export default function CTA() {
  return (
    <section id="contato" className="py-24 bg-primary text-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">O Próximo Passo para sua Tranquilidade Financeira Começa Hoje</h2>
        <p className="text-xl text-white/80 mb-10">Transforme a forma como você administra seu dinheiro e construa um futuro com mais segurança.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="bg-secondary text-primary px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition shadow-xl">Agendar Consultoria</a>
          <a href="#" className="bg-transparent border border-secondary text-secondary px-8 py-4 rounded-sm font-bold hover:bg-secondary/10 transition">Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  );
}