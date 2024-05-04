import axios from "axios";

const API_URL = "http://localhost:5000/api";


const fetchSensors = async () => {
    return axios.get(`${API_URL}/sensors`)
};

const addSensor = async sensorData => {
    return axios.post(`${API_URL}/sensors`, sensorData);
}; 

export { fetchSensors, addSensor};