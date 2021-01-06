import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({

  snapShotCard: {
    flexgrow: 1,
    height: '5rem',
    width: '24rem',
    marginTop: '1rem',
    marginLeft: '1rem',
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  title: {
    fontFamily: 'coolvetica',
    fontWeight: 'bold',
    color: '#a35696',
  },
  content: {
    marginLeft: '6rem',
    marginTop: '0.4rem',
    fontFamily: 'Montserrat',
    fontSize: 24,
    color: '#8f788b',
  }

});

export default function MyHomeCard() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Card className={classes.snapShotCard} elevation={0}>
            <Typography className={classes.title}>
              Maintenance
            </Typography>
            <Typography className={classes.content}>
              No New Reports
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}







