import React, { useState } from 'react';
import Cookies from 'js-cookie';
import '../Styles/NavBar.css';

const Navbar = ({ setIsAuthenticated, setActiveComponent }) => {
    const [activeClass, setActiveClass] = useState(1);

    const handleLogout = () => {
        Cookies.remove('jwt-token');
        setIsAuthenticated(false);
    };

    const handleClick = (e) => {
        const ID = Number(e.target.id);
        if (activeClass !== ID) {
            setActiveClass(ID);
            setActiveComponent(ID);
        }
    }

    return (
        <div className="Navbar">
            <div className="NavRow">
                <div className="NavLinks">
                    <p id="1" className={activeClass === 1 ? 'p-active' : 'p-non-active'} onClick={(e) => handleClick(e)}>Policies</p>
                    <p id="2" className={activeClass === 2 ? 'p-active' : 'p-non-active'} onClick={(e) => handleClick(e)}>Claims</p>
                    <p id="3" className={activeClass === 3 ? 'p-active' : 'p-non-active'} onClick={(e) => handleClick(e)}>Create Claim</p>
                </div>
                <div className="btn-div">
                    <button className="logout-btn rounded-pill" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
};

export default Navbar;