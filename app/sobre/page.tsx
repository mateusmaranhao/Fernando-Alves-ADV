import React from 'react';
import Image from 'next/image';
import { Shield, BookOpen, Award } from 'lucide-react';
import aboutImage from '@/src/assets/images/about_law_firm_1789493391925.jpg';

export const metadata = {
  title: 'Sobre o Escritório | Fernando Alves Caetano',
  description: 'Conheça o escritório Fernando Alves Caetano Advocacia em Indaiatuba/SP. Atuação ética, transparente e com rigor técnico.',
};

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="text-brand-champagne text-[10px] tracking-[0.2em] uppercase font-semibold mb-4 block">Sobre o Escritório</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-medium tracking-tight max-w-2xl">
            Rigor Técnico e <span className="text-brand-champagne">Atuação Ética</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] relative rounded-sm overflow-hidden bg-brand-offwhite border border-brand-line shadow-md">
                <Image 
                  src={aboutImage}
                  alt="Mesa de reunião no escritório Fernando Alves Caetano"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-offwhite p-6 border border-brand-line shadow-sm hidden md:block max-w-xs">
                <p className="text-brand-navy font-serif text-xl italic mb-2">"A advocacia não é profissão de covardes."</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold">— Sobral Pinto (referência inspiracional)</p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-10 space-y-8">
              <div className="prose prose-zinc prose-a:text-brand-petroleum hover:prose-a:text-brand-navy max-w-none">
                <h2 className="font-serif text-3xl text-brand-navy">O Profissional</h2>
                <p className="text-brand-muted text-[15px] leading-relaxed">
                  Fernando Alves Caetano (OAB/SP 351.137) atua na comarca de Indaiatuba - SP com dedicação exclusiva à estruturação de defesas robustas e à consultoria preventiva. A prática profissional é pautada na compreensão aprofundada da doutrina e da jurisprudência atualizada, visando a melhor orientação jurídica possível para cada cenário.
                </p>
                <p className="text-brand-muted text-[15px] leading-relaxed">
                  A metodologia de trabalho recusa a mercantilização da profissão e a promessa de resultados infalíveis, priorizando a prestação de serviços intelectuais consubstanciados na lealdade, na transparência e no estudo minucioso de cada demanda.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-brand-line">
                <div className="bg-brand-offwhite p-6 rounded-sm border border-brand-line/50">
                  <Shield className="w-6 h-6 text-brand-champagne mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-brand-navy text-sm mb-2">Segurança Jurídica</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">Análise de risco prévia para fundamentar decisões seguras e mitigar passivos antes que se concretizem.</p>
                </div>
                <div className="bg-brand-offwhite p-6 rounded-sm border border-brand-line/50">
                  <BookOpen className="w-6 h-6 text-brand-champagne mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-brand-navy text-sm mb-2">Atualização Constante</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">Acompanhamento rigoroso das alterações legislativas e tendências jurisprudenciais dos Tribunais Superiores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <Award className="w-10 h-10 text-brand-champagne mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="font-serif text-3xl text-white mb-6 max-w-2xl mx-auto">Precisa de orientação jurídica profissional e objetiva?</h2>
          <a href="/contato" className="inline-block bg-brand-champagne hover:bg-brand-champagne-dark text-brand-navy px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring">
            Agendar Atendimento
          </a>
        </div>
      </section>
    </>
  );
}
