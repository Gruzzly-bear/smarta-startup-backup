import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
        fontFamily: 'coolvetica',
        marginRight: '25px',
        paddingRight: '25px',
        width: 'auto',
    },
    
    paper: {
      flexGrow: 1,
        height: 'auto',
        width: '48rem',
        marginRight: '25px',
        marginLeft: '25px',
        marginTop: '25px',
        paddingLeft: '25px',
        textDecoration: 'none',
        display: 'flex',
        fontSize: 24,
    },
    paperTwo: {
      flexGrow: 1,
        height: 'auto',
        width: '48rem',
        marginLeft: '25px',
        marginRight: '25px',
        marginTop: '25px',
        paddingLeft: '25px',
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        fontSize: 24,
        
    },
    boxTitle: {
      flexGrow: 1,
      textAlign: 'left',
      paddingLeft: '30px',
      fontSize: 18,
      marginTop: '10px',
      fontFamily: 'coolvetica',
      color: '#787ae3',
      
      },
    textFormat: {
      flexGrow: 1,
      marginTop: '10px',
      paddingLeft: '10px',
      height: '50px',

    },
    dateChip: {
      marginTop: '15px',

    },
    paymentAmount: {
        fontSize: 25,
        marginBottom: '3em',
        marginLeft: '3.5em',
        flexGrow: 1,
        height: '50px',
    },
    paymentType: {
        fontSize: 25,
        marginBottom: '3em',
        flexGrow: 1,
        height: '50px',
        float: 'right',
        marginRight: '1rem',
    },
    paymentMonth: {
        fontSize: 25,
        marginBottom: '3em',
        flexGrow: 1,
        height: '50px',
        marginLeft: '3.5rem',
    },
    titles: {
        marginTop: '2rem',
        color: 'black',
        fontFamily: 'Montserrat',
    },
    titleText: {
        marginLeft: '5.5rem',
        fontSize: 20,
       
    },
  }));

export default function CenteredGrid() {
    const classes = useStyles(); 
      return (
        <div className={classes.root}>
            <Box className={classes.boxTitle}>
              payment history
            </Box>
            <Grid container xs className={classes.titles}>
                <Typography className={classes.titleText}>
                    Date
                </Typography>
                <Typography className={classes.titleText}>
                    Amount Paid
                </Typography>
                <Typography className={classes.titleText}>
                    For the month of
                </Typography>
                <Typography className={classes.titleText}>
                    Payment Type
                </Typography>
            </Grid>
            <Box className={classes.paperTwo} boxShadow={2}>
                <Chip 
                variant="outlined" 
                size="medium" 
                label="10/01/2020" 
                className={classes.dateChip}
                />
                <Box className={classes.textFormat} >
                    <Typography className={classes.paymentAmount}>
                    $844.60
                    </Typography>
                </Box>
                <Box className={classes.textFormat} >
                    <Typography className={classes.paymentMonth}>
                        October
                    </Typography>
                </Box>
                <Box className={classes.textFormat} >
                    <Typography className={classes.paymentType}>
                            VISA
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.paper} boxShadow={2} >
                <Chip 
                variant="outlined" 
                size="medium" 
                label="09/01/2020" 
                className={classes.dateChip}
                />
                <Box className={classes.textFormat} >
                    <Typography className={classes.paymentAmount}>
                    $844.60
                    </Typography>
                </Box>
                <Box className={classes.textFormat} >
                    <Typography className={classes.paymentMonth}>
                        September
                    </Typography>
                </Box>
                <Box className={classes.textFormat} >
                    <Typography className={classes.paymentType}>
                        VISA
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.paper} boxShadow={2} >
                <Chip 
                variant="outlined" 
                size="medium" 
                label="08/01/2020" 
                className={classes.dateChip}
                />
                <Box className={classes.textFormat} >
                    <Typography className={classes.paymentAmount}>
                    $844.60
                    </Typography>
                </Box>
                <Box className={classes.textFormat} >
                    <Typography className={classes.paymentMonth}>
                        August
                    </Typography>
                </Box>
                <Box className={classes.textFormat} >
                    <Typography className={classes.paymentType}>
                        VISA
                    </Typography>
                </Box>
            </Box>
        </div>
      )
}
