import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Services></Services>
           <Explore></Explore>
        </div>
    );
};

export default Home;