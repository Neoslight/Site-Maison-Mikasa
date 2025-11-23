import React, { useState } from 'react';
import Section from './Section';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    text: "Nous avons fait appel à Laurine pour notre projet d’aménagement d’une extension, existante mais à l’état brut. Laurine est très à l’écoute des souhaits et contraintes. Elle nous a soumis plusieurs plans possibles, ce qui nous permet de nous projeter. Ravis de son intervention, elle est souriante et efficace, nous recommandons !",
    author: "Dorothée et Benjamin",
    project: "Projet Saint-Donan (22)"
  },
  {
    id: 2,
    text: "Un accompagnement remarquable du début à la fin. Maison Mikasa a su transformer notre pièce de vie sombre en un espace lumineux et chaleureux. Les choix de matériaux sont justes et le suivi de chantier nous a enlevé un poids énorme. Merci pour tout.",
    author: "Sophie et Marc",
    project: "Rénovation Vannes (56)"
  },
  {
    id: 3,
    text: "Laurine a capté immédiatement l'ambiance que je recherchais. Ses propositions d'agencement ont optimisé chaque mètre carré de mon appartement. Je me sens enfin vraiment chez moi. Une professionnelle passionnée que je recommande les yeux fermés.",
    author: "Camille",
    project: "Appartement Arradon (56)"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <Section id="testimonials" className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 text-sage-300">
          <Quote className="w-10 h-10 rotate-180" />
        </div>

        <div className="relative w-full">
          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 p-2 text-stone-400 hover:text-sage-600 transition-colors z-10"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 p-2 text-stone-400 hover:text-sage-600 transition-colors z-10"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Content */}
          <div className="px-8 md:px-16 min-h-[200px] flex flex-col justify-center transition-opacity duration-500">
            <blockquote className="font-light text-stone-700 italic text-lg md:text-xl leading-relaxed mb-8">
              « {testimonialsData[currentIndex].text} »
            </blockquote>
            
            <div className="flex flex-col items-center space-y-1">
               <cite className="not-italic text-sm font-bold uppercase tracking-widest text-stone-800">
                {testimonialsData[currentIndex].author}
              </cite>
              <span className="text-xs text-sage-600 uppercase tracking-widest">
                {testimonialsData[currentIndex].project}
              </span>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex space-x-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-sage-600 w-4' : 'bg-stone-300 hover:bg-sage-400'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;