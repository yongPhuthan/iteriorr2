import Head from 'next/head';
import Image from 'next/image';
import ProductItems from '../components/productItems';
import {
  Container,
  Grid,
  Box,
  Step,
  Stepper,
  StepLabel,
  Typography,
} from '@mui/material';
import classes from '../styles/Card.module.css';

const steps = ['สไตล์', 'ชนิดผ้า', 'สี', 'ไซส์', 'Panels', 'Linear'];

export default function Curtains() {
  return (
    <>
      <Grid container justifyContent={'center'}>
        <Box
          sx={{ width: '90%' }}
          mt={5}
          paddingTop="20px"
          paddingBottom={'50px'}
        >
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Grid>

      <Grid container justifyContent={'center'} mt={5}>
        <Grid container justifyContent={'center'}>
            <Typography fontSize={'40px'} fontStyle={'bold'} fontWeight={'600'}>
              สไตล์
            </Typography>
        </Grid>
        <Grid container justifyContent={'center'} maxWidth={'600px'}>
          <Typography fontSize={'18px'} fontStyle={'normal'} fontWeight={'300'}>
            Starting prices are for a 40”x80” curtain. Design yours now and
            we’ll ship it your way in 10 days or less. Select your style below
            to get started.
          </Typography>
        </Grid>
      </Grid>

      <Box mb={10} padding={3}>
        <Grid container justifyContent="center">
          <Grid margin={2}>
            <ProductItems />
          </Grid>
          <Grid margin={2}>
            <ProductItems />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
