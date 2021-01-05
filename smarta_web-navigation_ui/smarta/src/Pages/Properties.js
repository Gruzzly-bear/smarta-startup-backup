import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Grid from '@material-ui/core/Grid';
import randomColor from 'randomcolor';


// export default NavBar;

const mapStyles = {
    width: '50%',
    height: '10%',
    position: 'absolute',
  };
  
  export class MapContainer extends Component {
    render() {
      return (
        <Grid container> 
            <Grid item style={{position: 'absolute',width: '35%',height: '75%',top: "12%",left:'10%', background: randomColor()}}>
                <Map
                google={this.props.google}
                zoom={15}
                // style={mapStyles}
                initialCenter={
                    {
                    lat: 43.0392,
                    lng: -76.1351
                    }
                }
                />
            </Grid>
            <Grid item align = 'center' style={{position: 'absolute',width: '50%',height: '5%',top: "12%",left:'47%', background: randomColor()}}>
                <text>Properties </text> 
            </Grid>
            <Grid item align = 'center' style={{position: 'absolute',width: '10%',height: '5%',top: "25%",left:'47%', background: randomColor()}}>
                <text>Perfect Fit Label </text> 
            </Grid>
            <Grid item align = 'center' style={{position: 'absolute',width: '10%',height: '5%',top: "25%",left:'87%', background: randomColor()}}>
                <text>Left and Right Cursors </text> 
            </Grid>
        </Grid>
        
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCPZcYqLQFuKb4oWVoMmxF9deiFn4uWdBA'
  })(MapContainer);