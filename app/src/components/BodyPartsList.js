import React from 'react'

import BodyPart from './BodyPart'

function BodyPartsList({ bodyParts }) {
  return (
    <section class="choseus-section spad">
        <div class="container">
            {/* <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                    </div>
                </div>
            </div> */}
            {bodyParts.map(bodyPart => { <BodyPart key={bodyPart.id} name={bodyPart}/> })}
        </div>
    </section>
  )
}

export default BodyPartsList