import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Cards.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { CenterFocusStrong } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/img-3.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 400,
      fontSize: "3em",
    },
  },
}));
function Cards2() {
  const classes = useStyles();
  return (
    <div className="cards">
      <AppBar className={classes.appBar} position="static">
        {" "}
      </AppBar>
      <Box className={classes.hero}>
        <Box>AUTOEDÚCATE</Box>
      </Box>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=mYfNzqKZ70g"
              controls
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-HGA2KA2fDI"
              controls
            />
          </ul>
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=f9NH2MJixjU"
              position="relative"
              controls
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=H2vwLR21GF0"
              position="relative"
              controls
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
