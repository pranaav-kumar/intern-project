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
                    <li className="breadcrumb-item">
                        <a href="/" className="text-decoration-none">Project</a>
                    </li>
                    <li className="breadcrumb-item active">Step Details</li>
                </ol>
            </nav>

            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="mb-0">Step Details</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label text-muted">Name</label>
                                <p className="h5">{name}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-muted">Description</label>
                                <p>{description}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-muted">Status</label>
                                <div>
                                    <span className={`badge ${mandatory ? 'bg-warning' : 'bg-secondary'}`}>
                                        {mandatory ? "Required" : "Optional"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Activities</h6>
                            <button className="btn btn-success btn-sm" onClick={() => navigate('/steps/activities')}>
                                <i className="bi bi-plus"></i> Add Activity
                            </button>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">No activities added yet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Displaysteps;