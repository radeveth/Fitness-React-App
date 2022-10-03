import React from 'react';

import { Typography, Box, Stack } from '@mui/material';

import Loader from './Loader';
import ExerciseCard from './ExerciseCard'

function SimilarExercises({ equipmentExercises, targetMuscleExercises }) {

    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                <div className="scrollmenu">
                    {targetMuscleExercises.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} />)}
                </div>
            </Stack>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                <div className="scrollmenu">
                    {equipmentExercises.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} />)}
                </div>
            </Stack>
        </Box>
    )
}

export default SimilarExercises;