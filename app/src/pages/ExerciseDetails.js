import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { fetchData, youtubeOptions } from '../utils/fetchData.js';

// components
import Detail from '../components/ExercisesComponents/Detail';
import ExerciseVideos from '../components/ExercisesComponents/ExerciseVideos';
import SimilarExercises from '../components/ExercisesComponents/SimilarExercises';

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
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

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
                                exercisesData = exercisesData.filter(exercise => exercise.id != id);
                                setSimilarExercisesByEquipment(exercisesData);
                            });
                    };

                    const similarExercisesByTargetMuscle = () => {
                        fetchData(`${similarExercisesSearchUrl}?targetMuscle=${exerciseTargetMuscle}`)
                            .then(exercisesData => {
                                exercisesData = exercisesData.filter(exercise => exercise.id != id);
                                setSimilarExercisesByTargetMuscle(exercisesData);
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
            <div>
                <div style={{ height: '150px', backgroundColor: 'black' }}></div>
            </div>

            <section className="classes-section spad">
                <Detail exercise={exerciseDetails} />
                <ExerciseVideos exerciseVideos={youtubeVideos} name={exerciseDetails.name} />
                <SimilarExercises equipmentExercises={similarExercisesByEquipment} targetMuscleExercises={similarExercisesByTargetMuscle} />
                <div className="text-404 mt-5"><Link to="/"><i className="fa fa-home"></i> Go back home</Link></div>
            </section>
        </>
    )
}

export default ExerciseDetails;