import axios from "axios";

export const Pegarfilmes = (setState) => {
    axios
    .get('https://api.themoviedb.org/3/movie/popular?api_key=fd0d6dd5f5ae132d0550c14964884a1e&language=en-US&page=1')
    .then((resposta)=>{
        setState(resposta.data.results)
    }).catch((erro)=>{
        console.log(erro)
    })
}