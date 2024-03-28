import {
  Badge,
  Box,
  CardMedia,
  Container,
  Divider,
  Paper,
  Typography,
  Breadcrumbs,
  FormControlLabel,
  Button,
  TextField,
  Grid,
  FormGroup,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useNavigate, useLocation } from 'react-router-dom';
import Constants from '../utils/Constants';

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Shipping', 'Review & Payments'];
  const navigate = useNavigate();
  const obj = useLocation();
  const [item, setItem] = React.useState(obj.state);
  const [country, setCountry] = React.useState('');
  const [province, setProvince] = React.useState('');
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Payment Success', trigger: '/paymentSuccess', active: false },
  ];
  const handleChangeProvince = (event) => {
    setProvince(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="xl">
      <BreadCrumbs crumbs={crumbs} />
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box
        width={'100%'}
        justifyContent={'space-between'}
        display="flex"
        sx={{
          marginTop: 5,
          marginBottom: '60px',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          display="flex"
          flexDirection={'column'}
          sx={{ width: { xs: '100%', md: '48%' } }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: '10px' }}
          >
            Contact: Surajeet407@gmail.com
          </Typography>
          <Typography variant="h4" color={'primary'} sx={{ marginTop: 4 }}>
            Shipping Address
          </Typography>

          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  label="Full Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="Phone" name="phone" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Address" name="address" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="City" name="city" />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={country}
                    fullWidth
                    label="Country"
                    onChange={handleChangeCountry}
                  >
                    <MenuItem value={'India'}>India</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Province</InputLabel>
                  <Select
                    value={province}
                    fullWidth
                    label="Province"
                    onChange={handleChangeProvince}
                  >
                    <MenuItem value={'West Bengal'}>West Bengal</MenuItem>
                    <MenuItem value={'Delhi'}>Delhi</MenuItem>
                    <MenuItem value={'Karnataka'}>Karnataka</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Postal Code"
                  name="pincode"
                />
              </Grid>
            </Grid>
          </Box>
          <Typography variant="h4" color={'primary'} sx={{ marginTop: 4 }}>
            Shipping Method
          </Typography>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Standard Delivery - 0/-"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Express Delivery - 50/-"
            />
          </FormGroup>

          <Typography variant="h4" color={'primary'} sx={{ marginTop: 4 }}>
            Payment Method
          </Typography>

          <Button
            onClick={() => {
              handleNext();
              // navigate('/paymentSuccess', {
              //   state: {
              //     item: item
              //   }
              // })
            }}
            type="submit"
            variant="contained"
            sx={{
              '&:hover': {
                backgroundColor: 'primary.main',
              },
              mt: 3,
              mb: 2,
              display: { xs: 'none', md: 'block' },
              backgroundColor: 'secondary.main',
            }}
          >
            {Constants.nextBtnText}
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection={'column'}
          sx={{
            width: { xs: '100%', md: '48%' },
            marginBottom: '100px',
            marginTop: { xs: 1, md: 0 },
          }}
        >
          <Box sx={{ height: item.height, height: '80px' }}>
            <Box
              display="flex"
              flexDirection={'row'}
              justifyContent={'space-between'}
            >
              <Box display="flex" flexDirection={'row'}>
                <Badge
                  badgeContent={17}
                  color="error"
                  sx={{ '&:hover': { color: 'secondary.main' } }}
                >
                  <CardMedia
                    component="img"
                    height={80}
                    image={item[0].img}
                    alt="Image Title"
                  />
                </Badge>
                <Box
                  display="flex"
                  width={'300px'}
                  justifyContent={'space-arround'}
                  flexDirection={'column'}
                  sx={{ marginLeft: 3 }}
                >
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {item[0].title}
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
                    {item[0].Price} /-
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection={'column'}>
                <Typography
                  component={'div'}
                  variant="h6"
                  color={'primary.main'}
                  sx={{ fontWeight: 'bold', marginTop: '5px' }}
                >
                  5678 /-
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ marginTop: 2 }} />
          <Box
            display="flex"
            justifyContent={'space-between'}
            flexDirection={'row'}
            sx={{ marginTop: 2 }}
          >
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: '400', marginTop: '5px' }}
            >
              Sub Total
            </Typography>
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: '400', marginTop: '5px' }}
            >
              1 Item
            </Typography>
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: '400', marginTop: '5px' }}
            >
              5678 /-
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent={'space-between'}
            flexDirection={'row'}
            sx={{ marginTop: '10px' }}
          >
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: '400', marginTop: '5px' }}
            >
              Shipping
            </Typography>
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: '400', marginTop: '5px' }}
            >
              Standard Delivery
            </Typography>
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: '400', marginTop: '5px' }}
            >
              50 /-
            </Typography>
          </Box>
          <Divider sx={{ marginTop: 2 }} />
          <Box
            display="flex"
            justifyContent={'space-between'}
            flexDirection={'row'}
          >
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: 'bold', marginTop: '5px' }}
            >
              Total
            </Typography>
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: 'bold', marginTop: '5px' }}
            >
              5678 /-
            </Typography>
          </Box>
          <Typography
            component={'div'}
            variant="body2"
            color={'primary.main'}
            sx={{ fontWeight: '400', marginTop: '5px' }}
          >
            (Inclusive of tax $0.00)
          </Typography>
          <Button
            onClick={() =>
              navigate('/paymentSuccess', {
                state: {
                  item: item,
                },
              })
            }
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              '&:hover': {
                backgroundColor: 'primary.main',
              },
              mt: 3,
              mb: 2,
              display: { xs: 'block', md: 'none' },
              backgroundColor: 'secondary.main',
            }}
          >
            {Constants.continueePaymentText}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
