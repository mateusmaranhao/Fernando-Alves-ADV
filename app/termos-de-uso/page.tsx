import React from 'react';

export const metadata = {
  title: 'Termos de Uso | Fernando Alves Caetano',
};

export default function TermosPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 prose prose-zinc max-w-none">
        <h1 className="font-serif text-3xl text-brand-navy mb-8">Termos de Uso</h1>
        <p className="text-sm text-brand-muted mb-8 uppercase tracking-wider font-semibold">Atualizado em Janeiro de 2024</p>
        
        <h2 className="font-serif text-2xl text-brand-petroleum">1. Finalidade Informativa</h2>
        <p>
          O presente site institucional possui finalidade estritamente informativa e institucional, não se caracterizando como meio de captação mercantil de clientela ou oferta de promessas de resultado, em estrita observância ao Provimento nº 205/2021 do Conselho Federal da OAB e ao Código de Ética e Disciplina da advocacia.
        </p>

        <h2 className="font-serif text-2xl text-brand-petroleum">2. Natureza do Conteúdo</h2>
        <p>
          As informações contidas neste site, incluindo artigos, descrições de áreas de atuação e resumos legislativos, não constituem, sob nenhuma hipótese, parecer jurídico ou aconselhamento legal aplicável a casos concretos. A análise de qualquer demanda judicial ou extrajudicial exige consulta formal com o profissional.
        </p>

        <h2 className="font-serif text-2xl text-brand-petroleum">3. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo textual, fotográfico e de identidade visual (logotipos e cores) presentes neste domínio são de propriedade exclusiva do escritório Fernando Alves Caetano Advocacia, sendo vedada a reprodução, cópia ou distribuição não autorizada, sob as penas da lei de direitos autorais.
        </p>

        <h2 className="font-serif text-2xl text-brand-petroleum">4. Foro</h2>
        <p>
          Para dirimir quaisquer controvérsias decorrentes do uso deste site, elege-se o foro da comarca de Indaiatuba, Estado de São Paulo.
        </p>
      </div>
    </div>
  );
}
