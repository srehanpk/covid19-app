import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import HealingIcon from '@material-ui/icons/Healing';
import WarningIcon from '@material-ui/icons/Warning';
import CountUp from 'react-countup';
import List from './List';




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
}));





export default function Status() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    <h4 className={classes.h4}>Global Status</h4>
    <List />

    

      <Grid container spacing={10} justify="center">
        <Grid item  xs={2.5} md={3}>

          <Paper className={classes.paper}>

          <Card className={classes.card} style={{borderTop: "solid 10px orange"}}>
          <CardContent>
          <ReportIcon style={{color: "orange", fontSize: "30px"}}/>
            <Typography className={classes.title} style={{color:"orange"}} color="textSecondary" gutterBottom>
              <b>Confirmed Cases</b>
            </Typography>
            <Typography variant="h5" component="h2" style={{color:"orange", fontWeight: "bolder"}}>
              <CountUp start={0} duration={2} separator="," end={10000000} />
            </Typography>
          </CardContent>
        </Card>

        </Paper>          
        </Grid>
      

      
        <Grid item  xs={2.5} md={3}>

          <Paper className={classes.paper}>

          <Card className={classes.card} style={{borderTop: "solid 10px blue"}}>
      <CardContent>
      <FiberNewIcon style={{color: "blue", fontSize: "30px"}}/>
        <Typography className={classes.title} style={{color:"blue"}} color="textSecondary" gutterBottom>
          <b>New Reported </b>
        </Typography>
        <Typography variant="h5" component="h2" style={{color:"blue", fontWeight: "bolder"}}>
        <CountUp start={0} duration={3} separator="," end={99999} />
        </Typography>
      </CardContent>
    </Card>

        </Paper>          
        </Grid>
      

      
        <Grid item  xs={2.5} md={3}>

          <Paper className={classes.paper}>

          <Card className={classes.card} style={{borderTop: "solid 10px green"}}>
      <CardContent>
      <HealingIcon style={{color: "green", fontSize: "30px"}}/>
        <Typography className={classes.title} style={{color:"green"}} color="textSecondary" gutterBottom>
          <b>Recovered Cases</b>
        </Typography>
        <Typography variant="h5" component="h2" style={{color:"green", fontWeight: "bolder"}}>
        <CountUp start={0} duration={4} separator="," end={88888} />
        </Typography>
      </CardContent>
    </Card>

        </Paper>          
        </Grid>
      

      
        <Grid item  xs={2.5} md={3}>

          <Paper className={classes.paper}>

          <Card className={classes.card} style={{borderTop: "solid 10px red"}}>
          <CardContent>
          <WarningIcon style={{color: "red", fontSize: "30px"}}/>
            <Typography className={classes.title} style={{color:"red"}} color="textSecondary" gutterBottom>
              <b>Total Deaths</b>
            </Typography>
            <Typography variant="h5" component="h2" style={{color:"red", fontWeight: "bolder" }}>
            <CountUp start={0} duration={5} separator="," end={666666} />

            </Typography>
          </CardContent>
        </Card>

        </Paper>          
        </Grid>

      </Grid>


    </div>
  );
}