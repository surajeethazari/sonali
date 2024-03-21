import * as React from 'react';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardTwoTone from '@mui/icons-material/ArrowForwardTwoTone';
import Container from '@mui/material/Container';
import Constants from '../utils/Constants';
import { useNavigate, NavLink, Link } from "react-router-dom";
import BreadCrumbs from '../components/BreadCrumbs';

export default function Cart() {
  const navigate = useNavigate();
  let crumbs = [{name: "Home", trigger: "/", active: false}, {name: "Cart", trigger: "/cart",  active: true}]
  return (
    <Container maxWidth="xl">
      <BreadCrumbs crumbs={crumbs}/>
      <Container component="main" maxWidth="xs">
        <Box
          height={400}
          width={500}
          my={10}
          mb={10}
          mx={-10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={'column'}
          p={5}
        >
          <Typography variant="h4" color={'primary'}>
          {Constants.shoppingCartText}
          </Typography>
          <Typography mt={5} variant="body2" color={'primary'}>
            {Constants.shoppingCartEmptyText}
          </Typography>
          <Button
            onClick={() => navigate('/products')}
            endIcon={<ArrowForwardTwoTone />}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ '&:hover': {
                backgroundColor: 'secondary.main',
              }, mt: 3, mb: 2 }}
            >
              {Constants.continueShoppingText}
            </Button>
        </Box>
      </Container>
    </Container>
  )
}
