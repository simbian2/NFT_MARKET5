import { NavLink } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { useRecoilValue } from 'recoil';
import selectedAuctionAtom from '../../../../atoms/selectedAuction';
import contracts from '../../../../constants/contracts';
import React from 'react';
import BigNumber from 'bignumber.js';
import web3 from '../../../../connection/web3';

function SectionForm() {
  const { account } = useWeb3React();

  const [bidPrice, setBidPrice] = React.useState<number>(0);
  const selectedAuction = useRecoilValue(selectedAuctionAtom);

  const calcedBidPrice = React.useMemo(
    () => new BigNumber(bidPrice).times(new BigNumber(10).pow(18)),
    [bidPrice]
  );

  const onPlaceBid = async () => {
    const gas = await web3.eth.getGasPrice();

    if (selectedAuction) {
      const currentPrice = new BigNumber(parseInt(selectedAuction.currentPrice))
        .div(new BigNumber(10).pow(18))
        .toNumber();
      if (currentPrice > bidPrice) {
        alert('It should be higher than the current bid amount');
        return;
      }

      try {
        await contracts.nftMarketContract.methods
          .placeBid(selectedAuction?.auctionId, calcedBidPrice)
          .send({
            from: account,
            gas: 300000,
            value: new BigNumber(bidPrice * 0.025 + bidPrice).times(
              new BigNumber(10).pow(18)
            ),
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="col-lg-6 mt-s">
      <div className="d-flex flex-column h-100">
        <h5 className="font-weight-bolder">Place a Bid</h5>
        <p>
          From colors, cards, typography to complex elements, you will find the.
        </p>
        <form action="post">
          <label>Bid Amount</label>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              value={bidPrice}
              onChange={(e) => setBidPrice(parseFloat(e.target.value))}
              placeholder="Your Bid"
            />
          </div>

          <div className="text-center">
            {account ? (
              selectedAuction?.seller !== account ? (
                <button
                  type="button"
                  className="btn bg-gradient-primary fs-6 fw-bold w-100 mb-0"
                  onClick={onPlaceBid}
                >
                  Place Bid
                </button>
              ) : (
                <div></div>
              )
            ) : (
              <NavLink
                to="/connectwallet"
                className="btn bg-gradient-primary fs-6 fw-bold w-100 mb-0"
              >
                Connect wallet
              </NavLink>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SectionForm;
