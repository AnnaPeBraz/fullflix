import { useEffect, useState } from "react"
import { Pegarfilmes } from "../assets/apis/api"

export function Cards (){
    const [filmes, setFilmes] = useState();

    useEffect(()=>{
        Pegarfilmes(setFilmes)
    },[])
    
    return(
        <div>
            {!filmes ? <></> : <>{filmes.map((filme)=>{
                return(
                    <div>
                        <img></img>
                        <p></p>
                        <p></p>
               
                    </div>
                  ) 
                
                })}</>
            }
        </div>
    )
}