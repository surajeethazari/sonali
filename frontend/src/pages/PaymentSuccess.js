import { Badge, Box, CardMedia, Container, Divider, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { useNavigate, useLocation } from "react-router-dom";
import Masonry from '@mui/lab/Masonry';
import CheckCircleOutlined  from '@mui/icons-material/CheckCircleOutlined';

export default function PaymentSuccess() {
    const navigate = useNavigate();
    const obj = useLocation();
    const [item, setItem] = React.useState(obj.state.item);
    console.log(item[0][0])
    let crumbs = [{name: "Home", trigger: "/", active: false}, {name: "Payment Success", trigger: "/paymentSuccess",  active: true}]

  return (
     <Container maxWidth="xl">
        <BreadCrumbs crumbs={crumbs}/>
        <Box width={'100%'} justifyContent={'space-between'} display="flex" sx={{marginTop: 5, flexDirection: { xs: 'column', md: 'row'}}}>
            <Box display="flex" flexDirection={'column'}  sx={{width: {xs: '100%', md: '68%', marginBottom: "100px"}}}>
              <Box display="flex" alignItems={'center'} flexDirection={'row'} >
                <IconButton disableRipple={true} size="large" aria-label="search" color={'success'} sx={{fontSize: "25px"}}>
                   <CheckCircleOutlined sx={{fontSize: "100px"}}/>
                </IconButton>
                <Box display="flex" flexDirection={'column'} sx={{marginLeft: 2}}>
                  <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: 'bold'}}>
                      Order ID: #12345
                    </Typography>
                    <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: 'bold'}}>
                     Thank you for shopping with us!
                  </Typography>
                </Box>
              </Box>
              <Masonry sx={{marginTop: 2}} columns={2} spacing={2}>
                    <Paper elevation={8} sx={{padding: 3, height: 180}}>            
                        <Typography  color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                          Contact Information
                        </Typography>
                        <Divider sx={{my: 3}}/>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          Name: Suro jeet
                        </Typography>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          Email: Surajeet407@gmail.com
                        </Typography>
                    
                    </Paper>
                    <Paper elevation={8} sx={{padding: 3, height: 180}}>            
                        <Typography  color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                          Payment Method
                        </Typography>
                        <Divider sx={{my: 3}}/>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          Credit Card
                        </Typography>
                    
                    </Paper>
                    <Paper elevation={8} sx={{padding: 3, height: 250}}>            
                        <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                          Shipping Address
                        </Typography>
                        <Divider sx={{my: 3}}/>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          Surajeet hazari
                        </Typography>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          106, Chaklalpur
                        </Typography>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          Radhamohanpur
                        </Typography>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          West bengal
                        </Typography>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          Pin: 721160
                        </Typography>

                    </Paper>
                    <Paper elevation={8} sx={{padding: 3, height: 250}}>            
                        <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                          Billing Address
                        </Typography>
                        <Divider sx={{my: 3}}/>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          Surajeet hazari
                        </Typography>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          106, Chaklalpur
                        </Typography>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          Radhamohanpur
                        </Typography>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          West bengal
                        </Typography>
                        <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                          Pin: 721160
                        </Typography>

                    </Paper>
                </Masonry>
            </Box>
            <Box display="flex" flexDirection={'column'}  sx={{width: {xs: '100%', md: '48%', marginBottom: "100px"}}}>
            <Box sx={{height: item.height, marginTop: 2, height: '80px' }}> 
                    <Box display="flex" flexDirection={'row'} justifyContent={'space-between'} >
                        <Box display="flex" flexDirection={'row'} >
                            
                            <Badge badgeContent={17} color="error" sx={{ "&:hover": { color: "secondary.main" } }}>
                              <CardMedia
                                component="img"
                                height={80}
                                image={item[0].img}
                                alt="Image Title"
                            />
                            </Badge>
                            <Box display="flex" width={'300px'}  justifyContent={'space-arround'} flexDirection={'column'} sx={{marginLeft: 3}}>
                                <Typography variant="body2" component="div" sx={{fontWeight: 'bold'}}>
                                {item[0].title}
                                </Typography>
                                <Typography component={'span'}  variant="body2" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                                    Color: Blue, Size: XL
                                </Typography>
                                <Typography component={'span'} variant="body2" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                                    {item[0].Price} /-
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection={'column'}>
                            <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: 'bold', marginTop: "5px"}}>
                            5678 /-
                            </Typography>
                        </Box>
                    </Box>
                  </Box>
                  <Divider sx={{marginTop: 2}}/>
                        <Box display="flex" justifyContent={'space-between'} flexDirection={'row'}  sx={{marginTop: 2}}>
                            <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                            Sub Total
                            </Typography>
                            <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                            1 Item
                            </Typography>
                            <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                            5678 /-
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent={'space-between'} flexDirection={'row'} sx={{marginTop: '10px'}}>
                          <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                            Shipping
                            </Typography>
                            <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                            Standard Delivery
                            </Typography>
                            <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                            50 /-
                            </Typography>
                        </Box>
                        <Divider sx={{marginTop: 2}}/>
                        <Box display="flex" justifyContent={'space-between'} flexDirection={'row'}>
                          <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: 'bold', marginTop: "5px"}}>
                            Total
                            </Typography>
                            <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: 'bold', marginTop: "5px"}}>
                             5678 /-
                            </Typography>
                        </Box>
                        <Typography component={'div'} variant="body2" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                        (Inclusive of tax $0.00)
                        </Typography>
            </Box>
        </Box>
    </Container>
  )
}
