import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Scale, Shield, FileText, PhoneCall } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_law_firm_1789493376538.jpg';

const WHATSAPP_LINK = "https://wa.me/5511972157330?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20o%20escrit%C3%B3rio%20Fernando%20Alves%20Caetano.";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Fernando Alves Caetano Advocacia",
            "image": "https://fernandoalvescaetano.adv.br/og-image.jpg",
            "url": "https://fernandoalvescaetano.adv.br",
            "telephone": "+5511972157330",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Tuiuti, 504 - Brasil",
              "addressLocality": "Indaiatuba",
              "addressRegion": "SP",
              "postalCode": "13313-164",
              "addressCountry": "BR"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 09:00-18:00"
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/80 z-10 mix-blend-multiply"></div>
          <Image 
            src={heroImage}
            alt="Interior do escritório"
            fill
            className="object-cover opacity-50"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-20 pb-24">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 border border-brand-champagne/30 text-brand-champagne text-[10px] tracking-[0.2em] uppercase font-semibold mb-6 rounded-sm bg-brand-navy/40 backdrop-blur-sm">
              Atendimento Jurídico Especializado
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-[1.1] tracking-tight mb-6">
              Rigor técnico e <br className="hidden sm:block" />
              <span className="text-brand-champagne">segurança jurídica</span> em Indaiatuba.
            </h1>
            <p className="text-lg text-zinc-300 mb-10 max-w-2xl leading-relaxed font-light">
              Atuação contenciosa e consultiva com foco na preservação de direitos, mitigação de riscos e resolução objetiva de demandas cíveis e sucessórias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/servicos" className="inline-flex justify-center items-center gap-2 bg-brand-champagne hover:bg-brand-champagne-dark text-brand-navy px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring">
                Áreas de Atuação <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring">
                Fale com o Escritório
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-4">Competências Técnicas</h2>
            <div className="w-12 h-0.5 bg-brand-champagne mx-auto mb-6"></div>
            <p className="text-brand-muted text-sm leading-relaxed">
              Estruturação legal focada em resultados objetivos, pautada pelo Código de Ética e Disciplina da OAB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/servicos/direito-civil" className="group bg-brand-offwhite border border-brand-line p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm focus-ring">
              <Scale className="w-8 h-8 text-brand-petroleum mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-brand-navy mb-3">Direito Civil</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Contratos, responsabilidade civil, direitos reais e resolução de conflitos cíveis com abordagem preventiva e contenciosa.
              </p>
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-champagne-dark group-hover:text-brand-petroleum transition-colors inline-flex items-center gap-1">
                Saiba mais <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link href="/servicos/inventarios" className="group bg-brand-offwhite border border-brand-line p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm focus-ring">
              <FileText className="w-8 h-8 text-brand-petroleum mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-brand-navy mb-3">Inventários</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Condução de procedimentos sucessórios judiciais e extrajudiciais, partilha de bens e regularização de acervo patrimonial.
              </p>
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-champagne-dark group-hover:text-brand-petroleum transition-colors inline-flex items-center gap-1">
                Saiba mais <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link href="/servicos/plantao" className="group bg-brand-offwhite border border-brand-line p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm focus-ring">
              <PhoneCall className="w-8 h-8 text-brand-petroleum mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-brand-navy mb-3">Plantão Jurídico</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Atendimento destinado a situações que demandam intervenção legal imediata para preservação de garantias fundamentais.
              </p>
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-champagne-dark group-hover:text-brand-petroleum transition-colors inline-flex items-center gap-1">
                Saiba mais <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Profile Snippet */}
      <section className="py-24 bg-brand-offwhite border-t border-brand-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-10 h-10 text-brand-champagne mb-6 mx-auto" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-6">Compromisso Ético e Transparência Profissional</h2>
            <p className="text-brand-muted leading-relaxed mb-4 text-[15px]">
              A atuação do escritório fundamenta-se na avaliação pragmática dos riscos e na propositura de soluções tecnicamente viáveis. Não adotamos práticas de promessa de resultados, assegurando ao cliente ciência integral sobre o trâmite processual.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8 text-[15px]">
              Com sede estruturada em Indaiatuba - SP, oferecemos atendimento presencial mediante agendamento prévio, garantindo sigilo absoluto e dedicação individualizada a cada caso.
            </p>
            <Link href="/sobre" className="inline-flex justify-center items-center bg-brand-navy hover:bg-brand-petroleum text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring">
              Conheça o Escritório
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos (Testimonials) */}
      <section className="py-24 bg-white border-t border-brand-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-4">Relatos de Clientes</h2>
            <div className="w-12 h-0.5 bg-brand-champagne mx-auto mb-6"></div>
            <p className="text-brand-muted text-sm leading-relaxed">
              Avaliações de nosso atendimento jurídico. Em conformidade com o Provimento nº 205/2021 da OAB, resguardamos o sigilo das causas e a identidade dos clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-offwhite p-8 border border-brand-line rounded-sm">
              <p className="text-brand-muted text-[15px] italic leading-relaxed mb-6">
                "Profissionalismo exemplar. O atendimento foi conduzido com extrema transparência, esclarecendo todos os riscos e cenários do processo de inventário."
              </p>
              <div className="text-sm font-semibold text-brand-navy">Cliente em caso de Inventário</div>
              <div className="text-xs text-brand-champagne-dark">Indaiatuba - SP</div>
            </div>
            <div className="bg-brand-offwhite p-8 border border-brand-line rounded-sm">
              <p className="text-brand-muted text-[15px] italic leading-relaxed mb-6">
                "Excelente direcionamento técnico em um contrato comercial complexo. Segurança jurídica repassada com muita clareza em todas as reuniões."
              </p>
              <div className="text-sm font-semibold text-brand-navy">Empresário local</div>
              <div className="text-xs text-brand-champagne-dark">Indaiatuba - SP</div>
            </div>
            <div className="bg-brand-offwhite p-8 border border-brand-line rounded-sm">
              <p className="text-brand-muted text-[15px] italic leading-relaxed mb-6">
                "Disponibilidade e rigor técnico. Resolveram um conflito cível familiar com muita sobriedade, evitando desgastes desnecessários."
              </p>
              <div className="text-sm font-semibold text-brand-navy">Cliente em contencioso cível</div>
              <div className="text-xs text-brand-champagne-dark">Indaiatuba - SP</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-offwhite border-t border-brand-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-4">Perguntas Frequentes</h2>
            <div className="w-12 h-0.5 bg-brand-champagne mx-auto mb-6"></div>
          </div>
          <div className="space-y-6">
            <details className="group bg-white p-6 border border-brand-line rounded-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-serif text-xl text-brand-navy outline-none focus-ring">
                Como funciona a primeira consulta?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-brand-muted mt-4 leading-relaxed text-[15px]">
                A consulta inicial tem caráter diagnóstico. É o momento em que avaliamos a documentação, os fatos apresentados e emitimos um parecer inicial sobre as viabilidades legais e os possíveis desdobramentos do caso.
              </p>
            </details>
            <details className="group bg-white p-6 border border-brand-line rounded-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-serif text-xl text-brand-navy outline-none focus-ring">
                O escritório realiza atendimento online?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-brand-muted mt-4 leading-relaxed text-[15px]">
                Sim. Para clientes que não podem comparecer à nossa sede em Indaiatuba, disponibilizamos a possibilidade de consultas e reuniões através de plataformas de videoconferência, com total sigilo.
              </p>
            </details>
            <details className="group bg-white p-6 border border-brand-line rounded-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-serif text-xl text-brand-navy outline-none focus-ring">
                Quais os honorários cobrados por um processo?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-brand-muted mt-4 leading-relaxed text-[15px]">
                Os honorários advocatícios são calculados de acordo com a complexidade da causa, o tempo estimado de dedicação e baseados na Tabela da Ordem dos Advogados do Brasil (OAB/SP). Valores exatos são definidos apenas após a análise técnica do caso em consulta.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-24 bg-white border-t border-brand-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-4">Contato e Localização</h2>
            <div className="w-12 h-0.5 bg-brand-champagne mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-brand-offwhite p-8 md:p-10 border border-brand-line shadow-sm rounded-sm">
              <h3 className="text-xs uppercase tracking-wider text-brand-champagne-dark font-semibold mb-6">Informações Diretas</h3>
              
              <dl className="space-y-6 mb-8">
                <div>
                  <dt className="text-sm font-semibold text-brand-navy mb-1">Endereço Profissional</dt>
                  <dd className="text-brand-muted text-sm leading-relaxed">R. Tuiuti, 504 - Brasil<br/>Indaiatuba - SP, 13313-164</dd>
                </div>
                <div className="h-px w-full bg-brand-line"></div>
                <div>
                  <dt className="text-sm font-semibold text-brand-navy mb-1">Telefone / WhatsApp</dt>
                  <dd className="text-brand-muted text-sm">(11) 97215-7330</dd>
                </div>
                <div className="h-px w-full bg-brand-line"></div>
                <div>
                  <dt className="text-sm font-semibold text-brand-navy mb-1">Horário de Expediente</dt>
                  <dd className="text-brand-muted text-sm">Segunda a Sexta, das 09:00 às 18:00<br/>Mediante agendamento</dd>
                </div>
              </dl>
              
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-full bg-brand-champagne hover:bg-brand-champagne-dark text-brand-navy py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring">
                Agendar Consulta
              </a>
            </div>

            <div className="h-full min-h-[400px] border border-brand-line rounded-sm overflow-hidden shadow-sm">
              <iframe 
                src="https://maps.google.com/maps?q=R.%20Tuiuti,%20504%20-%20Indaiatuba%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border: 0, minHeight: '400px'}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Escritório"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
