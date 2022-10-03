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
                                {/* <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="top-option">
                            {/* <div className="to-search search-switch">
                                <i className="fa fa-search"></i>
                            </div> */}
                            <div className="to-social">
                                <a href="https://www.linkedin.com/in/radoslav-radev-908a96235/" target={'_blank'}><i className="fa fa-linkedin"></i></a>
                                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fchannel%2FUCzNrEIAcnrwPiJDiMRuVOyQ%3Ffbclid%3DIwAR1ojfq-MdmeMmBSbhDsRc0jLW43hexSC-iaJrHQAec4ykPToWkDjvDiG0s&h=AT3ODNXF5ETqvMqsfSbDCtc2KhLH3LXu97mPhOpjp-U7Gay8w6YEt64Pmyqumgxw0z1vjEPrHO8reRquiaetGrFHhla1PhfNN4I7T98u2D2wkN5qMWARetz7_Jclt3zLmfpk8Q" target={'_blank'}><i className="fa fa-youtube-play"></i></a>
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