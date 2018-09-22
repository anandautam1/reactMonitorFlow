import { combineReducers } from "redux";

import data from "./dataReducer";
import auth from "./authReducer";
// specific weather reducer
import WeatherReducer from './reducer_weather';

export default combineReducers({
    data,
    auth,
    weather : WeatherReducer,
});