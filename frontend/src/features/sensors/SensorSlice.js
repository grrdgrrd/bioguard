import { createSlice } from '@reduxjs/toolkit';

const sensorSlice = createSlice({
    name: "sensors",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        fetchSensorsRequest: state => {
            state.loading = true;
        },
        fetchSensorsSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchSensorsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addSensorRequest: state => {
            state.loading = true;
        },
        addSensorSuccess: (state, action) => {
            state.data.push(action.payload);
            state.loading = false;
            state.error = null;
        },
        addSensorFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchSensorsRequest,
    fetchSensorsSuccess,
    fetchSensorsFailure,
    addSensorRequest,
    addSensorSuccess,
    addSensorFailure
} = sensorSlice.actions;

export default sensorSlice.reducer;