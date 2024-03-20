import { Typography, Link, Container, Box } from '@mui/material'
import React, { Component } from 'react'

export default function Footer(props) {
    return (
        <Container  sx={{
          zIndex: 999,
          backgroundColor: 'appmain.main',
          position: 'fixed',
          bottom: 0,
          left: 0,
          elevation: 3,
            boxShadow: '0px 0px 6px 1px rgba(0, 0, 0, 0.6)',
          }} component="main" maxWidth="xl">
        <Box elevation={3} height={50}  display="flex"
          alignItems="center"
          justifyContent="center">
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="/">
                Sonali Fashion
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
      </Container>
    )
  
}
