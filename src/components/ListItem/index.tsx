import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface IListItemProps {
  id: number;
  title: string;
  description: string;
  img: string;
  owner: string;
}

const ListItem: React.FunctionComponent<IListItemProps> = (props) => {
  return (
    <div className="col-xl-3 col-md-6 mb-xl-0">
      <div className="card card-blog card-plain">
        <div className="position-relative mb-30">
          <NavLink className="d-block border-radius-xl" to="">
            <img
              src={props.img}
              alt="img-blur-shadow"
              className="img-fluid shadow border-radius-xl"
              style={{ minWidth: '100%' }}
            />
          </NavLink>
        </div>
        {/* <NavLink to={path2} className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="view profile">
        <img alt="placeholder" src={img2} />
      </NavLink> */}
        <div className="item-cont card-body px-1 pb-0">
          <p className="text-gradient text-dark mb-2 text-sm">{props.title}</p>
          <NavLink className="text-decoration-none" to="">
            <h5>{props.description}</h5>
          </NavLink>
          <p className="mb-4 text-sm">
            Currenct Price : <span className="gradient-text">0 ETH</span>
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <NavLink to="" className="btn btn-outline-primary btn-sm mb-0">
              Buy Now
            </NavLink>
            {/* <div className="avatar-group mt-2">
          <NavLink
            to={path5}
            className="avatar avatar-xs rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title=""
            data-bs-original-title="Elena Morison"
          >
            <img alt="placeholder" src={img3} className="rounded-circle" />
          </NavLink>
          <NavLink
            to={path6}
            className="avatar avatar-xs rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title=""
            data-bs-original-title="Ryan Milly"
          >
            <img alt="placeholder" src={img4} className="rounded-circle" />
          </NavLink>
          <NavLink
            to={path7}
            className="avatar avatar-xs rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title=""
            data-bs-original-title="Nick Daniel"
          >
            <img alt="placeholder" src={img5} className="rounded-circle" />
          </NavLink>
          <NavLink
            to={path8}
            className="avatar avatar-xs rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title=""
            data-bs-original-title="Peterson"
          >
            <img alt="placeholder" src={img6} className="rounded-circle" />
          </NavLink>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
