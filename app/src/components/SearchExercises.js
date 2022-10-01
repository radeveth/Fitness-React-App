import { useState, useEffect } from 'react';

import { fetchData, exerciseOptions } from '../utils/fetchData';

// components
import Exercises from './Exercises';

const exercisesUrl = 'https://exercisedb.p.rapidapi.com/exercises';

function SearchExercises({ exercises, setExercises }) {
    let [search, setSearch] = useState('');

    const handleSearch = async () => {
        if (search) {
            // const exercisesData = fetchData(exercisesUrl, exerciseOptions);

            const searchExercises = exercises
                .filter(exercise =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search));

            setSearch('');
            setExercises(searchExercises);

            window.scrollTo({ top: 1900, left: 100, behavior: 'smooth' });
        }
    };

    return (
        <>
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

            {exercises.length != 0 && <Exercises exercises={exercises} />}
        </>
    )
}

export default SearchExercises;