import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SensorList from "./features/sensors/SensorList";
import AddSensorForm from "./features/sensors/AddSensorForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sensors" element={<SensorList />} />
        <Route path="/add-sensor" element={<AddSensorForm />} />
      </Routes>
    </Router>
  );
};

export default App;