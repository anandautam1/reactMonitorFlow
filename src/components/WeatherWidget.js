import React, { Component } from "react";
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import Paper from '@material-ui/core/Paper';

class WeatherWidget extends Component {
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

                <ReactWeather
                    forecast="today"
                    apikey="0deb77e07fc8455fa9960903181709"
                    type="city"
                    city="Melbourne"/>
            </div>
        );
    }
}

export default WeatherWidget;