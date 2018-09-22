import axios from 'axios';
import { todosRef, authRef,provider } from "../config/firebase";
import { FETCH_TODOS, FETCH_USER, FETCH_WEATHER } from "./types";

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: FETCH_USER,
          payload: user
        });
      } else {
        dispatch({
          type: FETCH_USER,
          payload: null
        });
      }
    });
  };
  
  export const signIn = () => dispatch => {
    authRef
      .signInWithPopup(provider)
      .then(result => {})
      .catch(error => {
        console.log(error);
      });
  };
  
  export const signOut = () => dispatch => {
    authRef
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        console.log(error);
      });
  };

// additional weather request
const API_KEY='f2e867d2d24279f6eb9447f5e3b031ca';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

  export function fetchWeather(city) {
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
  
    return {
      type: FETCH_WEATHER,
      payload: request
    }
  
  }
  