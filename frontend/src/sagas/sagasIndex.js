import { all } from "redux-saga/effects";
import watchAddSensor from "./addSensorSaga";
import fetchSensorsSaga from "./sagasIndex";

function* rootSaga() {
    yield all([
        fetchSensorsSaga(),
        watchAddSensor()
    ]);
};

export default rootSaga;