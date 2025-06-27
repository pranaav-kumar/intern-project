import { useState } from "react";
import Display from "./Display.jsx";

function Front(){

    const [projectName, setProjectName] = useState("");
    const [inputValue, setInputValue] = useState(""); 
    const [descValue, setDescValue] = useState(""); 

    const btnClick = () => {
        setProjectName(inputValue);
        setDescValue(descValue);
    };

    return(
        <div className="container mt-4">
            {projectName === '' ? 
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Create New Project</h2>
                                <div className="mb-3">
                                    <label className="form-label">Project Name</label>
                                    <input
                                        className="form-control"
                                        placeholder="Enter project name"
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Project Description</label>
                                    <input
                                        className="form-control"
                                        placeholder="Enter project description"
                                        onChange={(e) => setDescValue(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-primary w-100" onClick={btnClick}>
                                    Create Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            :
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Project</li>
                        </ol>
                    </nav>
                    <div className="mb-4">
                        <h1 className="display-6">{projectName}</h1>
                        <p className="text-muted">{descValue}</p>
                    </div>
                    <Display/>
                </div>}
            </div>
        )
    }

export default Front