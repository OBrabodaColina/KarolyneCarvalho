// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white/60 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">KC<span className="text-secondary">.</span></h3>
          <p className="text-sm max-w-xs">Consultoria Financeira focada na construção, proteção e sucessão do seu patrimônio.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Links Úteis</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-secondary transition">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-secondary transition">Serviços</a></li>
            <li><a href="#processo" className="hover:text-secondary transition">Metodologia</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li>WhatsApp: (11) 99999-9999</li>
            <li>E-mail: contato@karolynecarvalho.com.br</li>
            <li className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center text-xs border-t border-white/10 pt-8">
        &copy; {new Date().getFullYear()} Karolyne Carvalho. Todos os direitos reservados.
      </div>
    </footer>
  );
}