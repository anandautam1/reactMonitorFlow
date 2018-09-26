import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GaugeDial from "./GaugeDial";
import WeatherWidget from "./WeatherWidget";
import AquaChart from "./AquaChart";
import SimpleMap from "./SimpleMap";
import Paper from '@material-ui/core/Paper';

class StatusList extends Component {
    constructor(props){
        super(props);
        this.state = {
            PH : 0,
            temperature : 0,
            salinity : 0,
            battery_level : 0,
        }
    }

    handleCompleteClick = completeToDoId => {
        const { completeToDo } = this.props;
        completeToDo(completeToDoId);
    };

    render(){
        const { todo , content} = this.props;
        // debug infor only
        //console.log(todo);
        console.log(todo.sal);
        // if(todo.hasOwnProperty('PH')){
        //     this.setState({ 
        //         PH: todo.PH[0] 
        //     });
        // }
        
        return (
            <div key="toDoName">
                
                <Typography variant="title" color="inherit">
                    Current Flow Status
                </Typography>

                <Grid container spacing={12}>

                    <Grid item xs={6}>
                        <AquaChart 
                        value={Number(todo.batt)} 
                        label={'battery_level (%)'} 
                        colour={'#50C878'} />
                    </Grid>

                    <Grid item xs={6}>
                        <div>
                            <GaugeDial label={'temperature' + ' (°C)'} 
                            minValue={-20} 
                            maxValue={120} 
                            value={Number(todo.temp)}
                            segments={16}
                            needleColor={"#000000"}
                            startColor={'#008080'}
                            endColor={'#FF471A'}/>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div>
                            <GaugeDial label={'PH'} 
                            minValue={0} 
                            maxValue={14} 
                            value={Number(todo.PH)}
                            segments={14}
                            needleColor={"#000000"}
                            startColor={'#FF471A'}
                            endColor={'#008080'}/>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div>
                            <GaugeDial label={'flow_rate (L/min)'} 
                            minValue={-10000} 
                            maxValue={10000} 
                            value={Number(todo.flow)}
                            segments={14}
                            needleColor={"#000000"}
                            startColor={'#00B32C'}
                            endColor={'#793698'}/>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div>
                            <GaugeDial label={'water_level (m)'} 
                            minValue={0} 
                            maxValue={50} 
                            value={Number(todo.water)}
                            segments={5}
                            needleColor={"#000000"}
                            startColor={'#008080'}
                            endColor={'#FF471A'}/>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div>
                            <GaugeDial label={'salinity (g)'} 
                            minValue={0} 
                            maxValue={2000} 
                            value={Number(todo.sal)}
                            segments={3}
                            needleColor={"#000000"}
                            startColor={'#008080'}
                            endColor={'#FF471A'}/>
                        </div>
                    </Grid>  
            </Grid>
            <br/>
            {/* <WeatherComponent label = {'Current Weather'}/> */}
            <WeatherWidget label = {'Current Weather'}/>
            <SimpleMap label = {'Current Location'} lat={Number(todo.lat)} lng={Number(todo.long)}/>
        </div>
        );
    }
}

export default connect(null, { completeToDo})(StatusList);