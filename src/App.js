import React from 'react';
import './App.css';
import Status from './Status';
import List from './List';
import Chart from './Chart';


function App() {
  return (
    <> 
    <div className="app-main">

    <div className="App">
      <h1 className="App-header">
        C<span className="o">o</span>vid-19 Tracker 
      </h1>
      <List />
    </div>

      <Status />

    </div>
      <Chart />
      </>
  );
}

export default App;
