import React from 'react';
import Section from './Section';

const CTA: React.FC = () => {
  return (
    <Section id="cta" className="max-w-7xl mx-auto px-6 border-t border-gray-100">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
         <div className="space-y-4">
           <h3 className="font-serif text-2xl text-stone-800">À propos</h3>
           <p className="text-sm text-stone-700 font-light">Découvrez qui je suis, l’histoire de Maison Mikasa, et ma mission.</p>
           <a href="#about-page" className="inline-block text-xs uppercase tracking-widest text-stone-600 hover:text-sage-600 mt-4 py-2 px-4 border border-transparent hover:border-sage-200 transition-all rounded-sm">
             En savoir plus
           </a>
         </div>
         
         <div className="space-y-4">
           <h3 className="font-serif text-2xl text-stone-800">Les projets</h3>
           <p className="text-sm text-stone-700 font-light">Découvrez les projets de Maison Mikasa.</p>
           <a href="#realisations" className="inline-block text-xs uppercase tracking-widest text-stone-600 hover:text-sage-600 mt-4 py-2 px-4 border border-transparent hover:border-sage-200 transition-all rounded-sm">
             Je découvre
           </a>
         </div>
       </div>
    </Section>
  );
};

export default CTA;