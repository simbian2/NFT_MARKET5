import Input from './Input'

const CardForm = ({data}) => {

  return (
      <div className="card-body">
        <form action="post">
          <div className="mt-2 position-relative">
            <p className="text-sm font-weight-bold mb-15 text-secondary text-border d-inline z-index-2 bg-white">Upload File</p>  
          </div>
          <div className="upload-div">
            <a href="/"  className="btn btn-outline-primary btn-sm mb-0">Upload Item File</a>
          </div>
          {data && data.map((item , i) => (
            <Input
              key={i}
              textArea={item.textArea}
              PlaceHolder={item.PlaceHolder}
            />  
          ))}
          
          <div className="form-check form-check-info text-left">
            <input className="form-check-input" type="checkbox" value=""  checked="" />
            <label className="form-check-label" >
              Transfer Copyright When Purchased?
            </label>
          </div>
          <div className="text-center">
            <button  className="btn bg-gradient-dark w-100 my-4 mb-2">List Item Now</button>
          </div>
        </form>
      </div>
  );
}

export default CardForm;