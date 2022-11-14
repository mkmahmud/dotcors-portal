import React from 'react';
import Appoientment_setion from './Appoientment_section/Appoientment_setion';
import Hero from './Hero/Hero';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <Services></Services>
          <Appoientment_setion></Appoientment_setion>
        </div>
    );
};

export default Home;