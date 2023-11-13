import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{fontFamily: 'Montserrat', fontWeight: 600, backgroundColor: '#5627CC', color: 'white'}} className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <NavLink style={{ color: 'white' }} className="navbar-brand p-2" to="/">
                    Voilet.io
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul style={{color: 'white'}} className="navbar-nav me-auto mb-2 mb-lg-0 p-1">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">
                                Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactus">
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/event">
                                Event Handling
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/state">
                                State Management
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                        />
                        <button style={{fontWeight: 500}} className="btn searchbtn" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;