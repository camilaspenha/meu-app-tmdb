const Spinner = () => {
  return (
   <div className="container">
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
    </div>
  </div>
  )
}

export default Spinner
