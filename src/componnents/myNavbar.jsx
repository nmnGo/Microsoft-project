import { Box, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function MyNavbar() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: "8rem",
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '3rem',
                padding: '0 2rem',
                backgroundImage:`url("https://lean-in-mentorship.vercel.app/static/media/Cherry_Blossoms_1-scaled.58da32fa4e845656bc01.webp")`,
                backgroundSize: 'cover',
            }}
        >

            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <Button sx={{
                    px: '1.5rem',
                    borderRadius: '0.8rem',
                    boxShadow: 2,
                }} variant="contained" color="secondary">Home</Button>
            </NavLink>
            <NavLink to="about" style={{ textDecoration: 'none' }}>
                <Button sx={{
                    px: '1.5rem',
                    borderRadius: '0.8rem',
                    boxShadow: 2,
                }} variant="contained" color="secondary">About</Button>
            </NavLink>
            <NavLink to="signin" style={{ textDecoration: 'none' }}>
                <Button sx={{
                    px: '1.5rem',
                    borderRadius: '0.8rem',
                    boxShadow: 2,
                }} variant="contained" color="secondary">SignIn</Button>
            </NavLink>
            <NavLink to="flowers" style={{ textDecoration: 'none' }}>
                <Button sx={{
                    px: '1.5rem',
                    borderRadius: '0.8rem',
                    boxShadow: 2,
                }} variant="contained" color="secondary">Flowers</Button>
            </NavLink>
        </Box>
    )
}

export default MyNavbar