import ListTag from './ListTag'

function SectionHistory({ data }){

  return(
    <div className="col-lg-6">
      <div className="card mb-30">
        <div className="card-body p-3">
          <h6 className="mb-0">History</h6>
          <ul className="dropdown-menu relative dropdown-menu-end show border-0">
            {data && data.map((item , i) => (
              <ListTag
                img={item.img}
                mint={item.mint}
                price={item.price}
              />  
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SectionHistory