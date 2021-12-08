import { NavLink, useParams } from 'react-router-dom';
import data from '../../../../data/data-components/data-SecNewListed.js';
import './SectionPrice.css';

function SectionPrice({ img }: { img: any }) {
  const { id }: { id?: string } = useParams();
  const item = data[parseInt(id!) - 1];

  return (
    <div className="col-lg-6 mt-lg-0">
      <div className="card card-background shadow-none card-background-mask-primary">
        <div className="full-background SectionPriceBG"></div>
        <div className="card-body text-center p-3 w-100">
          <div className="icon icon-shape icon-sm bg-white shadow mx-auto mb-3 d-flex align-items-center justify-content-center border-radius-md">
            <i
              className="ni ni-diamond gradient-text text-lg top-0"
              aria-hidden="true"
            ></i>
          </div>
          <h5 className="text-white up mb-10p">Highest Bid</h5>
          <p>{item.highestBid.placeBidDesc}</p>
          <ul className="list-group mt-15p">
            <li className="list-group-item border-0 d-flex align-items-center px-2">
              {/* <NavLink to="/" className="avatar v2 mr-10">
                    <img src={img} alt="kal" width="40" className="border-radius-lg shadow" />
                  </NavLink> */}
              <div className="d-flex align-items-start flex-column justify-content-center">
                <NavLink to="/" className="text-decoration-none">
                  <h6 className="author-name">{item.highestBid.bidderName}</h6>
                </NavLink>
                <NavLink
                  className="btn btn-link autho-link text-decoration-none"
                  to="/"
                >
                  {item.highestBid.bidderId}
                </NavLink>
              </div>
              <div className="d-flex align-items-start ms-auto flex-column justify-content-center">
                <h6 className="author-name gradient-text mb-0">
                  {item.highestBid.bidQty} ETH
                </h6>
                <p className="mb-0 text-dark">${item.highestBid.bidPrice}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionPrice;
