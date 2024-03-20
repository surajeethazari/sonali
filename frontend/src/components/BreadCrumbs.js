import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import React, { Component } from 'react'

export default function BreadCrumbs(props) {
    return (
      <Container component="main" maxWidth="xl">
      <Breadcrumbs aria-label="breadcrumb" m={2}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/signin"
        >
          Login
        </Link>
      </Breadcrumbs>
    </Container>
    )
  
}
