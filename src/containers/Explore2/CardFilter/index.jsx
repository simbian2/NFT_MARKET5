import Input1 from '../../../components/Input1'
import Input2 from '../../../components/Input2'
import SectionHeading from '../../../components/SectionHeading'

import {Explore2Icon3} from '../../../utils/allImgs'

const CardFilter = ({data3 , data4}) => {

  return (
      <div className="col-12">
        <SectionHeading
                        img={Explore2Icon3}
                        text='Filter Settings'
                        title='Filters Settings'
        />


        <div className="card h-100 mb-30">
	        <div className="card-header pb-0 p-3">
	          <h6 className="mb-0">Filter Settings</h6>
	        </div>
	        <div className="card-body p-3">
	          <h6 className="text-uppercase text-body text-xs font-weight-bolder">Date Filter</h6>
	          <ul className="list-group">
	            {data3 && data3.map((item , i) => (
	              <Input1
	                key={i}
	                checked={item.checked}
	                text={item.text}
	              />
	            ))}

	          </ul>
	          <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Item Category</h6>
	          <ul className="list-group">
	            {data4 && data4.map((item , i) => (
	              <Input2
	                key={i}
	                checked={item.checked}
	                text={item.text}
	              />
	            ))}
	          </ul>
	        </div>
      	</div>
      </div>
  );
}

export default CardFilter;