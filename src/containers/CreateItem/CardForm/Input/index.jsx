function Input({textArea , PlaceHolder}){

  return(
        <div className="mb-3">
          {textArea ? (
              <textarea name="desc" id="desc" cols="30" className="form-control" placeholder={PlaceHolder} rows="6"></textarea>
          ):(
              <input type="text" className="form-control" placeholder={PlaceHolder} />
            )
          }
      </div>
  )
}

export default Input