import { useState, useEffect } from 'react';

import { fetchData } from '../utils/fetchData';

// components
import Exercises from './Exercises';

const exercisesUrl = 'https://localhost:7000/api/Exercises/All';

function SearchExercises({ exercises, setExercises }) {
    let [search, setSearch] = useState('');

    const handleSearch = async () => {
        if (search) {
            const searchProcess = () => {
                fetchData(exercisesUrl)
                    .then(exercisesData => {
                        const searchExercises = exercisesData.filter(exercise =>
                            exercise.name.toLowerCase().includes(search) ||
                            exercise.targetMuscleName.toLowerCase().includes(search) ||
                            exercise.equipmentType.toLowerCase().includes(search) ||
                            exercise.bodyPartName.toLowerCase().includes(search));

                        setExercises(searchExercises);
                    });

                setSearch('');
                window.scrollTo({ top: 1680, left: 100, behavior: 'smooth' });
            }

            searchProcess();
        }
    };

    return (
        <>
            <section className="classes-section spad">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title">
                            <span>Seacrh for Awsome Exercises</span>
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