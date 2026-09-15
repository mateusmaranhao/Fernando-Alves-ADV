import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-brand-offwhite min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
      <h2 className="font-serif text-5xl text-brand-navy mb-4">Página Não Encontrada</h2>
      <p className="text-brand-muted mb-8 max-w-md">A URL acessada não corresponde a um diretório válido neste domínio institucional.</p>
      <Link href="/" className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-petroleum text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors focus-ring">
        <ArrowLeft className="w-4 h-4" /> Retornar à Página Inicial
      </Link>
    </div>
  );
}
