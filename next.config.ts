import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ativa a exportação estática (gera a pasta 'out')
  images: {
    unoptimized: true, // Obrigatório para exportação estática no GitHub Pages
  },
  /* Se você for usar a URL padrão do GitHub (ex: seu-usuario.github.io/nome-do-repositorio),
    descomente a linha abaixo e insira o nome exato do seu repositório.
    Se for usar um domínio personalizado (ex: karolynecarvalho.com.br), mantenha comentada.
  */
  // basePath: "/nome-do-repositorio",
};

export default nextConfig;