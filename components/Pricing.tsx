import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-brand-primary to-brand-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-pink mix-blend-overlay filter blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-yellow-400 py-2 text-center font-bold uppercase tracking-wider text-sm text-yellow-900">
            Oferta por tempo limitado
          </div>
          
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Doce Sem Culpa</h3>
            <p className="text-gray-500 mb-6">Acesso Vitalício + Atualizações</p>
            
            <div className="flex flex-col items-center justify-center mb-6">
              <span className="text-gray-400 line-through text-xl">De R$ 49,90</span>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-brand-primary mb-2">Por apenas</span>
                <span className="text-6xl font-extrabold text-brand-primary">9,90</span>
              </div>
            </div>

            <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>50 Receitas Zero Açúcar</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Pagamento único e seguro</span>
              </div>
            </div>

            <Button fullWidth pulse variant="primary">
              Liberar Acesso Agora
            </Button>
            
            <p className="mt-4 text-xs text-gray-400">
              Ambiente 100% seguro. Acesso enviado por e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};