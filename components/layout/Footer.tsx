import Link from 'next/link';
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-zinc-300 pt-16 pb-12 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          <div className="md:col-span-4 space-y-4">
            <h2 className="font-serif text-2xl text-white font-normal tracking-tight">Fernando Alves Caetano</h2>
            <p className="text-xs tracking-widest uppercase text-brand-champagne font-medium">OAB 351.137</p>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Prática advocatícia estruturada sobre a segurança jurídica, análise minuciosa de cada demanda e conduta estritamente ética em Indaiatuba e região.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-white font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-white font-semibold">Áreas Informadas</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/servicos/direito-civil" className="hover:text-white transition-colors">Direito Civil</Link></li>
              <li><Link href="/servicos/inventarios" className="hover:text-white transition-colors">Inventários</Link></li>
              <li><Link href="/servicos/plantao" className="hover:text-white transition-colors">Plantão de Atendimento</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 text-sm text-zinc-400">
            <h3 className="text-xs uppercase tracking-wider text-white font-semibold">Atendimento Local</h3>
            <p className="leading-snug">
              R. Tuiuti, 504 - Brasil<br />
              Indaiatuba - SP<br />
              CEP 13313-164
            </p>
            <p className="pt-1">
              <span className="text-zinc-200 font-medium">Telefone / WhatsApp:</span><br />
              (11) 97215-7330
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
          <p>
            &copy; {currentYear} Fernando Alves Caetano Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-end">
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors underline">Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-white transition-colors underline">Termos</Link>
            <Link href="/politica-de-cookies" className="hover:text-white transition-colors underline">Cookies</Link>
            <button id="open-cookie-settings" type="button" className="hover:text-white transition-colors underline text-brand-champagne">
              Preferências de Cookies
            </button>
          </div>
        </div>
        <div className="mt-6 text-[11px] text-zinc-400 text-center sm:text-left border-t border-white/5 pt-4">
          Nota de conformidade: Este site tem finalidade estritamente informativa, respeitando as diretrizes do Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do Conselho Federal da OAB. Não há vinculação ou promessa de resultados.
        </div>
      </div>
    </footer>
  );
}
