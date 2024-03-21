import { Box, Button, CardMedia, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { useParams, useLocation  } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Carousel } from 'antd';
import Constants from '../utils/Constants';
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}


export default function ProductDetail(props) {
  const params = useParams();
  const obj = useLocation();
  const [item, setItem] = React.useState(obj.state.item);
  let crumbs = [{name: "Home", trigger: "/", active: false}, {name: "Collection", trigger: "/products",  active: true}, {name: params.title, trigger: "/detail/"+ params.title,  active: false}];
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <BreadCrumbs crumbs={crumbs}/>
          <Box width={'100%'} justifyContent={'space-between'} display="flex" flexDirection={'row'} sx={{marginTop: 5}}>
              <Box width={'48%'}  display="flex" flexDirection={'column'} sx={{}}>
              <Carousel dotPosition="right" autoplay effect="fade" dots="false">
                  <CardMedia
                    component="img"
                    height="500"
                    image={item.img}
                    alt="Image Title"
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={item.img}
                    alt="Image Title"
                  />
              </Carousel>
              </Box>
              <Box width={'48%'} display="flex" flexDirection={'column'}  sx={{}}>
              
                <Typography color={'primary.main'}  variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                {item.title}
                </Typography>

                <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'normal', marginTop: 1}}>
                {item.Price} /-
                </Typography>

                <Box width={'48%'} display="flex" flexDirection={'row'}  sx={{marginTop: 1}}>
                  <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                    {Constants.colorText}: 
                  </Typography>
                  <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'normal', marginLeft: 1}}>
                    Black
                  </Typography>
                </Box>

                <Box width={'48%'} display="flex" flexDirection={'row'}  sx={{marginTop: 1}}>
                  <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                    {Constants.brandText}: 
                  </Typography>
                  <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'normal', marginLeft: 1}}>
                    A
                  </Typography>
                </Box>

                <TextField
                  sx={{marginTop: 2, width: 150}}
                  label="Qty"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />

                <Button
                    onClick={handleClick}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ '&:hover': {
                      backgroundColor: 'secondary.main',
                    }, marginTop: 2 }}
                  >
                    {Constants.addToCartText}
                  </Button>
                  <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} key="Slide" open={open} onClose={handleClose}>
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      This is a success Alert inside a Snackbar!
                    </Alert>
                  </Snackbar>
              
                  <Box width={'48%'} display="flex" flexDirection={'row'}  sx={{marginTop: 2}}>
                    <Button color='appmain' variant="contained">XXl</Button>
                    <Button sx={{marginLeft: 1}} color='appmain' variant="contained">Xl</Button>
                    <Button sx={{marginLeft: 1}} color='appmain' variant="contained">L</Button>
                    <Button sx={{marginLeft: 1}} color='appmain' variant="contained">M</Button>
                    <Button sx={{marginLeft: 1}} color='appmain' variant="contained">S</Button>
                  </Box>

                <Box width={'48%'} display="flex" flexDirection={'row'}  sx={{marginTop: 2}}>
                  <Button color='appmain' variant="contained">Black</Button>
                  <Button sx={{marginLeft: 1}} color='appmain' variant="contained">Green</Button>
                  <Button sx={{marginLeft: 1}} color='appmain' variant="contained">Pink</Button>
                </Box>

                <Typography color={'primary.main'}  variant="h6" component="div" sx={{marginTop: 2, fontWeight: 'normal'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.
                Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.
                </Typography>
              </Box>
        </Box>
      </Container>
    </div>
  )
}
