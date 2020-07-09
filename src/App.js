import React from "react";
import "./App.css";
import Header from "./Header";
import Status from "./Status";
import Charts from "./Chart";
import Footer from './Footer';
import { GlobalProvider } from "./Context.js";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Status />
      <Charts />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
