import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BreadCrumbs from '../components/BreadCrumbs';


export default function ForgotPassword() {
  let crumbs = [{name: "Home", trigger: "/", active: false}, {name: "Sign In", trigger: "/signin",  active: true}, {name: "Reset", trigger: "/resetPassword",  active: false}]
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email')
    });
  };

  return (
    <Container maxWidth="xl">
       <BreadCrumbs crumbs={crumbs}/>
      <Container component="main" maxWidth="xs">
        <Box
          height={200}
          width={500}
          my={10}
          mx={-10}
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
            Password Reset
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ '&:hover': {
                backgroundColor: 'secondary.main',
              }, mt: 3, mb: 2 }}
            >
              Send Link
            </Button>
          </Box>
        </Box>
      </Container>
      </Container>
  );
}