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
        projectName === '' ? 

        <>
                <label>Project name:</label>
                <input
                placeholder="Project name"
                onChange={(e) => setInputValue(e.target.value)}
                />

                <label>project description:</label>
                <input
                placeholder="Project description"
                onChange={(e) => setDescValue(e.target.value)}
                />
                <button onClick={btnClick}>Create</button>
            </>
            
        :

        <div>
        <h1>{projectName}</h1>
        <h3>{descValue}</h3>
        <Display/>
        </div>
        );
}

export default Front