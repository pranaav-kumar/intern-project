import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Display(){

    const [stepName,setStepName] = useState('')
    const [stepDesc,setStepDesc] = useState('')
    const [mandatory,setMandatory] = useState(false)
    const [showCreate,setShowCreate] = useState(false)
    const [arr,setArr] = useState([])

    const navigate = useNavigate();

    const onSubmit = () =>{
        const data = {
            name : stepName,
            description : stepDesc,
            mandatory : mandatory
        }
        setArr([...arr,data])
        setShowCreate(false);
        setStepName('');
        setStepDesc('');
        setMandatory(false);
    }

    const handleClick = (step) =>{
        navigate('/steps',{state : step});
    }

    return(
        <div className="row">
            <div className="col-md-6">
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Add Step</h5>
                        <button className="btn btn-success btn-sm" onClick={()=>setShowCreate(true)}>
                            <i className="bi bi-plus"></i> Add
                        </button>
                    </div>
                    {showCreate && 
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Step Name</label>
                                <input className="form-control" type="text" onChange={(e)=>setStepName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Step Description</label>
                                <input className="form-control" type="text" onChange={(e)=>setStepDesc(e.target.value)} />
                            </div>
                            <div className="mb-3 form-check">
                                <input className="form-check-input" type="checkbox" onChange={(e)=>setMandatory(e.target.checked)} />
                                <label className="form-check-label">Mandatory</label>
                            </div>
                            <button className="btn btn-primary" onClick={()=> onSubmit()}>Submit</button>
                        </div>
                    }
                </div>
            </div>

            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">Steps ({arr.length})</h5>
                    </div>
                    <div className="card-body">
                        {arr.length == 0 ? 
                            <p className="text-muted">No steps added yet</p> : 
                            <div className="list-group list-group-flush">
                                {arr.map((step,index)=>(
                                    <div key={index} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => handleClick(step)}>
                                        <div>
                                            <strong>Step {index+1}</strong>
                                            <small className="text-muted d-block">{step.name}</small>
                                        </div>
                                        {step.mandatory && <span className="badge bg-warning">Required</span>}
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Display