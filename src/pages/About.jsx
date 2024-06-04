import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
        }}
    >
        <Typography variant="h6" sx={{
            textAlign: 'center',
            fontWeight: 'bold',
        }}>About Us</Typography>
        <Typography
            variant="p"
            sx={{
                textAlign: 'center',
            }}
            >
            This is the about page of our React app.
        </Typography>
    </Box>
  )
}

export default About