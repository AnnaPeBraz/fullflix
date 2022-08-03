import styled from "styled-components";
import {Link} from "react-router-dom"

export const Grid = styled(Link) `
   
    display: grid;
    gap: 3vh;
    width: 90%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 10vh 0;
    min-height: 20vh;
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    :hover{
        cursor:pointer;
        border: 1px solid red;
    }
    .infoContainer{
        width: 90%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        font-size: 2vh;
        height: 20%;
        align-self: center;
        color: white;
    }
    img{
        width: 100%;
        height: 80%;

    } /* */
`

// FRONT END NAO É UMA CIENCIA EXATA D:< 