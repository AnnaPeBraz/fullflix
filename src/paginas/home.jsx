import { Cards } from "../Componentes/Cards";
import { Footer } from "../Componentes/Footer";

function Inicial(){
    return( // return sempre retorna html, css ou jsx
    //jsx precisa de uma div pai.
        <div> 
           <div>Div da Imagem inicial</div>
           <div>Div dos Cards
                <h2>Filmes Populares</h2>
                <Cards/>
           </div>
           <Footer/>             
        </div>
    )
}

export default Inicial;