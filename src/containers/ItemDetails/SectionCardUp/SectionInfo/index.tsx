import { NavLink, useParams } from 'react-router-dom';
import data from '../../../../data/data-components/data-SecNewListed.js';
import { useRecoilValue } from 'recoil';
import selectedAuctionAtom from '../../../../atoms/selectedAuction';
import BigNumber from 'bignumber.js';
import contracts from '../../../../constants/contracts';
import { useWeb3React } from '@web3-react/core';

function SectionInfo({ img }: { img: any }) {
  const { account } = useWeb3React();
  const { id }: { id?: string } = useParams();

  const item = data[parseInt(id!) - 1];

  const selectedAuction = useRecoilValue(selectedAuctionAtom);

  const onBuyNow = async () => {
    if (selectedAuction) {
      const buyNowPrice = new BigNumber(parseInt(selectedAuction.buyNowPrice))
        .div(new BigNumber(10).pow(18))
        .toNumber();

      try {
        await contracts.nftMarketContract.methods
          .placeBid(
            selectedAuction?.auctionId,
            new BigNumber(buyNowPrice)
              .times(new BigNumber(10).pow(18))
              .toString()
          )
          .send({
            from: account,
            gas: 300000,
            value: new BigNumber(buyNowPrice * 0.025 + buyNowPrice)
              .times(new BigNumber(10).pow(18))
              .toString(),
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="col-lg-12">
      <div className="d-flex flex-column h-100">
        <p className="mb-1">#{selectedAuction?.tokenId}</p>
        <h4 className="font-weight-bolder">
          {selectedAuction?.tokenInfo?.title}
        </h4>
        <p>{selectedAuction?.tokenInfo?.description}</p>
        <p className="text-bold mb-0">
          Currenct Price :{' '}
          <span className="gradient-text text-lg">
            {(selectedAuction ? parseInt(selectedAuction.currentPrice) : 0) /
              10 ** 18}{' '}
            ETH
          </span>
        </p>
        <p className="text-bold mb-30">
          Buy now Price :{' '}
          <span className="gradient-text text-lg">
            {(selectedAuction ? parseInt(selectedAuction.buyNowPrice) : 0) /
              10 ** 18}{' '}
            ETH
          </span>
        </p>

        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                <strong className="text-dark mr-10">Item Artist: </strong>
                {item.itemArtist}
              </li>
              <li className="list-group-item border-0 ps-0 text-sm">
                <strong className="text-dark mr-10">Created:</strong>{' '}
                {item.created}
              </li>
              <li className="list-group-item border-0 ps-0 text-sm">
                <strong className="text-dark">Item Size:</strong>{' '}
                {item.itemSize}
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item border-0 d-flex align-items-center px-0">
                {/* <NavLink to="/profile" className="avatar v2 me-3">
	                <span className="author-num">1</span>
	                <img src={img} alt="kal" className="border-radius-lg shadow" />
	              </NavLink> */}
                <div className="d-flex align-items-start flex-column justify-content-center">
                  <NavLink to="/">
                    <h6 className="author-name">{item.artist}</h6>
                  </NavLink>
                  <NavLink className="btn btn-link autho-link" to="/">
                    {item.artistId}
                  </NavLink>
                </div>
              </li>
              {account && selectedAuction?.seller !== account && (
                <li className="list-group-item border-0 d-flex align-items-center px-0">
                  <button
                    type="button"
                    className="btn bg-gradient-primary fs-6 fw-bold w-100 mb-0"
                    onClick={onBuyNow}
                  >
                    Buy now
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionInfo;
