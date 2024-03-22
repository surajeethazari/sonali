import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import Facebook from '@mui/icons-material/Facebook';
import YouTube from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';
import GoogleMapReact from 'google-map-react';
import { Input } from 'antd';
const { TextArea } = Input;


const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function Contact() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  let crumbs = [{name: "Home", trigger: "/", active: false}, {name: "Contact Us", trigger: "/contact",  active: true}]
  return (
    <div>
      <Container maxWidth="xl">
        <BreadCrumbs crumbs={crumbs}/>
          <Box width={'100%'} justifyContent={'space-between'} display="flex" sx={{marginTop: 5, flexDirection: { xs: 'column', md: 'row'}}}>
              <Box display="flex" flexDirection={'column'} sx={{width: {xs: '100%', md: '48%'}}}>
                <Typography color={'primary.main'}  variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                Location
                </Typography>
                <div style={{ height: '300px', width: '100%', marginTop: '20px' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>

               <Box width={"100%"} justifyContent={'space-between'} display="flex" flexDirection={'row'} sx={{marginTop: 3}}>
                 <Box width={"23%"} display="flex" alignItems={'center'} flexDirection={'column'} sx={{padding: 4, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                      <Typography color={'primary.main'}  variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                        Follow Us
                      </Typography>

                      <Box  display="flex" flexDirection={'row'}  sx={{marginTop: 1}}>
                        <IconButton  size="large" aria-label="search" color="inherit" sx={{ "&:hover": { color: "secondary.main" } }}>
                          <Facebook />
                        </IconButton>

                        <IconButton  size="large" aria-label="search" color="inherit" sx={{ "&:hover": { color: "secondary.main" } }}>
                          <YouTube />
                        </IconButton>

                        <IconButton size="large" aria-label="search" color="inherit" sx={{ "&:hover": { color: "secondary.main" } }}>
                          <Instagram />
                        </IconButton>

                      </Box>
                  </Box>
                  <Box width={"23%"} display="flex" alignItems={'center'} flexDirection={'column'} sx={{padding: 4, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                      <Typography color={'primary.main'}  variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                        Phone
                      </Typography>

                      <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'bold', marginTop: 3}}>
                        +91 8900-162-177
                      </Typography>
                  </Box>
                  <Box width={"23%"} display="flex" alignItems={'center'} flexDirection={'column'} sx={{padding: 4, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                      <Typography color={'primary.main'}  variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                        Email
                      </Typography>

                      <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'bold', marginTop: 3}}>
                        surajeet407@gmail.com
                      </Typography>
                  </Box>
               </Box>
              </Box>
              <Box display="flex" flexDirection={'column'}  sx={{width: {xs: '100%', md: '48%'}, marginBottom: "60px", marginTop: {xs: "50px", md: 0}}}>
              
                <Typography color={'primary.main'}  variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                Contact Form
                </Typography>
                <TextField
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  id="name"
                  autoComplete="name"
                  />
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
                
                <TextArea style={{marginTop: 20}} rows={10} placeholder="Message"  />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ '&:hover': {
                      backgroundColor: 'secondary.main',
                    }, marginTop: 5 }}
                  >
                    Submit
                  </Button>
              </Box>
        </Box>
      </Container>
    </div>
  )
}
