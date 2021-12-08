import * as React from 'react';
import { NavLink } from 'react-router-dom';
import contracts from '../../constants/contracts';
import addresses from '../../constants/addresses';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from '../../connector/index';
import Input from '../../containers/CreateItem/CardForm/Input';

interface IMyItemProps {
  id: number;
  title: string;
  description: string;
  img: string;
  owner: string;
}

const MyItem: React.FunctionComponent<IMyItemProps> = (props) => {
  const { account } = useWeb3React();
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

    await contracts.nftContract.methods.setApprovalForAll(account, true).call();

    const createAuction = await contracts.nftMarketContract.methods
      .createAuction(
        addresses.nft,
        props.id,
        // startingPrice * 10 ** 18,
        startingPrice * 10 ** 14,
        title,
        // buyNowPrice * 10 ** 18,
        buyNowPrice * 10 ** 14,
        new Date(expiryDate).getTime(),
        1,
        1,
        1
      )
      .send({ from: account });

    console.log(createAuction);
  };

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
          <p className="text-gradient text-dark mb-2 text-sm">{props.title}</p>
          <NavLink className="text-decoration-none" to="">
            <h5>{props.description}</h5>
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
                onChange={(e) => setStartingPrice(parseInt(e.target.value))}
              />
              <Input
                type="number"
                placeholder="Buy now price"
                value={buyNowPrice}
                onChange={(e) => setBuyNowPrice(parseInt(e.target.value))}
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
            <button
              className="btn btn-outline-primary btn-sm mb-0"
              onClick={onClickCreateAuction}
            >
              Create auction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
