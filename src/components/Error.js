import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="bg-red-400 text-center">
            <h1>OOps!!!</h1>
            <h2>Something went wrong!!</h2>
            <p>{err.status +"-"+ err.statusText}</p>
        </div>
    )
}

export default Error;