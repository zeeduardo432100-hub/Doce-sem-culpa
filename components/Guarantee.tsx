import React from 'react';
import { Shield } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 p-8 border-2 border-dashed border-gray-700 rounded-3xl bg-gray-800/50">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-brand-pink">Garantia Incondicional de 7 Dias</h3>
            <p className="text-gray-300 text-lg">
              O risco é todo nosso. Se você comprar, testar as receitas e achar que não valeu a pena, ou simplesmente não gostar da cor do e-book, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas. Basta um e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};