import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const ProductBreakdown: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    "50 Receitas exclusivas Zero Açúcar",
    "Fotos reais e ilustrativas de cada prato",
    "Passo a passo detalhado à prova de erros",
    "Tempo de preparo e rendimento de cada receita",
    "Seção especial: Sobremesas de Micro-ondas",
    "Opções Low Carb para turbinar o emagrecimento",
    "Doces para Café da manhã, Lanche e Ceia",
    "Guia de substituições inteligentes"
  ];

  return (
    <section className="py-20 bg-brand-rose">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
               <img 
                src="https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=600&auto=format&fit=crop" 
                alt="Brownie de chocolate fit" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" 
               />
               <img 
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop" 
                alt="Pudim de chia com frutas vermelhas" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8 transform hover:scale-105 transition-transform duration-300" 
               />
             </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que você vai receber no <span className="text-brand-primary">E-book Completo</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Não é apenas um livro de receitas. É o seu manual de sobrevivência para manter a dieta em dia sem abrir mão do prazer de comer.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="secondary" onClick={scrollToPricing}>
              Quero minhas sobremesas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};