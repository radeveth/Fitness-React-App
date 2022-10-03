import React from 'react'
import { fetchData } from '../../utils/fetchData';

// components
import BodyPart from './BodyPart'

function BodyPartsList({ bodyParts, setExercises }) {

  const bodyPartSearch = (name) => {
    const exercisesData = () => {
      fetchData('https://localhost:7000/api/Exercises/All')
        .then(data => {
          let searchExercises = data;

          if (name.toLowerCase() != 'all') {
            searchExercises = searchExercises.filter(exercise => exercise.bodyPartName.toLowerCase().includes(name.toLowerCase()));
          }

          setExercises(searchExercises);

          window.scrollTo({ top: 1680, left: 100, behavior: 'smooth' });
        })
    };

    exercisesData();
  };

  return (
    <>
      <section class="choseus-section spad">
        <div class="container">
          <div className="scrollmenu">
            {bodyParts.map((bodyPart) => <BodyPart key={bodyPart.id} name={bodyPart.name} bodyPartSearch={bodyPartSearch} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default BodyPartsList