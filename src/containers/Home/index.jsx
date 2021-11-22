import { useEffect } from 'react';
import { getMainWidth, handleTitle } from '../../utils';
import { data1, data2, data3 } from '../../data/data-containers/data-Home.js';
import { HomeIcon1, HomeIcon2, HomeIcon3 } from '../../utils/allImgs';

// import {Fluid1 , Fluid2} from './Fluid';
import Navbar from '../../layouts/Head/Navbar';
import MainHeader from './MainHeader';
import SectionCard from './SectionCard';

import SectionHeading from '../../components/SectionHeading';
import SecNewListed from '../../components/SecNewListed';
import SecLiveAuctions from '../../components/SecLiveAuctions';

const HomeContainer = () => {
  useEffect(() => {
    // document.title = 'Dashboard'
    handleTitle('Dashboard');
    getMainWidth();
  }, []);

  return (
    <>
      <main className="main-content mt-1 border-radius-lg">
        <Navbar />
        <MainHeader />

        <SectionHeading
          img={HomeIcon1}
          text="Our Top Creatives"
          title="Top Selling Authors"
        />

        <SectionCard data1={data1} data2={data2} data3={data3} />

        <SectionHeading
          img={HomeIcon2}
          text="Latest Items"
          title="New Listed Items"
        />

        <SecNewListed />

        <SectionHeading
          img={HomeIcon3}
          text="Hot Auctions"
          title="Live Auctions"
        />

        <SecLiveAuctions />
      </main>
    </>
  );
};

export default HomeContainer;
