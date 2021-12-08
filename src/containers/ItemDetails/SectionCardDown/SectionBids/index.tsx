import { useParams } from 'react-router-dom';
import data from '../../../../data/data-components/data-SecNewListed.js';
import ListTag from './ListTag';
import { useRecoilValue } from 'recoil';
import selectedAuctionAtom from '../../../../atoms/selectedAuction';
import React from 'react';
import contracts from '../../../../constants/contracts';
import { IBid } from '../../../../types/index';

function SectionBids() {
  const { id }: { id?: string } = useParams();
  const item = data[parseInt(id!) - 1];

  const [bids, setBids] = React.useState<IBid[]>([]);

  const selectedAuction = useRecoilValue(selectedAuctionAtom);

  const getBids = async () => {
    if (selectedAuction) {
      const result = await contracts.nftMarketContract.methods
        .getBids(selectedAuction.auctionId)
        .call();

      console.log(result);
      let bids: IBid[] = [];
      result.map((a: any) => {
        bids = [
          ...bids,
          {
            bidId: a['bidId'],
            bidder: a['bidder'],
            price: a['price'],
            timestamp: a['timestamp'],
          },
        ];
      });
      console.log(bids);
      setBids(bids);
      // setBids(result);
    }
  };

  React.useEffect(() => {
    getBids();
  }, [selectedAuction]);

  return (
    <div className="col-lg-6">
      <div className="card mb-30 rounded-3">
        <div className="card-body p-3">
          <h6 className="mb-0">Latest Bids</h6>
          <ul className="dropdown-menu relative dropdown-menu-end show border-0">
            {bids.map((item, i) => (
              <ListTag key={i} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionBids;
