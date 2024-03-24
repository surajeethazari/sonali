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
import { SwipeableDrawer, TextField } from '@mui/material';
import { useNavigate, NavLink, Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

const navItems = ['Collection', 'Contact'];



function DefaultAppBar() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [state, setState] = React.useState(false)
  const handleAcooutClick = () => {
    navigate('/signin');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

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

  return (
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
          <List sx={{  flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <ListItem onClick={() => handleNavItemClick(item)} key={item} >
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
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

             <IconButton
              onClick={() => navigate('/favourite')}
              size="large"
              color="inherit"
            >
              <Badge badgeContent={2} color="error" sx={{ "&:hover": { color: "secondary.main" } }}>
                <StarIcon/>
              </Badge>
            </IconButton>
            <IconButton
              onClick={() => navigate('/cart')}
              size="large"
              color="inherit"
            >
              <Badge badgeContent={17} color="error" sx={{ "&:hover": { color: "secondary.main" } }}>
                <ShoppingCart/>
              </Badge>
            </IconButton>
            <IconButton onClick={() => navigate('/signin')} size="large" aria-label="search" color="inherit" sx={{ "&:hover": { color: "secondary.main" } }}>
             <AccountCircle />
            </IconButton>
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
  );
}
export default DefaultAppBar;