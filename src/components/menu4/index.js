import { useContext, useEffect, useState } from "react";
import MainContext from "../../context/MainContext";
import Button from "../button";
import { Menu3Wrapper } from "./styles";



function Menu3() {

     const{numero,setNumero} = useContext(MainContext)
     const{suma, setSuma} = useContext(MainContext)
     const{resta, setResta} = useContext(MainContext)
          

     return (
          <Menu3Wrapper>
               <Button action={() => {
                    setNumero(0)
                    setSuma(0)
                    setResta(0)
               } } text={'Clean'}/>
          </Menu3Wrapper>
     );
}

export default Menu3;