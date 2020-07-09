import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  NativeSelect,
} from "@material-ui/core";
import ReportIcon from "@material-ui/icons/Report";
import HealingIcon from "@material-ui/icons/Healing";
import WarningIcon from "@material-ui/icons/Warning";
import CountUp from "react-countup";
import FormControl from "@material-ui/core/FormControl";
import { GlobalContext } from "./Context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },

  paper: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "transparent",
    width: "max-content",
    margin: "auto",
  },

  h4: {
    textAlign: "center",
    fontSize: 30,
    color: "aliceblue",
    textShadow: "black 2px 5px 1px",
    letterSpacing: 4,
  },

  // Cards CSS

  card: {
    minWidth: 250,
    minHeight: 150,
    backgroundColor: "transparent",
    textAlign: "center",
    justifyContent: "space-between",
    boxShadow: "black 2px 5px 1px ",
  },
  title: {
    fontSize: 15,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    borderRadius: 10,
  },
  h3: {
    color: "aliceblue",
    textShadow: "black 2px 5px 1px",
    letterSpacing: 4,
  },
}));

export default function Status() {
  const { globalData, countryData, list } = useContext(GlobalContext);

  const [nameList, setNameList] = useState([]);

  const [heading, setHeading] = useState("Global");
  const [country, setCountry] = useState([]);
  const [newCountry, setNewCountry] = useState("");
  const [indexNum, setIndexNum] = useState("");

  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");

  async function api() {
    const fetch = await globalData;

    let confirmed = await fetch.confirmed;
    let recovered = await fetch.recovered;
    let deaths = await fetch.deaths;
    let countries = await countryData.Countries;
    let countryList = await list;

    setConfirmed(confirmed);
    setRecovered(recovered);
    setDeaths(deaths);
    setCountry(countries);
    setNameList(countryList);
  }

  api();

  const changeCountry = async (e) => {
    const cname = await e.target.value;

    const indexNo = nameList.indexOf(cname);

    setIndexNum(indexNo);
    setNewCountry(cname);
    setHeading(cname);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4 className={classes.h4}>
        {heading === "Global" ? heading : `${heading} `}
      </h4>

      <div className="select">
        <h3 className={classes.h3}>Select Country</h3>
        <FormControl className={classes.formControl}>
          <NativeSelect
            className="native"
            defaultValue=""
            onChange={changeCountry}
          >
            {nameList
              ? nameList.map((names, i) => (
                  <option className="native" key={i}>
                    {names}
                  </option>
                ))
              : "Loading..."}
          </NativeSelect>
        </FormControl>
      </div>

      <Grid container spacing={4} justify="center">
        <Grid item xs={10} md={3}>
          <Paper className={classes.paper}>
            <Card
              className={classes.card}
              style={{
                border: "solid 1px black",
                borderTop: "solid 20px blue ",
              }}
            >
              <CardContent>
                <ReportIcon style={{ color: "blue", fontSize: "30px" }} />
                <Typography
                  className={classes.title}
                  style={{ color: "blue" }}
                  color="textSecondary"
                  gutterBottom
                >
                  <b>Total Confirmed</b>
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ color: "blue", fontWeight: "bolder" }}
                >
                  {newCountry === "" ? (
                    <CountUp
                      start={0}
                      duration={4}
                      separator=","
                      end={Number(confirmed)}
                    />
                  ) : (
                    <CountUp
                      start={0}
                      duration={4}
                      separator=","
                      end={Number(country[indexNum].TotalConfirmed)}
                    />
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={10} md={3}>
          <Paper className={classes.paper}>
            <Card
              className={classes.card}
              style={{
                border: "solid 1px black",
                borderTop: "solid 20px green",
              }}
            >
              <CardContent>
                <HealingIcon style={{ color: "green", fontSize: "30px" }} />
                <Typography
                  className={classes.title}
                  style={{ color: "green" }}
                  color="textSecondary"
                  gutterBottom
                >
                  <b>Total Recovered</b>
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ color: "green", fontWeight: "bolder" }}
                >
                  {newCountry === "" ? (
                    <CountUp
                      start={0}
                      duration={3}
                      separator=","
                      end={Number(recovered)}
                    />
                  ) : (
                    <CountUp
                      start={0}
                      duration={3}
                      separator=","
                      end={Number(country[indexNum].TotalRecovered)}
                    />
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={10} md={3}>
          <Paper className={classes.paper}>
            <Card
              className={classes.card}
              style={{
                border: "solid 1px black",
                borderTop: "solid 20px red",
              }}
            >
              <CardContent>
                <WarningIcon style={{ color: "red", fontSize: "30px" }} />
                <Typography
                  className={classes.title}
                  style={{ color: "red" }}
                  color="textSecondary"
                  gutterBottom
                >
                  <b>Total Deaths</b>
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ color: "red", fontWeight: "bolder" }}
                >
                  {newCountry === "" ? (
                    <CountUp
                      start={0}
                      duration={2}
                      separator=","
                      end={Number(deaths)}
                    />
                  ) : (
                    <CountUp
                      start={0}
                      duration={2}
                      separator=","
                      end={Number(country[indexNum].TotalDeaths)}
                    />
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
