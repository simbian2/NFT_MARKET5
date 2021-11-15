import { NavLink } from "react-router-dom";

function SectionForm(){

  return(
      <div className="col-lg-6 mt-s">
        <div className="d-flex flex-column h-100">
          <h5 className="font-weight-bolder">Place a Bid</h5>
          <p>From colors, cards, typography to complex elements, you will find the.</p>
          <form action="post">
            <label>Bid Amount</label>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Bid" />
            </div>
            
            <div className="text-center">
              <NavLink to="/connectwallet" className="btn bg-gradient-primary fs-6 fw-bold w-100 mb-0">Place Bid</NavLink>
            </div>
          </form>
        </div>
      </div>
  )
}

export default SectionForm