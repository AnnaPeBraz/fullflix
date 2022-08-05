import { useEffect, useState } from "react"
import { Pegarfilmes } from "../../assets/apis/api"
import { Container, Grid } from "./CardsStyle";
import { useDispatch  } from "react-redux/es/exports";
import { getMovieDetails } from "../../assets/redux/slice";


export function Cards (){
    const [filmes, setFilmes] = useState();
    // const [detalhes, setDetalhes] = useState();
    // const dispatch = useDispatch();

    useEffect(()=>{
        Pegarfilmes(setFilmes)
    },[]) //colchetes vazios, ele ativa com a pagina carregada

    // useEffect(()=>{
    //     dispatch(getMovieDetails(detalhes))
    // }, [detalhes])

    // const onHoverDetail = (e) =>{
    //     Pegarfilmes(setDetalhes)
    // }
    
    return(
 
        <Grid to="/detalhe">
            {!filmes ? <><p>NOPS</p></> : <>
                {filmes.map((filme)=> {
                    return(
                        <Container key={filme.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}></img>
                            <div className="infoContainer">
                                <h3>{`Título: ${filme.title}`}</h3>
                                <h3>{`Nota: ${filme.vote_average}`}</h3>   
                            </div>
                                        
                        </Container>
                    )
                }
                )}</>
            }
        </Grid>
    )
}