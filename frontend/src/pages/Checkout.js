import { Badge, Box, CardMedia, Container, Divider, Paper, Typography, Breadcrumbs } from '@mui/material'
import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { useNavigate, useLocation } from "react-router-dom";

export default function Checkout() {
    const navigate = useNavigate();
    const obj = useLocation();
    const [item, setItem] = React.useState(obj.state.item);
    console.log(item)
    let crumbs = [{name: "Home", trigger: "/", active: true}, {name: "Payment Success", trigger: "/paymentSuccess",  active: false}]
    let paymentCrumbs = [{name: "Contact Information", active: false}, {name: "Shipment",  active: true}, {name: "Payment",  active: true}]

  return (
     <Container maxWidth="xl">
        <BreadCrumbs crumbs={crumbs}/>
        <Box width={'100%'} justifyContent={'space-between'} display="flex" sx={{marginTop: 5, flexDirection: { xs: 'column', md: 'row'}}}>
            <Box display="flex" flexDirection={'column'}  sx={{width: {xs: '100%', md: '48%', marginBottom: "100px"}}}>
              <Breadcrumbs aria-label="breadcrumb">
              {paymentCrumbs.map((breadcrumb, index) => (
                <Typography component={'span'}  variant="body2" color={breadcrumb.active ? 'secondary.main':'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                {breadcrumb.name}
                </Typography>
              ))}
              </Breadcrumbs>
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
