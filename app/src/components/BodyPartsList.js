import React from 'react'

import BodyPart from './BodyPart'

function BodyPartsList({ bodyParts, exercises, setExercises }) {

  const bodyPartSearch = (name) => {
    const searchExercises = exercises
      .filter(exercise =>
        exercise.target.toLowerCase().includes(name.toLowerCase()));

        console.log(searchExercises);
        console.log(name);
    setExercises(searchExercises);
  };

  return (
    <section class="choseus-section spad">
      <div class="container">
        <div className='row'>
          {bodyParts.map((bodyPart, index) => <BodyPart key={index} name={bodyPart} bodyPartSearch={bodyPartSearch} />)}
        </div>
      </div>
    </section>
  )
}

export default BodyPartsList