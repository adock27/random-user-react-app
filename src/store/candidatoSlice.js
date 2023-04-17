import { createSlice } from "@reduxjs/toolkit";

export const candidatoSlice = createSlice({
    name: 'misCandidatos',
    initialState: {
        seleccionados: []
    },
    reducers:{
        agregarCandidato: (state, action)=>{
            state.seleccionados=[...state.seleccionados, action.payload]
        }
    }
})

export const { agregarCandidato } = candidatoSlice.actions