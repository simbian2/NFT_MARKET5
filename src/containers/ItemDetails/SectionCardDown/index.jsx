import SectionHistory from './SectionHistory'
import SectionBids from './SectionBids'

function SectionCardDown({ data1 , data2 }){

  return(
	<>
	    <SectionHistory data={data2} />
	    <SectionBids data={data1} />
	</>
  )
}

export default SectionCardDown