import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import React, { Component } from 'react'
import { useNavigate, Link } from "react-router-dom";

export default function BreadCrumbs(props) {
    return (
      <Container component="main" maxWidth="xl">
      <Breadcrumbs aria-label="breadcrumb" m={2}>
          <Typography component="span" variant="body2" color={'secondary'} mx={1}  sx={{ "&:hover": { color: "secondary.main" } }}>
                    Home
            </Typography>
          <Typography component="span" variant="body2" color={'secondary'} mx={1}  sx={{ "&:hover": { color: "secondary.main" } }}>
                    Login
                 </Typography>
      </Breadcrumbs>
    </Container>
    )
  
}
