import { useEffect, useState } from "react"
import { PegarDetalhes, Pegarfilmes } from "../../assets/apis/api"
import { Container, Grid } from "./CardsStyle";
import { useDispatch } from "react-redux";
import { getMovieDetails } from "../../assets/redux/slice";

// goToDetail
export function Cards (){
    const [filmes, setFilmes] = useState();
    const [detalhes, setDetalhes] = useState();
    const dispatch = useDispatch()

    useEffect(()=>{
        Pegarfilmes(setFilmes)
    },[]) //colchetes vazios, ele ativa com a pagina carregada

    useEffect(()=>{
        dispatch(getMovieDetails(detalhes))
    }, [detalhes])

    const onHoverDetail = (e) =>{
        PegarDetalhes(e.target.id, setDetalhes)
    }
    
    return(
        <Grid to="/detalhe">
            {!filmes ? 
            <><p>NOPS</p></> : 
            <>
                {filmes.map((filme)=> {
                    return(
                        <Container key={filme.id} id={filme.id} onMouseEnter = {onHoverDetail}>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                alt=""
                                id={filme.id}
                            />
                            <div className="infoContainer" id={filme.id}>
                                <h3>{`Título: ${filme.title}`}</h3>
                                <h3>{`Nota: ${filme.vote_average}`}</h3>   
                            </div>        
                        </Container>
                    );
                })}
            </>
            }
        </Grid>
    )
}
