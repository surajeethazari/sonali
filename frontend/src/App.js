import * as React from 'react';
import { red, green, yellow } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';


import SignUp from "./pages/Signup";
import SignIn from './pages/Signin';
import PrimarySearchAppBar from './components/Appbar';

const defaultTheme = createTheme({
  palette: {
      primary: {
          main: red[300],
          hover: red[600],
      },
      secondary: {
          main: green[300],
          hover: green[600],
      },
      tertiary: {
          main: yellow[300],
          hover: yellow[600],
      },
      mode: "light"
  }
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Sonali Fashion
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BE_URI + "/client")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  },[]);

  return (
    <div className="App">
      <ul>
        {message.map((item) => <li key={item._id}>{item.name} </li>)}
      </ul>
    </div>
  );
}

export default App;
