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
                <>
                    <h2>Create Project</h2>
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
                    <button className="btn btn-primary" onClick={btnClick}>Create</button>
                </>
            ) : (
                <>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Home</li>
                        </ol>
                    </nav>
                    <div>
                        <h1>{projectName}</h1>
                        <h3>{descValue}</h3>
                        <Display />
                    </div>
                </>
            )}
        </div>
    );
}

export default Front;
