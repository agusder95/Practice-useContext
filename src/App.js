import { AppWrapper } from "./AppStyle";
import Header from "./components/header";
import Menu1 from "./components/menu1";
import Menu2 from "./components/menu2";
import Menu3 from "./components/menu4";

import { MainContextProvider } from "./context/MainContext";



function App() {
  return (
    <AppWrapper>
      <MainContextProvider>
        <Header />
        <Menu1 />
        <Menu2 />
        <Menu3 />
      </MainContextProvider>
    </AppWrapper>    
  );
}

export default App;
