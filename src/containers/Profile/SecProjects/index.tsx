import React from 'react';
import { NavLink } from 'react-router-dom';
import ITag from '../../../components/ITag';
import MyItem from '../../../components/MyItem';
import contracts from '../../../constants/contracts';
import { useWeb3React } from '@web3-react/core';
import { useRecoilState } from 'recoil';
import myItemsAtom from '../../../atoms/myItems';
import myAuctionsAtom from '../../../atoms/myAuctions';
import MyAuctionItem from '../../../components/MyAuctionItem';
import { IAuction } from '../../../types';

function SecProjects() {
  const { account } = useWeb3React();

  const [ids, setIds] = React.useState<number[]>([]);
  const [balance, setBalance] = React.useState<number>(0);
  const [myAuctions, setMyAuctions] = useRecoilState(myAuctionsAtom);
  const [myItems, setMyItems] = useRecoilState(myItemsAtom);

  const getAuctions = async () => {
    console.log(account);
    try {
      const userAuctions = await contracts.nftMarketContract.methods
        .getUserAuctions(account)
        .call();

      console.log('userAuctions', userAuctions);

      const promises = userAuctions.map(async (auction: IAuction) => {
        console.log('status', auction.auctionTypes.status);
        if (auction.auctionTypes.status === '1') {
          const tokenInfo = await getTokenInfo(parseInt(auction['tokenId']));

          return {
            ...auction,
            tokenInfo,
          };
        } else {
          return null;
        }
      });

      const data = await Promise.all(promises);

      setMyAuctions(data.filter((el) => el != null));
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalSupply = async () => {
    const totalSupply = await contracts.nftContract.methods
      .balanceOf(account)
      .call();
    setBalance(totalSupply);
  };

  const getTokenIds = async () => {
    let count = balance;
    let i = 1;
    let _ids: number[] = [];
    while (count > 0) {
      try {
        const result = await contracts.nftContract.methods.ownerOf(i).call();

        if (result === account) {
          count--;
          _ids.push(i);
        }
      } catch (_) {
        console.log(i);
      }

      i++;
    }
    console.log(_ids);
    setIds(_ids);
  };

  const getTokens = async () => {
    let datas: any[] = [];
    ids.map(async (id) => {
      const tokenInfo = await getTokenInfo(id);

      datas = [{ ...tokenInfo }, ...datas];

      setMyItems(datas);
    });

    setMyItems(datas);
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
    if (account) {
      getTotalSupply();
      getAuctions();
    } else {
      setMyItems([]);
    }
  }, [account]);

  React.useEffect(() => {
    getTokenIds();
  }, [balance]);

  React.useEffect(() => {
    getTokens();
  }, [ids]);

  return (
    <div className="col-12 mt-4">
      <div className="card mb-4">
        <div className="card-header pb-0 p-3" id="projects">
          <h6 className="mb-1">My auctions</h6>
          {/* <p className="text-sm">My NFTs</p> */}
        </div>
        <div className="container-fluid">
          <div className="col-12 py-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  {myAuctions.map((item, i) => (
                    <MyAuctionItem key={i} {...item} />
                  ))}

                  {/* <div className="col-md-12 text-center">
                    <NavLink className="btn bg-gradient-dark mb-0" to="/">
                      <ITag ClassName="fas fa-plus mr-10" />
                      Load More
                    </NavLink>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header pb-0 p-3" id="projects">
          <h6 className="mb-1">My NFTs</h6>
          {/* <p className="text-sm">My NFTs</p> */}
        </div>
        <div className="container-fluid">
          <div className="col-12 py-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  {myItems.map((item, i) => (
                    <MyItem key={i} {...item} />
                  ))}

                  {/* <div className="col-md-12 text-center">
                    <NavLink className="btn bg-gradient-dark mb-0" to="/">
                      <ITag ClassName="fas fa-plus mr-10" />
                      Load More
                    </NavLink>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecProjects;
