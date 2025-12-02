import React from 'react';
import Section from '../ui/Section';

const AboutPreview: React.FC = () => {
  return (
    <Section id="about" bgColor="bg-stone-50" className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl text-stone-800 mb-4">Qui je suis ?</h2>
        <div className="w-12 h-0.5 bg-sage-400 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Image */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-md group">
            <img 
              src="https://picsum.photos/id/64/600/800" 
              alt="Laurine Fourcherot" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-7 lg:col-span-8 space-y-6 text-stone-700 font-light leading-relaxed">
          <div>
            <h3 className="font-serif text-2xl text-stone-800 mb-1">Laurine Fourcherot</h3>
            <p className="text-xs uppercase tracking-widest text-sage-600 mb-4">Architecte d'intérieur et décoratrice</p>
          </div>

          <p>
            Je viens de Baden (Morbihan, Bretagne) et c’est pour moi un honneur de sublimer les habitats du <strong className="font-medium text-stone-900">golfe du Morbihan</strong> et de notre belle région.
          </p>
          <p>
            J’ai fondé Maison Mikasa pour améliorer votre quotidien grâce à des solutions <strong className="font-medium text-stone-900">sur-mesure</strong>. Ma mission est que chaque habitant s’épanouisse, se ressource et vive le plus simplement possible chez soi, de façon <strong className="font-medium text-stone-900">durable</strong>.
          </p>
          <p>
            Je vous propose mes services d’<strong className="font-medium text-stone-900">architecture d’intérieur</strong> et de <strong className="font-medium text-stone-900">décoration d’intérieur</strong> pour un projet esthétique, fonctionnel et qui vous ressemble enfin. C’est ma <strong className="font-medium text-stone-900">passion</strong> qui vous guide tout le long de votre projet. Vous êtes ma principale source d’inspiration.
          </p>

          <div className="pt-6">
            <a href="#about-page" className="text-sm border-b border-stone-800 pb-1 hover:text-sage-600 hover:border-sage-600 transition-colors uppercase tracking-widest text-stone-800">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutPreview;