import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";
import Typography from '@material-ui/core/Typography';
import AquaChart from "./AquaChart";
import Grid from '@material-ui/core/Grid';

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
        //console.log(todo.PH);
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
                    <Grid item xs={3}>
                    <AquaChart value={Number(todo.PH[0])} label={'PH'} colour={'#000080'} />
                    </Grid>
                    <Grid item xs={3}>
                    <AquaChart value={Number(todo.temperature[0])} label={'temperature'} colour={'#F54029'} />
                    </Grid>
                    <Grid item xs={3}>
                    <AquaChart value={Number(todo.salinity[0])} label={'salinity'} colour={'#FFCC33'} />
                    </Grid>
                    <Grid item xs={3}>
                    <AquaChart value={Number(todo.battery_level[0])} label={'battery_level'} colour={'#50C878'} />
                    </Grid>
                </Grid>

                
            </div>
        );
    }
}

export default connect(null, { completeToDo})(StatusList);