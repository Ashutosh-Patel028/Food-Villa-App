import { useState } from 'react';
import Title from './Title';
import {Link} from "react-router-dom";

loggedInUser = () =>{
    return false;
}

const Header = function() {
    const [isLoggedInUser,setIsLoggedInUser] = useState(false);
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>                    
                    <li>Cart</li>
                    {
                        isLoggedInUser ? <button onClick={ ()=>{setIsLoggedInUser(false);}}>Logout</button> : <button onClick={ ()=>{setIsLoggedInUser(true);}}>Login</button>
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;