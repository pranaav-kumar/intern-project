import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Displaysteps() {
    const location = useLocation();
    const { name, description, mandatory } = location.state || {};

    const navigate = useNavigate();

    return (
    <div>
        <h2>Step Details</h2>
        <p>Name: {name}</p>
        <p>Description: {description}</p>
        <p>Mandatory: {mandatory ? "Yes" : "No"}</p>

        <h3>Add Activity:</h3>
        <button onClick={() => navigate('/steps/activities')}>+</button>
    </div>
    );
}

export default Displaysteps;
