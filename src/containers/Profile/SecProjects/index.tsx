import React from 'react';
import { NavLink } from 'react-router-dom';
import ITag from '../../../components/ITag';
import ListItem from '../../../components/ListItem';
import contracts from '../../../constants/contracts';
import data from '../../../data/data-components/data-SecNewListed.js';
import { useWeb3React } from '@web3-react/core';

function SecProjects() {
  const { account } = useWeb3React();

  const [ids, setIds] = React.useState<number[]>([]);
  const [balance, setBalance] = React.useState<number>(0);
  const [tokens, setTokens] = React.useState<
    {
      id: string;
      title: string;
      description: string;
      img: string;
      owner: string;
    }[]
  >([]);

  const getTotalSupply = () => {
    if (account) {
      contracts.nftContract.methods
        .balanceOf(account)
        .call()
        .then((result: any) => setBalance(result));
    }
  };

  const getTokenIds = async () => {
    let count = balance;
    let i = 1;
    let _ids: number[] = [];
    while (count > 0) {
      const result = await contracts.nftContract.methods.ownerOf(i).call();

      if (result) {
        count--;
        _ids.push(i);
      }

      i++;
    }

    setIds(_ids);
  };

  const getTokens = async () => {
    const datas = await Promise.all(
      ids.map(async (id) => {
        const hash = await contracts.nftContract.methods.tokenURI(id).call();
        const response = await fetch(
          `https://ipfs.infura.io/ipfs/${hash}?clear`
        );
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const metadata = await response.json();
        const owner = await contracts.nftContract.methods.ownerOf(id).call();

        return {
          id,
          title: metadata.properties.name.description,
          description: metadata.properties.description.description,
          img: `https://ipfs.infura.io/ipfs/${metadata.properties.image.description}`,
          owner,
        };
      })
    );

    console.log(datas);
  };

  React.useEffect(() => {
    getTotalSupply();
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
          <h6 className="mb-1">Author Projects</h6>
          <p className="text-sm">Architects Crypto Assets</p>
        </div>
        <div className="container-fluid">
          <div className="col-12 py-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  {tokens.map((item, i) => (
                    <ListItem key={i} {...item} />
                  ))}

                  <div className="col-md-12 text-center">
                    <NavLink className="btn bg-gradient-dark mb-0" to="/">
                      <ITag ClassName="fas fa-plus mr-10" />
                      Load More
                    </NavLink>
                  </div>
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
