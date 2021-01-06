import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "coolvetica",
    marginRight: "1rem",
    paddingRight: "2rem",
    marginTop: "1rem",
    width: "auto",
  },

  feedItemAlert: {
    // feed item with red text, until we make it responsive the color is styled here.
    flexGrow: 1,
    height: "auto",
    width: "98%",
    marginRight: "1.6rem",
    marginLeft: "1.6rem",
    marginTop: "0.8rem",
    paddingLeft: "1.5rem",
    color: "red",
    textDecoration: "none",
    display: "flex",
    fontSize: 24,
  },

  feedItem: {
    // standard feed item styling
    flexGrow: 1,
    height: "auto",
    width: "98%",
    marginLeft: "1.6rem",
    marginRight: "1.6rem",
    marginTop: "0.8rem",
    paddingLeft: "1.5rem",
    textDecoration: "none",
    color: "black",
    display: "flex",
    fontSize: 24,
  },

  boxTitle: {
    // title of the section styled here.
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: "2rem",
    fontSize: 18,
  },

  textFormat: {
    flexGrow: 1,
    marginTop: "1.1rem",
    paddingLeft: "1rem",
    height: "3rem",
  },

  buttonAlert: {
    // button styling
    flexGrow: 1,
    width: "10rem",
    marginBottom: "1.5rem",
    float: "right",
    marginRight: "1rem",
    backgroundColor: "#787ae3",
    color: "white",
  },

  dateChip: {
    marginTop: "1.5rem",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.boxTitle}>Notifications</Box>
      <Box className={classes.feedItem} boxShadow={3}>
        <Chip
          variant="outlined"
          size="small"
          label="01/08/21"
          className={classes.dateChip}
        />
        <Box className={classes.textFormat}>
          Lease Agreement opened! Sign now to secure your home
          <Button className={classes.buttonAlert} variant="contained">
            View Agreement
          </Button>
        </Box>
      </Box>
      <Box
        className={classes.feedItemAlert}
        boxShadow={3}
        justify="space-between"
      >
        <Chip
          variant="outlined"
          size="small"
          label="01/10/21"
          className={classes.dateChip}
        />
        <Box className={classes.textFormat}>
          Rent Due in Three Days!
          <Button className={classes.buttonAlert} variant="contained">
            Make a Payment
          </Button>
        </Box>
      </Box>
      <Box className={classes.feedItem} boxShadow={3} justify="space-between">
        <Chip
          variant="outlined"
          size="small"
          label="01/10/21"
          className={classes.dateChip}
        />
        <Box className={classes.textFormat}>
          Check out some of smarta's new features!
          <Button className={classes.buttonAlert} variant="contained">
            Let's Go!
          </Button>
        </Box>
      </Box>
      <Box className={classes.feedItem} boxShadow={3} justify="space-between">
        <Chip
          variant="outlined"
          size="small"
          label="01/10/21"
          className={classes.dateChip}
        />
        <Box className={classes.textFormat}>
          Check out some of smarta's new features!
          <Button className={classes.buttonAlert} variant="contained">
            Let's Go!
          </Button>
        </Box>
      </Box>
    </div>
  );
}
