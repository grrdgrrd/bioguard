import { call, put, takeLeading } from "redux-saga/effects";
import * as api from "../api/sensorsApi";
import { addSensorSuccess, addSensorFailure } from "../features/sensors/SensorSlice";

function* addSensorSaga(action) {
    try {
        const response = yield call(api.addSensor, action.payload);
        yield put(addSensorSuccess(response.data));
    } catch (error) {
        yield put(addSensorFailure(error.toString()));
    }
}

function* watchAddSensor() {
    yield takeLeading('sensors/addSensorRequest', addSensorSaga);
}

export default watchAddSensor;