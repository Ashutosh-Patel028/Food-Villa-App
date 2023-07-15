import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
const Title = () =>(
    <Link to="/">
        <img className="h-full rounded-lg" alt="Logo" src={logo}/>
    </Link>
)

export default Title;