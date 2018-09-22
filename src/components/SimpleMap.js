import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';
import Paper from '@material-ui/core/Paper';
 
class SimpleMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            center: {
                lat: this.props.lat,
                lng: this.props.lng,
              },
            zoom: 11
        };
    }  
 
  render() {
    const { center, zoom } = this.state;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <Paper>
            <h5 style={{textAlign:'center', padding:'10px'}}>{this.props.label}</h5>
        </Paper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDm2gxNhkxBRuwm0rBW75Y0Gb3ZnD9nqfg' }}
          defaultCenter={center}
          defaultZoom={zoom}>
            <MyGreatPlace lat={this.props.lat} lng={this.props.lng} text={'A'} /* Kreyser Avrora */ />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;