'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const WHATSAPP_LINK = "https://wa.me/5511972157330?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento.";

  return (
    <>
      <section className="bg-brand-navy text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="text-brand-champagne text-[10px] tracking-[0.2em] uppercase font-semibold mb-4 block">Atendimento</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-medium tracking-tight mb-6">
            Contato do <span className="text-brand-champagne">Escritório</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl text-[15px] leading-relaxed">
            Agende uma consulta presencial ou remota. O sigilo das informações e a análise criteriosa são garantias inegociáveis.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Informações */}
            <div>
              <h2 className="font-serif text-3xl text-brand-navy mb-8">Informações Estruturais</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white border border-brand-line shadow-sm rounded-sm shrink-0">
                    <MapPin className="w-5 h-5 text-brand-petroleum" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy mb-1 uppercase tracking-wider">Endereço</h3>
                    <p className="text-brand-muted text-[15px] leading-relaxed">
                      R. Tuiuti, 504 - Brasil<br />
                      Indaiatuba - SP<br />
                      CEP 13313-164
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white border border-brand-line shadow-sm rounded-sm shrink-0">
                    <Phone className="w-5 h-5 text-brand-petroleum" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy mb-1 uppercase tracking-wider">Telefone e Plantão</h3>
                    <p className="text-brand-muted text-[15px] leading-relaxed">
                      (11) 97215-7330<br />
                      <span className="text-xs text-brand-champagne-dark font-medium">Atendimento via chamada e WhatsApp.</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white border border-brand-line shadow-sm rounded-sm shrink-0">
                    <Clock className="w-5 h-5 text-brand-petroleum" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy mb-1 uppercase tracking-wider">Expediente Regular</h3>
                    <p className="text-brand-muted text-[15px] leading-relaxed">
                      Segunda a Sexta-feira<br />
                      Das 09:00 às 18:00<br />
                      <span className="text-xs text-brand-navy font-semibold italic">Reuniões estritamente mediante agendamento.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-sm overflow-hidden border border-brand-line shadow-sm">
                <iframe 
                  src="https://maps.google.com/maps?q=R.%20Tuiuti,%20504%20-%20Indaiatuba%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Escritório"
                ></iframe>
              </div>

              <div className="mt-8 p-6 bg-brand-navy text-white rounded-sm">
                <h3 className="font-serif text-xl mb-4">Urgências e Plantão</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Para casos que demandem atuação imediata fora do horário comercial, contate-nos prioritariamente via WhatsApp, especificando a natureza da urgência na primeira mensagem.
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-full bg-brand-champagne hover:bg-brand-champagne-dark text-brand-navy py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring">
                  Acionar via WhatsApp
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-white p-8 md:p-10 border border-brand-line shadow-sm rounded-sm h-fit">
              <h2 className="font-serif text-2xl text-brand-navy mb-6">Solicitação de Contato</h2>
              <p className="text-sm text-brand-muted mb-8">
                Preencha os dados abaixo. O sigilo das informações prestadas é resguardado pelo Art. 36 do Código de Ética e Disciplina da OAB.
              </p>

              {formStatus === 'success' ? (
                <div className="bg-green-50 text-green-800 border border-green-200 p-6 rounded-sm text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-900 mb-2">Solicitação Recebida</h3>
                  <p className="text-sm">Sua mensagem foi enviada com sucesso e tramita em caráter sigiloso. Retornaremos o contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="nome" 
                      required 
                      value={formData.nome}
                      onChange={e => setFormData({...formData, nome: e.target.value})}
                      className="w-full bg-brand-offwhite border border-brand-line px-4 py-3 text-sm focus:outline-none focus:border-brand-champagne focus:ring-1 focus:ring-brand-champagne transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-2">E-mail</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-brand-offwhite border border-brand-line px-4 py-3 text-sm focus:outline-none focus:border-brand-champagne focus:ring-1 focus:ring-brand-champagne transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-2">Telefone</label>
                      <input 
                        type="tel" 
                        id="telefone" 
                        required 
                        value={formData.telefone}
                        onChange={e => setFormData({...formData, telefone: e.target.value})}
                        className="w-full bg-brand-offwhite border border-brand-line px-4 py-3 text-sm focus:outline-none focus:border-brand-champagne focus:ring-1 focus:ring-brand-champagne transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-2">Resumo da Demanda</label>
                    <textarea 
                      id="mensagem" 
                      rows={4} 
                      required 
                      value={formData.mensagem}
                      onChange={e => setFormData({...formData, mensagem: e.target.value})}
                      className="w-full bg-brand-offwhite border border-brand-line px-4 py-3 text-sm focus:outline-none focus:border-brand-champagne focus:ring-1 focus:ring-brand-champagne transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-brand-navy hover:bg-brand-petroleum text-white px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Solicitação'}
                  </button>
                  <p className="text-[11px] text-brand-muted text-center leading-relaxed">
                    Ao enviar, você concorda com o tratamento destes dados estritamente para fins de retorno comercial, conforme nossa <a href="/politica-de-privacidade" className="underline text-brand-navy">Política de Privacidade</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
