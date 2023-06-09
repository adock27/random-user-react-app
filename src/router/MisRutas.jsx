import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

import CandidatosLista from '../componentes/CandidatosLista'
import CandidatosSeleccionados from '../componentes/CandidatosSeleccionados'
import { useSelector } from "react-redux";

const MisRutas = () => {


    const seleccionados = useSelector(state => state.misCandidatos.seleccionados)


    const isActive = (e) => {

    }

    return (
        <>

            <nav className="navbar navbar-expand-lg   navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Random user app</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>



            <div className="nav-scroller bg-body shadow-sm sticky-top">
                <nav className="nav" aria-label="Secondary navigation">
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? ' nav-link active fw-bold' : ' nav-link  text-dark'}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/seleccionados"
                        className={({ isActive }) => isActive ? ' nav-link active fw-bold' : ' nav-link  text-dark'}>
                        Seleccionados
                        <span className="badge text-bg-light rounded-pill align-text-bottom">{seleccionados.length}</span>
                    </NavLink>
                </nav>
            </div>



            <Routes>
                <Route path="/" element={<CandidatosLista />} />
                <Route path="/seleccionados" element={<CandidatosSeleccionados />} />
                <Route path="*" element={<CandidatosLista />} />
            </Routes>
        </>
    )
}

export default MisRutas