import React from 'react';

export const metadata = {
  title: 'Política de Cookies | Fernando Alves Caetano',
};

export default function CookiesPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 prose prose-zinc max-w-none">
        <h1 className="font-serif text-3xl text-brand-navy mb-8">Política de Cookies</h1>
        <p className="text-sm text-brand-muted mb-8 uppercase tracking-wider font-semibold">Atualizado em Janeiro de 2024</p>
        
        <h2 className="font-serif text-2xl text-brand-petroleum">1. O que são Cookies?</h2>
        <p>
          Cookies são pequenos arquivos de texto armazenados no navegador do seu dispositivo quando você visita um site. Eles servem para reter informações sobre a sua navegação, garantindo o funcionamento técnico da plataforma e fornecendo dados estatísticos de uso.
        </p>

        <h2 className="font-serif text-2xl text-brand-petroleum">2. Como utilizamos os Cookies</h2>
        <p>
          Este site utiliza duas categorias principais de cookies:
        </p>
        <ul>
          <li><strong>Cookies Essenciais (Estritamente Necessários):</strong> São indispensáveis para o funcionamento básico do site, como gerenciamento de rotas de navegação (SPA) e segurança. Estes não podem ser desativados sem comprometer a estabilidade do site.</li>
          <li><strong>Cookies de Desempenho (Analytics):</strong> Coletam dados de forma anônima sobre como os visitantes interagem com o site (páginas mais visitadas, tempo de permanência), permitindo melhorias na estruturação da informação. Nenhuma destas informações identifica o usuário individualmente.</li>
        </ul>
        <p>
          <em>Ressalta-se que o escritório não utiliza cookies para fins de remarketing ou publicidade direcionada.</em>
        </p>

        <h2 className="font-serif text-2xl text-brand-petroleum">3. Gerenciamento de Preferências</h2>
        <p>
          Você pode, a qualquer momento, alterar suas preferências de cookies ou revogar seu consentimento através do botão "Preferências de Cookies" localizado no rodapé do site, bem como configurando diretamente o bloqueio de cookies nas configurações do seu navegador.
        </p>
      </div>
    </div>
  );
}
