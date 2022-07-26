import { useEffect, useState } from "react"
import { Pegarfilmes } from "../assets/apis/api"

export function Cards (){
    const [filmes, setFilmes] = useState();

    useEffect(()=>{
        Pegarfilmes(setFilmes)
    },[])
    
    return(
        <div>
            {!filmes ? <><p>NOPS</p></> : <>{filmes.map((filme)=>{
                return(
                    <div>
                        {/* <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}></img> */}
                        <p>{`Título: ${filme.title}`}</p>
                        <p>{`Nota: ${filme.vote_average}`}</p>               
                    </div>
                  ) 
                
                })}</>
            }
        </div>
    )
}