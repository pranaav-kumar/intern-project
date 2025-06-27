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
            <h4>Add Step:</h4>
            <button className="btn btn-success mb-2" onClick={() => setShowCreate(true)}>+</button>

            {showCreate && (
                <div className="card p-3 mb-3">
                    <div className="mb-2">
                        <label className="form-label">Step name:</label>
                        <input className="form-control" type="text" onChange={(e) => setStepName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Step description:</label>
                        <input className="form-control" type="text" onChange={(e) => setStepDesc(e.target.value)} />
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" onChange={(e) => setMandatory(e.target.checked)} />
                        <label className="form-check-label">Mandatory</label>
                    </div>
                    <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
                </div>
            )}

            <h2>Steps:</h2>
            {arr.length === 0 ? (
                <p>There are no steps</p>
            ) : (
                arr.map((step, index) => (
                    <p className="text-primary" style={{ cursor: 'pointer' }} onClick={() => handleClick(step)} key={index}>
                        Step {index + 1}
                    </p>
                ))
            )}
        </div>
    );
}

export default Display;
