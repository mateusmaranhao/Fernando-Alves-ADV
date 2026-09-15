'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import React from 'react';

const WHATSAPP_LINK = "https://wa.me/5511972157330?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20o%20escrit%C3%B3rio%20Fernando%20Alves%20Caetano.";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinkClass = (path: string) => {
    const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));
    return `nav-item py-2 focus-ring transition-colors font-medium ${
      isActive ? 'text-brand-navy font-semibold' : 'text-brand-muted hover:text-brand-navy'
    }`;
  };

  return (
    <>
      {/* Top Bar */}
      <aside aria-label="Identificação Institucional" className="bg-brand-navy text-zinc-300 text-xs py-2 border-b border-white/10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="tracking-wider uppercase text-[11px] text-zinc-400 font-medium">Inscrição Profissional:</span>
            <span className="font-semibold text-brand-champagne">OAB 351.137</span>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-zinc-400">Comarca de Indaiatuba - SP</span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="tel:+5511972157330" className="hover:text-white transition-colors focus-ring">Atendimento: (11) 97215-7330</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-champagne hover:underline focus-ring">Mensagem via WhatsApp</a>
          </div>
        </div>
      </aside>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200 ${isScrolled ? 'border-b border-brand-line shadow-sm' : 'border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          
          <Link href="/" className="group focus-ring inline-block py-1" aria-label="Fernando Alves Caetano - Página Inicial">
            <span className="font-serif text-2xl sm:text-[1.7rem] font-medium tracking-tight text-brand-navy block leading-none group-hover:text-brand-petroleum transition-colors">
              Fernando Alves Caetano
            </span>
            <span className="text-[10px] tracking-[0.22em] uppercase text-brand-muted block mt-1 font-medium">
              Advocacia e Consultoria Jurídica
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Navegação Principal" className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className={navLinkClass('/')}>Início</Link>
            <Link href="/sobre" className={navLinkClass('/sobre')}>Sobre o Escritório</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                type="button" 
                aria-haspopup="true" 
                aria-expanded={servicesOpen} 
                className={`flex items-center gap-1.5 py-2 focus-ring ${pathname.startsWith('/servicos') ? 'text-brand-navy font-semibold' : 'text-brand-muted group-hover:text-brand-navy'}`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Serviços</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute left-0 top-full pt-2 w-64 transition-all duration-150 transform ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}>
                <div className="bg-white border border-brand-line shadow-lg p-2 rounded-sm">
                  <Link href="/servicos" className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-brand-champagne-dark hover:bg-zinc-50 border-b border-zinc-100">Áreas de Atuação</Link>
                  <Link href="/servicos/direito-civil" className="block px-3 py-2.5 text-sm text-brand-navy hover:bg-zinc-50 hover:text-brand-petroleum">Direito Civil</Link>
                  <Link href="/servicos/inventarios" className="block px-3 py-2.5 text-sm text-brand-navy hover:bg-zinc-50 hover:text-brand-petroleum">Inventários</Link>
                  <Link href="/servicos/plantao" className="block px-3 py-2.5 text-sm text-brand-navy hover:bg-zinc-50 hover:text-brand-petroleum">Plantão de Atendimento</Link>
                </div>
              </div>
            </div>

            <Link href="/contato" className={navLinkClass('/contato')}>Contato</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-brand-navy hover:bg-brand-petroleum text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors border border-brand-navy focus-ring">
              Fale com o Escritório
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            type="button" 
            aria-expanded={mobileMenuOpen} 
            className="lg:hidden p-2 text-brand-navy focus-ring" 
            aria-label="Abrir menu de navegação"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-line bg-white px-6 py-6 shadow-xl absolute w-full">
            <nav className="flex flex-col space-y-4 text-base">
              <Link href="/" className={`font-medium py-1 ${pathname === '/' ? 'text-brand-navy' : 'text-brand-muted'}`}>Início</Link>
              <Link href="/sobre" className={`font-medium py-1 ${pathname === '/sobre' ? 'text-brand-navy' : 'text-brand-muted hover:text-brand-navy'}`}>Sobre o Escritório</Link>
              
              <div className="pt-2 border-t border-zinc-100">
                <p className="text-xs uppercase font-semibold text-brand-champagne-dark mb-2 tracking-wider">Serviços</p>
                <div className="pl-3 flex flex-col space-y-2.5">
                  <Link href="/servicos" className="text-sm text-brand-navy font-medium">Visão Geral</Link>
                  <Link href="/servicos/direito-civil" className="text-sm text-brand-muted hover:text-brand-navy">Direito Civil</Link>
                  <Link href="/servicos/inventarios" className="text-sm text-brand-muted hover:text-brand-navy">Inventários</Link>
                  <Link href="/servicos/plantao" className="text-sm text-brand-muted hover:text-brand-navy">Plantão de Atendimento</Link>
                </div>
              </div>

              <Link href="/contato" className="text-brand-muted hover:text-brand-navy pt-2 border-t border-zinc-100 font-medium py-1">Contato</Link>
              
              <div className="pt-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3 bg-brand-navy text-white text-xs uppercase font-semibold tracking-wider rounded-sm">
                  Fale com o Escritório
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
