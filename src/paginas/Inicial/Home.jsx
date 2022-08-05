import { useEffect, useState } from "react";
import { Cards } from "../../Componentes/cards/Cards";
import { Footer } from "../../Componentes/Footer/Footer";
import { Header } from "../../Componentes/Header/Header";
import { Pai, Titulo, P2 } from "./HomeStyle";

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
            
            <P2>
                <Cards/>        
            </P2>

           
           <Footer texto={`FULLFLIX 2022, Todos os direitos reservados. | ${pageName}`}/>             
        </Pai>
    )
}

export default Inicial;