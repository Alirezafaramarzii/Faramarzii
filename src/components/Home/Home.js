import React from 'react';


// component
import Introduction from './Introduction/Introduction';
import Product from './Product/Product';
import Profile from './Profile/Profile';
import Certificates from './Certificates/Certificates';
import Slider from './Slider/Slider';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Introduction />
            <Profile />
            <Skills />
            <Product />
            <Certificates />
            <Slider />
        </div>
    );
};

export default Home;