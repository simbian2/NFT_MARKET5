import { NavLink } from 'react-router-dom';
import ITag from '../../../../components/ITag';

function SecNavItem({ hideShowSidebar }) {
  return (
    <>
      <li className="nav-item d-flex align-items-center">
        <NavLink to="/" className="btn btn-white bg-light mb-0 w-100">
          Connect Wallet
        </NavLink>
        {/* <NavLink
          to="/signin"
          className="nav-link text-body font-weight-bold px-0"
        >
          <span className="d-sm-inline text-body d-none mr-10">Sign In</span>
        </NavLink> */}
      </li>

      <li className="nav-item d-xl-none px-3 d-flex align-items-center">
        <div className="sidenav-toggler-inner" onClick={hideShowSidebar}>
          {Array(3)
            .fill()
            .map((item, i) => (
              <ITag ClassName="sidenav-toggler-line" key={i} />
            ))}
        </div>
      </li>
    </>
  );
}

export default SecNavItem;
