import { combineReducers } from "redux";
import sensorReducer from "../features/sensors/SensorSlice";

const rootReducer = combineReducers({
    sensors: sensorReducer
});

export default rootReducer;