import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    valor: "Home", 
    valor2: {}
}

export const countSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        goToHome: (state) => {
            state.valor = "Home"
        },
        goToDetail: (state) =>{
            state.valor = "Detail"
        },
        getMovieDetails: (state, action) => {
            state.valor2 = action.payload
        }
    }
})

export const {goToDetail, goToHome, getMovieDetails} = countSlice.actions; //.actions para ele entender que serao açoes de outra parte do codigo

export default countSlice.reducer;