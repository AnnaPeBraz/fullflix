import { useEffect, useState } from "react";
import { Cards } from "../../Componentes/cards/Cards";
import { Footer } from "../../Componentes/footer/Footer";
import {Header} from "../../Componentes/header/Header";
import { Pai, Titulo, p2 } from "./HomeStyle";

function Inicial(){
    const pageName = `Home`
    // const [imagem, setImagem] = useState("imagemInicial")

    // useEffect(() => {
    //     setImagem("Nova Imagem")
    // },[])

    return( // return sempre retorna html, css ou jsx
    //jsx precisa de uma div pai.
        <Pai> 
           
           <div className="imagemInicial"></div>
           {/* <Header/> */}
           
            <Titulo>Filmes Populares</Titulo>
            <p2>
                <Cards/>
            </p2>

           
           <Footer texto={`FULLFLIX 2022, Todos os direitos reservados. | ${pageName}`}/>             
        </Pai>
    )
}

export default Inicial;