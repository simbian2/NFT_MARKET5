import { useParams } from 'react-router-dom';
import data from '../../../../data/data-components/data-SecNewListed.js';
import ListTag from './ListTag';

function SectionBids() {
  const { id }: { id?: string } = useParams();
  const item = data[parseInt(id!) - 1];

  return (
    <div className="col-lg-6">
      <div className="card mb-30 rounded-3">
        <div className="card-body p-3">
          <h6 className="mb-0">Latest Bids</h6>
          <ul className="dropdown-menu relative dropdown-menu-end show border-0">
            {item &&
              item.latestBids.map((item, i) => (
                <ListTag
                  key={i}
                  name={item.bidderName}
                  mint={item.timeAgo}
                  subPrice={item.subPrice}
                  price={item.price}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionBids;
