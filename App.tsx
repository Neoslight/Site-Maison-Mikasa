import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setRoute(hash);
      
      const isInternalServiceLink = hash === '#architecture-interieure' || hash === '#decoration';
      const isProjectDetail = hash.startsWith('#project-');
      
      // Routes that act as "Pages" should scroll to top instantly
      const isPageChange = 
        hash.startsWith('#about-page') || 
        hash.startsWith('#home') || 
        (hash.startsWith('#realisations') && !hash.includes('project-')) ||
        hash.startsWith('#prestations') ||
        hash.startsWith('#contact') ||
        hash === '';

      if (isPageChange) {
        // Force scroll to top instantly for page changes
        window.scrollTo({ top: 0, behavior: 'auto' });
      } 
      // Internal anchors or specific content
      else if (isInternalServiceLink) {
         // Allow the DOM to update first, then scroll smoothly
         setTimeout(() => {
             const element = document.querySelector(hash);
             if (element) {
                 element.scrollIntoView({ behavior: 'smooth' });
             }
         }, 50);
      }
      // Project Details should start at top
      else if (isProjectDetail) {
         window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    // Handle initial load scroll
    if (window.location.hash) {
       setTimeout(() => {
          if(!window.location.hash.startsWith('#project-')) {
             const element = document.querySelector(window.location.hash);
             if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
             } else {
                 window.scrollTo(0, 0);
             }
          } else {
              window.scrollTo(0, 0);
          }
       }, 100);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  let ContentComponent;
  
  // Routing Logic
  if (route.startsWith('#about-page')) {
    ContentComponent = <About />;
  } else if (route.startsWith('#prestations') || route.startsWith('#architecture-interieure') || route.startsWith('#decoration')) {
    ContentComponent = <Services />;
  } else if (route.startsWith('#realisations-maison')) {
    ContentComponent = <Projects initialType="Maison" />;
  } else if (route.startsWith('#realisations-appartement')) {
    ContentComponent = <Projects initialType="Appartement" />;
  } else if (route.startsWith('#realisations-professionnel')) {
    ContentComponent = <Projects initialType="Professionnel" />;
  } else if (route.startsWith('#realisations') || route.startsWith('#projects')) { 
    ContentComponent = <Projects initialType="Tous" />;
  } else if (route.startsWith('#project-')) {
    const projectId = route.replace('#project-', '').split('?')[0]; // Strip params for finding project
    ContentComponent = <ProjectDetails id={projectId} />;
  } else if (route.startsWith('#contact')) {
    ContentComponent = <Contact />;
  } else {
    // Default to Home for #home or undefined routes
    ContentComponent = <Home />;
  }

  return (
    <Layout>
      {ContentComponent}
    </Layout>
  );
};

export default App;