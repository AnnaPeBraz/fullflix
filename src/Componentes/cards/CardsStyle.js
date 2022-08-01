import styled from "styled-components";

export const Grid = styled.div `
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 3vh;
    color: white;
    min-height: 20vh;
    padding: 10vh 0;
    width: 80%;
    gap: 3vw;
    grid-template-columns: auto(repeat(auto-fit, minmax(300px, 1fr)));
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
    }
    img{
        width: 100%;
        height: 80%;
        
    }
`