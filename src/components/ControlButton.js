import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo, controlUpdate } from "../actions";
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';
import ControlIcon from '@material-ui/icons/ControlPoint';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class ControlButton extends Component {
    timer = null;

    state = {
        loading: false,
        success: false,
    };

    componentWillMount(){
        clearTimeout(this.timer);
    }

    handleCompleteClick = completeToDoId => {
        const { completeToDo } = this.props;
        completeToDo(completeToDoId);
    };

    render(){
        const { loading, success } = this.state;
        const { classes } = this.props;

        const { todoId, todo } = this.props;
        return (
            <div>
                <Toolbar>
                    <Grid container spacing={12}>
                        <Grid item xs={12}>
                            <AppBar position="static" variant="contained" disabled color="primary">
                                <h4>Valve Control</h4>
                                <Button variant="contained" color="primary"
                                    onClick={() => this.handleCompleteClick(1)}>
                                    <ControlIcon />
                                    <h5> Control ON</h5>
                                </Button>

                                <Button variant="contained" color="primary"
                                    onClick={() => this.handleCompleteClick(2)}>
                                    <ControlIcon />
                                    <h5> Control OFF</h5>
                                </Button>
                            </AppBar>
                        </Grid>
                    </Grid>
                </Toolbar>
            </div>
        );
    }
}

export default connect(null, {completeToDo})(ControlButton);