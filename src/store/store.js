import { configureStore } from "@reduxjs/toolkit";
import { candidatoSlice } from "./candidatoSlice";

export default configureStore({
    reducer:{
        misCandidatos: candidatoSlice.reducer,
    }
})