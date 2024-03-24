import * as React from 'react';
import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate, Link } from "react-router-dom";
import BreadCrumbs from '../components/BreadCrumbs';


export default function SignIn() {
  let crumbs = [{name: "Home", trigger: "/", active: true}, {name: "Sign In", trigger: "/signin",  active: false}]
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate("/");
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <Container maxWidth="xl">
       <BreadCrumbs crumbs={crumbs}/>
      <Container component="main" maxWidth="xs">
        <Box
          height={400}
          width={500}
          mb={10}
          mt={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={'column'}
          p={5}
          sx={{
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h5" color={'primary'}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ '&:hover': {
                backgroundColor: 'secondary.main',
              }, mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/resetPassword" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                  <Typography variant="body2" color={'secondary'}>
                    Forgot password?
                 </Typography>
                </Link>
              </Grid>
              <Grid item>
              <Typography variant="body2" color={'primary'}>
              {"Don't have an account?"}
              
                 <Link to="/signup" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                  <Typography component="span" variant="body2" color={'secondary'} mx={1}>
                    Signup
                 </Typography>
                </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Container>
  );
}