import Title from './Title';
import {Link} from "react-router-dom";
import UserAuth from './UserAuth';

const Header = function() {
    return (
        <div className="flex justify-between bg-white shadow-xl sticky top-0">
            <Title/>
            <div className="">
                <ul className='flex py-10'>
                    <li className='px-3'><Link to="/">Home</Link></li>
                    <li className='px-3'><Link to="/about">About</Link></li>
                    <li className='px-3'><Link to="/contact">Contact</Link></li>                    
                    <li className='px-3'>Cart</li>
                </ul>
            </div>
            <UserAuth/>
        </div>
    );
}

export default Header;