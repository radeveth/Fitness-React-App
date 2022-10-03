import React, { useEffect, useState } from 'react';
import { Box, Stack, Pagination } from '@mui/material';

// components
import ExerciseCard from './ExerciseCard';

function Exercises({ exercises }) {
    const [currentPage, setCurrentPage] = useState(1);

    const exercisesPerPage = 9;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const targetExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1750, behavior: 'smooth'});
    };

    return (
        <section className="classes-section">
            <Box id="exercises">
                <div className="container">
                    <center><span className="badge mb-5 text-white"><h2>Showing Result</h2></span></center>
                </div>
                <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                    { targetExercises.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} />) }
                </Stack>
            </Box>
            <Stack mt="100px" alignItems="center" color="white">
                <Pagination color="primary" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size="large" />
            </Stack>
        </section>
    )
}

export default Exercises;