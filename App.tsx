
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetails from './components/ProjectDetails';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

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
        hash === '#about-page' || 
        hash === '#home' || 
        (hash.startsWith('#realisations') && !hash.includes('project-')) ||
        hash === '#prestations' ||
        hash === '#contact' ||
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
  if (route === '#about-page') {
    ContentComponent = <AboutPage />;
  } else if (route === '#prestations' || route === '#architecture-interieure' || route === '#decoration') {
    ContentComponent = <ServicesPage />;
  } else if (route === '#realisations-maison') {
    ContentComponent = <ProjectsPage initialType="Maison" />;
  } else if (route === '#realisations-appartement') {
    ContentComponent = <ProjectsPage initialType="Appartement" />;
  } else if (route === '#realisations-professionnel') {
    ContentComponent = <ProjectsPage initialType="Professionnel" />;
  } else if (route === '#realisations' || route === '#projects') { 
    ContentComponent = <ProjectsPage initialType="Tous" />;
  } else if (route.startsWith('#project-')) {
    const projectId = route.replace('#project-', '');
    ContentComponent = <ProjectDetails id={projectId} />;
  } else if (route === '#contact') {
    ContentComponent = <ContactPage />;
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
