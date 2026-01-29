import React from 'react';
import Section from '../components/ui/Section';
import { Heart, Ruler, Sparkles, MapPin, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section bgColor="bg-stone-50" className="max-w-4xl mx-auto px-6 text-center" py="py-24 md:py-32">
        <span className="text-sage-600 uppercase tracking-widest text-xs font-bold mb-6 block">À propos</span>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-800 mb-8 leading-tight">
          L'art de vivre, <span className="italic text-stone-600">simplement.</span>
        </h1>
        <p className="text-stone-700 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Derrière Maison Mikasa se cache une envie profonde : remettre l'humain et son bien-être au cœur de l'habitat.
        </p>
      </Section>

      {/* Portrait & Story Section */}
      <Section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-1 md:order-1">
             <div className="aspect-[3/4] bg-stone-100 rounded-sm overflow-hidden shadow-xl">
               <img 
                 src="https://picsum.photos/id/64/800/1066" 
                 alt="Laurine Fourcherot - Architecte d'intérieur" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>
             {/* Decorative box */}
             <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border border-sage-200 -z-10 rounded-sm hidden md:block"></div>
          </div>

          {/* Text Column */}
          <div className="order-2 md:order-2 space-y-6 text-stone-700 leading-relaxed font-light">
            <div>
              <h2 className="font-serif text-3xl text-stone-800 mb-2">Moi, c'est Laurine</h2>
              <div className="w-12 h-0.5 bg-sage-400"></div>
            </div>
            
            <div className="pt-4 space-y-4">
              <p>
                Originaire de <strong>Baden</strong>, j’ai un lien particulier avec les maisons du Golfe du Morbihan. C’est ici que j’ai choisi de fonder <strong>Maison Mikasa</strong>, avec une conviction toute simple : votre maison ne doit pas seulement être "jolie", elle doit être votre véritable refuge.
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
            </div>
            
            <div className="flex items-center space-x-3 text-sage-700 pt-6 font-medium text-sm bg-stone-50 p-4 rounded-sm border border-stone-100">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span>Basée à Baden, j'interviens dans tout le Morbihan (56).</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy / Values */}
      <Section bgColor="bg-stone-50" className="max-w-7xl mx-auto px-6" py="py-20 md:py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-stone-800 mb-4">Mes valeurs</h2>
          <p className="text-stone-600 font-serif italic">Les piliers de chaque projet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {/* Value 1 */}
           <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
              <div className="w-14 h-14 mx-auto bg-sage-50 rounded-full flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-100 transition-colors">
                <Heart className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">Empathie & Écoute</h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                Chaque projet commence par une rencontre humaine. Je prends le temps de comprendre vos habitudes, vos goûts et vos contraintes pour créer un lieu qui vous correspond vraiment.
              </p>
           </div>
           
           {/* Value 2 */}
           <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
              <div className="w-14 h-14 mx-auto bg-sage-50 rounded-full flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-100 transition-colors">
                <Ruler className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">Fonctionnalité</h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                Le beau n'est rien sans l'utile. J'optimise chaque mètre carré pour fluidifier la circulation, maximiser les rangements et simplifier votre quotidien pour alléger votre charge mentale.
              </p>
           </div>

           {/* Value 3 */}
           <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
              <div className="w-14 h-14 mx-auto bg-sage-50 rounded-full flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-100 transition-colors">
                <Sparkles className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">Durabilité</h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                Je privilégie les matériaux naturels, le mobilier de qualité et les artisans locaux. Rénover, c'est aussi s'engager pour un habitat plus sain, pérenne et respectueux de l'environnement.
              </p>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default About;