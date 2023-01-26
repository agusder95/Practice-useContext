import { Menu2Wrapper,H3 } from "./styles";
import Button from "../button";
import { useContext } from "react";
import MainContext from "../../context/MainContext";

function Menu2() {

     const {numero, setNumero} = useContext(MainContext)
     const {resta, setResta} = useContext(MainContext)

     return (
          <Menu2Wrapper>
               <Button action={() => setNumero(numero-1)& setResta(resta+1)} text={'Resta'} />
               <H3> {resta} </H3>
          </Menu2Wrapper>
     );
}

export default Menu2;