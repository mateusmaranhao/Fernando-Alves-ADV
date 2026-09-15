import React from 'react';
import Link from 'next/link';
import { ArrowRight, Scale, FileText, PhoneCall } from 'lucide-react';

export const metadata = {
  title: 'Áreas de Atuação | Fernando Alves Caetano',
  description: 'Áreas de atuação: Direito Civil, Inventários e Plantão Jurídico. Serviços advocatícios em Indaiatuba e região.',
};

export default function ServicosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="text-brand-champagne text-[10px] tracking-[0.2em] uppercase font-semibold mb-4 block">Competências</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-medium tracking-tight max-w-2xl mb-6">
            Áreas de <span className="text-brand-champagne">Atuação</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl text-[15px] leading-relaxed">
            Atuação especializada e focada para garantir o mais alto nível de técnica jurídica na defesa dos interesses confiados ao escritório.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            
            {/* Servico 1 */}
            <div className="bg-white border border-brand-line p-8 md:p-12 shadow-sm rounded-sm flex flex-col md:flex-row gap-8 items-start group">
              <div className="bg-brand-offwhite p-4 rounded-sm border border-brand-line shrink-0">
                <Scale className="w-8 h-8 text-brand-petroleum" strokeWidth={1.5} />
              </div>
              <div className="flex-grow">
                <h2 className="font-serif text-3xl text-brand-navy mb-4 group-hover:text-brand-petroleum transition-colors">Direito Civil</h2>
                <p className="text-brand-muted text-[15px] leading-relaxed mb-6">
                  Assessoria e consultoria jurídica em relações civis diversas. Atuação preventiva na análise e redação de contratos, visando mitigar passivos judiciais, bem como representação incisiva em contencioso cível envolvendo obrigações, responsabilidade civil e direitos reais.
                </p>
                <Link href="/servicos/direito-civil" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-navy hover:text-brand-champagne-dark transition-colors focus-ring">
                  Detalhes da atuação <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Servico 2 */}
            <div className="bg-white border border-brand-line p-8 md:p-12 shadow-sm rounded-sm flex flex-col md:flex-row gap-8 items-start group">
              <div className="bg-brand-offwhite p-4 rounded-sm border border-brand-line shrink-0">
                <FileText className="w-8 h-8 text-brand-petroleum" strokeWidth={1.5} />
              </div>
              <div className="flex-grow">
                <h2 className="font-serif text-3xl text-brand-navy mb-4 group-hover:text-brand-petroleum transition-colors">Inventários e Sucessões</h2>
                <p className="text-brand-muted text-[15px] leading-relaxed mb-6">
                  Condução técnica de procedimentos de inventário judiciais e extrajudiciais, arrolamentos e alvarás. Organização documental rigorosa para partilha de bens, planejamento sucessório e resguardo do patrimônio familiar com eficiência e transparência.
                </p>
                <Link href="/servicos/inventarios" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-navy hover:text-brand-champagne-dark transition-colors focus-ring">
                  Detalhes da atuação <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Servico 3 */}
            <div className="bg-white border border-brand-line p-8 md:p-12 shadow-sm rounded-sm flex flex-col md:flex-row gap-8 items-start group">
              <div className="bg-brand-offwhite p-4 rounded-sm border border-brand-line shrink-0">
                <PhoneCall className="w-8 h-8 text-brand-petroleum" strokeWidth={1.5} />
              </div>
              <div className="flex-grow">
                <h2 className="font-serif text-3xl text-brand-navy mb-4 group-hover:text-brand-petroleum transition-colors">Plantão Jurídico</h2>
                <p className="text-brand-muted text-[15px] leading-relaxed mb-6">
                  Prontidão para atendimento de demandas que exigem intervenção jurídica emergencial e adoção de medidas cautelares urgentes para assegurar garantias processuais inadiáveis.
                </p>
                <Link href="/servicos/plantao" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-navy hover:text-brand-champagne-dark transition-colors focus-ring">
                  Detalhes da atuação <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
