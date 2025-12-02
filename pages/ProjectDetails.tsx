import React, { useEffect, useState, useCallback, useRef } from 'react';
import Section from '../components/ui/Section';
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Ruler, Clock, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailsProps {
  id: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id }) => {
  const project = projectsData.find(p => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  // Navigation Logic
  const currentIndex = projectsData.findIndex(p => p.id === id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];

  useEffect(() => {
    // Reset scroll when project ID changes
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  // Lightbox Handlers
  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setIsZoomed(false);
    document.body.style.overflow = 'auto';
  }, []);

  const nextPhoto = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!project) return;
    setIsZoomed(false);
    setPhotoIndex((prev) => (prev + 1) % project.gallery.length);
  }, [project]);

  const prevPhoto = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!project) return;
    setIsZoomed(false);
    setPhotoIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  }, [project]);

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isZoomed || !imageRef.current) return;
    
    // Calculate mouse position relative to the image container
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setMousePos({ x, y });
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (!isZoomed) { // Only navigate if not zoomed to avoid conflict
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, isZoomed, nextPhoto, prevPhoto, closeLightbox]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Projet introuvable</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Top Controls */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 pointer-events-none">
             <div className="text-white/80 text-sm font-medium tracking-widest pointer-events-auto bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">
               {photoIndex + 1} / {project.gallery.length}
             </div>
             <button 
               className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all pointer-events-auto"
               onClick={closeLightbox}
               aria-label="Fermer"
             >
               <X className="w-8 h-8" />
             </button>
          </div>

          {/* Navigation Buttons (Hidden if zoomed to prevent accidental clicks) */}
          {!isZoomed && (
            <>
              <button 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-4 z-50 hover:bg-white/10 rounded-full group"
                onClick={prevPhoto}
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-4 z-50 hover:bg-white/10 rounded-full group"
                onClick={nextPhoto}
                aria-label="Image suivante"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}

          {/* Image Container */}
          <div 
            className={`
              relative w-full h-full flex items-center justify-center p-4 md:p-12 transition-all duration-300
              ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}
            `}
            onClick={toggleZoom}
            onMouseMove={handleMouseMove}
          >
            <img 
              ref={imageRef}
              src={project.gallery[photoIndex]} 
              alt={`Vue ${photoIndex + 1}`}
              className="max-w-full max-h-full object-contain transition-transform duration-200 ease-out shadow-2xl"
              style={isZoomed ? {
                transform: 'scale(2.5)',
                transformOrigin: `${mousePos.x}% ${mousePos.y}%`
              } : {
                transform: 'scale(1)',
                transformOrigin: 'center'
              }}
            />
          </div>
          
          {/* Mobile Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-widest md:hidden pointer-events-none">
            {isZoomed ? 'Glisser pour explorer' : 'Toucher pour zoomer'}
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40 hidden xl:block">
        <a href="#realisations" className="flex items-center text-xs uppercase tracking-widest text-stone-500 hover:text-sage-600 transition-all bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 hover:shadow-md hover:-translate-x-1">
          <ArrowLeft className="w-3 h-3 mr-2" /> Retour aux réalisations
        </a>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full h-full object-cover animate-in fade-in duration-700"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 fade-in-section is-visible">
            <span className="uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-4 block opacity-90">{project.category}</span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 shadow-sm">{project.title}</h1>
            <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-light opacity-90">
               <MapPin className="w-4 h-4" /> 
               <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-stone-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start text-sage-600 text-xs uppercase tracking-widest font-bold">
                <MapPin className="w-3 h-3 mr-2" /> Lieu
              </div>
              <p className="text-stone-800 font-serif">{project.location}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start text-sage-600 text-xs uppercase tracking-widest font-bold">
                <Calendar className="w-3 h-3 mr-2" /> Année
              </div>
              <p className="text-stone-800 font-serif">{project.year}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start text-sage-600 text-xs uppercase tracking-widest font-bold">
                <Ruler className="w-3 h-3 mr-2" /> Surface
              </div>
              <p className="text-stone-800 font-serif">{project.surface}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start text-sage-600 text-xs uppercase tracking-widest font-bold">
                <Clock className="w-3 h-3 mr-2" /> Durée
              </div>
              <p className="text-stone-800 font-serif">{project.duration}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-serif text-2xl text-stone-800 mb-6">Le Projet</h2>
              <p className="text-stone-700 font-light leading-relaxed text-lg whitespace-pre-line">
                {project.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
               <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-4">Le Défi</h3>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">
                    {project.challenge}
                  </p>
               </div>
               <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-4">La Solution</h3>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">
                    {project.solution}
                  </p>
               </div>
            </div>
          </div>

          {/* Sticky Sidebar (Contact CTA) */}
          <div className="lg:col-span-4">
             <div className="sticky top-32 bg-stone-50 p-8 rounded-sm border border-stone-100">
               <h3 className="font-serif text-xl text-stone-800 mb-4">Un projet similaire ?</h3>
               <p className="text-stone-600 font-light text-sm mb-6">
                 Vous avez un projet de rénovation ou de décoration ? Discutons-en ensemble.
               </p>
               <a 
                 href="#contact"
                 className="block w-full text-center bg-sage-600 text-white text-xs uppercase tracking-widest py-3 px-6 hover:bg-sage-700 transition-all duration-300 rounded-sm hover:-translate-y-1 hover:shadow-lg active:translate-y-0 shadow-sm"
               >
                 Contactez-nous
               </a>
             </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <Section className="max-w-7xl mx-auto px-6 pb-24">
         <h2 className="font-serif text-3xl text-stone-800 mb-12 text-center">Galerie photos</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {project.gallery.map((img, index) => (
              <div 
                key={index} 
                onClick={() => openLightbox(index)}
                className={`
                  relative overflow-hidden rounded-sm cursor-zoom-in group shadow-sm hover:shadow-xl transition-all duration-500
                  ${index % 3 === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'}
                `}
              >
                <img 
                  src={img} 
                  alt={`Vue ${index + 1} - ${project.title}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center shadow-lg">
                      <ZoomIn className="w-4 h-4 text-stone-800 mr-2" />
                      <span className="text-xs uppercase tracking-widest text-stone-800 font-bold">Agrandir</span>
                   </div>
                </div>
              </div>
            ))}
         </div>
      </Section>

      {/* Navigation Footer */}
      <div className="border-t border-gray-100">
        <div className="grid grid-cols-2 divide-x divide-gray-100">
          <a 
            href={`#project-${prevProject.id}`}
            className="group block p-8 md:p-12 hover:bg-stone-50 transition-colors text-right"
          >
             <span className="block text-xs uppercase tracking-widest text-stone-400 mb-2 group-hover:text-sage-600 transition-colors">Projet Précédent</span>
             <span className="font-serif text-lg md:text-2xl text-stone-800 group-hover:translate-x-1 inline-block transition-transform duration-300">{prevProject.title}</span>
          </a>
          <a 
            href={`#project-${nextProject.id}`}
            className="group block p-8 md:p-12 hover:bg-stone-50 transition-colors text-left"
          >
             <span className="block text-xs uppercase tracking-widest text-stone-400 mb-2 group-hover:text-sage-600 transition-colors">Projet Suivant</span>
             <span className="font-serif text-lg md:text-2xl text-stone-800 group-hover:-translate-x-1 inline-block transition-transform duration-300">{nextProject.title}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;