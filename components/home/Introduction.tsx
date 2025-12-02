import React from 'react';
import Section from '../ui/Section';

const Introduction: React.FC = () => {
  return (
    <div id="intro">
      {/* Top Image - Full Width */}
      <Section py="py-0" className="w-full">
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
          <img 
              src="https://picsum.photos/id/1078/1920/1080" 
              alt="Intérieur élégant et harmonieux" 
              className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </Section>

      {/* Text Below */}
      <Section className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl text-stone-800 leading-tight">
            Votre intérieur au service de votre <span className="italic text-stone-600">bien-être.</span>
          </h2>
          <div className="w-16 h-0.5 bg-sage-300 mx-auto"></div>
          <div className="text-stone-700 leading-relaxed font-light space-y-6 text-lg">
            <p>
              Parce qu'un lieu de vie harmonieux améliore considérablement le quotidien, Maison Mikasa imagine pour vous un habitat <strong className="font-medium text-stone-900">sur-mesure</strong>.
            </p>
            <p>
              Nous allions l'exigence du fonctionnel à l'élégance de l'esthétique pour créer des espaces durables, pensés pour évoluer avec vous. Redécouvrez le potentiel de votre maison.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Introduction;