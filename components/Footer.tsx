import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          <span className="font-bold text-white">Doce Sem Culpa</span> &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à saúde.
        </p>
      </div>
    </footer>
  );
};