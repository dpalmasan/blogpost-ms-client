import { Link, useNavigate } from 'react-router-dom';
import AuthConsumer from "../../hooks/Auth";

import './NavBar.css';

const NavBar = () => {

    const { authed, logout } = AuthConsumer();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };
    return (
        <nav className='navbar'>
            <div className="logo">Simple Client for MS Example</div>
            <div className="menu">
                <ul className='nav-links'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/blogs">Blog Posts</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {authed && <li><a onClick={handleLogout}>Logout</a></li>}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;