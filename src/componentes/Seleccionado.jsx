import React from 'react'

const Seleccionado = ({ candidato, index, onSeleccion }) => {
  return (
    <div className='p-3 mb-3 border shadow'>
    <img className='w-100' src={candidato.picture.large} alt={candidato.name.first} />
    <div className="p-3">
    <h6>{candidato.name.first}</h6>
    </div>

    <div className='d-flex justify-content-between'>
      <button className='btn btn-success btn-sm me-3'> Ver perfil </button>
      <button className='btn btn-outline-danger btn-sm'>Rechazar</button>
    </div>
  </div>
  )
}

export default Seleccionado