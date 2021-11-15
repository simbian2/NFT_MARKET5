import { NavLink } from "react-router-dom";
import ITag from '../../ITag'

function SidenavHeader({AsidelogoCt , hideShowSidebar}) {
  return (
	        <div className="sidenav-header">
	          <ITag ClassName="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"/>
	          <NavLink className="navbar-brand m-0" to="/">
	            <img src={AsidelogoCt} className="navbar-brand-img h-100 w-15" alt="..."/>
	            <span className="ms-1 font-weight-bold">NFT Marketplace</span>
	            <ITag ClassName="fas fa-times fa-lg ms-4 d-xl-none" onClick={hideShowSidebar}/>
	          </NavLink>
	        </div>
        )
}

export default SidenavHeader
