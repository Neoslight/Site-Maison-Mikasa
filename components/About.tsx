import React from 'react';
import Section from './Section';

const About: React.FC = () => {
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
            Originaire de Baden, j’ai un lien particulier avec les maisons du Golfe du Morbihan. C’est ici que j’ai choisi de fonder Maison Mikasa, avec une conviction toute simple : votre maison ne doit pas seulement être "jolie", elle doit être votre véritable refuge.
          </p>
          <p>
            Ce qui me passionne, c’est de voir au-delà des murs. Rien ne me fascine plus que de déceler le potentiel caché d'un bâtiment pour le transformer en un lieu qui vous ressemble enfin : un intérieur à la fois chaleureux et vraiment fonctionnel.
          </p>
          <p>
            Mon approche privilégie l’intelligence des volumes et l’optimisation de chaque mètre carré. Plutôt que d'imposer un style figé, je cherche à révéler l'âme de vos espaces en m’imprégnant de votre façon de vivre. Mon métier, c'est de trouver cet équilibre subtil entre le cachet de l’ancien et le confort du moderne.
          </p>
          <p>
            Je suis aussi là pour vous apporter de la sérénité. Je gère toute la complexité technique pour que vous n'ayez qu'à vous concentrer sur l'essentiel : vous projeter dans votre futur chez-vous. Ensemble, nous créons un environnement fluide et ressourçant, un lieu qui vit avec vous et simplifie votre quotidien.
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

export default About;