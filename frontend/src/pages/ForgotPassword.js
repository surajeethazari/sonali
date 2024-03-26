import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CloseRounded from '@mui/icons-material/CloseRounded';

export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email')
    });
  };

  return (
        <Box
        sx={{
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
       }}
        >
          <IconButton sx={{position: 'absolute', right: 5, top: 5}} size="large" aria-label="search" color='primary.dark'>
          <CloseRounded />
        </IconButton>
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
                backgroundColor: 'primary.main',
              }, mt: 3, mb: 2, backgroundColor: 'secondary.main' }}
            >
              Send Link
            </Button>
          </Box>
        </Box>
  );
}