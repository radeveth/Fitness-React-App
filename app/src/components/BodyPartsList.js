import React from 'react'

import BodyPart from './BodyPart'

function BodyPartsList({ bodyParts }) {

  return (
    <section class="choseus-section spad">
      <div class="container">
        <div className='row'>
          {bodyParts.map((bodyPart, index) => <BodyPart key={index} name={bodyPart} />)}
        </div>
      </div>
    </section>
  )
}

export default BodyPartsList