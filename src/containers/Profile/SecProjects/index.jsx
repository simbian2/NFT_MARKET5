import SecNewListed from '../../../components/SecNewListed'

function SecProjects(){

  return(
    <div className="col-12 mt-4">
      <div className="card mb-4">
        <div className="card-header pb-0 p-3" id="projects">
          <h6 className="mb-1">Author Projects</h6>
          <p className="text-sm">Architects Crypto Assets</p>
        </div>
        <SecNewListed />
      </div>
    </div>
  )
}

export default SecProjects
