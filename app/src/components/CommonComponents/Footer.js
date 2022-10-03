import React from 'react'

function Footer() {
    return (
        <>
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="fs-about">
                                <div className="fa-logo">
                                    <a href="#"><img src="img/logo.png" alt="" /></a>
                                </div>
                                <p>This is a place where you can find over 1300 exercises for every body and muscle part.</p>
                                <p>We offer individual fitness programs for each of you.</p>
                                <p>Open source project.</p>
                                <div className="fa-social">
                                    <a href="https://www.linkedin.com/in/radoslav-radev-908a96235/" target={'_blank'}><i className="fa fa-linkedin"></i></a>
                                    <a href="https://www.youtube.com/channel/UCzNrEIAcnrwPiJDiMRuVOyQ" target={'_blank'}><i className="fa fa-youtube-play"></i></a>
                                    <a href="#" target={'_blank'}><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Useful links</h4>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Classes</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Support</h4>
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">My account</a></li>
                                    <li><a href="#">Subscribe</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="fs-widget">
                                <h4>Contact</h4>
                                <p><i className="fa fa-envelope-o"> <span> </span> radevradoslav12@gmail.com</i></p>
                                <p><i className="fa fa-phone"> <span> </span> +359 87 747 5376</i></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright-text">
                                <p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Footer