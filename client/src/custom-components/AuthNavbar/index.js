import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import rocketGif from '../../assets/img/rocket-2.gif';
import './style.css';

export default function AuthNavbar() {
    return (
        <nav className="navbar navbar-expand-lg nav-transparent-custom">
            <a className="navbar-brand" id="auth-nav-brand" href="/">
                <img src={rocketGif} height='100px' width='100px' />
                <span className="nav-text nav-text-custom">2DaMooooon!</span>
            </a>

            <div className="collapse navbar-collapse justify-content-end" id="navbar">
                <ul className="navbar-nav navbar-nav-custom">

                    <li className="nav-item login-custom">
                        <Link to="/signup" className="nav-link">
                            <span>Sign Up</span>
                            </Link>
                    </li>
                    <li className="nav-item  login-custom ">
                        <Link to="/login" className="nav-link">
                            <span>Login</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

