import { Box, Typography } from '@mui/material'
import React from 'react'

function Flowers() {
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
    }}>Flower Page</Typography>
    </Box>
  )
}

export default Flowers