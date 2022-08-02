import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detalhes } from "../../paginas/Detalhes/Detalhes";
import Home from "../../paginas/Inicial/Home"


export function RouterDom(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/detalhe" element={<Detalhes/>}/>
            </Routes>
        </BrowserRouter>
    )
}