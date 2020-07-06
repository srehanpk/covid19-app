import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
import HealingIcon from '@material-ui/icons/Healing';
import WarningIcon from '@material-ui/icons/Warning';
import CountUp from 'react-countup';
//import List from './List';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { GlobalContext } from "./Context";




const useStyles = makeStyles((theme) => ({
root: {
     flexGrow: 1, 
    },

paper: {
    display: "flex",
    justifyContent:"center",
    // padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: "transparent",  
},

h4: {
    textAlign: 'center',
    fontSize: 30,
    color: "aliceblue",
    textShadow: "black 2px 5px 1px", 
    letterSpacing: 4,  
},

// Cards CSS

card: {
    minWidth: 200,
    // backgroundColor: "transparent",
    textAlign: "center",
    justifyContent: "space-between",
    boxShadow: "black 2px 5px 1px ", 
  },
 
  title: {
    fontSize: 15, 
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    backgroundColor: "aliceblue",
  },
  h3: {
    color: "aliceblue",
    textShadow: "black 2px 5px 1px",
    letterSpacing: 4,
  },
}));





export default function Status() {

  const {globalData}  = useContext(GlobalContext);

  
  
  //const initState = "Loading.....";
  
  //const [data, setData] = useState({});
  
  const [heading, setHeading] = useState("");

  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");

  

  async function api (){

         const fetch  = await globalData;
         
         let confirmed = await fetch.confirmed;
         let recovered = await fetch.recovered;
         let deaths    = await fetch.deaths;
        


          setConfirmed(confirmed);
          setRecovered(recovered);
          setDeaths(deaths);
          
    }
    api();
  

  
  
  const change = (event) => {
    setHeading(event.target.value);
  };

  

  const classes = useStyles();

  return (
    <div className={classes.root}>

    <h4 className={classes.h4}>{ heading === "" ? "Global Status" : heading}</h4>
    
    <div className="select">
      <h3 className={classes.h3}>Select Country</h3>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value=""
          onChange={change}
        >
          
          <MenuItem ></MenuItem>
        </Select>
      </FormControl>
    </div>

    
      
      <Grid container spacing={10} justify="center">
        <Grid item  xs={2.5} md={3}>

          <Paper className={classes.paper}>

          <Card className={classes.card} style={{borderTop: "solid 20px orange"}}>
          <CardContent>
          <ReportIcon style={{color: "orange", fontSize: "30px"}}/>
            <Typography className={classes.title} style={{color:"orange"}} color="textSecondary" gutterBottom>
              <b>Confirmed Cases</b>
            </Typography>
            <Typography variant="h5" component="h2" style={{color:"orange", fontWeight: "bolder"}}>
               
              <CountUp start={0} duration={5} separator="," end={Number(confirmed)} />
            </Typography>
          </CardContent>
        </Card>

        </Paper>          
        </Grid>
    


        <Grid item  xs={2.5} md={3}>

          <Paper className={classes.paper}>

          <Card className={classes.card} style={{borderTop: "solid 20px green"}}>
      <CardContent>
      <HealingIcon style={{color: "green", fontSize: "30px"}}/>
        <Typography className={classes.title} style={{color:"green"}} color="textSecondary" gutterBottom>
          <b>Recovered Cases</b>
        </Typography>
        <Typography variant="h5" component="h2" style={{color:"green", fontWeight: "bolder"}}>
        
        <CountUp start={0} duration={4} separator="," end={Number(recovered)} />
        </Typography>
      </CardContent>
    </Card>

        </Paper>          
        </Grid>
      

      
        <Grid item  xs={2.5} md={3}>

          <Paper className={classes.paper}>

          <Card className={classes.card} style={{borderTop: "solid 20px red"}}>
          <CardContent>
          <WarningIcon style={{color: "red", fontSize: "30px"}}/>
            <Typography className={classes.title} style={{color:"red"}} color="textSecondary" gutterBottom>
              <b>Total Deaths</b>
            </Typography>
            <Typography variant="h5" component="h2" style={{color:"red", fontWeight: "bolder" }}>
           
            <CountUp start={0} duration={2} separator="," end={Number(deaths)} />

            </Typography>
          </CardContent>
        </Card>

        </Paper>          
        </Grid>

      </Grid>


    </div>
  );
}