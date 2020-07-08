
import React, {  createContext } from 'react';
import {Fetch} from './Fetch'






  export const GlobalContext = createContext();
  

  export const GlobalProvider = ({ children }) => {
  
    
      const {globalData, dailyData, countryData, list} =  Fetch();

     
     
    return (
      <GlobalContext.Provider
        value={{globalData, dailyData, countryData, list}}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
   