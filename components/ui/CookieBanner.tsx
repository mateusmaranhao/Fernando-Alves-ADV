'use client';

import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true });

  useEffect(() => {
    const consent = localStorage.getItem('fac_legal_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }

    // Global listener for opening cookie settings from footer
    const handleOpenSettings = () => setShowModal(true);
    const btn = document.getElementById('open-cookie-settings');
    if (btn) btn.addEventListener('click', handleOpenSettings);
    
    return () => {
      if (btn) btn.removeEventListener('click', handleOpenSettings);
    };
  }, []);

  const acceptAll = () => {
    localStorage.setItem('fac_legal_cookie_consent', JSON.stringify({ strictlyNecessary: true, analytics: true }));
    setShowBanner(false);
    setShowModal(false);
  };

  const savePrefs = () => {
    localStorage.setItem('fac_legal_cookie_consent', JSON.stringify({ strictlyNecessary: true, analytics: prefs.analytics }));
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-brand-navy border-t border-brand-petroleum text-white p-4 sm:p-6 z-50 shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
              Este site utiliza cookies técnicos essenciais e, mediante o seu consentimento, cookies de análise de tráfego, em conformidade com a LGPD (Lei nº 13.709/18). Nenhum dado é utilizado para publicidade direcionada. Leia nossa <a href="/politica-de-cookies" className="text-brand-champagne hover:underline">Política de Cookies</a>.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 flex-wrap justify-end">
              <button onClick={() => setShowModal(true)} className="text-xs uppercase tracking-wider font-semibold text-brand-champagne hover:text-white px-3 py-2 transition-colors">
                Gerenciar
              </button>
              <button onClick={acceptAll} className="bg-brand-champagne hover:bg-brand-champagne-dark text-brand-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring">
                Aceitar e Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-sm shadow-2xl border border-brand-line overflow-hidden">
            <div className="p-6 border-b border-brand-line bg-zinc-50">
              <h2 className="font-serif text-2xl text-brand-navy font-semibold">Preferências de Privacidade</h2>
              <p className="text-sm text-brand-muted mt-2">Gerencie seu consentimento conforme as diretrizes da LGPD.</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-brand-navy mb-1">Cookies Essenciais (Obrigatórios)</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">Necessários para o funcionamento básico do site (segurança e roteamento). Não podem ser desativados.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <div className="w-10 h-5 bg-zinc-300 rounded-full relative cursor-not-allowed opacity-60">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-1 shadow-sm"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-brand-navy mb-1">Cookies de Desempenho</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">Estatísticas anônimas de acesso para melhorar a organização da informação.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer focus-within:outline-2 focus-within:outline-brand-champagne focus-within:outline-offset-2">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={prefs.analytics}
                      onChange={(e) => setPrefs({...prefs, analytics: e.target.checked})}
                    />
                    <div className="w-10 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-petroleum"></div>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-brand-line bg-zinc-50 flex justify-end gap-3">
              <button onClick={savePrefs} className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-navy border border-brand-line hover:bg-zinc-100 rounded-sm transition-colors">
                Salvar Preferências
              </button>
              <button onClick={acceptAll} className="px-5 py-2.5 bg-brand-navy hover:bg-brand-petroleum text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors">
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
