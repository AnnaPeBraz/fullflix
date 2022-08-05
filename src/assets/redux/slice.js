import { createSlice } from "@reduxjs/toolkit"



const inicialState ={
    valor: "Home", 
    valor2: {}
}

export const countSlice = createSlice({
    name: "page",
    inicialState,
    reducers: {
        goToHome: (state) => {
            state.valor = "Home"
        },
        goToDetail: (state) =>{
            state.valor = "Detalhes"
        },
        getMovieDetails: (state, action) => {
            state.valor2 = action.payload
        }
    }
})

export const {goToDetail, goToHome, getMovieDetails} = countSlice.actions; //.actions para ele entender que serao açoes de outra parte do codigo

export default countSlice.reducer;