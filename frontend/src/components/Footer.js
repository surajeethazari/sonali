import { Typography, Link, Container, Box } from '@mui/material'
import React, { Component } from 'react'
import {
  useLocation
} from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  
    return (
        <div >
        <Box elevation={3} height={50}  display="flex"
          alignItems="center"
          justifyContent="center" sx={{
            width: "100%",
            zIndex: 999,
            backgroundColor: 'appmain.main',
            position: location.pathname === '/' || location.pathname === '/products'? 'relative':'fixed',
            bottom: 0,
            left: 0,
            elevation: 3,
              boxShadow: '0px 0px 6px 1px rgba(0, 0, 0, 0.6)',
            }}>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                Sonali Fashion
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
      </div>
    )
  
}
