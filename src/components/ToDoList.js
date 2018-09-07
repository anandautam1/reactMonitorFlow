import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
// component
import ToDoListItem from "./ToDoListItem";
import AquaChart from "./AquaChart";
import Grid from '@material-ui/core/Grid';
import logo from './../logo.svg';
import StatusList from "./StatusList";

class ToDoList extends Component {
    state = {
        addFormVisible: false,
        addFormValue: ""
    };

    handleInputChange = event => {
        this.setState({ addFormValue: event.target.value });
    };

    handleFormSubmit = event => {
        const { addFormValue } = this.state;
        const { addToDo } = this.props;
        event.preventDefault();
        addToDo({ title: addFormValue });
        this.setState({ addFormValue: "" });
    }

    renderAddForm = () => {
        const { addFormVisible, addFormValue } = this.state;
        if(addFormVisible) {
            return (
                <div id="todo-add-form" className="col s10 offset-s1">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="input-field">
                        
                        <input
                            value={addFormValue}
                            onChange={this.handleInputChange}
                            id="toDoNext"
                            type="text"
                        />
                        <label htmlFor="toDoNext">What To Do Next</label>
                        </div>
                    </form>
                </div>
            )
        }
    }

    renderToDos() {
        const { data } = this.props;
        const toDos = _.map(data, (value, key) => {
          let item = (
            <div>
              <Grid container spacing={24}>
                <ToDoListItem key={key} todoId={key} todo={value}/>
                <Grid item xs={6}>
                  <StatusList key={key} todoId={key} todo={value}/>
                </Grid>
                <Grid item xs={6}>
                  <StatusList key={key} todoId={key} todo={value}/>
                </Grid>
                <Grid item xs={6}>
                  <AquaChart value={7} label={'PH'} colour={'#000080'} />
                </Grid>
                <Grid item xs={6}>
                  <AquaChart value={7} label={'temperature'} colour={'#F54029'} />
                </Grid>
                <Grid item xs={6}>
                  <AquaChart value={7} label={'salinity'} colour={'#FFCC33'} />
                </Grid>
                <Grid item xs={6}>
                  <AquaChart value={7} label={'battery_level'} colour={'#50C878'} />
                </Grid>
              </Grid>
            </div>
          );
          return item;
        });
        if (!_.isEmpty(toDos)) {
          return toDos;
        }
        return (
          <div className="col s10 offset-s1 center-align">
           <img src={logo} className="App-logo" alt="logo" />
            <h4>You have completed all the tasks</h4>
            <p>Start by clicking add button in the bottom of the screen</p>
          </div>
        );
    }

    componentWillMount() {
        this.props.fetchToDos();
      }
    
      render() {
        const { addFormVisible } = this.state;
        return (
          <div className="to-do-list-container">
            <div className="row">
              {this.renderAddForm()}
              {this.renderToDos()}
            </div>
            <div className="fixed-action-btn">
              <button
                onClick={() => this.setState({ addFormVisible: !addFormVisible })}
                className="btn-floating btn-large teal darken-4"
              >
                {addFormVisible ? (
                  <i className="large material-icons">close</i>
                ) : (
                  <i className="large material-icons">add</i>
                )}
              </button>
            </div>
          </div>
        );
      }
}

const mapStateToProps = ({ data }) => {
    return {
      data
    };
  };
  
export default connect(mapStateToProps, actions)(ToDoList);