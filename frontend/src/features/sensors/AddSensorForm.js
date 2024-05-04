import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSensor } from "../../api/sensorsApi";
import { fetchSensorsRequest } from "./SensorSlice";

const AddSensorForm = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState("");
    const [viralLoad, setViralLoad] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        dispatch({ type: 'sensors/addSensorRequest', payload: {
            location: location,
            viralLoad: Number(viralLoad)
        }});
        setLocation("");
        setViralLoad("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Location:
                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Viral Load:
                    <input type="number" value={viralLoad} onChange={e => setViralLoad(e.target.value)} />
                </label>
            </div>
            <button type="submit">Add sensor</button>
        </form>
    );
};

export default AddSensorForm;