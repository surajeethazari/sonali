import React from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import Constants from '../utils/Constants';
import {
  Box,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Pagination,
  PaginationItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Email from '@mui/icons-material/Email';
import data from '../assets/data/featuredCollection.json';

export default function AccountDetails() {
  const navigate = useNavigate();
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'My Account', trigger: '/userdetails', active: false },
  ];

  return (
    <Container maxWidth="xl">
      <BreadCrumbs crumbs={crumbs} />
      <Box
        width={'100%'}
        justifyContent={'space-between'}
        display="flex"
        sx={{ marginTop: 5, flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Box
          display="flex"
          flexDirection={'column'}
          sx={{ width: { xs: '100%', md: '68%', marginBottom: '100px' } }}
        >
          <Typography
            color={'primary.main'}
            variant="h5"
            component="div"
            sx={{ fontWeight: '400' }}
          >
            {Constants.orderHistoryText}
          </Typography>
          <Divider sx={{ marginTop: 1 }} />
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 1 }}
          >
            {Constants.noOrderFoundText}
          </Typography>
          {data.map((item, index) => (
            <Paper
              elevation={2}
              key={index}
              sx={{
                height: item.height,
                marginTop: 2,
                height: '50px',
                padding: 5,
              }}
            >
              <Box
                display="flex"
                flexDirection={'row'}
                justifyContent={'space-between'}
              >
                <Box display="flex" flexDirection={'row'}>
                  <CardMedia
                    component="img"
                    height={80}
                    image={item.img}
                    alt="Image Title"
                  />
                  <Box
                    display="flex"
                    width={'300px'}
                    justifyContent={'space-arround'}
                    flexDirection={'column'}
                    sx={{ marginLeft: 1 }}
                  >
                    <Typography
                      onClick={() =>
                        navigate('/detail/' + item.title, {
                          state: {
                            item: item,
                          },
                        })
                      }
                      variant="body2"
                      component="div"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component={'span'}
                      variant="body2"
                      color={'primary.main'}
                      sx={{ fontWeight: '400', marginTop: '5px' }}
                    >
                      Color: Blue, Size: XL
                    </Typography>
                    <Typography
                      component={'span'}
                      variant="body2"
                      color={'primary.main'}
                      sx={{ fontWeight: '400', marginTop: '5px' }}
                    >
                      2 × {item.Price} /-
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" flexDirection={'column'}>
                  <Typography
                    color={'primary.main'}
                    variant="body2"
                    component="div"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Order Id: #12345
                  </Typography>
                  <Typography
                    component={'div'}
                    variant="body2"
                    color={'secondary.main'}
                    sx={{ fontWeight: 'bold', marginTop: '5px' }}
                  >
                    TotalPrice: 5678 /-
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
          <Stack alignItems={'center'} sx={{ marginTop: 2 }} spacing={2}>
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </Box>
        <Box
          display="flex"
          flexDirection={'column'}
          sx={{ width: { xs: '100%', md: '28%', marginBottom: '100px' } }}
        >
          <Box
            display="flex"
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            width="100%"
          >
            <Typography
              color={'primary.main'}
              variant="h5"
              component="div"
              sx={{ fontWeight: '400' }}
            >
              {Constants.accountDetailsText}
            </Typography>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Typography
                color={'secondary.main'}
                variant="body2"
                component="div"
                sx={{ fontWeight: '400' }}
              >
                {Constants.logOutText}
              </Typography>
            </Link>
          </Box>
          <Divider sx={{ marginTop: 1 }} />
          <Box display="flex" flexDirection={'row'} sx={{ marginTop: 1 }}>
            <IconButton
              size="medium"
              aria-label="search"
              color="inherit"
              sx={{ '&:hover': { color: 'secondary.main' } }}
            >
              <AccountCircle />
            </IconButton>
            <Typography
              color={'primary.main'}
              variant="body2"
              component="div"
              sx={{ fontWeight: '400', marginLeft: 1, marginTop: '10px' }}
            >
              Name
            </Typography>
          </Box>

          <Box display="flex" flexDirection={'row'} sx={{ marginTop: 1 }}>
            <IconButton
              size="medium"
              aria-label="search"
              color="inherit"
              sx={{ '&:hover': { color: 'secondary.main' } }}
            >
              <Email />
            </IconButton>
            <Typography
              color={'primary.main'}
              variant="body2"
              component="div"
              sx={{ fontWeight: '400', marginLeft: 1, marginTop: '10px' }}
            >
              Surajeet407@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
