import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "20vh",
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
    width: "54em",
    fontFamily: "coolvetica",
    color: "#787ae3",
  },
  cardTitle: {
    flexGrow: 1,
    marginTop: "1em",
    fontFamily: "coolvetica",
    color: "#787ae3",
    fontSize: 24,
    textAlign: "left",
  },
  cardBed: {
    flexGrow: 1,
    fontFamily: "coolvetica",
    color: "black",
    fontSize: 24,
    textAlign: "left",
    marginTop: "0.5rem",
  },
  bedCase: {
    flexGrow: 1,
  },
  homeImage: {
    height: "auto",
    width: "26em",
  },
  paperMonth: {
    height: "6rem",
    width: "6rem",
    marginTop: "1rem",
  },
  paperMonthOver: {
    height: "6rem",
    width: "6rem",
    marginTop: "1rem",
    textDecorationLine: "line-through",
    color: "#808080",
  },
  root: {
    width: "52rem",
    marginLeft: "2.5rem",
  },
  monthTitle: {
    flexGrow: 1,
    fontSize: 32,
    textAlign: "center",
    paddingTop: "1rem",
    fontWeight: "bold",
  },
  monthSub: {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  paperMonthCurrent: {
    height: "6rem",
    width: "6rem",
    marginTop: "1rem",
    color: "#787ae3",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Typography className={classes.cardTitle}>
          track your rent
          <br />
          <Typography className={classes.cardBed}>2020</Typography>
        </Typography>
        <Grid container>
          <Grid item xs>
            <Paper className={classes.paperMonthOver} elevation={0}>
              <Typography className={classes.monthTitle}>Aug.</Typography>
              <Typography className={classes.monthSub}>paid</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paperMonthOver} elevation={0}>
              <Typography className={classes.monthTitle}>Sep.</Typography>
              <Typography className={classes.monthSub}>paid</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paperMonthOver} elevation={0}>
              <Typography className={classes.monthTitle}>Oct.</Typography>
              <Typography className={classes.monthSub}>paid</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paperMonthCurrent} elevation={0}>
              <Typography className={classes.monthTitle}>Nov.</Typography>
              <Typography className={classes.monthSub}>Pay now!</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paperMonth} elevation={0}>
              <Typography className={classes.monthTitle}>Dec.</Typography>
              <Typography className={classes.monthSub}>Pay Ahead!</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paperMonth} elevation={0}>
              <Typography className={classes.monthTitle}>Jan.</Typography>
              <Typography className={classes.monthSub}>Pay Ahead!</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs>
            <Typography className={classes.cardBed}>2021</Typography>
            <Grid container>
              <Grid item xs>
                <Paper className={classes.paperMonth} elevation={0}>
                  <Typography className={classes.monthTitle}>Feb.</Typography>
                  <Typography className={classes.monthSub}>
                    Pay Ahead!
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paperMonth} elevation={0}>
                  <Typography className={classes.monthTitle}>Mar.</Typography>
                  <Typography className={classes.monthSub}>
                    Pay Ahead!
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paperMonth} elevation={0}>
                  <Typography className={classes.monthTitle}>Apr.</Typography>
                  <Typography className={classes.monthSub}>
                    Pay Ahead!
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paperMonth} elevation={0}>
                  <Typography className={classes.monthTitle}>May.</Typography>
                  <Typography className={classes.monthSub}>
                    Pay Ahead!
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paperMonth} elevation={0}>
                  <Typography className={classes.monthTitle}>Jun.</Typography>
                  <Typography className={classes.monthSub}>
                    Pay Ahead!
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paperMonth} elevation={0}>
                  <Typography className={classes.monthTitle}>Jul.</Typography>
                  <Typography className={classes.monthSub}>
                    Pay Ahead!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
