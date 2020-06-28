import React from 'react';
import './App.css';
import Status from './Status';
import List from './List';
import Chart from './Chart';
import Grid from '@material-ui/core/Grid';





function App() {
  return (
    <> 
    
    <div className="app-main">
    
    <Grid container spacing={10}>
    <Grid item xs={9}>
     
      <div className="App">
    <h1 className="App-header">
    C<span className="o">o</span>vid-19 Tracker 
    </h1>
    <List />
    </div>
    <Status />

     
    </Grid>
    <Grid item xs={3}>
      <Chart />
    </Grid>
    
  </Grid>

  
    
    
    
    
    
    </div>
    
    
    
    </>
    );
  }
  
  export default App;
  