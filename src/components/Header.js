import { useState } from 'react';
import Title from './Title';

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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