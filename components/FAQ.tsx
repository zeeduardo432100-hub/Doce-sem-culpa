import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    question: "Preciso saber cozinhar para fazer as receitas?",
    answer: "Absolutamente não! As receitas foram pensadas para iniciantes. Se você sabe ligar o fogão ou o micro-ondas, vai conseguir fazer doces incríveis."
  },
  {
    question: "Serve para diabéticos?",
    answer: "Sim! Todas as receitas são zero açúcar. Porém, sempre recomendamos que você mostre os ingredientes ao seu médico ou nutricionista, pois cada caso é único."
  },
  {
    question: "Usa ingredientes caros e difíceis de achar?",
    answer: "Não. A nossa premissa é praticidade e economia. Você vai usar ingredientes comuns como cacau, creme de leite, ovos, frutas e adoçantes acessíveis."
  },
  {
    question: "As receitas são rápidas?",
    answer: "Sim! Sabemos que sua rotina é corrida. A maioria das receitas fica pronta em menos de 20 minutos."
  },
  {
    question: "Funciona sem forno?",
    answer: "Com certeza. Temos muitas opções de geladeira (que não vão ao fogo) e opções de micro-ondas."
  },
  {
    question: "Serve para quem está fazendo Low Carb?",
    answer: "Sim, a grande maioria das receitas se encaixa perfeitamente na dieta Low Carb e Cetogênica."
  },
  {
    question: "Quando e como recebo o material?",
    answer: "O envio é imediato e automático. Assim que o pagamento for confirmado, você recebe um e-mail com o link para baixar seu e-book e começar a usar agora mesmo."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600">
            Tiramos todas as suas dúvidas para você comprar com segurança.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};