import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: '#FFF' }}>
            <div className="container p-2">
                <Link class='navbar-brand' to="/"> 
                {/* Logo */}
                <img src='media/images/images/logo.svg' alt='logo' style={{ width: '30%' }} />
                </Link>

                {/* Navbar Toggler for Mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0"> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/view">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Support">Support</Link>
                        </li>
                        
                        
                        <li className='nav-item'>
                          <a className='nav-link active' href='/'><i class="fa fa-bars" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
