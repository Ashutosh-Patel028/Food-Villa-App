import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () =>{
    const [count,setCount]=useState(0);
    return (
    <div>
        <h3>This is Profile Page</h3>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Count</button>
    </div>
    )
}

export default Profile;