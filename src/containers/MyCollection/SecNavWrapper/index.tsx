import ITag from '../../../components/ITag'

function SecNavWrapper(){

  return(
      <div className="col-sm-4 col-8 my-sm-auto ms-auto me-sm-0 mx-auto mt-3">
        <div className="nav-wrapper position-relative end-0">
          <div className="border-0 ps-0 pb-0">
            <strong className="text-dark text-sm">Social:</strong> &nbsp;
            <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="/">
              <ITag ClassName="fab fa-facebook fa-lg" aria-hidden="true"/>
            </a>
            <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="/">
              <ITag ClassName="fab fa-twitter fa-lg" aria-hidden="true"/>
            </a>
            <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="/">
              <ITag ClassName="fab fa-instagram fa-lg" aria-hidden="true"/>
            </a>
          </div>
        </div>
      </div>
  )
}

export default SecNavWrapper
