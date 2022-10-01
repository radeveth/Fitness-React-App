import React, { useEffect, useState } from 'react';

import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData } from '../utils/fetchData';

function Exercises({ exercises, bodyParts }) {
    const a = [
        {
            "bodyPart": "waist",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
            "id": "0001",
            "name": "3/4 sit-up",
            "target": "abs"
        },
        {
            "bodyPart": "waist",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
            "id": "0002",
            "name": "45° side bend",
            "target": "abs"
        },];

    return (
        <section className="classes-section spad">
            <Box id="exercises">
                <div className="container">
                    <center><span className="badge mb-5 text-white"><h2>Showing Result</h2></span></center>
                </div>
                <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                    {/* {a.map(ex => { <ExerciseCard key={ex.id} exercise={ex} /> })} */}
                    <ExerciseCard key={a[0].id} exercise={a[0]} />
                    <ExerciseCard key={a[1].id} exercise={a[1]} />
                    <ExerciseCard key={a[0].id} exercise={a[0]} />
                    <ExerciseCard key={a[1].id} exercise={a[1]} />
                </Stack>
            </Box>
        </section>
    )
}

export default Exercises;