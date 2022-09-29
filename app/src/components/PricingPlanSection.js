import React from 'react'
import PricingPlanCard from './PricingPlanCard'

function PricingPlanSection() {
  return (
    <section class="pricing-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Plan</span>
                        <h2>Choose your pricing plan</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <PricingPlanCard />
                <PricingPlanCard />
                <PricingPlanCard />
            </div>
        </div>
    </section>
  )
}

export default PricingPlanSection