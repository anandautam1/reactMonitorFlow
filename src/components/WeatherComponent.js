// https://www.npmjs.com/package/react-weather
import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import { OpenWeatherMap } from 'react-weather';

class WeatherComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            label: this.props.label,
        };
    }

    render(){
        return(
            <div> 
                <Paper>
                    <h5 style={{textAlign:'center', padding:'10px'}}>{this.state.label}</h5>
                </Paper>

                <OpenWeatherMap 
                    city="Jerusalem" 
                    country="IL" 
                    appid="f2e867d2d24279f6eb9447f5e3b031ca" />
            </div>
        );
    }
}

export default WeatherComponent;