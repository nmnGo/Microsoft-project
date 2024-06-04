import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

function Signin() {
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
      }}>Sign In</Typography>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '3rem',
          minWidth: '25vw',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          textDecoration: "uppercase",
          boxShadow:5,
        }}
      >
        <TextField label="email" variant="filled" 
        sx={{
          width: '100%'
        }} 
        />
        <TextField label="password" variant="filled" 
        sx={{
          width: '100%',
          mb: '1rem'
        }}
         />
        <Button variant="contained" color="secondary"
          sx={{
            width: '100%'
          }}
        >Sign In</Button>
        <Typography>OR</Typography>
        <Button variant="contained" color="secondary"
          sx={{
            width: '100%'
          }}
        >Sign In with google</Button>
        <Button variant="contained" color="secondary"
          sx={{
            width: '100%'
          }}
        >Sign In log out</Button>


      </Paper>
    </Box>
  )
}

export default Signin