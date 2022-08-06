import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Detalhes} from "../../paginas/Detalhes/Detalhes"
import Home from "../../paginas/Inicial/Home"
import {Link} from "react-router-dom"


export function RouterDom(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/detalhe" element={<Detalhes/>}/>
                <Route path="*" element={<Link to="/"> <button>ERRO 404 - Pag não encontrada. Clique aqui para Voltar :)</button></Link>}/>
            </Routes>
        </BrowserRouter>
    )
}