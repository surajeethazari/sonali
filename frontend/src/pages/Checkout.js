import { Container } from '@mui/material'
import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

export default function Checkout() {
  return (
    <div>
      <Container maxWidth="xl">
      <BreadCrumbs/>
        <h1>Checkout</h1>
      </Container>
    </div>
  )
}
