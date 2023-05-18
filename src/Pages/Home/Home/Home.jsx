import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ReactTabs from '../ReactTabs/ReactTabs';
import ToyCollection from '../ToyCollection/ToyCollection';
import BestToy from '../BestToy/BestToy';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <ReactTabs></ReactTabs>
          <BestToy></BestToy>
          <ToyCollection></ToyCollection>
          
        </div>
    );
};

export default Home;