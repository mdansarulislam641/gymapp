import React from 'react';
import LatestShop from '../LatestShop/LatestShop';
import HeroArea from '../HeroArea';
import Gallery from '../Gallery';

const Home = () => {
    return (
        <div>
           <HeroArea></HeroArea>
           <LatestShop></LatestShop>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;