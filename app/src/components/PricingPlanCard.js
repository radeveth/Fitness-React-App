import React from 'react'

function PricingPlanCard() {
  return (
    <div className="col-lg-4 col-md-8">
        <div className="ps-item">
            <h3>Class drop-in</h3>
            <div className="pi-price">
                <h2>$ 39.0</h2>
                <span>SINGLE CLASS</span>
            </div>
            <ul>
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classes</li>
                <li>Month to mouth</li>
                <li>No time restriction</li>
            </ul>
            <a href="#" className="primary-btn pricing-btn">Enroll now</a>
            <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
        </div>
    </div>
  )
}

export default PricingPlanCard