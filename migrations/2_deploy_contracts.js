// const NFTM = artifacts.require('NAMarket');
// const NFT = artifacts.require('NFT');
// module.exports = async function (deployer) {
//   // await deployer.deploy(NFTM);
//   await deployer.deploy(NFT);
//   // await NFT.deployed();
//   // console.log("NFTM:", NFTM.address);
//   // console.log("NFT:", NFT.address);
// };

const NFTM = artifacts.require('NAMarket');
const NFT = artifacts.require('NFT');
module.exports = async function (deployer) {
  await deployer.deploy(NFTM);
  await deployer.deploy(NFT, NFTM.address);
  // await NFT.deployed();
  console.log('NFTM:', NFTM.address);
  // console.log("NFT:", NFT.address);
};
