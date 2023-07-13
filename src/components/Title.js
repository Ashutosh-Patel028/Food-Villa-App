import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
const Title = () =>(
    <Link to="/">
        <img className="h-28 px-2 py-1" alt="Logo" src={logo}/>
    </Link>
)

export default Title;