function BuyerForm ({onSumbit, values, handleChange}){
    return(
<form className="row g-3" onSubmit={onSumbit}>
  <div className="col-md-6">
    <label htmlFor="inputEmail1" className="form-label">Email</label>
    <input value={values.name} name="email" type="email" className="form-control" id="inputEmail1" onChange={handleChange}/>
  </div>
  <div className="col-md-6">
  <label htmlFor="inputEmail2" className="form-label">Repita email</label>
    <input value={values.name} name="email2" type="email" className="form-control" id="inputEmail2" onChange={handleChange}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputName" name="name" className="form-label">Nombre y apellido</label>
    <input value={values.name} type="text" className="form-control" id="inputName" onChange={handleChange} />
  </div>
  <div className="col-12">
    <label htmlFor="inputPhone" className="form-label">Celular</label>
    <input type="text" value={values.name} name="celular" className="form-control" id="inputphone" onChange={handleChange} />
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">COMPRAR</button>
  </div>
</form>
    )
}

export default BuyerForm