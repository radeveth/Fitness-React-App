import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Stack, Typography } from '@mui/material';

function ExerciseCard({ exercise }) {
    return (
        <Link to={`/exercise/${exercise.id}`}>
            <div className="exercise-card">
                <img src={exercise.gifUrl} alt={exercise.weightname} Loading="lazy" />
                <span className="badge text-dark font--bold">{exercise.name}</span>
                <Stack direction="row">
                    <Button className="bg-danger" style={{ color: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', marginLeft: '12px' }}>
                        {exercise.bodyPartName}
                    </Button>
                    <Button className="bg-warning" style={{ color: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', marginLeft: '12px' }}>
                        {exercise.targetMuscleName}
                    </Button>
                </Stack>
            </div>
        </Link>
    )
}

export default ExerciseCard;