import styled from "styled-components";
import imagemBG from "./../../assets/images/cabeca.png"

export const Titulo = styled.h2  `
    color: white;
    font-size: 40px;
    background-color: black;
    text-align: center;
    height: 10vh;
    /* margin: 0; */
    /* h2{
        margin: 0;
    } */

`

export const Pai = styled.div `
    .imagemInicial{
        background-image: url(${imagemBG});
        /* width: 100vw; */
        height: 100vh;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    background-color: black;

`
// export const p1 = styled.h2 `
//     background-color: black;
//     height: 10vh;
//     margin: 0;
//     h2{
//         margin: 0;
//     }
// `
export const P2 = styled.div `
    display: flex;
    flex-wrap: nowrap; 
    justify-content: center;
    /* width: 80%; */
    align-items: center;
    justify-content: center;
    margin: auto;
    height: fit-content;
    min-height: 90vh;
    
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */

`