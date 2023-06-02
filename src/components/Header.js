import Title from './Title';
import {Link} from "react-router-dom";
import UserAuth from './UserAuth';

const Header = function() {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>                    
                    <li>Cart</li>
                    <UserAuth/>
                </ul>
            </div>
        </div>
    );
}

export default Header;