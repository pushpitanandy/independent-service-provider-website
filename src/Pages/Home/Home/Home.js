import React from 'react';
import Banner from '../Banner/Banner';
import ProviderInfo from '../ProviderInfo/ProviderInfo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ProviderInfo></ProviderInfo>
        </div>
    );
};

export default Home;