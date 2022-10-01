import React, { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import BodyPartsList from '../components/BodyPartsList';
import Exercises from '../components/Exercises';

const bodyPartsUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
const exercisesUrl = 'https://exercisedb.p.rapidapi.com/exercises';

function Home() {
  let [search, setSearch] = useState('');
  let [exercises, setExercises] = useState([]);
  let [bodyParts, setBodyParts] = useState([]);

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

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(exercisesUrl, exerciseOptions);

      const searchExercises = exerciseData
        .filter(exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search));

      setExercises(searchExercises);
    }
  };

  return (
    <>
      <section>
        <img src='./assets/img/hero/hero-1.jpg' />
      </section>

      <section className="classes-section spad">
        <div className="container">
          <div className="col-12">
            <div className="section-title">
              <span>Awsome Exercises</span>
            </div>
            <div className="row">
              <input className="offset-1 col-8" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
              <button className="btn btn-secondary col-2" style={{ marginLeft: '10px' }} onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </section>

      {bodyParts.length == 0 || <BodyPartsList bodyParts={bodyParts} />}

      <Exercises exercises={exercises} bodyParts={bodyParts} />
    </>
  )
}

export default Home