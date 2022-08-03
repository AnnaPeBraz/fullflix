import { Footer } from "../../Componentes/Footer/Footer";
import { Header } from "../../Componentes/Header/Header";
import {Link} from "react-router-dom";

export function Detalhes(){
    return(
        <div>
            <Header/>
            <main>
                Div/Main do meio
                <Link to="/">
                    <button>Voltar para HOME</button>
                </Link>/>
            </main>
            <Footer />
        </div>
    )
}