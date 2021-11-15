import { NavLink } from "react-router-dom";

const MainHeader = () => {

  return (
    <div className="container-fluid py-4">
      <div className="main-header">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
            <div className="header-content">
              <h1>Largest Marketplace To Collect , Buy and Sell Creative NFTs Digital Assets</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deleniti, ducimus. Asperiores reiciendis eligendi magnam quas, repellendus. Voluptate repudiandae non.</p>
              <NavLink to="/explore" className="btn btn-light mb-0">Explore</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MainHeader;
