import React from 'react';

export const metadata = {
  title: 'Política de Privacidade | Fernando Alves Caetano',
};

export default function PrivacidadePage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 prose prose-zinc max-w-none">
        <h1 className="font-serif text-3xl text-brand-navy mb-8">Política de Privacidade</h1>
        <p className="text-sm text-brand-muted mb-8 uppercase tracking-wider font-semibold">Atualizado em Janeiro de 2024</p>
        
        <h2 className="font-serif text-2xl text-brand-petroleum">1. Compromisso com a Proteção de Dados</h2>
        <p>
          O escritório Fernando Alves Caetano Advocacia tem o compromisso estrito com a privacidade e a segurança dos dados pessoais de seus clientes e usuários do site, em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.
        </p>

        <h2 className="font-serif text-2xl text-brand-petroleum">2. Coleta de Dados</h2>
        <p>
          Os dados pessoais (como nome, e-mail e telefone) são coletados exclusivamente mediante o fornecimento voluntário pelo usuário através do formulário de contato, com a finalidade estrita de viabilizar o retorno da solicitação e eventual agendamento de consulta.
        </p>

        <h2 className="font-serif text-2xl text-brand-petroleum">3. Sigilo Profissional</h2>
        <p>
          Qualquer informação, documento ou relato fornecido ao escritório é acobertado pelo sigilo profissional inerente à advocacia, não sendo compartilhado, comercializado ou cedido a terceiros sob nenhuma hipótese, salvo cumprimento de determinação judicial ou mediante consentimento expresso e documentado do titular.
        </p>

        <h2 className="font-serif text-2xl text-brand-petroleum">4. Direitos do Titular</h2>
        <p>
          Você tem o direito de solicitar a confirmação da existência de tratamento, o acesso aos dados, a correção de dados incompletos, inexatos ou desatualizados, e a anonimização, bloqueio ou eliminação de dados desnecessários, bastando entrar em contato através de nossos canais oficiais de atendimento.
        </p>
      </div>
    </div>
  );
}
