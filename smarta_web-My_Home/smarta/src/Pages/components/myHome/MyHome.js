import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import HomeDetails from "./CurrentProp"
import Grid from '@material-ui/core/Grid';
import RoomMate from '../myHome/roomMate';
import Payment from './Payment';
import Feed from '../myHome/feed';
import Rewards from '../myHome/Rewards';
import Messages from '../myHome/Messages';
import Maintenance from '../myHome/Maintenance';
import FAQ from '../myHome/Faq';




const useStyles = makeStyles({

  feed: { // Styling for the Feed section. 
    flexgrow: 1,
    height: '95%',
    width: '81rem',
    marginTop: '1rem',
    marginLeft: '1rem',
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },

  snapShot: { // Styling for the nspashot main section. Smaller cards are individually styled.
    flexgrow: 1,
    height: '7rem',
    marginLeft: '1rem',
    width: '26rem',
    marginTop: '0.5rem',
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  current: { // Styling for the current property card.
    flexgrow: 1,
    marginTop: '1rem',
    height: '25rem',
    width: '26rem',
    marginLeft: '1rem',
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  faq: { // Styling for the FAQ card. Static.
    flexgrow: 1,
    marginTop: '0.5rem',
    height: '16rem',
    width: '26rem',
    marginLeft: '1rem',
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    paddingBottom: '1rem',
  },
  roomMate: { // Styling of the roommate section. Card only.
    flexgrow: 1,
    marginTop: '0.5rem',
    height: '14rem',
    width: '81rem',
    marginLeft: '1rem',
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    paddingBottom: '3rem',
  }
});

export default function MyHomeCard() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={1} > 
        {/* the following grid is snapshot items. */}
        <Grid item xs={3}> 
          <Card className={classes.snapShot} elevation={3} > 
            <Payment/>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.snapShot} elevation={3} > 
            <Rewards/>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.snapShot} elevation={3} > 
            <Messages/>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.snapShot} elevation={3} > 
            <Maintenance/>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {/* The following grid contains the feed and current property. */}
        <Grid item xs>
          <Card className={classes.feed} elevation={3} > 
              <Feed />
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.current} elevation={3}>
            <HomeDetails/>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {/* The following grid contains the Faq and roomate. */}
        <Grid item xs={3}>
          <Card className={classes.faq} elevation={3} > 
            <FAQ/>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.roomMate} elevation={3}>
            <RoomMate />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
