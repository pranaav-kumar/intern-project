import { useState } from "react";
import Display from "./Display.jsx";

function Front() {
    const [projectName, setProjectName] = useState("");
    const [inputValue, setInputValue] = useState(""); 
    const [descValue, setDescValue] = useState(""); 

    const btnClick = () => {
        setProjectName(inputValue);
        setDescValue(descValue);
    };

    return (
        <div className="container mt-4">
            {projectName === '' ? (
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4">Create Project</h2>
                                <div className="mb-3">
                                    <label className="form-label">Project name:</label>
                                    <input
                                        className="form-control"
                                        placeholder="Project name"
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Project description:</label>
                                    <input
                                        className="form-control"
                                        placeholder="Project description"
                                        onChange={(e) => setDescValue(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary" onClick={btnClick}>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Home</li>
                        </ol>
                    </nav>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <h1 className="text-primary">{projectName}</h1>
                            <p className="text-muted">{descValue}</p>
                            <Display />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Front;