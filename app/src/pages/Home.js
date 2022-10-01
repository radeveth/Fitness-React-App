import React, { useEffect, useState } from 'react';

import exercisesData from '../utils/exercisesData';
import { fetchData, exerciseOptions } from '../utils/fetchData';

// components
import BodyPartsList from '../components/BodyPartsList';
import SearchExercises from '../components/SearchExercises';

const bodyPartsUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

function Home() {
  const [exercises, setExercises] = useState(exercisesData);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    // const bodyPartsData = fetchData(bodyPartsUrl, exerciseOptions);
    // setBodyParts(bodyPartsData);

    //   const bodtPartsData = () => {
    //     fetch(bodyPartsUrl, exerciseOptions)
    //       .then(response => response.json())
    //       .then(data => setBodyParts(["all", ...data]]))
    //       .catch(error => console.log(error));
    // };
    // bodtPartsData();

    setBodyParts(["all", "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]);
  }, []);
  return (
    <>
      <section>
        <img src='./assets/img/hero/hero-1.jpg' />
      </section>

      {bodyParts.length == 0 || <BodyPartsList bodyParts={bodyParts} exercises={exercises} setExercises={setExercises} />}

      <SearchExercises exercises={exercises} setExercises={setExercises} />
    </>
  )
}

export default Home;