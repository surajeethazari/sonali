import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import DISCOUNT from '../assets/images/DISCOUNT.png'
import { Carousel } from 'antd';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActions, CardContent, Divider, Paper } from '@mui/material';
import Constants from '../utils/Constants';
import { useTheme } from '@mui/material/styles';
import data from '../assets/data/featuredCollection.json'
import { useNavigate, NavLink, Link } from "react-router-dom";



export default function Home(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const onProductTitleClick = (item) =>  {
    navigate('/detail/' + item.title, {
      state: {
        item: item
      }
    })
  }
  
  return (
        <Box >
          <Carousel dotPosition="right" autoplay effect="fade" dots="false">
              <CardMedia
                component="img"
                height="400"
                image={DISCOUNT}
                alt="Image Title"
              />
              <CardMedia
                component="img"
                height="400"
                image={DISCOUNT}
                alt="Image Title"
              />
          </Carousel>
          <Container component="main" maxWidth="xl">
            <Box display="flex"
            alignItems="center"
            justifyContent="center" flexDirection={'column'} m={2} sx={{}}>
            <Typography mt={5} variant="h5" color={'primary'} sx={{fontWeight: 'bold', borderBottom: '2px solid #ccc'}}>
              {Constants.featuredProductText}
            </Typography>
              <Divider/>
              <Masonry sx={{marginTop: 5}} columns={3} spacing={2}>
                {data.map((item, index) => (
                  <Paper elevation={8} key={index} sx={{height: item.height}}> 
                    <Card>
                    
                    <CardContent style={{background: theme.palette.primary.light }}>
                      <CardMedia
                        component="img"
                        height={item.height - 90}
                        image={item.img}
                        alt="Image Title"
                      />
                      <Typography onClick={() => onProductTitleClick(item)} color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                        {item.title}
                      </Typography>
                      <Typography component={'div'} variant="body2" color={'secondary.main'} sx={{fontWeight: 'bold'}}>
                        Price: {item.Price}/-
                      </Typography>
                    </CardContent>
                  </Card>
                   
                  </Paper>
                ))}
              </Masonry>
            </Box>
          </Container>
        </Box>
  );
}