import { useNavigate } from "react-router-dom";

function Activities(){
    const navigate = useNavigate();
    
    return(
        <div className="container mt-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/" className="text-decoration-none">Project</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate(-1);}} className="text-decoration-none">Step Details</a>
                    </li>
                    <li className="breadcrumb-item active">Activities</li>
                </ol>
            </nav>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="mb-0">Activities</h4>
                        </div>
                        <div className="card-body text-center py-5">
                            <div className="text-muted mb-3">
                                <i className="bi bi-clipboard-check" style={{fontSize: '3rem'}}></i>
                            </div>
                            <p className="text-muted">This is a placeholder page for activities</p>
                            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                                <i className="bi bi-arrow-left"></i> Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities