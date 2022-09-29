import React from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import BodyPartsList from '../components/BodyPartsList';

const bodyPartsUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
const exercisesUrl = 'https://exercisedb.p.rapidapi.com/exercises';

function Home() {
  let [search, setSearch] = React.useState('');
  let [exercises, setExercises] = React.useState([]);
  let [bodyParts, setBodyParts] = React.useState([]);

    React.useEffect(() => {
        const fetchExercisesData = async () => {
          const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    
          setBodyParts(['all', ...bodyPartsData]);
        };
    
        fetchExercisesData();
      }, []);

  const handleSearch = async () => {
    if (search) {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

        const searchExercises = exerciseData
            .filter(exercise => 
                exercise.name.toLowerCase().includes(search) || 
                exercise.target.toLowerCase().includes(search) ||
                exercise.equipment.toLowerCase().includes(search) ||
                exercise.bodyPart.toLowerCase().includes(search));

        setSearch('');
    }
  };

  return (
    <>
    <section>
        <img src='img/hero/hero-1.jpg'/>
    </section>
    
    <section className="classes-section spad">
        <div className="container">
            <div className="col-12">
                <div className="section-title">
                    <span>Awsome Exercises</span>
                </div>
                <div className="row">
                    <input className="offset-1 col-8" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                    <button className="btn btn-secondary col-2" style={{marginLeft: '10px'}} onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    </section>

    <BodyPartsList bodyParts={bodyParts}/>
    </>
  )
}

export default Home