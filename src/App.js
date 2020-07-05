import React from 'react';
import './App.css';
import Header from './Header';
import Status from './Status';
import { GlobalProvider } from "./Context.js";





function App() {
  return (
    
    <GlobalProvider>
        <Header />
        <Status />
    </GlobalProvider>
    

    );
  }
  
  export default App;
  