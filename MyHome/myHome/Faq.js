import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "0px",
    fontFamily: "coolvetica",
  },
  cardTitle: { // Title of the faq card's styling.
    flexGrow: 1,
      fontSize: 32,
      marginLeft: '2.6rem',
      fontFamily: 'coolvetica',
      color: '#787ae3',
  },
  cardInfo: { // styling for the card that houses the information.
    textAlign: 'center',
    fontSize: 24,
    marginTop: '1.5rem',
    fontFamily: 'Montserrat',
  },
  faqButton: { // styling for the button itself.
    flexGrow: 1,
    width: '8rem',
    height: 'auto',
    paddingTop: 'auto',
    paddingBottom: 'auto',
    float: 'right',
    marginRight: '1rem',
    backgroundColor:'#787ae3',
    color: 'white',
    marginTop: '1.5rem',
    marginBottom: '1rem',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs>
          <Typography className={classes.cardTitle}>Need Help?</Typography>
        </Grid>
      </Grid>
      <Grid item xs>
          <Typography className={classes.cardInfo}>Check out our FAQ section <br/> to see how to make the <br/>most of your dashboard.</Typography>
          {/* Have to add link to the FAQ here. Currently does nothing when clicked. */}
          <Button className={classes.faqButton} variant="contained" > Let's Go!</Button>
        </Grid>
    </div>
  );
}
