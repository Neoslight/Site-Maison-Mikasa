
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
      const isProject = hash.startsWith('#project-');
      
      // Scroll to top for page transitions unless it's an internal anchor or project detail
      if (
        hash === '#about-page' || 
        hash === '#home' || 
        (hash.startsWith('#realisations') && !hash.includes('project-')) ||
        hash === '#prestations' ||
        hash === '#contact' ||
        hash === ''
      ) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      } 
      // Handle scrolling to internal anchors explicitly if needed after render
      else if (isInternalServiceLink) {
         // Allow a small tick for the component to potentially mount/render if it wasn't there
         setTimeout(() => {
             const element = document.querySelector(hash);
             if (element) {
                 element.scrollIntoView({ behavior: 'smooth' });
             }
         }, 100);
      }
    };

    // Handle initial load scroll
    if (window.location.hash) {
       // Timeout to allow layout to settle
       setTimeout(() => {
          // If accessing a specific section anchor directly on load
          if(!window.location.hash.startsWith('#project-')) {
             const element = document.querySelector(window.location.hash);
             if (element) {
                element.scrollIntoView();
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
  } else if (route === '#realisations' || route === '#projects') { // Keep old route as fallback
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