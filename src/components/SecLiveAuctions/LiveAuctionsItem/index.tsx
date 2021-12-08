import { NavLink } from 'react-router-dom';
import { IAuction } from '../../../types/index';
import { SecLiveAuctionsIconfire } from '../../../utils/allImgs';

function LiveAuctionsItem(props: IAuction) {
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
        <div className="auction-timer">
          <img src={SecLiveAuctionsIconfire} width="30" alt="" />
          <p>mint</p>
        </div>
        {/* <NavLink
          to={path2}
          className="item-owner"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title=""
          data-bs-original-title="view profile"
        >
          <img alt="placeholder" src={img3} />
        </NavLink> */}
        <div className="item-cont card-body px-1 pb-0">
          <p className="text-gradient text-dark mb-2 text-sm">
            #{props.tokenId}
          </p>
          <NavLink className="text-decoration-none" to="">
            <h5>{props.tokenInfo?.title}</h5>
          </NavLink>
          <p className="mb-4 text-sm">
            Currenct Price :{' '}
            <span className="gradient-text">
              {parseInt(props.currentPrice) / 10 ** 18} Npando
            </span>
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <NavLink to="" className="btn btn-outline-primary btn-sm mb-0">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveAuctionsItem;
