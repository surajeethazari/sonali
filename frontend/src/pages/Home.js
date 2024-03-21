import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import DISCOUNT from '../assets/images/DISCOUNT.jpg'
import DISCOUNT1 from '../assets/images/DISCOUNT1.jpg'
import { Carousel } from 'antd';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActions, CardContent, Divider, Paper } from '@mui/material';
import Constants from '../utils/Constants';


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1694243382333-9e3244d9ba04',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1619286188088-de820bdc1230',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1667665970118-f55705003914',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1708534419572-6e6614a53ca1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1528812969535-4bcefc071532',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1599662875272-64de8289f6d8',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1602010069450-0a62034f235c',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1497882241965-7129dd95f30d',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1619794724492-651397287d94',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1586024709284-7481a940c507',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1610657965198-7352e7aef1ea',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1520310809185-5cc119cf8b08',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1495385794356-15371f348c31',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc',
    title: 'Bike',
  },
];

export default function Home(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    
  return (
        <Box >
        <Carousel dotPosition="right" autoplay effect="fade">
              <CardMedia
                component="img"
                height="650"
                image={DISCOUNT}
                alt="Image Title"
              />
             <CardMedia
                component="img"
                height="650"
                image={DISCOUNT1}
                alt="Image Title"
              />
          </Carousel>
          <Container component="main" maxWidth="xl">
            <Box display="flex"
            alignItems="center"
            justifyContent="center" flexDirection={'column'} m={2} sx={{}}>
            <Typography mt={5} variant="h4" color={'primary'} sx={{fontWeight: 'bold', borderBottom: '2px solid #ccc'}}>
              {Constants.featuredProductText}
            </Typography>
              <Divider/>
              <Masonry sx={{marginTop: 5}} columns={3} spacing={2}>
                {itemData.map((item, index) => (
                  <Paper elevation={8} key={index}>
                    <Card>
                    {/* <CardMedia
                      sx={{ height: 140 }}
                      image={`${item.img}?w=120&auto=format`}
                      title="green iguana"
                    /> */}
                     <img
                      srcSet={`${item.img}?w=100&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=120&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                        Sample Product
                      </Typography>
                      <Typography component={'span'} variant="body2" color="text.secondary" sx={{fontWeight: 'bold'}}>
                        Price: 800/-
                      </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                   
                  </Paper>
                ))}
              </Masonry>
            </Box>
          </Container>
        </Box>
  );
}