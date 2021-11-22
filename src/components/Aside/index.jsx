import SidenavHeader from './SidenavHeader';
import NavbarCollapse from './NavbarCollapse';
import SidenavFooter from './SidenavFooter';

import { LogoPandoNft } from '../../utils/allImgs';
import { hideShowSidebar } from '../../utils';
import data from '../../data/data-components/data-Aside.json';

const AsideContainer = () => {
  return (
    <>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-left ms-3"
        id="sidenav-main"
      >
        <SidenavHeader
          AsidelogoCt={LogoPandoNft}
          hideShowSidebar={hideShowSidebar}
        />
        <hr className="horizontal dark mt-0" />
        <NavbarCollapse data={data} />
        <SidenavFooter />
      </aside>
    </>
  );
};

export default AsideContainer;
