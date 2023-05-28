import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = ()=>{
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is React Restaurant App</p>
            <Outlet/>
            <ProfileClass/>
        </div>
    )
}
export default About;