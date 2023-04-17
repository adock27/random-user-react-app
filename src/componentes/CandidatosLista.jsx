import React, { useEffect, useState } from 'react'
import Candidato from './Candidato';
import { useDispatch, useSelector } from 'react-redux';
import { agregarCandidato } from '../store/candidatoSlice';
import Seleccionado from './Seleccionado';

const CandidatosLista = () => {

  const dispatch = useDispatch();

  const [candidatos, setCandidatos] = useState([]);
  const loading = {
    loading: true
  }
  const seleccionados = useSelector(state => state.misCandidatos.seleccionados)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then((response) => response.json())
      .then(({ results }) => setCandidatos(results))
  }, [])

  const candidatoSeleccionado = (candidato) => {
    dispatch(agregarCandidato(candidato));
  }

  return (
    <div className='container'>
      <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm bg-dark">
        {/* <img className="me-3" src="../" alt="" width="48" height="38"/> */}
        <i class="bi bi-person-lines-fill fs-1 me-3 "></i>
        <div className="lh-1">
          <h1 className="h6 text-white lh-1">Candidatos</h1>
          <small>lista de candidatos</small>
        </div>
      </div>

      <p>Total Seleccionados: {seleccionados.length}</p>
      <div className="row">


        {(!candidatos.length > 0) ? (
          <>Loading...</>
        ) : (candidatos.map((candidato, key, index) =>
          <div className="col col-md-6 col-lg-3 col-xl-2" key={key}>
            <Candidato
              index={index}
              candidato={candidato}
              onSeleccion={candidatoSeleccionado}
            />
          </div>
        ))}



        {/* {} */}
      </div>


    </div>
  )
}

export default CandidatosLista