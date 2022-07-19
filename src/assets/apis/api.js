import axios from "axios";

export const Pegarfilmes = (setState) => {
    axios
    .get('https://developers.themoviedb.org/3/movies/get-popular-movies)')
    .then((resposta)=>{
        setState(resposta.data.results)
    }).catch((erro)=>{
        console.log(erro)
    })
}