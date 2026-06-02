import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Processo from "@/components/Processo";
import Depoimentos from "@/components/Depoimentos";
import LeadMagnet from "@/components/LeadMagnet";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Diferenciais />
      <Processo />
      <Depoimentos />
      <LeadMagnet />
      <FAQ />
      <CTA />
    </>
  );
}