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

            <div className="card shadow">
                <div className="card-body">
                    <h2>Step Details</h2>
                    <div className="row mb-3">
                        <div className="col-sm-3"><strong>Name:</strong></div>
                        <div className="col-sm-9">{name}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3"><strong>Description:</strong></div>
                        <div className="col-sm-9">{description}</div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-3"><strong>Mandatory:</strong></div>
                        <div className="col-sm-9">
                            {mandatory ? 
                                <span className="badge bg-warning">Yes</span> : 
                                <span className="badge bg-success">No</span>
                            }
                        </div>
                    </div>

                    <h3>Add Activity:</h3>
                    <button className="btn btn-warning" onClick={() => navigate('/steps/activities')}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Displaysteps;