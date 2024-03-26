import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from "react-router-dom";
import { IconButton } from '@mui/material';
import CloseRounded from '@mui/icons-material/CloseRounded';


export default function SignIn() {
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
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
       height: 400,
       width: 500,
        bgcolor: 'appmain.main',
        boxShadow: 24,
       p: 5,
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       flexDirection: 'column'
     }}>
        <IconButton sx={{position: 'absolute', right: 5, top: 5}} size="large" aria-label="search" color='primary.dark'>
          <CloseRounded />
        </IconButton>
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
                backgroundColor: 'primary.main',
              }, mt: 3, mb: 2, backgroundColor: 'secondary.main' }}
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
  );
}