import React, { useState } from "react";
import petBoarding from "../media/petBoarding.jpg";
import Users from "./Users";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
}));
function Home() {
  const [location, setLocation] = useState("");
  const classes = useStyles();
  return (
    <div>
      <img
        // className="pet-img"
        src={petBoarding}
        width="100%"
        height="500rem"
      ></img>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
      <Users location={location} />
    </div>
  );
}

export default Home;
