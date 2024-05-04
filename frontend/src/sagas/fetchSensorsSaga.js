import { call, put, takeLeading } from 'redux-saga/effects';
import * as api from '../api/sensorsApi';
import { fetchSensorsSuccess, fetchSensorsFailure } from './SensorSlice';

function* fetchSensorsSaga() {
    try {
        const response = yield call(api.fetchSensors);
        yield put(fetchSensorsSuccess(response.data));
    } catch (error) {
        yield put(fetchSensorsFailure(error.toString()));
    }
}

function* watchFetchSensors() {
    yield takeLeading('sensors/fetchSensorsRequest', fetchSensorsSaga);
}

export default watchFetchSensors;