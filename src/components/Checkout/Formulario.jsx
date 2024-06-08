import React from 'react'
import "./Formulario.css";

const Formulario = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <div>

      <div className="text-center tituloform py-4">
      <h2>Formulario de compra:</h2>
      </div>

     

      <form onSubmit={handleSubmitForm}>

        <div class="mb-3 nombreform">
          <label for="formGroupExampleInput" className="form-label">Nombre</label>
          <input type="text" className="form-control" name="nombre" value={dataForm.nombre} onChange={handleChangeInput}/>
        </div>

        <div class="mb-3 telefonoform">
          <label for="formGroupExampleInput2" className="form-label">Telefono o celular</label>
          <input type="text" className="form-control"  name="telefono" value={dataForm.telefono} onChange={handleChangeInput}/>
        </div>

        <div class="mb-3 emailform">
          <label for="formGroupExampleInput" className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={dataForm.email} onChange={handleChangeInput}/>
        </div>

        <div class="mb-3 repemailform">
          <label for="formGroupExampleInput" className="form-label">Repetir Email</label>
          <input type="email" className="form-control"  name="valEmail" value={dataForm.valEmail} onChange={handleChangeInput}/>
        </div>

        <button type="submit" className="btn btn-primary botoncomprarfinal">Comprar</button>


      </form>

    </div>
  )
}

export default Formulario