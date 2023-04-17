import React from 'react'

const Candidato = ({ candidato, index, onSeleccion }) => {

  return (
    <div className='p-3 mb-3 border shadow'>
      <img className='w-100' src={candidato.picture.large} alt={candidato.name.first} />
      <div className="p-3">

        <h6>{candidato.name.first}</h6>
        <ul>
          <li>{candidato.gender}</li>
          <li>{candidato.location.city}</li>
          <li>{candidato.phone}</li>
        </ul>
      </div>
      <div className='d-flex justify-content-between'>
        <button className='btn btn-primary btn-sm me-3' onClick={() => onSeleccion(candidato)}> Seleccionar </button>
        <button className='btn btn-outline-danger btn-sm'>Eliminar</button>
      </div>
    </div>
  )
}

export default Candidato