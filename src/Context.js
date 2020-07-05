
import React, {  createContext } from 'react';
import {Fetch} from './Fetch'






  export const GlobalContext = createContext();
  

  export const GlobalProvider = ({ children }) => {
  
    
      const {globalData} =  Fetch();

     
     
    return (
      <GlobalContext.Provider
        value={{globalData}}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
   