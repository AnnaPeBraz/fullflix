import { Footer } from "../Componentes/footer";

export default function Inicial(){
    return( // return sempre retorna html, css ou jsx
    //jsx precisa de uma div pai.
        <div> 
           <div>Div da Imagem inicial</div>
           <div>Div dos Cards</div>
           <Footer/>             
        </div>
    )
}
