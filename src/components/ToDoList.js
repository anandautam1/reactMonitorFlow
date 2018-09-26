import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
// component
import ToDoListItem from "./ToDoListItem";
import ControlButton from "./ControlButton";
import Grid from '@material-ui/core/Grid';
import logo from './../logo.svg';
import StatusList from "./StatusList";
import Button from '@material-ui/core/Button';

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
          //console.log(data);
          //console.log(data.PH);
          let item = (
            <div>
              <Grid container spacing={24}>
                <ToDoListItem key={key} todoId={key} todo={value}/>
                <Grid item xs={24}>
                  <ControlButton key={key} todoId={key} todo={value}/>
                  <br/>
                  <StatusList key={key} todoId={key} todo={value}/>
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
            <h4>There are no active sensor at the moment</h4>
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
              <Button
                onClick={() => this.setState({ addFormVisible: !addFormVisible })}
                className="btn-floating btn-large teal darken-4"
              >
                {addFormVisible ? (
                  <i className="large material-icons">close</i>
                ) : (
                  <i className="large material-icons">add</i>
                )}
              </Button>
              
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