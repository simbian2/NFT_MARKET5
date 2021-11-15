function Breadcrumb({text1 , text2}){
  return(
    <>
      <span className="mask bg-gradient-primary opacity-6"></span>
      <div className="con-wrapper">
        <h2>{text1}</h2>
        <p>Home / <span>{text2}</span></p>
      </div>
    </>
  )
}

export default Breadcrumb