import Title from './Title';
import {Link} from "react-router-dom";
import UserAuth from './UserAuth';

const Header = function() {
    return (
        <div className="flex justify-between bg-white shadow-xl sticky top-0">
            <Title/>
            <div className="font-semibold">
                <ul className='flex py-10 '>
                    <li className='px-3 hover:bg-orange-400 hover:font-bold hover:text-white py-1 rounded-lg'><Link to="/">Home</Link></li>
                    <li className='px-3 hover:bg-orange-400 hover:font-bold hover:text-white py-1 rounded-lg'><Link to="/about">About</Link></li>
                    <li className='px-3 hover:bg-orange-400 hover:font-bold hover:text-white py-1 rounded-lg'><Link to="/contact">Contact</Link></li>                    
                    <li className='px-3 hover:bg-orange-400 hover:font-bold hover:text-white py-1 rounded-lg'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    </li>
                </ul>
            </div>
            <UserAuth/>
        </div>
    );
}

export default Header;