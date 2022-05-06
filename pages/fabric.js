import React from 'react';
import FabricItems from '../components/FabricItems';
import {
  Grid,
  Box,
  Typography,
  Step,
  Stepper,
  StepLabel,
} from '@mui/material';

import classes from '../styles/Fabric.module.css';
const steps = [
  'สไตล์',
  'ชนิดผ้า',
  'สี',
  'ไซส์',
  'Panels',
  'Linear',
];

const Fabric = () => {

  return (
    <>
        <Grid container justifyContent={'center'}>
          <Box
            sx={{ width: '90%' }}
            mt={5}
            paddingTop="20px"
            paddingBottom={'50px'}
          >
            <Stepper activeStep={1} alternativeLabel >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>

        <Grid container justifyContent={'center'} mt={7}>
          <Grid>
            <Typography className={classes.fabricPageTxt}>
              Select a fabric below to continue.
            </Typography>
            <Grid container justifyContent={'center'}>
              <Typography className={classes.fabricPageH1}>
                Sheer Fabric
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Box mb={10} padding={3}>
          <Grid container justifyContent="center">
            <divider></divider>
            <Grid margin={2}>
              <FabricItems />
            </Grid>
            <Grid margin={2}>
              <FabricItems />
            </Grid>
            <Grid margin={2}>
              <FabricItems />
            </Grid>
          </Grid>
        </Box>
    </>
  );
};

export default Fabric;
