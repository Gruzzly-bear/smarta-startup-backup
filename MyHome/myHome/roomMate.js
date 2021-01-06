import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RMTest from "./Images/RMTest.png";
import RMTest1 from "./Images/RMTest1.png";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    fontFamily: "coolvetica",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  mainImage: {
    flexGrow: 1,
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    height: "5rem",
  },
  viewProfile: {
    flexGrow: 1,
    fontFamily: "coolvetica",
    color: "#787ae3",
    fontSize: 18,
  },
  roomContent: {
    justifyContent: "center",
    fontFamily: "Montserrat",
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  },
  bedText: {
    fontWeight: "bold",
    fontFamily: "coolvetica",
    color: "#787ae3",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "Montserrat",
    width: "15rem",
    marginBottom: "1rem",
  },
  title: {
    fontWeight: "bold",
    fontFamily: "coolvetica",
    fontSize: 18,
    float: "left",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item className={classes.title}>
        room mates
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper}>
            <p className={classes.bedText}>bed 1</p>
            <img
              src={RMTest}
              className={classes.mainImage}
              alt={"Your Avatar"}
            />
            <Grid item xs>
              <p className={classes.roomContent}>Adam Johnson (you)</p>
            </Grid>
            <Grid item xs>
              <p className={classes.viewProfile}>View Profile</p>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper}>
            <p className={classes.bedText}>bed 2</p>
            <img
              src={RMTest1}
              className={classes.mainImage}
              alt={"Room Mate"}
            />
            <p className={classes.roomContent}>
              Jack Waller
              <Grid item xs>
                <p className={classes.viewProfile}>View Profile</p>
              </Grid>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper}>
            <p className={classes.bedText}>bed 3</p>
            <img
              src={RMTest1}
              className={classes.mainImage}
              alt={"Room Mate"}
            />
            <p className={classes.roomContent}>
              Jim Jimmers
              <Grid item xs>
                <p className={classes.viewProfile}>View Profile</p>
              </Grid>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper}>
            <p className={classes.bedText}>bed 4</p>
            <img
              src={RMTest1}
              className={classes.mainImage}
              alt={"Room Mate"}
            />
            <p className={classes.roomContent}>
              {" "}
              Jim Jimmers{" "}
              <Grid item xs>
                <p className={classes.viewProfile}>Find a Roommate!</p>
              </Grid>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
