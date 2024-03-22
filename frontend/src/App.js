import * as React from 'react';
import { colors } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import Home from './pages/Home';
import SignUp from "./pages/Signup";
import SignIn from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import DefaultAppBar from './components/Appbar';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import AccountDetails from './pages/AccountDetails';
import PaymentSuccess from './pages/PaymentSuccess';


const defaultTheme = createTheme({
  palette: {
      appmain: {
        main: '#fff'
      },
      primary: {
          main: colors.grey[800],
          light: colors.grey[200]
      },
      secondary: {
          main: colors.teal[600],
          light: colors.teal[200]
      },
      tertiary: {
          main: colors.yellow[300],
          light: colors.yellow[100]
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
      <Router>
        <DefaultAppBar/>
        <div style={{marginBottom: '80px'}}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetPassword" element={<ForgotPassword />} />
          <Route path="/userdetails" element={<AccountDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:title" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
