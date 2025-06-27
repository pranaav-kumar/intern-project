import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Displaysteps() {
    const location = useLocation();
    const { name, description, mandatory } = location.state || {};

    const navigate = useNavigate();

    return (
        <div className="container mt-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">Steps</li>
                </ol>
            </nav>

            <h2>Step Details</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Mandatory:</strong> {mandatory ? "Yes" : "No"}</p>

            <h3>Add Activity:</h3>
            <button className="btn btn-warning" onClick={() => navigate('/steps/activities')}>+</button>
        </div>
    );
}

export default Displaysteps;
