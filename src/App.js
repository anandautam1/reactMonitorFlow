import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDoList from "./components/ToDoList";
import SignIn from "./components/SignIn";
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


class App extends Component {
  componentWillMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}

        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton color="inherit" aria-label="Menu">
              <img src={logo} width={35} height={40} />
            </IconButton>
            <Typography variant="title" color="inherit">
              DashBoard
            </Typography>
          </Toolbar>
        </AppBar>

        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={SignIn} />
            <Route path="/app" component={requireAuth(ToDoList)} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
