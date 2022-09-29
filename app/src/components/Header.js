import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header class="header-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="logo">
                        <Link to="/">
                            <img src="/img/logo.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="nav-menu">
                        <ul>
                            <li class="active"><Link to="/">Home</Link></li>
                            <li><a href="#">Programs</a>
                                <ul class="dropdown">
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
                <div class="col-lg-3">
                    <div class="top-option">
                        <div class="to-search search-switch">
                            <i class="fa fa-search"></i>
                        </div>
                        <div class="to-social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="canvas-open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
  )
}

export default Header;