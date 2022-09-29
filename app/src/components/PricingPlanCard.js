import React from 'react'

function PricingPlanCard() {
  return (
    <div class="col-lg-4 col-md-8">
        <div class="ps-item">
            <h3>Class drop-in</h3>
            <div class="pi-price">
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
            <a href="#" class="primary-btn pricing-btn">Enroll now</a>
            <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
        </div>
    </div>
  )
}

export default PricingPlanCard