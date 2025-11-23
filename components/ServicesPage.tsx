
import React from 'react';
import Section from './Section';
import { Ruler, Palette, PenTool, LayoutTemplate, HardHat, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <Section bgColor="bg-stone-50" className="text-center" py="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-sage-600 uppercase tracking-widest text-xs font-bold mb-4 block">Offres & Services</span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">Nos Prestations</h1>
          <p className="text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            De la simple rénovation d'une pièce à la restructuration complète de votre habitat, Maison Mikasa vous accompagne à chaque étape. Découvrez nos deux expertises complémentaires.
          </p>
        </div>
      </Section>

      {/* Navigation Rapide */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-center space-x-8 py-4">
          <a href="#architecture-interieure" className="text-xs md:text-sm uppercase tracking-widest text-stone-500 hover:text-sage-600 font-medium">Architecture d'intérieur</a>
          <a href="#decoration" className="text-xs md:text-sm uppercase tracking-widest text-stone-500 hover:text-sage-600 font-medium">Décoration</a>
        </div>
      </div>

      {/* Architecture d'intérieur */}
      <div id="architecture-interieure" className="scroll-mt-32">
        <Section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <div className="flex items-center space-x-3 text-sage-600 mb-4">
                  <Ruler className="w-6 h-6" />
                  <span className="uppercase tracking-widest text-sm font-bold">Mission complète</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6">Architecture d'intérieur</h2>
                <div className="w-16 h-0.5 bg-sage-400 mb-6"></div>
                <p className="text-stone-700 font-light leading-relaxed text-lg">
                  Vous souhaitez repenser les volumes, modifier la structure, créer une extension ou rénover intégralement votre bien ? Cette prestation est faite pour vous.
                </p>
                <p className="text-stone-700 font-light leading-relaxed mt-4">
                  Nous travaillons sur la technique et l'esthétique pour transformer votre habitat en profondeur. Du premier coup de crayon à la réception du chantier, je suis votre interlocutrice unique.
                </p>
              </div>

              <div className="space-y-6 bg-stone-50 p-8 rounded-sm">
                <h3 className="font-serif text-xl text-stone-800">Le déroulé de la mission :</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <PenTool className="w-5 h-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-stone-800 font-medium">Étude de faisabilité & Esquisse</strong>
                      <p className="text-sm text-stone-600 font-light">Relevé de l'existant, propositions d'aménagement 2D/3D et estimation budgétaire.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <LayoutTemplate className="w-5 h-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-stone-800 font-medium">Dossier de Conception (APD)</strong>
                      <p className="text-sm text-stone-600 font-light">Plans techniques détaillés (électricité, plomberie), coupes, élévations et choix définitifs des matériaux.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <HardHat className="w-5 h-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-stone-800 font-medium">Suivi de chantier</strong>
                      <p className="text-sm text-stone-600 font-light">Consultation des entreprises, coordination des travaux, réunions hebdomadaires et réception.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative aspect-[4/5]">
              <div className="absolute inset-0 bg-sage-100 transform translate-x-4 translate-y-4 -z-10 rounded-sm"></div>
              <img 
                src="https://picsum.photos/id/120/800/1000" 
                alt="Chantier de rénovation" 
                className="w-full h-full object-cover rounded-sm shadow-md"
              />
            </div>
          </div>
        </Section>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="border-t border-gray-100"></div></div>

      {/* Décoration */}
      <div id="decoration" className="scroll-mt-32">
        <Section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 bg-stone-100 transform -translate-x-4 translate-y-4 -z-10 rounded-sm"></div>
              <img 
                src="https://picsum.photos/id/42/800/1000" 
                alt="Décoration d'intérieur" 
                className="w-full h-full object-cover rounded-sm shadow-md"
              />
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 text-sage-600 mb-4">
                  <Palette className="w-6 h-6" />
                  <span className="uppercase tracking-widest text-sm font-bold">Coaching & Ambiance</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6">Décoration d'intérieur</h2>
                <div className="w-16 h-0.5 bg-sage-400 mb-6"></div>
                <p className="text-stone-700 font-light leading-relaxed text-lg">
                  Vous ne souhaitez pas toucher à la structure, mais vous avez besoin de créer une atmosphère ? D'harmoniser les couleurs, de choisir le bon mobilier ou de repenser l'éclairage ?
                </p>
                <p className="text-stone-700 font-light leading-relaxed mt-4">
                  Cette prestation s'adapte à vos besoins : du simple conseil à domicile (Coaching Déco) au dossier complet de décoration pour une pièce ou toute la maison.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white border border-gray-100 p-6 rounded-sm shadow-sm hover:border-sage-200 transition-colors">
                    <h4 className="font-serif text-lg text-stone-800 mb-2">Coaching Déco</h4>
                    <span className="text-xs uppercase tracking-widest text-sage-600 mb-3 block">Visite conseil (2h)</span>
                    <p className="text-sm text-stone-600 font-light mb-4">
                      Un rendez-vous sur place pour débloquer vos problématiques, valider des choix de couleurs ou d'agencement.
                    </p>
                    <ul className="text-sm text-stone-700 space-y-2">
                       <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-sage-500 mr-2"/> Compte-rendu oral</li>
                       <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-sage-500 mr-2"/> Références fournisseurs</li>
                    </ul>
                 </div>

                 <div className="bg-white border border-gray-100 p-6 rounded-sm shadow-sm hover:border-sage-200 transition-colors">
                    <h4 className="font-serif text-lg text-stone-800 mb-2">Book Déco</h4>
                    <span className="text-xs uppercase tracking-widest text-sage-600 mb-3 block">Étude complète</span>
                    <p className="text-sm text-stone-600 font-light mb-4">
                      Un dossier complet pour visualiser votre futur intérieur et réaliser vos achats sereinement.
                    </p>
                    <ul className="text-sm text-stone-700 space-y-2">
                       <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-sage-500 mr-2"/> Planche d'ambiance</li>
                       <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-sage-500 mr-2"/> Visuels 3D photoréalistes</li>
                       <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-sage-500 mr-2"/> Shopping list détaillée</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* CTA Section */}
      <Section bgColor="bg-stone-800" className="text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl mb-6">Vous hésitez entre ces prestations ?</h2>
          <p className="text-stone-300 font-light text-lg mb-8">
            Chaque projet est unique. Contactez-nous pour discuter de vos besoins, nous vous orienterons vers la solution la plus adaptée.
          </p>
          <a href="#contact" className="inline-flex items-center bg-white text-stone-900 px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-sage-100 transition-colors rounded-sm">
            Demander un devis <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;
