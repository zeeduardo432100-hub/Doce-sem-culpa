import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    age: 32,
    text: "Eu sou chocólatra assumida e achava impossível emagrecer. As receitas de brownie desse e-book salvaram minha vida! Já perdi 4kg em um mês comendo doce todo dia.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Patrícia Gomes",
    age: 41,
    text: "Comprei achando que seriam aquelas receitas ruins com gosto de papelão. Me surpreendi! O pudim zero açúcar é idêntico ao tradicional. Meu marido comeu e nem percebeu.",
    avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Fernanda Dias",
    age: 28,
    text: "O melhor investimento que fiz. É muito barato pelo que entrega. As receitas de micro-ondas são perfeitas pra quando chego cansada do trabalho e quero um docinho.",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Carla Mendes",
    age: 36,
    text: "Finalmente consegui parar de furar a dieta no final de semana. Faço umas trufas low carb e deixo na geladeira. A vontade de doce sumiu!",
    avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quem provou, <span className="text-brand-primary">aprovou</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Junte-se a centenas de mulheres que estão fazendo as pazes com a balança sem abrir mão do sabor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.avatarUrl} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-pink" />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.age} anos</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};