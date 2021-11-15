import { NavLink } from "react-router-dom";

function SectionInfo({ img }){

  return(
	  <div className="col-lg-12">
	    <div className="d-flex flex-column h-100">
	      <p className="mb-1">3 of 5 In Stock</p>
	      <h4 className="font-weight-bolder">#04 Jimi Hendrix</h4>
	      <p>Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Quidem deserunt dignissimos ad inventore molestiae quisquam eius reprehenderit, recusandae porro tempore excepturi impedit voluptatum sit sunt! Possimus ea illo consequuntur, perspic iatismolestiae quisquam eius reprehenderit.</p>
	      <p className="text-bold mb-30">Currenct Price : <span className="gradient-text text-lg">0.239 ETH</span></p>
	      
	      <div className="row">

	        <div className="col-md-6">
	          <ul className="list-group">
	            <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark mr-10">Item Artist: </strong>Alec M. Thompson</li>
	            <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark mr-10">Created:</strong> 25 Jan, 2021</li>
	            <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Item Size:</strong> 2500 x 2500</li>
	          </ul>
	        </div>

	        <div className="col-md-6">
	          <ul className="list-group">
	            <li className="list-group-item border-0 d-flex align-items-center px-0">
	              <NavLink to="/profile" className="avatar v2 me-3">
	                <span className="author-num">1</span>
	                <img src={img} alt="kal" className="border-radius-lg shadow" />
	              </NavLink>
	              <div className="d-flex align-items-start flex-column justify-content-center">
	                <NavLink to="/"><h6 className="author-name">Alec M. Thompson</h6></NavLink>
	                <NavLink className="btn btn-link autho-link" to="/">@Alec_Mthompson</NavLink>
	              </div>
	            </li>
	          </ul>
	        </div>
	        
	      </div>
	      
	    </div>
	  </div>
  )
}

export default SectionInfo