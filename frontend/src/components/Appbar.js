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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo_white from '../assets/images/logo_white.png'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import CloseRounded from '@mui/icons-material/CloseRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider, SwipeableDrawer, TextField } from '@mui/material';
import Search from '@mui/icons-material/Search';

const navItems = ['Collection', 'About', 'Contact'];



function DefaultAppBar() {
  const [state, setState] = React.useState(false)


  const searchSection = () => (
    <Box
      height={100}
      p={5}
      alignItems="center"
      justifyContent="center"
      sx={{}}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

      <IconButton sx={{position: 'absolute', top: '5px', right: '10px'}} size="large" aria-label="search" color="inherit">
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
    <AppBar position="static" color='appmain'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'flex' },
            }}>
          <Avatar alt="SF" src={logo_white} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: 'fantasy',
              fontWeight: 700,
              letterSpacing: '.rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Sonali Fashion
          </Typography>
          </Box>
          <List sx={{  flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <ListItem key={item} >
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box  justifyContent="end" sx={{  flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
             <React.Fragment key={'top'}>
                <IconButton onClick={toggleDrawer(true)} size="large" aria-label="search" color="inherit">
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
              size="large"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="search" color="inherit">
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