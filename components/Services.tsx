
import React, { useState } from 'react';
import Section from './Section';
import { ArrowRight, Check, HeartHandshake, Leaf, Users, Plus, Minus } from 'lucide-react';

const promisesData = [
  {
    id: '1',
    title: 'Quotidien amélioré',
    icon: HeartHandshake,
    content: "Un intérieur pensé pour vous simplifier la vie, réduire votre charge mentale et augmenter votre bien-être au quotidien. Chaque espace est optimisé pour servir vos habitudes."
  },
  {
    id: '2',
    title: 'Investissement durable',
    icon: Leaf,
    content: "Des matériaux de qualité, des choix intemporels et des solutions éco-responsables pour un intérieur qui dure dans le temps et respecte l'environnement."
  },
  {
    id: '3',
    title: 'Chantier serein',
    icon: Users,
    content: "Un accompagnement complet et rigoureux. Je gère les artisans, le planning et les imprévus pour que vous viviez vos travaux en toute tranquillité."
  }
];

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* 1. Promises Section (Moved to top) */}
      <Section id="promises" bgColor="bg-stone-50" className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-stone-800 text-opacity-80">Les 3 promesses de Maison Mikasa</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promisesData.map((item) => {
              const Icon = item.icon;
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="flex flex-col items-center">
                  <div className="mb-6 text-sage-600">
                    <Icon className="w-12 h-12" strokeWidth={1.5} />
                  </div>
                  
                  <button 
                    onClick={() => toggle(item.id)}
                    className="w-full bg-white border border-gray-100 p-4 rounded-sm shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-stone-800 text-sm md:text-base group-hover:text-sage-700 transition-colors">
                        {item.id}. {item.title}
                      </span>
                      <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-sage-600' : 'text-stone-500'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>
                    
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                       <div className="overflow-hidden">
                         <p className="text-left text-sm text-stone-700 font-light leading-relaxed">
                           {item.content}
                         </p>
                       </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
      </Section>

      {/* 2. Services List (Prestations) */}
      <Section id="services" className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-stone-800 mb-4">Les prestations</h2>
        <p className="text-stone-600 mb-12 italic font-serif">Découvrez les offres de Maison Mikasa :</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          <a href="#prestations" className="group flex flex-col items-center p-8 border border-gray-100 hover:border-sage-200 hover:shadow-lg transition-all rounded-sm bg-white w-full md:w-64">
            <span className="uppercase tracking-widest text-sm text-stone-700 group-hover:text-sage-700 mb-2">Architecture d'intérieur</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#prestations" className="group flex flex-col items-center p-8 border border-gray-100 hover:border-sage-200 hover:shadow-lg transition-all rounded-sm bg-white w-full md:w-64">
            <span className="uppercase tracking-widest text-sm text-stone-700 group-hover:text-sage-700 mb-2">Décoration d'intérieur</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Section>

      {/* 3. Why Us Section (Minus promises) */}
      <Section id="why-us" bgColor="bg-stone-50" className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             {/* Text Content */}
             <div className="order-2 lg:order-1">
                <h3 className="font-serif text-3xl text-stone-800 mb-6">Pourquoi faire appel à Maison Mikasa ?</h3>
                <p className="font-serif italic text-stone-600 text-lg mb-8">
                    Investir dans son intérieur, c'est investir durablement dans son bien-être.
                </p>
                
                <div className="space-y-6">
                   <p className="text-stone-700 font-light leading-relaxed mb-6">
                     Que ce soit pour votre résidence principale ou secondaire, je vous accompagne pour transformer votre habitat en un lieu ressourçant, esthétique et parfaitement optimisé.
                   </p>

                   <ul className="space-y-4">
                      {[
                          "Optimisation des volumes pour un gain de place et de fluidité",
                          "Valorisation financière et esthétique de votre patrimoine immobilier",
                          "Sérénité absolue grâce à la maîtrise du budget et du planning",
                          "Un intérieur unique qui reflète votre personnalité et vos besoins",
                          "Bien-être au quotidien : apaisement, clarté et confort de vie"
                      ].map((item, index) => (
                          <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-200 flex items-center justify-center text-sage-700 mr-4 mt-0.5">
                                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                              </span>
                              <span className="text-stone-700 font-light">{item}</span>
                          </li>
                      ))}
                   </ul>
                </div>
             </div>

             {/* Image */}
             <div className="order-1 lg:order-2">
               <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-lg group">
                  <div className="absolute inset-0 border-[12px] border-white/30 z-10 pointer-events-none"></div>
                  <img 
                    src="https://picsum.photos/id/366/800/1000" 
                    alt="Intérieur Mikasa" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
               </div>
             </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
