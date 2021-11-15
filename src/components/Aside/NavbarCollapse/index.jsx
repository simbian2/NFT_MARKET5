import NavItem from './NavItem'

function NavbarCollapse({data}) {
  return (
        <div className="collapse navbar-collapse  w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
          {data && data.map( (item , i) => (

	          	<NavItem
	          		key={i}
	          		path={item.path}
	          		ViewBox={item.ViewBox}
	          		title={item.title}
	          		transform2={item.transform2}
	          		Id={item.Id || ''}
	          		transform4={item.transform4}
	          		polygon={item.polygon || ''}
	          		opacityPoly={item.opacityPoly || ''}
	          		points={item.points || ''}
	          		pathSVGMore={item.pathSVGMore || 0}
	          		D1={item.D1}
	          		D2={item.D2}
	          		opacity3={item.opacity3 || ''}
	          		opacityNorma={item.opacityNorma || ''}
	          		D3={item.D3 || ''}
	          		D4={item.D4 || ''}
	          		spanText={item.spanText}
	          	/>

          ))}

          </ul>
        </div>
        )
}

export default NavbarCollapse
