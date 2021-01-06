import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import MakeaPayment from "./ProfileCard";
import UnitCard from "./trackRent";
import PaymentHistory from "./paymentHistory";

const useStyles = makeStyles({
  paymentHistory: { // styling for payment history section
    flexgrow: 1,
    height: "24.5rem",
    width: "53rem",
    marginTop: "1rem",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  track: { // styling for track your rent section
    flexgrow: 1,
    height: "24.5rem",
    width: "53rem",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  root: {
    flexgrow: 1,
  },
  makePayment: { // styling for make a payment
    flexgrow: 1,
    height: "50rem",
    width: "56rem",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
});

export default function MyHomeCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.track} elevation={3}>
            <Grid item xs={6}>
              <UnitCard />
            </Grid>
          </Card>
          <Card className={classes.paymentHistory} elevation={3}>
            <PaymentHistory />
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.makePayment} elevation={3}>
            <MakeaPayment />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
