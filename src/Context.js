
import React, {  createContext } from 'react';
import {Fetch} from './Fetch'






  export const GlobalContext = createContext();
  

  export const GlobalProvider = ({ children }) => {
  
    
      const {globalData, dailyData, countryData} =  Fetch();

     
     
    return (
      <GlobalContext.Provider
        value={{globalData, dailyData, countryData}}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
   