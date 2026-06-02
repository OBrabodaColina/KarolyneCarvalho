"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Processo", href: "#processo" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#" className={`text-2xl font-serif font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
          KC<span className="text-secondary">.</span>
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled ? "text-text" : "text-white/90"}`}>
              {link.name}
            </Link>
          ))}
          <a href="#contato" className="bg-secondary text-white px-6 py-2 rounded-sm font-medium hover:bg-yellow-600 transition-all shadow-lg">
            Agendar Consultoria
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color={isScrolled ? "#0F172A" : "#FFF"} /> : <Menu color={isScrolled ? "#0F172A" : "#FFF"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-primary font-medium" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}