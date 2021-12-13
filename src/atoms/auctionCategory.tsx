import { atom } from 'recoil';

const auctionCategoryAtom = atom<number>({
  key: 'auctionCategory',
  default: 1,
});

export default auctionCategoryAtom;
