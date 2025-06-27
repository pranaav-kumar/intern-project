import { useNavigate } from "react-router-dom";

function Activities() {
    const navigate = useNavigate();

    return (
        <div className="container mt-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/steps">Steps</a></li>
                    <li className="breadcrumb-item active">Activities</li>
                </ol>
            </nav>

            <p>This is a placeholder page for activities</p>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export default Activities;
