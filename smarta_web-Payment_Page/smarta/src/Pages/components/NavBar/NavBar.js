import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import tempprofile from '../NavBar/Icons/tempavatar.png';
import Menubutton from './Icons/Menubutton.svg'; 


//Still need to get the border around the buttons in the menu yet.


const navStyles = makeStyles((theme) => ({
    root: { 
      flexGrow: 1,
    },

    menuButton: {
      flexGrow: 1,
      height: '1rem', 
      marginRight: '2rem'
    },

    title: {
      flexGrow: 1,
      marginRight: '1.2rem',
      color: 'black',
      fontFamily: 'coolvetica',
      marginBottom: '-15rem',
      marginTop: '-15rem',
      
    },

    profileImage: {
      flexgrow: 1,
      width: '4rem', 
      height: 'auto', 
      borderBottomLeftRadius: 5, 
      borderTopLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5
    },

    smartaLogo: { 
     fontFamily: 'coolvetica',
     marginLeft: '2rem',
     color: '#787ae3',
     fontSize: 32,
    },
  }));
  
  export default function MenuAppBar() {  
    const classes = navStyles();         
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className={classes.root}  >
        <AppBar position="static" >
          <Toolbar style={{ backgroundColor: 'white' }}>
            <Typography className={classes.title}>
              <p className={classes.smartaLogo}>
                smarta
              </p> 
            </Typography>
              {auth && (
                <div> 
                  <IconButton 
                    style={{ backgroundColor: 'transparent' }}
                    disableRipple={true}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true" 
                  >         
                  <h5 className={classes.title}> 
                  Adam Johnson
                  </h5>       
                  <img  
                    src={Menubutton} 
                    alt="menubtn" 
                    className={classes.menuButton}
                    onClick={handleMenu} 
                  />
                  <img 
                    className={classes.profileImage} 
                    src={tempprofile} 
                    alt="Logo" 
                    className={classes.profileImage}
                  /> 
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderBlockColor: '#787ae3' 
                    }}
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    open={open}
                    onClose={handleClose}
                    >
                      <MenuItem 
                        onClick={handleClose}
                      > 
                          View Profile
                      </MenuItem>
                      <MenuItem 
                        onClick={handleClose}
                      >
                          Preferences
                      </MenuItem>
                      <MenuItem 
                        style={{ color:'red'}} 
                        onClick={handleClose}
                      >
                          Sign Out
                      </MenuItem>
                    </Menu>
                </div>
              )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }