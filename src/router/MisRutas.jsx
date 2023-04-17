import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import CandidatosLista from '../componentes/CandidatosLista'
import CandidatosSeleccionados from '../componentes/CandidatosSeleccionados'

const MisRutas = () => {
    return (
        <>
            <Link to="/">Candidatos</Link>
            <Link to="/seleccionados">Seleccionados</Link>
            <Routes>
                <Route path="/" element={<CandidatosLista />} />
                <Route path="/seleccionados" element={<CandidatosSeleccionados />} />
                <Route path="*" element={<CandidatosLista />} />
            </Routes>
        </>
    )
}

export default MisRutas