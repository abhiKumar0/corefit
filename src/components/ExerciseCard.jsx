import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
                <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20ox', textTransform: 'capitalize'}} >
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: '#fff', background: '#fcc557', fontSize: '14px', borderRadius: '20ox', textTransform: 'capitalize'}} >
                    {exercise.bodyPart}
                </Button>
            </Stack>
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '22px', xs: '20px'}}} mt="11px" pb='10px' textTransform="capitalize" >{exercise.name}</Typography>
        </Link>
    )
}

export default ExerciseCard;