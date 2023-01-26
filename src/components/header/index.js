import { useContext } from "react";
import MainContext from "../../context/MainContext";
import { H1, HeaderWrapper, P } from "./styles";

function Header() {

     const {numero, setNumero} = useContext(MainContext)

     return (
          <HeaderWrapper>
               <H1> Contador </H1>
               <P> Total = {numero} </P>
               
          </HeaderWrapper>
     );
}

export default Header;