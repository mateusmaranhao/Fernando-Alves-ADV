import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Inventários e Sucessões | Fernando Alves Caetano',
  description: 'Condução de inventários judiciais e extrajudiciais, com organização documental e partilha de bens em Indaiatuba.',
};

export default function InventariosPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-navy text-white pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Link href="/servicos" className="inline-flex items-center gap-2 text-brand-champagne hover:text-white text-xs uppercase tracking-wider mb-8 transition-colors focus-ring">
            <ArrowLeft className="w-4 h-4" /> Voltar para Serviços
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-8 h-8 text-brand-champagne" strokeWidth={1.5} />
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">Inventários e Sucessões</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="prose prose-zinc max-w-none">
            <p className="text-lg text-brand-navy font-medium leading-relaxed mb-8">
              A regularização do acervo patrimonial após o falecimento exige organização documental impecável, respeito aos prazos fiscais e busca constante pela conciliação entre herdeiros.
            </p>

            <h3 className="font-serif text-2xl text-brand-petroleum mt-10 mb-6">Escopo de Atuação</h3>
            
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-champagne shrink-0 mt-0.5" />
                <span className="text-brand-muted text-[15px]"><strong>Inventário Extrajudicial:</strong> Procedimento célere realizado em cartório, admissível quando todos os herdeiros são maiores, capazes e há consenso sobre a partilha.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-champagne shrink-0 mt-0.5" />
                <span className="text-brand-muted text-[15px]"><strong>Inventário Judicial:</strong> Condução do processo perante o juízo sucessório, obrigatório em casos que envolvem menores, incapazes, testamentos (via de regra) ou divergência entre as partes.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-champagne shrink-0 mt-0.5" />
                <span className="text-brand-muted text-[15px]"><strong>Alvarás Judiciais:</strong> Medidas autônomas para levantamento de pequenos valores deixados pelo *de cujus*, dispensando, quando aplicável, o rito completo do inventário.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-brand-offwhite border border-brand-line rounded-sm">
              <h4 className="font-serif text-xl text-brand-navy mb-4">Eficiência e Legalidade</h4>
              <p className="text-sm text-brand-muted leading-relaxed mb-0">
                Atuação pautada em evitar o litígio protelatório e garantir o correto recolhimento tributário (ITCMD), protegendo os constituintes de surpresas fiscais e garantindo a regularidade registral dos bens partilhados.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/contato" className="inline-flex justify-center items-center bg-brand-navy hover:bg-brand-petroleum text-white px-8 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring">
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
