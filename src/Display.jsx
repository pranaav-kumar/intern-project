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
    }

    const handleClick = (step) =>{
        navigate('/steps',{state : step});
    }


    return(
        <>
    <div>
        <h4>add step:</h4>
        <button onClick={()=>setShowCreate(true)}>+</button>

        {showCreate ? 
        <div>
            <label>Step name:</label>
            <input type="text" onChange={(e)=>setStepName(e.target.value)}></input>
            <label>Step description:</label>
            <input type="text" onChange={(e)=>setStepDesc(e.target.value)}></input>
            <label>mandatory:</label>
            <input type="checkbox" onChange={(e)=>setMandatory(e.target.checked)}></input>

            <button onClick={()=> onSubmit() }>Submit</button>
        </div>

        : <br/>}
    </div>

    <div>
        <h2>Steps: </h2>

        {arr.length == 0 ? <p>there are no steps</p> : 
        arr.map((step,index)=>(<p onClick={() => handleClick(step)}>step {index+1}</p>))}
    </div>
    </>
    );
}
export default Display