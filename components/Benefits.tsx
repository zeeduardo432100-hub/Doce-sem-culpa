import React from 'react';
import { Heart, Zap, Wallet, Smile, ShieldCheck, Utensils } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    icon: <Heart className="w-8 h-8 text-brand-primary" />,
    title: "Reduza a vontade de doce",
    description: "Engane seu cérebro com sabores incríveis sem o pico de insulina que causa mais fome."
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-primary" />,
    title: "Emagrecimento sem sofrer",
    description: "Continue comendo sobremesas deliciosas e ainda veja os números da balança descerem."
  },
  {
    icon: <Utensils className="w-8 h-8 text-brand-primary" />,
    title: "Receitas Vapt-Vupt",
    description: "A maioria das receitas leva menos de 15 minutos. Ideal para rotinas corridas."
  },
  {
    icon: <Wallet className="w-8 h-8 text-brand-primary" />,
    title: "Economize no Mercado",
    description: "Nada de farinhas que custam um rim. Usamos ingredientes que você acha em qualquer esquina."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
    title: "Adoçantes sem sabor residual",
    description: "Aprenda os segredos para o seu doce não ficar com gosto amargo de remédio."
  },
  {
    icon: <Smile className="w-8 h-8 text-brand-primary" />,
    title: "Salvação da Dieta",
    description: "Aquele momento que você ia chutar o balde? Coma um docinho nosso e siga firme no foco."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que o <span className="text-brand-primary">Doce Sem Culpa</span> funciona?
          </h2>
          <p className="text-lg text-gray-600">
            Chega de dietas restritivas que só geram ansiedade e compulsão. Aqui você tem equilíbrio e sabor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 p-3 bg-brand-rose rounded-xl inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};