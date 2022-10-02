import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { fetchData } from '../utils/fetchData';

// components
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SearchExercises';

function ExerciseDetails() {
    const [exerciseDetails, setExerciseDetails] = useState({})

    const { id } = useParams();
    const exerciseUrl = `https://localhost:7000/api/exercises/getexercise?id=${id}`;

    useEffect(() => {
        const gettingExerciseData = () => {
            fetchData(exerciseUrl)
                .then(exercise => {
                    console.log(exercise);
                    setExerciseDetails(exercise);
                });
        };

        gettingExerciseData();
    }, [id]);

    return (
        <>
            <h1>Exercise Name: {exerciseDetails.name}</h1>
            <h1>Exercise Gif: <img src={exerciseDetails.gifUrl} alt={exerciseDetails.name} /></h1>
            
        </>
    )
}

export default ExerciseDetails;