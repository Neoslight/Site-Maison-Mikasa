import React from 'react';
import Introduction from './Introduction';
import About from './About';
import FeaturedProjects from './FeaturedProjects';
import Services from './Services';
import Testimonials from './Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <div id="home" className="absolute top-0 w-full h-0" />
      <Introduction />
      <About />
      <FeaturedProjects />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;