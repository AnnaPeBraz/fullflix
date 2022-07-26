import { useEffect, useState } from "react";
import { Cards } from "../../Componentes/Cards";
import { Footer } from "../../Componentes/Footer";
import {Header} from "../../Componentes/Header";
import { Pai, Titulo } from "./HomeStyle";

function Inicial(){
    const pageName = `Home`
    const [imagem, setImagem] = useState("imagemInicial")

    useEffect(() => {
        setImagem("Nova Imagem")
    },[])

    return( // return sempre retorna html, css ou jsx
    //jsx precisa de uma div pai.
        <Pai> 
           
           <div className="imagemInicial">{imagem}</div>
           {/* <Header/> */}
           <div>
                <Titulo>Filmes Populares</Titulo>
                <Cards/> 
           </div>
           <Footer texto={`FULLFLIX 2022, Todos os direitos reservados. | ${pageName}`}/>             
        </Pai>
    )
}

export default Inicial;