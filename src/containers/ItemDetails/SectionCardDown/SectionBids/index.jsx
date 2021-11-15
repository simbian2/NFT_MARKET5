import ListTag from './ListTag'

function SectionBids({ data }){

  return(
    <div className="col-lg-6">
      <div className="card mb-30 rounded-3">
        <div className="card-body p-3">
          <h6 className="mb-0">Latest Bids</h6>
          <ul className="dropdown-menu relative dropdown-menu-end show border-0">

            {data && data.map((item , i) => (
              <ListTag
                key={i}
                img={item.img}
                name={item.name}
                mint={item.mint}
                subPrice={item.subPrice}
                price={item.price}
              />
            ))}
            

          </ul>
        </div>
      </div>
    </div>
  )
}

export default SectionBids