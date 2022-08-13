import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos, name}) => {
  
  if (!exerciseVideos.length) return <Loader />
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px'}}} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="center" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row'}, gap: { lg: '110px', xs: '0' }}}>
        {exerciseVideos?.slice(0,6).map((item, index)=> 
          {if (item.video) return(
          <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img style={{ borderTopLeftRadius: '20px', height: '14rem' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
          <Box>
            <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
              {item.video.title}
            </Typography>
            <Typography fontSize="14px" color="#000">
              {item.video.channelName}
            </Typography>
          </Box>
        </a>)}
          )}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos;