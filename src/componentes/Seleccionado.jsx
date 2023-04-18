import React from 'react'

const Seleccionado = ({ candidato, index, onSeleccion }) => {
  return (
    <div className='p-2 rounded-4 mb-3 border shadow'>

      <div className="d-flex justify-content-center py-3">
        <img className='rounded-circle shadow' src={candidato.picture.large} alt={candidato.name.first} />
      </div>
      <div className="p-3 text-center">

        <h6 >{candidato.name.first} {candidato.name.last}</h6>
        {candidato.gender}
      </div>
      <div className='d-flex justify-content-between'>



        {/* <!-- Button trigger modal --> */}
        <button type="button" class="btn btn-primary rounded-3 w-100" data-bs-toggle="modal" data-bs-target={`#id-${index}`}>
          Ver perfil <i className="ms-2 bi bi-person-badge"></i>
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id={`id-${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"> <i className="bi bi-person me-2 "></i>User info</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">

                <div className="d-flex justify-content-center py-3">
                  <img className='rounded-circle shadow' src={candidato.picture.large} alt={candidato.name.first} />
                </div>

                <h6 className='text-center'>{candidato.name.first} {candidato.name.last} - Age: {candidato.dob.age}</h6>
                <p className='text-center'>{candidato.cell}</p>

               

                <ul className="list-group">
                  <li className="list-group-item"></li>
                  <li className="list-group-item"><i className="bi bi-envelope-at me-2"></i>{candidato.email}</li>
                  <li className="list-group-item"><i className="bi bi-info me-2"></i>{candidato.gender}</li>
                  <li className="list-group-item"><i className="bi bi-map me-2"></i>{candidato.location.country}</li>
                  <li className="list-group-item"><i className="bi bi-geo-alt me-2"></i>{candidato.location.city}</li>
                </ul>

               
              </div>
              <div class="modal-footer">
                <button className='btn btn-primary  rounded-3' onClick={() => onSeleccion(candidato)} data-bs-dismiss="modal">
                  Seleccionar <i className="ms-2 bi bi-person-fill-check" ></i>
                </button>
                <button type="button" class="btn btn-outline-danger rounded-3" data-bs-dismiss="modal">Cancelar</button>
                {/* <button type="button" class="btn btn-primary">Understood</button> */}
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Seleccionado