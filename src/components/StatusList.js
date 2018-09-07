import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";
import Typography from '@material-ui/core/Typography';

class StatusList extends Component {
    handleCompleteClick = completeToDoId => {
        const { completeToDo } = this.props;
        completeToDo(completeToDoId);
    };

    render(){
        const { todo , content} = this.props;
        console.log(todo);
        return (
            <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
                <h4>
                <Typography variant="title" color="inherit">
                    {todo.title}{content}
                </Typography>
                </h4>
            </div>
        );
    }
}

export default connect(null, { completeToDo})(StatusList);