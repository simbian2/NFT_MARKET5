import * as React from 'react';
import { NavLink } from 'react-router-dom';
import contracts from '../../constants/contracts';
import addresses from '../../constants/addresses';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from '../../connector/index';
import Input from '../../containers/CreateItem/CardForm/Input';
import BigNumber from 'bignumber.js';
import { useRecoilState } from 'recoil';
import isApprovedAtom from '../../atoms/isApproved';

interface IMyItemProps {
  id: number;
  title: string;
  description: string;
  img: string;
  owner: string;
}

const MyItem: React.FunctionComponent<IMyItemProps> = (props) => {
  const { account } = useWeb3React();
  const [isApproved, setIsApproved] = useRecoilState(isApprovedAtom);
  const [isCreateOpen, setIsCreateOpen] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>('');
  const [startingPrice, setStartingPrice] = React.useState<number>(0);
  const [buyNowPrice, setBuyNowPrice] = React.useState<number>(0);
  const [expiryDate, setExpiryDate] = React.useState<string>('');

  const onClickCreateAuction = async () => {
    if (!isCreateOpen) {
      setIsCreateOpen(true);
      return;
    }

    if (!title) {
      alert('Title is required!');
      return;
    }
    if (!startingPrice) {
      alert('Starting price is required!');
      return;
    }
    if (!buyNowPrice) {
      alert('Buy now price is required!');
      return;
    }
    if (!expiryDate) {
      alert('Expiry date is required!');
      return;
    }

    const createAuction = await contracts.nftMarketContract.methods
      .createAuction(
        addresses.nft,
        props.id,
        new BigNumber(startingPrice)
          .times(new BigNumber(10).pow(18))
          .toNumber(),
        title,
        new BigNumber(buyNowPrice).times(new BigNumber(10).pow(18)).toNumber(),
        new Date(expiryDate).getTime(),
        1,
        1,
        1
      )
      .send({ from: account });

    console.log(createAuction);
  };

  const getIsApproved = async () => {
    const isApproved = await contracts.nftContract.methods
      .isApprovedForAll(account, addresses.nftMarket)
      .call();

    setIsApproved(isApproved);
  };

  const setApprovalForAll = async () => {
    await contracts.nftContract.methods
      .setApprovalForAll(addresses.nftMarket, true)
      .send({ from: account });

    setIsApproved(true);
  };

  React.useEffect(() => {
    getIsApproved();
  }, [account]);

  return (
    <div className="col-xl-3 col-md-6 mb-xl-0">
      <div className="card card-blog card-plain">
        <div className="position-relative mb-30">
          <NavLink className="d-block border-radius-xl" to="">
            <img
              src={props.img}
              alt="img-blur-shadow"
              className="img-fluid shadow border-radius-xl"
              style={{ minWidth: '100%' }}
            />
          </NavLink>
        </div>
        {/* <NavLink to={path2} className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="view profile">
        <img alt="placeholder" src={img2} />
      </NavLink> */}
        <div className="item-cont card-body px-1 pb-0">
          <p className="text-gradient text-dark mb-2 text-sm">#{props.id}</p>
          <NavLink className="text-decoration-none" to="">
            <h5>{props.title}</h5>
          </NavLink>
          {/* <p className="mb-4 text-sm">
            Currenct Price : <span className="gradient-text">0 ETH</span>
          </p> */}
          {isCreateOpen && (
            <div className="mb-3">
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Starting price"
                value={startingPrice}
                onChange={(e) => setStartingPrice(parseFloat(e.target.value))}
              />
              <Input
                type="number"
                placeholder="Buy now price"
                value={buyNowPrice}
                onChange={(e) => setBuyNowPrice(parseFloat(e.target.value))}
              />
              <Input
                type="datetime-local"
                placeholder="Expiry date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
          )}
          <div className="d-flex align-items-center justify-content-between">
            {isApproved ? (
              <button
                className="btn btn-outline-primary btn-sm mb-0"
                onClick={onClickCreateAuction}
              >
                Create auction
              </button>
            ) : (
              <button
                className="btn btn-outline-primary btn-sm mb-0"
                onClick={setApprovalForAll}
              >
                Set approval for all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
