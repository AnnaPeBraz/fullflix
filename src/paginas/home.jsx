import { Cards } from "../Componentes/Cards";
import { Footer } from "../Componentes/Footer";
import {Header} from "../Componentes/Header"

function Inicial(){
    const pageName = `Home`

    return( // return sempre retorna html, css ou jsx
    //jsx precisa de uma div pai.
        <div> 
           <Header/>
           <div>
                <h2>Filmes Populares</h2>
                <Cards/>
           </div>
           <Footer texto={`FULLFLIX 2022, Todos os direitos reservados. | ${pageName}`}/>             
        </div>
    )
}

export default Inicial;