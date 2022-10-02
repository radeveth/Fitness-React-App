import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <Link to="/">
                                <img src="./assets/img/logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="nav-menu">
                            <ul>
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><a href="#">Programs</a>
                                    <ul className="dropdown">
                                        <li><Link to="/aboutus">Beginner</Link></li>
                                        <li><Link to="/programs">Intermediate</Link></li>
                                        <li><Link to="/programs">Advanced</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="top-option">
                            <div className="to-search search-switch">
                                <i className="fa fa-search"></i>
                            </div>
                            <div className="to-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="canvas-open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    )
}

export default Header;