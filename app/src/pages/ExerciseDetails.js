import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { fetchData, youtubeOptions } from '../utils/fetchData.js';

// components
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

function ExerciseDetails() {
    const [exerciseDetails, setExerciseDetails] = useState({});
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [similarExercisesByEquipment, setSimilarExercisesByEquipment] = useState([]);
    const [similarExercisesByTargetMuscle, setSimilarExercisesByTargetMuscle] = useState([]);

    const { id } = useParams();
    const exerciseUrl = `https://localhost:7000/api/exercises/getexercise?id=${id}`;
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/search';
    const similarExercisesSearchUrl = 'https://localhost:7000/api/exercises/all';

    useEffect(() => {
        const gettingExerciseData = () => {
            fetchData(exerciseUrl)
                .then(exercise => {
                    setExerciseDetails(exercise);
                    let exerciseName = exercise.name;
                    let exerciseEqipment = exercise.equipmentType;
                    let exerciseTargetMuscle = exercise.targetMuscleName;

                    const youtubeVideosData = () => {
                        fetchData(`${youtubeSearchUrl}?query=${exerciseName}`, youtubeOptions)
                            .then(youtubeVideos => {
                                setYoutubeVideos(youtubeVideos.contents);
                            });
                    };

                    const similarExercisesByEquipment = () => {
                        fetchData(`${similarExercisesSearchUrl}?equipment=${exerciseEqipment}`)
                            .then(exercisesData => {
                                setSimilarExercisesByEquipment(exercisesData.slice(1));
                            });
                    };

                    const similarExercisesByTargetMuscle = () => {
                        fetchData(`${similarExercisesSearchUrl}?targetMuscle=${exerciseTargetMuscle}`)
                            .then(exercisesData => {
                                setSimilarExercisesByTargetMuscle(exercisesData.slice(1));
                            });
                    };

                    youtubeVideosData();
                    similarExercisesByEquipment();
                    similarExercisesByTargetMuscle();
                });
        };

        gettingExerciseData();
    }, [id]);

    return (
        <>
            <Detail exercise={exerciseDetails} />
            <ExerciseVideos exerciseVideos={youtubeVideos} name={exerciseDetails.name} />
            <SimilarExercises equipmentExercises={similarExercisesByEquipment} targetMuscleExercises={similarExercisesByTargetMuscle} />
        </>
    )
}

export default ExerciseDetails;