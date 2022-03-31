import React from 'react';


// img
import Introduction from './Introduction/Introduction';
import Product from './Product/Product';
import Profile from './Profile/Profile';

const Home = () => {
    return (
        <div>
            <Introduction />
            <Profile />
            <Product/>
        </div>
    );
};

export default Home;