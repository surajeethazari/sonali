import { Container } from '@mui/material'
import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

export default function SearchResults() {
    let crumbs = [{name: "Home", trigger: "/", active: false}, {name: "Results", trigger: "/search",  active: false}];
    
  return (
    <Container maxWidth="xl">
        <BreadCrumbs crumbs={crumbs}/>
    </Container>
  )
}
