import * as React from 'react';
import { NavLink } from 'react-router-dom';
import contracts from '../../constants/contracts';
import addresses from '../../constants/addresses';
import { useWeb3React } from '@web3-react/core';
import { IAuction } from '../../types';

interface IMyAuctionItemProps extends IAuction {}

const MyAuctionItem: React.FunctionComponent<IMyAuctionItemProps> = (props) => {
  const { account } = useWeb3React();

  const onClickCancelAuction = async () => {
    const cancelAuction = await contracts.nftMarketContract.methods
      .cancelAuction(props.auctionId)
      .send({ from: account });

    console.log(cancelAuction);
  };

  const onClickSettleAuction = async () => {
    const cancelAuction = await contracts.nftMarketContract.methods
      .settleAuction(props.auctionId)
      .send({ from: account });

    console.log(cancelAuction);
  };

  return (
    <div className="col-xl-3 col-md-6 mb-xl-0">
      <div className="card card-blog card-plain">
        <div className="position-relative mb-30">
          <NavLink className="d-block border-radius-xl" to="">
            <img
              src={props.tokenInfo?.img}
              alt="img-blur-shadow"
              className="img-fluid shadow border-radius-xl"
              style={{ minWidth: '100%' }}
            />
          </NavLink>
        </div>
        <div className="item-cont card-body px-1 pb-0">
          <p className="text-gradient text-dark mb-2 text-sm">
            #{props.tokenInfo?.id}
          </p>
          <NavLink className="text-decoration-none" to="">
            <h5>{props.tokenInfo?.title}</h5>
          </NavLink>
          <p className="mb-4 text-sm">
            Currenct Price :{' '}
            <span className="gradient-text">
              {parseInt(props.currentPrice) / 10 ** 18} ETH
            </span>
          </p>
          <p className="mb-4 text-sm">
            Buy now Price :{' '}
            <span className="gradient-text">
              {parseInt(props.buyNowPrice) / 10 ** 18} ETH
            </span>
          </p>
          <div className="d-flex align-items-center justify-content-between">
            {props.auctionTypes.status === '1' && (
              <button
                className="btn btn-outline-primary btn-sm mb-0"
                onClick={onClickCancelAuction}
              >
                Cancel auction
              </button>
            )}
            {props.auctionTypes.status === '2' && (
              <button
                className="btn btn-outline-primary btn-sm mb-0"
                onClick={onClickSettleAuction}
              >
                Settle auction
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAuctionItem;
