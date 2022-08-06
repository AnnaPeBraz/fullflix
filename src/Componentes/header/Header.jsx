import { useSelector } from "react-redux"
// import { Pai } from "../../paginas/Inicial/HomeStyle"
import { MainContainer } from "./HeaderStyle"



export const Header = () =>{
    const state = useSelector((state) => state.page.valor2)
    
    return(
        // <div>
            <MainContainer>
                {/* <div className="imagemInicial"> 
                   
                </div> */}
                 <p>{state.data.title}</p>
            </MainContainer>
            

        // </div>
    )
}