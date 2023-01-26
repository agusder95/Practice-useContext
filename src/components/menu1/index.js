import { useContext, useState } from "react";
import MainContext from "../../context/MainContext";
import Button from "../button";
import { H3, Menu1Wrapper } from "./styles";



function Menu1() {

     const {numero, setNumero} = useContext(MainContext)
     const {suma, setSuma } = useContext(MainContext)

     return (
          <Menu1Wrapper>
               <Button action={() => setNumero(numero + 1) & setSuma(suma+1)} text={'Suma'} />
               <H3> {suma} </H3>
          </Menu1Wrapper>
     );
}

export default Menu1;