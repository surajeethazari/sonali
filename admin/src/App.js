import React, { useEffect, useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Typography, Container, colors } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';
import io from 'socket.io-client';

import SignUp from "./pages/Signup";
import SignIn from './pages/Signin';
import PrimarySearchAppBar from './components/Appbar';

const defaultTheme = createTheme({
  palette: {
      primary: {
          main: colors.red[300],
          hover: colors.red[600],
      },
      secondary: {
          main: colors.green[300],
          hover: colors.green[600],
      },
      tertiary: {
          main: colors.yellow[300],
          hover: colors.yellow[600],
      },
      mode: "light"
  }
});

function App() {
  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
    to: { opacity: 1, transform: 'translate3d(0,80,0)' }
  });

  useEffect(() => {
    
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
    <animated.div style={formAnimation}>
         <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Admin
        </Typography>
      </Container>
        </animated.div>
      </ThemeProvider>
  );
}

export default App;

