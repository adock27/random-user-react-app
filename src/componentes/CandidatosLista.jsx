import React, { useEffect, useState } from 'react'
import Candidato from './Candidato';
import { useDispatch, useSelector } from 'react-redux';
import { agregarCandidato } from '../store/candidatoSlice';
import Seleccionado from './Seleccionado';

const CandidatosLista = () => {

  const dispatch = useDispatch();

  const [candidatos, setCandidatos] = useState([]);
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
    <div>
      <h1>Candidatos</h1>
      <p>Una lista de candidatos</p>
      <p>Total Seleccionados: {seleccionados.length}</p>
      <div className="row">
        {candidatos.map((candidato, key, index) =>
          <div className="col col-md-6 col-lg-3 col-xl-2" key={key}>

            <Candidato

              index={index}
              candidato={candidato}
              onSeleccion={candidatoSeleccionado}
            />
          </div>
        )}
      </div>


    </div>
  )
}

export default CandidatosLista