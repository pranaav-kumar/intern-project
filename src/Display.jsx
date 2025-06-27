import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Display() {
    const [stepName, setStepName] = useState('');
    const [stepDesc, setStepDesc] = useState('');
    const [mandatory, setMandatory] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [arr, setArr] = useState([]);

    const navigate = useNavigate();

    const onSubmit = () => {
        const data = {
            name: stepName,
            description: stepDesc,
            mandatory: mandatory
        };
        setArr([...arr, data]);
        setShowCreate(false);
    };

    const handleClick = (step) => {
        navigate('/steps', { state: step });
    };

    return (
        <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Add Step:</h4>
                <button className="btn btn-success" onClick={() => setShowCreate(true)}>+</button>
            </div>

            {showCreate && (
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="mb-2">
                            <label className="form-label">Step name:</label>
                            <input className="form-control" type="text" onChange={(e) => setStepName(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Step description:</label>
                            <input className="form-control" type="text" onChange={(e) => setStepDesc(e.target.value)} />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" onChange={(e) => setMandatory(e.target.checked)} />
                            <label className="form-check-label">Mandatory</label>
                        </div>
                        <button className="btn btn-primary me-2" onClick={onSubmit}>Submit</button>
                        <button className="btn btn-secondary" onClick={() => setShowCreate(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <h4>Steps:</h4>
            {arr.length === 0 ? (
                <p className="text-muted">There are no steps</p>
            ) : (
                <div className="row">
                    {arr.map((step, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                            <div 
                                className="card h-100 border-primary" 
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleClick(step)}
                            >
                                <div className="card-body">
                                    <h6 className="card-title text-primary">Step {index + 1}</h6>
                                    <p className="card-text">{step.name}</p>
                                    {step.mandatory && <span className="badge bg-warning">Mandatory</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Display;