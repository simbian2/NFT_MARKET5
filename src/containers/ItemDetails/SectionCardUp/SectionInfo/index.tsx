import { NavLink, useParams } from 'react-router-dom';
import data from '../../../../data/data-components/data-SecNewListed.js';

function SectionInfo({ img }: { img: any }) {
  const { id }: { id?: string } = useParams();

  const item = data[parseInt(id!) - 1];

  return (
    <div className="col-lg-12">
      <div className="d-flex flex-column h-100">
        <p className="mb-1">{item.text1}</p>
        <h4 className="font-weight-bolder">{item.text2}</h4>
        <p>{item.text3}</p>
        <p className="text-bold mb-30">
          Currenct Price :{' '}
          <span className="gradient-text text-lg">{item.price} Npando</span>
        </p>

        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                <strong className="text-dark mr-10">Item Artist: </strong>
                {item.itemArtist}
              </li>
              <li className="list-group-item border-0 ps-0 text-sm">
                <strong className="text-dark mr-10">Created:</strong>{' '}
                {item.created}
              </li>
              <li className="list-group-item border-0 ps-0 text-sm">
                <strong className="text-dark">Item Size:</strong>{' '}
                {item.itemSize}
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item border-0 d-flex align-items-center px-0">
                {/* <NavLink to="/profile" className="avatar v2 me-3">
	                <span className="author-num">1</span>
	                <img src={img} alt="kal" className="border-radius-lg shadow" />
	              </NavLink> */}
                <div className="d-flex align-items-start flex-column justify-content-center">
                  <NavLink to="/">
                    <h6 className="author-name">{item.artist}</h6>
                  </NavLink>
                  <NavLink className="btn btn-link autho-link" to="/">
                    {item.artistId}
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionInfo;
