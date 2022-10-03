import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

// import BodyPartImage from '../../public/assets/img/exerciseDetails/body-part.png'
// import TragetMuscleImage from '../../public/assets/img/exerciseDetails/target.png';
// import EquipmentImage from '../../public/assets/img/exerciseDetails/equipment.png';

function Detail({ exercise }) {
    const extraDetail = [
        {
            icon: 'https://cdn-icons-png.flaticon.com/512/3525/3525377.png',
            name: "Body Part"
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/512/3466/3466056.png',
            name: "Target Muscle"
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/512/4658/4658440.png',
            name: "Equipment"
        }
    ];
    
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' }, color: "white" }} fontWeight={700} textTransform="capitalize">
                    {exercise.name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="white">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{exercise.name}</span> bup is one
                    of the best <br /> exercises to target your {exercise.targetMuscleName}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>
                {extraDetail?.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                            <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail;