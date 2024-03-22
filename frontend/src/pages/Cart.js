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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation  } from "react-router-dom";
import { CardMedia, TextField } from '@mui/material';

export default function Cart() {
  const navigate = useNavigate();
  const obj = useLocation();
  const [item, setItem] = React.useState(obj.state.item);

  let crumbs = [{name: "Home", trigger: "/", active: false}, {name: "Cart", trigger: "/cart",  active: true}]
  return (
    <Container maxWidth="xl">
      <BreadCrumbs crumbs={crumbs}/>
        {item ? 
          <Box width="100%" display="flex"
            justifyContent="space-between"
            sx={{ marginTop: "50px", flexDirection: { xs: 'column', md: 'row'}}}>
            <Box flexDirection="column" sx={{width: {xs: '100%', md: '75%'}}}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell sx={{display :{xs: "none", md: "table-cell"}}} align="right">Qty.</TableCell>
                      <TableCell sx={{display :{xs: "none", md: "table-cell"}}} align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item.map((innerItem, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Box display="flex" flexDirection={'row'} >
                              <CardMedia
                              component="img"
                              height="100px"
                              width="100px"
                              image={innerItem.img}
                              alt="Image Title"
                            />
                            <Box display="flex" flexDirection={'column'} sx={{marginLeft: 2}}>
                              <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'normal', marginLeft: 1}}>
                                  {innerItem.title}
                                </Typography>
                                <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'normal', marginLeft: 1}}>
                                  Size: L
                                </Typography>
                                <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'normal', marginLeft: 1}}>
                                  Color: Blue
                                </Typography>
                                <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'normal', marginLeft: 1, textDecoration: 'underline'}}>
                                    Remove
                                </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="right">
                            <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'normal', marginLeft: 1}}>
                              {innerItem.Price} /-
                            </Typography>
                            <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'normal', marginLeft: 1, display :{xs: "block", md: "none"}}}>
                                Qty: 2
                            </Typography>
                        
                        </TableCell>
                        <TableCell sx={{display :{xs: "none", md: "table-cell"}}} align="right">{2}</TableCell>
                        <TableCell sx={{display :{xs: "none", md: "table-cell"}}} align="right">{innerItem.Price} /-</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: "20px"}}>
                 Promotion Code?
              </Typography>
              <Box alignItems={'center'} display={'flex'} flexDirection="row">
                <TextField
                  sx={{marginTop: 2, width: 300}}
                  label="Enter Coupon Code"
                  variant="filled"
                />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ '&:hover': {
                      backgroundColor: 'secondary.main',
                    }, marginTop: 2, padding: 2, marginLeft: 2 }}
                  >
                    APPLY
                  </Button>
              </Box>
            </Box>
            <Box flexDirection="column" sx={{width: {xs: '100%', md: '23%'}, marginTop: {xs: "20px", md: 0}, marginBottom: "60px"}}>
              <Typography color={'primary.main'}  variant="h5" component="div" sx={{fontWeight: '400'}}>
                ORDER SUMMARY
              </Typography>
                <Box display="flex" justifyContent={"space-between"} flexDirection={'row'}  sx={{marginTop: 1}}>
                  <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'noraml'}}>
                    Sub Total: 
                  </Typography>
                  <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'normal', marginLeft: 1}}>
                    500 /-
                  </Typography>
                </Box>
                <Box display="flex" justifyContent={"space-between"} flexDirection={'row'}  sx={{marginTop: 1}}>
                  <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: '700'}}>
                    Total: 
                  </Typography>
                  <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'normal', marginLeft: 1}}>
                    500 /-
                  </Typography>
                </Box>
                <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: '400'}}>
                (Inclusive of tax 0.00 /-)
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ '&:hover': {
                      backgroundColor: 'secondary.main',
                    }, marginTop: 2 }}
                  >
                    CHECKOUT
                  </Button>
            </Box>
        </Box>
        : 
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
        }
      
    </Container>
  )
}
