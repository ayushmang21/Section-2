import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import useAppContext from '../AppContext';

const Navbar = ({ cartItems }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const {loggedIn, logout} = useAppContext();

    return (
        <nav style={{ fontFamily: 'Montserrat', fontWeight: 600, backgroundColor: '#391b7f', color: 'white' }}
            className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <NavLink style={{ color: 'white', fontFamily: 'monospace', }} className="navbar-brand p-2" to="/">
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
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul style={{ color: 'white' }} className="navbar-nav me-auto mb-2 mb-lg-0 p-1">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todo">
                                To Do List
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/post">
                                Post
                            </NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink className="nav-link" to="/listpost">
                                List-Post
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/createpost">
                                Create-Post
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage">
                                Manage User
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

                        <li className="nav-item dropdown dropdown-center">
                            <a className="btn  text-light dropdown-toggle border-0 fw-semibold mt-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul className="dropdown-menu dropdown-menu-light text-start ps-1" style={{ backgroundColor: '#391b7f', }}>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/chat">
                                        Chat
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
                        </li>

                    </ul>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 focus-ring focus-ring-light"
                            type="search"
                            placeholder="Search"
                        />
                        <button style={{ fontWeight: 500 }} className="btn searchbtn" type="submit">
                            {/* Search */}
                            <i class="bi bi-search"></i>
                        </button>
                    </form>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-1">
                        {
                            loggedIn ? (
                                <button className='btn btn-danger' onClick={logout} >Logout</button>
                            ) :
                                (
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/signup">
                                                Sign Up
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">
                                                Login
                                            </NavLink>
                                        </li>
                                    </>
                                )
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;