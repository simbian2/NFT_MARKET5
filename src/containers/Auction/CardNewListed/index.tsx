import Card from './Card';
import SectionHeading from '../../../components/SectionHeading';
import { Explore2Icon2 } from '../../../utils/allImgs';
import auctionCategoryAtom from '../../../atoms/auctionCategory';
import { useRecoilValue } from 'recoil';
import React from 'react';
import contracts from '../../../constants/contracts';
import data from '../../../data/data-containers/data-Authors';
import { IAuction } from '../../../types';
import { getTokenInfo } from '../../../utils';
import auctionKeywordAtom from '../../../atoms/auctionKeyword';

const CardNewListed = () => {
  const auctionCategory = useRecoilValue(auctionCategoryAtom);
  const auctionKeyword = useRecoilValue(auctionKeywordAtom);
  const [auctions, setAuctions] = React.useState<IAuction[]>([]);

  const getAuctions = async () => {
    const auctions = await contracts.nftMarketContract.methods
      .getOpenAuctions(auctionCategory, 1, auctionKeyword, 0, 10)
      .call();

    console.log('userAuctions', auctions);
    const openAuctions = auctions.resultAuctions;
    setAuctions(openAuctions);

    const promises = openAuctions.map(async (auction: IAuction) => {
      const tokenInfo = await getTokenInfo(parseInt(auction.tokenId));

      return {
        ...auction,
        tokenInfo,
      };
    });

    const data = await Promise.all(promises);
    console.log(data);
    setAuctions(data);
  };

  React.useEffect(() => {
    getAuctions();
  }, [auctionCategory, auctionKeyword]);

  return (
    <div className="col-lg-8">
      <SectionHeading
        img={Explore2Icon2}
        text="Auctions"
        title="Live Auctions"
      />

      {auctions.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};

export default CardNewListed;
