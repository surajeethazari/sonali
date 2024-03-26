import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import logo_transparent from '../assets/images/logo_transparent.png'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import CloseRounded from '@mui/icons-material/CloseRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import data from '../assets/data/featuredCollection.json'
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import { Button, ButtonGroup, CardMedia, Checkbox, Divider, Drawer, FormControlLabel, Grid, Modal, Popover, Stack, SwipeableDrawer, TextField, Tooltip } from '@mui/material';
import { useNavigate, NavLink, Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';


import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';

const navItems = ['Kurties', "Plazzo Suits", "Salwar Kamiz"];

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.appmain.main,
    maxWidth: 600,
    padding: "20px",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function DefaultAppBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [hoverElement, setHoverElement] = React.useState(false);



  const handleNavItemClick = (navItemName) => {
    const navHash = ['products', 'contact']; 
    navigate('/' + navHash[navItems.findIndex(item => item === navItemName)]);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const searchSection = () => (
    <Box
      height={100}
      p={15}
      alignItems="center"
      justifyContent="center"
    >
      <IconButton onClick={toggleDrawer(false)} sx={{position: 'absolute', top: '5px', right: '10px'}} size="large" aria-label="search" color="inherit">
          <CloseRounded />
      </IconButton>
       <TextField
            variant='standard'
             color="secondary"
             margin="normal"
             fullWidth
             name="Search"
             label="Search"
        />
    </Box>
  );


  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };


  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawerHandler  = (open) => (event) => {
    setOpenDrawer(open);
  }

  const [signinModalState, setSigninModalState] = React.useState(false);
  const [signupModalState, setSignupModalState] = React.useState(false);
  const [forgetPasswordModalState, setForgetPasswordModalState] = React.useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate("/");
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <ElevationScroll>
    <AppBar  position="fixed" color='appmain'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'flex' },
            }}>
          <Avatar alt="SF" src={logo_transparent} />
          <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{
                marginLeft: "10px",
                marginTop: "2px",
                textDecoration: 'none',
                fontFamily: 'fantasy',
                fontWeight: 700,
                fontSize: '25px',
                letterSpacing: '.rem',
                color: theme.palette.primary.main,
                textDecoration: 'none'
              }}>
              Sonali Fashion
          </Link>
          </Box>
            <HtmlTooltip onClick={() => handleNavItemClick('Kurties')} TransitionComponent={Zoom} title={
                <React.Fragment >
                  <Box width={600} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color={'primary.dark'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: 2}}>
                        Shop By Color
                      </Typography>
                      <Divider sx={{marginBottom: 2, marginTop: 1}}/>
                        {["Black", "Blue", "Cream", "Red", "Brown", "Yellow"].map((item, index) => (
                        <Typography key={index} color={'primary.main'}  component="div" sx={{fontSize: '15px', fontWeight: 'normal', marginTop: "2px", cursor: 'pointer'}}>
                          {item}
                        </Typography>
                        ))}
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color={'primary.dark'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: 2}}>
                        Shop By Fabric
                      </Typography>
                      <Divider sx={{marginBottom: 2, marginTop: 1}}/>
                        {["Print", "Georgette", "Net", "Cotton", "Silk", "Satin", "Velvet"].map((item, index) => (
                          <Typography key={index} color={'primary.main'}  component="div" sx={{fontSize: '15px', fontWeight: 'normal', marginTop: "2px", cursor: 'pointer'}}>
                          {item}
                        </Typography>
                        ))}
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color={'primary.dark'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: 2}}>
                        Shop By Work
                      </Typography>
                      <Divider sx={{marginBottom: 2, marginTop: 1}}/>
                        {["Digital Print", "Zori Work", "Embroidary", "Stone Work", "Brown", "Yellow"].map((item, index) => (
                          <Typography key={index} color={'primary.main'} component="div" sx={{
                          fontSize: '15px', fontWeight: 'normal', marginTop: "2px", cursor: 'pointer'}}>
                          {item}
                        </Typography>
                        ))}
                    </Box>
                  </Box>

                </React.Fragment>
              }>
                <Button>{'Kurties'}</Button>
              </HtmlTooltip>
              <HtmlTooltip onClick={() => handleNavItemClick('Kurties')} TransitionComponent={Zoom} title={
                <React.Fragment >
                  <Box width={600} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color={'primary.dark'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: 2}}>
                        Shop By Color
                      </Typography>
                      <Divider sx={{marginBottom: 2, marginTop: 1}}/>
                        {["Black", "Blue", "Cream", "Red", "Brown", "Yellow"].map((item, index) => (
                        <Typography key={index} color={'primary.main'}  component="div" sx={{fontSize: '15px', fontWeight: 'normal', marginTop: "2px", cursor: 'pointer'}}>
                          {item}
                        </Typography>
                        ))}
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color={'primary.dark'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: 2}}>
                        Shop By Fabric
                      </Typography>
                      <Divider sx={{marginBottom: 2, marginTop: 1}}/>
                        {["Print", "Georgette", "Net", "Cotton", "Silk", "Satin", "Velvet"].map((item, index) => (
                          <Typography key={index} color={'primary.main'}  component="div" sx={{fontSize: '15px', fontWeight: 'normal', marginTop: "2px", cursor: 'pointer'}}>
                          {item}
                        </Typography>
                        ))}
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color={'primary.dark'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: 2}}>
                        Shop By Work
                      </Typography>
                      <Divider sx={{marginBottom: 2, marginTop: 1}}/>
                        {["Digital Print", "Zori Work", "Embroidary", "Stone Work", "Brown", "Yellow"].map((item, index) => (
                          <Typography key={index} color={'primary.main'} component="div" sx={{
                          fontSize: '15px', fontWeight: 'normal', marginTop: "2px", cursor: 'pointer'}}>
                          {item}
                        </Typography>
                        ))}
                    </Box>
                  </Box>

                </React.Fragment>
              }>
                <Button>{'Plazoo Suits'}</Button>
              </HtmlTooltip>
              <HtmlTooltip onClick={() => handleNavItemClick('Kurties')} TransitionComponent={Zoom} title={
                <React.Fragment >
                  <Box width={600} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color={'primary.dark'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: 2}}>
                        Shop By Color
                      </Typography>
                      <Divider sx={{marginBottom: 2, marginTop: 1}}/>
                        {["Black", "Blue", "Cream", "Red", "Brown", "Yellow"].map((item, index) => (
                        <Typography key={index} color={'primary.main'}  component="div" sx={{fontSize: '15px', fontWeight: 'normal', marginTop: "2px", cursor: 'pointer'}}>
                          {item}
                        </Typography>
                        ))}
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color={'primary.dark'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: 2}}>
                        Shop By Fabric
                      </Typography>
                      <Divider sx={{marginBottom: 2, marginTop: 1}}/>
                        {["Print", "Georgette", "Net", "Cotton", "Silk", "Satin", "Velvet"].map((item, index) => (
                          <Typography key={index} color={'primary.main'}  component="div" sx={{fontSize: '15px', fontWeight: 'normal', marginTop: "2px", cursor: 'pointer'}}>
                          {item}
                        </Typography>
                        ))}
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color={'primary.dark'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: 2}}>
                        Shop By Work
                      </Typography>
                      <Divider sx={{marginBottom: 2, marginTop: 1}}/>
                        {["Digital Print", "Zori Work", "Embroidary", "Stone Work", "Brown", "Yellow"].map((item, index) => (
                          <Typography key={index} color={'primary.main'} component="div" sx={{
                          fontSize: '15px', fontWeight: 'normal', marginTop: "2px", cursor: 'pointer'}}>
                          {item}
                        </Typography>
                        ))}
                    </Box>
                  </Box>

                </React.Fragment>
              }>
                <Button>{'Salwar Kamiz'}</Button>
            </HtmlTooltip>
          <Box  justifyContent="end" sx={{  flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
             <React.Fragment key={'top'}>
                <IconButton onClick={toggleDrawer(true)} size="large" aria-label="search" color="inherit" sx={{ "&:hover": { color: "secondary.main" } }}>
                  <SearchIcon />
                </IconButton>
                <SwipeableDrawer
                  anchor={'top'}
                  open={state}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  {searchSection()}
                </SwipeableDrawer>
             </React.Fragment>

             <IconButton size="large"
              color="inherit" >
              <Badge badgeContent={2} color="error" sx={{ "&:hover": { color: "secondary.main" } }}>
                <StarIcon/>
              </Badge>
            </IconButton>
            <IconButton  onClick={toggleDrawerHandler(true)}
              size="large"
              color="inherit"
            >
              <Badge badgeContent={1} color="error" sx={{ "&:hover": { color: "secondary.main" } }}>
                <ShoppingCart/>
              </Badge>
            </IconButton>


            <Drawer anchor="right" open={openDrawer} onClose={toggleDrawerHandler(false)}>
              <Box height={"100%"} sx={{ overflowY: "auto"}}>
                <Box height={80} width={"100%"} display="flex" alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'} sx={{position: 'absolute', left: 0, top: 0, zIndex: 999, backgroundColor: 'appmain.main', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                      <Typography component={'div'} variant="h5" color={'primary.dark'} sx={{fontWeight: '400', fontWeight: 'bold', marginTop: "5px", marginLeft: "10px"}}>
                      Shopping Cart
                      </Typography>
                      <IconButton onClick={toggleDrawerHandler(false)} size="large" aria-label="search" color='primary.dark'>
                          <CloseRounded />
                      </IconButton>
                  </Box>
                <Stack direction={"column"} spacing={1} padding={1} sx={{marginBottom: "200px", marginTop: "80px"}}>
                {data.map((item, index) => (
                  <Box key={index} display="flex" flexDirection={'column'} p={2}>
                    <Box display="flex" flexDirection={'row'} >
                      <CardMedia onClick={() =>  navigate('/detail/' + item.title, {
                            state: {
                              item: item
                            }
                          })}
                          component="img"
                          height={150}
                          image={item.img}
                          alt="Image Title"
                          sx={{cursor: 'pointer'}}
                      />
                        <Box display="flex" width={'300px'}  justifyContent={'space-arround'} flexDirection={'column'} sx={{marginLeft: 3}}>
                          <Typography onClick={() =>  navigate('/detail/' + item.title, {
                            state: {
                              item: item
                            }
                          })} variant="h6" color={'primary.main'} component="div" sx={{fontWeight: 'bold', cursor: 'pointer', '&:hover': {
                            color: 'secondary.main'
                          }}}>
                          {item.title}
                          </Typography>
                          <Typography component={'span'}  variant="body2" color={'primary.dark'} sx={{fontWeight: '400', marginTop: "5px"}}>
                              Color: Blue, Size: XL
                          </Typography>
                          <Typography component={'span'} variant="body2" color={'primary.dark'} sx={{fontWeight: '400', marginTop: "5px"}}>
                              {item.Price} /-
                          </Typography>
                          <Box display="flex" flexDirection={'row'} alignItems={'center'}>
                                  <ButtonGroup size="small" aria-label="small outlined button group">
                                    <Button >+</Button>
                                    <Button >{2}</Button>
                                    <Button >-</Button>
                                  </ButtonGroup>
                                  <Typography variant="body2" color={'primary.main'} component="div" sx={{ marginLeft: "5px", fontWeight: 'normal', cursor: 'pointer', '&:hover': {
                                    color: 'secondary.main'
                                  }}}>
                                  update
                                  </Typography>
                            </Box>
                        </Box>
                    </Box>
                 </Box>
            ))}
            </Stack>
            <Box display="flex" width={'100%'} flexDirection={'column'} sx={{position: 'absolute', left: 0, bottom: 0, zIndex: 999, backgroundColor: 'appmain.main', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                  <Box  display="flex" justifyContent={'space-between'} flexDirection={'row'}  sx={{ padding: 2}}>
                      <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                      Sub Total
                      </Typography>
                      <Typography component={'div'} variant="h6" color={'primary.main'} sx={{fontWeight: '400', marginTop: "5px"}}>
                      5678 /-
                      </Typography>
                  </Box>
                  <Box  display="flex" justifyContent={'space-between'} flexDirection={'column'}  sx={{marginTop: 1, padding: 2}}>
                      <Button
                        onClick={() =>  navigate('/cart', {
                          state: {
                            item: data
                          }
                        })}
                        type="submit"
                        variant="contained"
                        sx={{ '&:hover': {
                          backgroundColor: 'primary.dark',
                          color: 'appmain.main'
                        }, backgroundColor: 'primary.light', color: 'primary.dark' }}
                      >
                        View Cart
                    </Button>
                    <Button
                        onClick={() =>  navigate('/checkout', {
                          state: {
                            item: data
                          }
                        })}
                        type="submit"
                        variant="contained"
                        sx={{ '&:hover': {
                          backgroundColor: 'primary.main',
                        }, marginTop: 2,  backgroundColor: 'secondary.main'}}
                      >
                        CHECKOUT
                      </Button>
                  </Box>
                </Box>
              </Box>
            </Drawer>


            <IconButton onClick={() => setSigninModalState(true)} size="large" aria-label="search" color="inherit" sx={{ "&:hover": { color: "secondary.main" } }}>
             <AccountCircle />
            </IconButton>

            <Modal
              open={signinModalState}
              onClose={() => setSigninModalState(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <SignIn/>

            </Modal>
            <Modal
              open={signupModalState}
              onClose={() => setSignupModalState(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <SignUp/>

            </Modal>
            <Modal
              open={forgetPasswordModalState}
              onClose={() => setForgetPasswordModalState(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ForgotPassword/>

            </Modal>
            <Box sx={{display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ flexGrow: 0.1,
                  display: { xs: 'flex', md: 'none' },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem key={item} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{item}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ElevationScroll>
  );
}
export default DefaultAppBar;