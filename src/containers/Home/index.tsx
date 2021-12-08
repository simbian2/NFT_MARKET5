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
import { useRecoilState } from 'recoil';
import auctionsAtom from '../../atoms/auctions';
import itemsAtom from '../../atoms/items';
import contracts from '../../constants/contracts';
import React from 'react';
import { IAuction } from '../../types';

const HomeContainer = () => {
  useEffect(() => {
    // document.title = 'Dashboard'
    handleTitle('Dashboard');
    getMainWidth();
  }, []);

  const [auctions, setAuctions] = useRecoilState(auctionsAtom);
  const [items, setItems] = useRecoilState(itemsAtom);

  // const getAuctions = async () => {
  //   const userAuctions = await contracts.nftMarketContract.methods
  //     .getUserAuctions(account)
  //     .call();

  //   console.log('userAuctions', userAuctions);

  //   const promises = userAuctions.map(async (auction: IAuction) => {
  //     console.log('status', auction.auctionTypes.status);
  //     if (auction.auctionTypes.status === '1') {
  //       const tokenInfo = await getTokenInfo(parseInt(auction['tokenId']));

  //       return {
  //         ...auction,
  //         tokenInfo,
  //       };
  //     } else {
  //       return null;
  //     }
  //   });

  //   const data = await Promise.all(promises);

  //   setAuctions(data.filter((el) => el != null));
  // };

  const getItems = async () => {
    let datas: any = [];
    let i = 0;

    while (true) {
      i++;
      try {
        const hash = await contracts.nftContract.methods.tokenURI(i).call();
        const response = await fetch(
          `https://ipfs.infura.io/ipfs/${hash}?clear`
        );

        const metadata = await response.json();
        const isApproved = await contracts.nftContract.methods
          .getApproved(i)
          .call();
        const owner = await contracts.nftContract.methods.ownerOf(i).call();

        datas = [
          {
            id: i,
            title: metadata.properties.name.description,
            description: metadata.properties.description.description,
            img: `https://ipfs.infura.io/ipfs/${metadata.properties.image.description}`,
            isApproved,
            owner,
          },
          ...datas,
        ];
      } catch (_) {
        break;
      }
    }

    console.log('datas', datas);
    setItems(datas);
  };

  const getTokenInfo = async (id: number) => {
    const hash = await contracts.nftContract.methods.tokenURI(id).call();
    const response = await fetch(`https://ipfs.infura.io/ipfs/${hash}?clear`);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const metadata = await response.json();
    const isApproved = await contracts.nftContract.methods
      .getApproved(id)
      .call();
    const owner = await contracts.nftContract.methods.ownerOf(id).call();

    return {
      id,
      title: metadata.properties.name.description,
      description: metadata.properties.description.description,
      img: `https://ipfs.infura.io/ipfs/${metadata.properties.image.description}`,
      isApproved,
      owner,
    };
  };

  React.useEffect(() => {
    getItems();
    // getAuctions();
  }, []);

  return (
    <>
      <main className="main-content mt-1 border-radius-lg">
        <Navbar />
        <MainHeader />

        {/* <SectionHeading
          img={HomeIcon1}
          text="Our Top Creatives"
          title="Top Selling Authors"
        />

        <SectionCard data1={data1} data2={data2} data3={data3} /> */}

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
