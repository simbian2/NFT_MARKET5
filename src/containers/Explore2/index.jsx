import { useEffect } from 'react';
import {
  data1,
  data2,
  data3,
  data4,
} from '../../data/data-containers/data-Explore2.js';
import { getMainWidth, handleTitle } from '../../utils';

import Navbar from '../../layouts/Head/Navbar';

import Breadcrumb from '../../components/Breadcrumb';

import CardNewListed from './CardNewListed';
import CardFilter from './CardFilter';
import CardTopSelling from './CardTopSelling';
import CardIco from './CardIco';
import './Explore2.css';

const Explore2Container = () => {
  useEffect(() => {
    // document.title = 'Explore2'
    handleTitle('Explore2');
    getMainWidth();
  }, []);

  return (
    <>
      <main className="main-content mt-1 border-radius-lg">
        <Navbar />

        <div className="container-fluid">
          <div className="page-header breadcrumb-header min-height-300 border-radius-xl mt-4 mb-30 Explore2IMG">
            <Breadcrumb
              text1="About New Items"
              text2="It is time to start your own new experience on NFT Store"
            />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <CardNewListed data={data1} />

            <div className="col-lg-4">
              <CardFilter data3={data3} data4={data4} />

              <CardTopSelling data={data2} />
            </div>
          </div>
        </div>

        <div className="container-fluid"></div>

        <div className="container-fluid">
          <CardIco />
        </div>
      </main>
    </>
  );
};

export default Explore2Container;
