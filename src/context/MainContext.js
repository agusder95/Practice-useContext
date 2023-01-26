import React from 'react'
import { useState, createContext } from 'react';

const MainContext = createContext({});

export const MainContextProvider = ({children}) =>{

     const [numero, setNumero] = useState(0);
     const [suma, setSuma] = useState(0);
     const [resta, setResta] = useState(0)

     return (
          <MainContext.Provider value={{
               numero,
               setNumero,
               suma,
               setSuma,
               resta,
               setResta
          }}>

               {children}

          </MainContext.Provider>
     )

}

export default MainContext; 