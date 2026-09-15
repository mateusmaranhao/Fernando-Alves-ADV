import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Direito Civil | Fernando Alves Caetano',
  description: 'Atuação em Direito Civil: contencioso, consultivo, contratos e responsabilidade civil em Indaiatuba.',
};

export default function DireitoCivilPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-navy text-white pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Link href="/servicos" className="inline-flex items-center gap-2 text-brand-champagne hover:text-white text-xs uppercase tracking-wider mb-8 transition-colors focus-ring">
            <ArrowLeft className="w-4 h-4" /> Voltar para Serviços
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Scale className="w-8 h-8 text-brand-champagne" strokeWidth={1.5} />
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">Direito Civil</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="prose prose-zinc max-w-none">
            <p className="text-lg text-brand-navy font-medium leading-relaxed mb-8">
              O Direito Civil rege as relações mais fundamentais da vida em sociedade. A atuação do escritório neste ramo foca na estruturação legal preventiva e na defesa contenciosa rigorosa.
            </p>

            <h3 className="font-serif text-2xl text-brand-petroleum mt-10 mb-6">Escopo de Atuação</h3>
            
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-champagne shrink-0 mt-0.5" />
                <span className="text-brand-muted text-[15px]"><strong>Obrigações e Contratos:</strong> Elaboração, revisão e discussão judicial de instrumentos contratuais, buscando sempre mitigar riscos e estabelecer clareza nas relações negociais.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-champagne shrink-0 mt-0.5" />
                <span className="text-brand-muted text-[15px]"><strong>Responsabilidade Civil:</strong> Reparação de danos patrimoniais e extrapatrimoniais decorrentes de atos ilícitos ou inadimplemento contratual.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-champagne shrink-0 mt-0.5" />
                <span className="text-brand-muted text-[15px]"><strong>Direitos Reais:</strong> Posse, propriedade, condomínios e garantias reais.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-brand-offwhite border border-brand-line rounded-sm">
              <h4 className="font-serif text-xl text-brand-navy mb-4">Metodologia</h4>
              <p className="text-sm text-brand-muted leading-relaxed mb-0">
                Cada caso é precedido de estudo de viabilidade, apresentando ao cliente os riscos inerentes à demanda e os custos associados, em estrita observância à transparência exigida pelo Código de Ética da OAB.
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
