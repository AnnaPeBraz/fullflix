import React from "react";
import { FooterStyled } from "./FooterStyled";

export function Footer(props){
    return(
        <FooterStyled>{props.texto}</FooterStyled>
    )
}