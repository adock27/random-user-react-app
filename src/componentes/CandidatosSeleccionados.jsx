import React from 'react'
import { useSelector } from 'react-redux'
import Seleccionado from './Seleccionado'

const CandidatosSeleccionados = () => {

  const seleccionados = useSelector(state => state.misCandidatos.seleccionados)

  return (
    <div>
      <h5>Candidatos seleccionados</h5>
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