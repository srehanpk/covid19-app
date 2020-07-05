import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./App.css";
import { GlobalContext } from "./Context";






const useStyles = makeStyles((theme) => ({
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






export default  function List() {

  const classes = useStyles();
  
  const {globalData}  = useContext(GlobalContext);

 console.log(globalData);

  const [country, setCountry] = React.useState("");
 







  const change = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="select">
      <h3 className={classes.h3}>Select Country</h3>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={country}
          onChange={change}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
