import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Home() {
    const [count, setCount] = React.useState(0)

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                padding: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',

                    background:'#ffffff',
                    width: '100%',
                    height: '25rem',

                    border: '2px solid black',
                    borderRadius: '1rem',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '3rem',
    
    
                        maxWidth: '50rem',
                    }}
                >
                    <Typography variant="h4" color="secondary" sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}>Welcome to My React App</Typography>
                    <Typography
                        variant="p"
                        sx={{
                            textAlign: 'center',
                        }}
                    >This is a Basic Jumbotron. You can personalize it however you want!</Typography>
                    <Typography variant="p"
                        sx={{
                            textAlign: 'center',
                        }}
                    >This is a simple React app with a navbar, jumbotron, sign-in (using Firebase), and about pages.</Typography>
                    <Button variant="contained" color="secondary"
                        sx={{
                            width: '100%',
                            borderRadius: '1rem',

                        }}
                    >Click <br /> Me!</Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '3rem',

                    background:'#ffffff',
                    width: '100%',
                    height: '25rem',

                    border: '2px solid black',
                    borderRadius: '1rem',
                }}
            >
                <Typography variant="h4" color="secondary" sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}>Counter: {count}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1rem',
                        width: '100%',
                        justifyContent: 'center',
                    }}
                >

                    <Button variant="contained" color="secondary"
                        onClick={() => setCount(count + 1)}
                        sx={{
                            borderRadius: '0.6rem',
                            px: '2rem',
                            py:'0.4rem',
                        }}
                    >Increment</Button>
                    <Button variant="contained" color="secondary"
                        onClick={() => setCount(count - 1)}
                        sx={{
                            borderRadius: '0.6rem',
                            px: '2rem',
                            py:'0.4rem',
                        }}
                    >Decrement</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Home