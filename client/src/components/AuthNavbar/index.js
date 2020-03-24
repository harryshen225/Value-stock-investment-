import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../src/common/assets/css/light-bootstrap-dashboard.css';
import '../../../src/common/assets/css/demo.css';

export default function AuthNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute">
            <div className="container">
                <div className="navbar-wrapper">
                    <a className="navbar-brand" href="#"> <h2>Progressive User Portal</h2> </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar burger-lines"></span>
                        <span className="navbar-toggler-bar burger-lines"></span>
                        <span className="navbar-toggler-bar burger-lines"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="../dashboard.html" className="nav-link">
                                <i className="nc-icon nc-chart-pie-35"></i> Home
                        </a>
                        </li>
                        <li className="nav-item ">
                            <a href="register.html" className="nav-link">
                                <i className="nc-icon nc-badge"></i> Sign-Up
                        </a>
                        </li>
                        <li className="nav-item  active ">
                            <a href="login.html" className="nav-link" >
                                <i className="nc-icon nc-mobile"></i> Login
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
