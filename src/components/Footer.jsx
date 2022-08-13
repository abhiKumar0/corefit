import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';


const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems="center" flexWrap="wrap" px="40px" pt="24px">
                <img src={Logo} alt="Logo" style={{ width: '200px', height: '41px' }} />
                <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textALign="center" pb="40px">
                    Copyright corefit.com
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;