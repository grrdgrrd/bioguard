import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSensorsRequest } from "./SensorSlice";

const SensorList = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.sensors);

    useEffect(() => {
        dispatch(fetchSensorsRequest());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Sensor Data</h1>
            <ul>
                {data.map(sensor => (
                    <li key={sensor.id}>
                        Location: {sensor.location}, Viral Load: {sensor.viralLoad}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SensorList;