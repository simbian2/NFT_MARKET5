import { useEffect } from 'react';
import { getMainWidth, handleTitle } from '../../utils';

import { data1, data2 } from '../../data/data-containers/data-ItemDetails.js';

import Navbar from '../../layouts/Head/Navbar';
import Breadcrumb from '../../components/Breadcrumb';

import {
  ItemDetailsitemDetails,
  ItemDetailsTeam2,
  ItemDetailsVisuals,
} from '../../utils/allImgs';

import CardImg from './CardImg';
import SectionCardUp from './SectionCardUp';
import SectionCardDown from './SectionCardDown';
import './ItemDetails.css';

const ItemDetailsContainer = () => {
  useEffect(() => {
    // document.title = 'ItemDetails'
    handleTitle('ItemDetails');
    getMainWidth();
  }, []);

  return (
    <>
      <main className="main-content mt-1 border-radius-lg">
        <Navbar />

        <div className="container-fluid">
          <div className="page-header breadcrumb-header min-height-300 border-radius-xl mt-4 mb-30 ItemDetailsIMG">
            <Breadcrumb
              text1="Item Details"
              text2={`Upload your own artwork the world has been\nwaiting for.`}
            />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <CardImg img={ItemDetailsitemDetails} />
            <div className="col-lg-7">
              <SectionCardUp
                img1={ItemDetailsTeam2}
                img2={ItemDetailsVisuals}
              />

              <div className="row">
                <SectionCardDown data1={data1} data2={data2} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ItemDetailsContainer;
