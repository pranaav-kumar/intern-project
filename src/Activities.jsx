import { useNavigate } from "react-router-dom";

function Activities(){

    const navigate = useNavigate();
    return(
    <>
    <p>this is a placeholder page for activities</p>
    <button onClick = {()=>navigate(-1)}>back</button>
    </>
);
}

export default Activities