import * as React from 'react';
import { colors } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import SignUp from "./pages/Signup";
import SignIn from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import DefaultAppBar from './components/Appbar';
import ErrorPage from './pages/ErrorPage';
import BreadCrumbs from './components/BreadCrumbs';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/signin",
    element: <SignIn/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/signup",
    element: <SignUp/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/resetPassword",
    element: <ForgotPassword/>,
    errorElement: <ErrorPage/>
  },
]);


const defaultTheme = createTheme({
  palette: {
      appmain: {
        main: '#fff'
      },
      primary: {
          main: colors.grey[800]
      },
      secondary: {
          main: colors.teal[600]
      },
      tertiary: {
          main: colors.yellow[300]
      },
      mode: "light"
  }
});

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BE_URI + "/client")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  },[]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultAppBar/>
      <BreadCrumbs/>
      <RouterProvider router={router}/>
      <Footer props={null}/>
    </ThemeProvider>
  );
}

export default App;
