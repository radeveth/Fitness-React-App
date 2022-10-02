import React from 'react'

function AboutUs() {
    return (
        <div>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="canvas-close">
                    <i className="fa fa-close"></i>
                </div>
                <div className="canvas-search search-switch">
                    <i className="fa fa-search"></i>
                </div>
                <nav className="canvas-menu mobile-menu">
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="./about-us.html">About Us</a></li>
                        <li><a href="./classNamees.html">ClassNamees</a></li>
                        <li><a href="./services.html">Services</a></li>
                        <li><a href="./team.html">Our Team</a></li>
                        <li><a href="#">Pages</a>
                            <ul className="dropdown">
                                <li><a href="./about-us.html">About us</a></li>
                                <li><a href="./className-timetable.html">ClassNamees timetable</a></li>
                                <li><a href="./bmi-calculator.html">Bmi calculate</a></li>
                                <li><a href="./team.html">Our team</a></li>
                                <li><a href="./gallery.html">Gallery</a></li>
                                <li><a href="./blog.html">Our blog</a></li>
                                <li><a href="./404.html">404</a></li>
                            </ul>
                        </li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="canvas-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                </div>
            </div>

            <header className="header-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="nav-menu">
                                <ul>
                                    <li><a href="./index.html">Home</a></li>
                                    <li className="active"><a href="./about-us.html">About Us</a></li>
                                    <li><a href="./className-details.html">ClassNamees</a></li>
                                    <li><a href="./services.html">Services</a></li>
                                    <li><a href="./team.html">Our Team</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="./about-us.html">About us</a></li>
                                            <li><a href="./className-timetable.html">ClassNamees timetable</a></li>
                                            <li><a href="./bmi-calculator.html">Bmi calculate</a></li>
                                            <li><a href="./team.html">Our team</a></li>
                                            <li><a href="./gallery.html">Gallery</a></li>
                                            <li><a href="./blog.html">Our blog</a></li>
                                            <li><a href="./404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./contact.html">Contact</a></li>
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

            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>About us</h2>
                                <div className="bt-option">
                                    <a href="./index.html">Home</a>
                                    <span>About</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Why chose us?</span>
                                <h2>PUSH YOUR LIMITS FORWARD</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-034-stationary-bike"></span>
                                <h4>Modern equipment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    dolore facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-033-juice"></span>
                                <h4>Healthy nutrition plan</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-002-dumbell"></span>
                                <h4>Proffesponal training plan</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    dolore facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-014-heart-beat"></span>
                                <h4>Unique to your needs</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aboutus-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="about-video set-bg" data-setbg="img/about-us.jpg">
                                <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i
                                    className="fa fa-caret-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="about-text">
                                <div className="section-title">
                                    <span>About Us</span>
                                    <h2>What we have done</h2>
                                </div>
                                <div className="at-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                        viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div className="about-bar">
                                    <div className="ab-item">
                                        <p>Body building</p>
                                        <div id="bar1" className="barfiller">
                                            <span className="fill" data-percentage="80"></span>
                                            <div className="tipWrap">
                                                <span className="tip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ab-item">
                                        <p>Training</p>
                                        <div id="bar2" className="barfiller">
                                            <span className="fill" data-percentage="85"></span>
                                            <div className="tipWrap">
                                                <span className="tip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ab-item">
                                        <p>Fitness</p>
                                        <div id="bar3" className="barfiller">
                                            <span className="fill" data-percentage="75"></span>
                                            <div className="tipWrap">
                                                <span className="tip"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-title">
                                <div className="section-title">
                                    <span>Our Team</span>
                                    <h2>TRAIN WITH EXPERTS</h2>
                                </div>
                                <a href="#" className="primary-btn btn-normal appoinment-btn">appointment</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ts-slider owl-carousel">
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-1.jpg">
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-2.jpg">
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-3.jpg">
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-4.jpg">
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-5.jpg">
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-6.jpg">
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="banner-section set-bg" data-setbg="img/banner-bg.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="bs-text">
                                <h2>registration now to get more deals</h2>
                                <div class="bt-tips">Where health, beauty and fitness meet.</div>
                                <a href="#" class="primary-btn  btn-normal">Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="testimonial-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Testimonial</span>
                                <h2>Our cilent say</h2>
                            </div>
                        </div>
                    </div>
                    <div class="ts_slider owl-carousel">
                        <div class="ts_item">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <div class="ti_pic">
                                        <img src="img/testimonial/testimonial-1.jpg" alt="" />
                                    </div>
                                    <div class="ti_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                                        <h5>Marshmello Gomez</h5>
                                        <div class="tt-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ts_item">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <div class="ti_pic">
                                        <img src="img/testimonial/testimonial-2.jpg" alt="" />
                                    </div>
                                    <div class="ti_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                                        <h5>Marshmello Gomez</h5>
                                        <div class="tt-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="gettouch-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="gt-text">
                                <i class="fa fa-map-marker"></i>
                                <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gt-text">
                                <i class="fa fa-mobile"></i>
                                <ul>
                                    <li>125-711-811</li>
                                    <li>125-668-886</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gt-text email">
                                <i class="fa fa-envelope"></i>
                                <p>Support.gymcenter@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="footer-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="fs-about">
                                <div class="fa-logo">
                                    <a href="#"><img src="img/logo.png" alt="" /></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                                <div class="fa-social">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-youtube-play"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa  fa-envelope-o"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6">
                            <div class="fs-widget">
                                <h4>Useful links</h4>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Classes</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6">
                            <div class="fs-widget">
                                <h4>Support</h4>
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">My account</a></li>
                                    <li><a href="#">Subscribe</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="fs-widget">
                                <h4>Tips & Guides</h4>
                                <div class="fw-recent">
                                    <h6><a href="#">Physical fitness may help prevent depression, anxiety</a></h6>
                                    <ul>
                                        <li>3 min read</li>
                                        <li>20 Comment</li>
                                    </ul>
                                </div>
                                <div class="fw-recent">
                                    <h6><a href="#">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
                                    <ul>
                                        <li>3 min read</li>
                                        <li>20 Comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="copyright-text">
                                <p>Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="search-model">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <div class="search-close-switch">+</div>
                    <form class="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AboutUs