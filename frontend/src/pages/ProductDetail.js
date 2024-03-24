import { Box, Button, CardMedia, Container, Divider, IconButton, Tab, TextField, Typography } from '@mui/material'
import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Carousel } from 'antd';
import Constants from '../utils/Constants';
import Slide from '@mui/material/Slide';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { useNavigate, Link , useParams, useLocation } from "react-router-dom";
import ArrowForwardTwoTone from '@mui/icons-material/ArrowForwardTwoTone';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}


export default function ProductDetail(props) {
  const navigate = useNavigate();
  const params = useParams();
  const obj = useLocation();
  const [value, setValue] = React.useState('1');
  const [item, setItem] = React.useState(obj.state.item);
  let crumbs = [{name: "Home", trigger: "/", active: true}, {name: "Collection", trigger: "/products",  active: true}, {name: params.title, trigger: "/detail/"+ params.title,  active: false}];
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

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <BreadCrumbs crumbs={crumbs}/>
          <Box width={'100%'} justifyContent={'space-between'} display="flex" sx={{marginTop: 5, flexDirection: { xs: 'column', md: 'row'}}}>
              <Box display="flex" flexDirection={'column'} sx={{width: {xs: '100%', md: '48%'}}}>
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
              <Box  display="flex" flexDirection={'column'}  sx={{width: {xs: '100%', md: '48%', marginBottom: "100px"}}}>
              
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
                      backgroundColor: 'primary.main',
                    }, marginTop: 2, backgroundColor: "secondary.main" }}
                  >
                    {Constants.addToCartText}
                  </Button>
                  <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} key="Slide" open={open} onClose={handleClose}>
                     <Box width={"400px"} display="flex" flexDirection={'column'} alignItems={'center'} justifyContent={"space-between"} sx={{marginTop: -2, zIndex: 999, padding: 3, backgroundColor: 'appmain.main', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                        <Box width={"100%"} justifyContent={'space-between'} display="flex" flexDirection={'row'}  sx={{marginTop: 1}}>
                          <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                            JUST ADDED TO YOUR CART
                          </Typography>
                          <IconButton onClick={handleClose} size="large" aria-label="search" color="inherit" sx={{marginTop: -1}}>
                              <CloseRounded />
                          </IconButton>
                        </Box>
                        <Divider sr={{marginTop: 2}}/>
                        <Box width={"100%"} justifyContent={'space-between'} display="flex" flexDirection={'row'}  sx={{marginTop: 1}}>
                           <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                            {item.title}
                          </Typography>
                          <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                            Qty: 2
                          </Typography>
                        </Box>
                        <Button
                          onClick={() =>  navigate('/cart', {
                            state: {
                              item: [item]
                            }
                          })}
                          endIcon={<ArrowForwardTwoTone />}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ '&:hover': {
                              backgroundColor: 'primary.main',
                            }, mt: 3, mb: 2, backgroundColor: 'secondary.main' }}
                          >
                            VIEW CART (1)
                          </Button>
                          <Link to="/products" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                            <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                              {Constants.continueShoppingText}
                            </Typography>
                          </Link>
                      
                    </Box>
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
        <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleTabChange} >
                    <Tab label="Details" sx={{fontWeight: 'bold'}} value="1"/>
                    <Tab label="More Informations" value="2"/>
                    <Tab label="Reviews" value="3"/>
                    <Tab label="Shipping & Return" value="4"/>
                </TabList>
              </Box>
              <TabPanel value="1">
                  <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'bold'}}>
                  * Style is a way to say who you are without having to speak try trendy naira cut blue full sleeves kurti in georgette with floral prints on it.
                  </Typography>
                  <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'bold'}}>
                  * This featured casual wear kurti avaiable ready-to-wear in M & L size and has extra 2 inches of margin to adjust up to 36"- 40" for your body comfort.
                  </Typography>
                  <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'bold'}}>
                  * Dressed to chill this casual wear kurti for daily wear use with ankle-length denim or jegging pants at the office, college, or for an outing anywhere.
                  </Typography>
                  <Typography color={'primary.main'}  variant="body2" component="div" sx={{fontWeight: 'bold'}}>
                  * Carry fancy solid color bellies or sneakers and danglers with it to look more cool and stylish.
                  </Typography>
              </TabPanel>
              <TabPanel value="2">
                  <Typography color={'primary.main'}  variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                  More Informations
                    </Typography>
              </TabPanel>
              <TabPanel value="3">
                  <Typography color={'primary.main'}  variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                  Reviews
                    </Typography>
              </TabPanel>
              <TabPanel value="4">
                  <Typography color={'primary.main'}  variant="h4" component="div" sx={{fontWeight: 'bold'}}>
                Shipping & Return
                    </Typography>
              </TabPanel>
        </TabContext>
      </Container>
    </div>
  )
}
