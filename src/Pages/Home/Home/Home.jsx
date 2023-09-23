import React from 'react';
import Banner from '../Banner/Banner';
// import Gallery from '../Gallery/Gallery';
import ReactTabs from '../ReactTabs/ReactTabs';
// import ToyCollection from '../ToyCollection/ToyCollection';
// import BestToy from '../BestToy/BestToy';
import useTitle from '../../../UseTitle/UseTitle';
import Footer from '../../../Shared/Footer/Footer';

const Home = () => {
    useTitle('Home')
    return (
        <div >
          <Banner></Banner>
          {/* <Gallery></Gallery> */}
          {/* <ReactTabs></ReactTabs> */}
          {/* <BestToy></BestToy>
          <ToyCollection></ToyCollection> */}
          {/* <Footer></Footer> */}
          
        </div>
    );
};

export default Home;