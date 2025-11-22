import React from 'react';
import { Button } from './Button';
import { CheckCircle, Clock, DollarSign } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative overflow-hidden bg-brand-rose pt-12 pb-20 lg:pt-24 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-pink/20 text-brand-primary font-semibold text-sm tracking-wide uppercase">
              Liberdade para comer bem
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 font-serif leading-tight mb-6">
              50 Sobremesas <span className="text-brand-primary">Zero Açúcar</span> que matam a vontade de doce sem te tirar da dieta
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Receitas práticas, sem ingredientes difíceis e com sabor de "gordice". Prontas em poucos minutos para você emagrecer sem sofrimento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button onClick={scrollToPricing} pulse>
                Quero comer doce sem culpa
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-primary" />
                <span>Pronto em minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-brand-primary" />
                <span>Ingredientes baratos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-primary" />
                <span>Sabor Garantido</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img 
                src="https://boaforma.abril.com.br/wp-content/uploads/sites/2/2021/11/receitas-doces-sem-acucar-5.jpg?quality=95&strip=info&w=1280&h=720&crop=1" 
                alt="Sobremesa deliciosa zero açúcar" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                <p className="font-bold text-brand-primary text-lg">Mousse Fit Cremoso</p>
                <p className="text-xs text-gray-600">0g Açúcar • Pronto em 5min</p>
              </div>
            </div>
            {/* Decor element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </header>
  );
};