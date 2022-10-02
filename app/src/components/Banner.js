import React from 'react'

function Banner() {
  return (
    <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="bs-text">
                        <h2>registration now to get more deals</h2>
                        <div className="bt-tips">Where health, beauty and fitness meet.</div>
                        <a href="#" className="primary-btn  btn-normal">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner