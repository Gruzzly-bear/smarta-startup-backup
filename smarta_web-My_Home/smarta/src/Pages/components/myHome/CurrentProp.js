import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Test1 from './Images/Home.png';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "0px",
    fontFamily: "coolvetica",
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },
  cardTitle: {
    flexGrow: 1,
      fontSize: 20,
      marginLeft: "35px",
  },
  cardAddress: {
    flexGrow: 1,
      fontSize: 15,
      color: "gray",
      textAlign: "right",
      marginRight: "15px",
      paddingBottom: '25px',
      fontFamily: 'Montserrat',
  },

  mainImage: {
    flexGrow: 1,
    paddingBottom: '10px',
    width: 'auto',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          {/* Card title */}
          <p className={classes.cardTitle}>Current Property</p>
        </Grid>
        <Grid item xs={6}>
        {/* Will need to authenticate current users property if any. */}
          <p className={classes.cardAddress}>Westbrook Apartments <br/> 1248 W State st Apt 121 <br/> Syracuse, NY 12042 </p> 
        </Grid>
        <Grid item >
          {/* Will need to pull current user property image from DB */}
          <img src={Test1} className={classes.mainImage} alt={'Main Building'}/>
        </Grid>
      </Grid>
    </div>
  );
}
