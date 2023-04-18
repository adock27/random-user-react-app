import React from 'react'
import { useSelector } from 'react-redux'
import Seleccionado from './Seleccionado'

const CandidatosSeleccionados = () => {

  const seleccionados = useSelector(state => state.misCandidatos.seleccionados)

  return (
    <div className='container'>
        <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm bg-dark">
        {/* <img className="me-3" src="../" alt="" width="48" height="38"/> */}
        <i className="bi bi-person-fill-check fs-1 me-3 "></i>
        <div className="lh-1">
          <h1 className="h6 text-white lh-1">Candidatos Seleccionados</h1>
          <small>lista</small>
        </div>
      </div>
      <hr />
      <div className="row">
        {seleccionados.map((seleccionado, key) =>
          <div className="col col-md-6 col-lg-3 col-xl-2" key={key}>
            <Seleccionado
              candidato={seleccionado}
            />
          </div>

        )}
      </div>

    </div>
  )
}

export default CandidatosSeleccionados