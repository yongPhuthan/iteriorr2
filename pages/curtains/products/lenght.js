import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Box,
  Step,
  Stepper,
  StepLabel,
  Slider,
  Typography,
  Paper,
  CardMedia,
  Button,
  Divider,
  Stack,
  Avatar,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  Autocomplete,
} from '@mui/material';
import { useState } from 'react';
import RelatedItems from '../../../components/relatedItems';

const steps = ['สไตล์', 'ชนิดผ้า', 'สี', 'ไซส์', 'Panels', 'Linear'];

const ContinueButton = styled(Button)({
  //   boxShadow: 'none',
  textTransform: 'none',
  padding: '12px',
  backgroundColor: '#ffb5a0',
  marginTop: '20px',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#fff',
    color: '#ffb5a0',
  },
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
});

const CalculateButton = styled(Button)({
  //   boxShadow: 'none',
  textTransform: 'none',
  padding: '12px',
  backgroundColor: '#596365',
  marginTop: '20px',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#596365',
    color: '#fff',
  },
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
});

const ContinueButton2 = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '12px',
  backgroundColor: '#ffff',
  color: '#ffb5a0',
  border: '1px solid #ffb5a0',
  fontColor: '#ffb5a0',
  marginTop: '20px',
  borderRadius: 0,

  '&:hover': {
    backgroundColor: '#ffb5a0',
    color: '#fff',
  },
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
});

const Lenght = () => {
  const [value, setValue] = useState(1);
  const [content, setContent] = useState(true);
  const [age, setAge] = useState('');
  const [pageWidth, setPageWidth] = useState('');
  const [fullShow, setFullshow] = useState(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const chooseCalculatePage = (page1) => {
    setFullshow(false);
    setPageWidth(page1);
    const page = page1;
    console.log(fullShow + page);
  };
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1) {
      setValue(1);
    }
  };
  return (
    <>
      {/* Stepper */}
      <Grid container justifyContent={'center'}>
        <Box
          sx={{ width: '90%' }}
          mt={5}
          paddingTop="20px"
          paddingBottom={'50px'}
        >
          <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Grid>
      {(fullShow == true && (
        <Paper elevation={0}>
          <Grid container spacing={3} mb={5}>
            <Grid container justifyContent={'right'} item xs={6}>
              <Box sx={{ width: '60px', margin: '1' }}>
                <Grid mb={1}>
                  <CardMedia
                    component="img"
                    image="/images/curtain1.jpg"
                    title="curtain1"
                    height={'72'}
                    align="top"
                  ></CardMedia>
                </Grid>
                <CardMedia
                  component="img"
                  image="/images/curtain1.jpg"
                  title="curtain1"
                  height={'72'}
                  align="top"
                ></CardMedia>
              </Box>
              <Box sx={{ width: '482px', marginLeft: '20px' }}>
                <CardMedia
                  component="img"
                  image="/images/curtain1.jpg"
                  title="curtain1"
                  height={'581'}
                  align="top"
                ></CardMedia>
              </Box>
            </Grid>
            {(content && (
              <Grid container justifyContent={'left'} item xs={6}>
                <Grid>
                  <Typography
                    fontSize={'40px'}
                    fontStyle={'bold'}
                    fontWeight={'500'}
                    marginBottom={'20px'}
                  >
                    Paseo
                  </Typography>
                  <Divider width="100%" />
                  <Typography
                    fontSize={'20px'}
                    fontStyle={'bold'}
                    fontWeight={'500'}
                    marginTop="10px"
                  >
                    Starting at: $75.00{' '}
                  </Typography>
                  <Typography fontStyle={'bold'} marginTop="10px">
                    Soft, smooth viscose blend
                  </Typography>
                  <Typography
                    fontSize={'18px'}
                    fontStyle={'bold'}
                    fontWeight={'500'}
                    marginTop="10px"
                  >
                    Material:
                  </Typography>
                  <Typography width="90%">
                    60% Polyester, 40% Viscose (See our note on man-made
                    fabrics)
                  </Typography>
                  <Typography
                    fontSize={'18px'}
                    fontStyle={'bold'}
                    fontWeight={'500'}
                    marginTop="10px"
                  >
                    Care instructions:
                  </Typography>
                  <Typography width="90%">
                    Machine wash warm | Do not tumble dry | Iron low
                  </Typography>

                  <Typography marginTop="10px">
                    Select a color to continue designing your curtain or order
                    up to 5 free swatches.
                  </Typography>
                  {/* avatar Items */}
                  <Stack marginTop={0.5} direction="row" spacing={1}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/images/fabrics/fabric1.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/fabrics/fabric2.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="/images/fabrics/fabric3.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/fabrics/fabric2.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="/images/fabrics/fabric3.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/fabrics/fabric2.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="/images/fabrics/fabric3.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/fabrics/fabric2.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="/images/fabrics/fabric3.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                  </Stack>

                  <ContinueButton
                    marginTop={'20px'}
                    variant="contained"
                    onClick={() => setContent(false)}
                  >
                    <Typography paddingLeft={3} paddingRight={3}>
                      select & continue
                    </Typography>
                  </ContinueButton>
                </Grid>
              </Grid>
            )) || (
              <Grid container justifyContent={'left'} item xs={6}>
                <Grid>
                  <Typography width="100%">Measurements: Width</Typography>
                  <Divider width="100%" />
                  <Typography fontStyle={'bold'} marginTop="10px">
                    You have two options to determine your curtain width:
                  </Typography>
                  <Grid container spacing={0.5}>
                    <Grid container item xs={5}>
                      <Box
                        sx={{
                          width: '300px',
                          marginTop: '30px',
                          border: '2px solid',
                          borderColor: ' #ffb5a0',
                          borderRadius: '5px',
                        }}
                      >
                        <CardMedia
                          onClick={() => chooseCalculatePage('two')}
                          component="img"
                          image="/images/fabrics/calculate2.webp"
                          title="curtain1"
                          height={'352px'}
                          align="top"
                        ></CardMedia>
                      </Box>

                      <Grid container spacing={2} marginTop={5}>
                        <Grid item xs={6}>
                          <ContinueButton2
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                            onClick={() => setContent(true)}
                          >
                            <Typography paddingLeft={2} paddingRight={2}>
                              ย้อนกลับ
                            </Typography>
                          </ContinueButton2>
                        </Grid>
                        <Grid item xs={6}>
                          <ContinueButton
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                          >
                            <Typography paddingLeft={2} paddingRight={2}>
                              continue
                            </Typography>
                          </ContinueButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      justifyContent={'center'}
                      item
                      xs={2}
                      marginTop="200px"
                    >
                      <Typography
                        fontSize={'26px'}
                        fontStyle={'bold'}
                        fontWeight={'500'}
                        marginBottom={'20px'}
                      >
                        OR
                      </Typography>
                    </Grid>

                    <Grid item xs={5}>
                      <Box
                        sx={{
                          width: '225px',
                          marginTop: '30px',
                          border: '2px solid',
                          borderColor: ' #ffb5a0',
                          borderRadius: '5px',
                        }}
                      >
                        <CardMedia
                          component="img"
                          onClick={() => chooseCalculatePage('page2')}
                          image="/images/fabrics/calculate1.webp"
                          title="curtain1"
                          height={'352px'}
                          align="top"
                        ></CardMedia>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Paper>
      )) ||
        (pageWidth == 'two' ? (
          <Paper elevation={0}>
            <Grid container spacing={3} mb={5} mt={3}>
              <Grid container justifyContent={'right'} item xs={6}>
                <Box sx={{ width: '482px', marginLeft: '20px' }}>
                  <CardMedia
                    component="img"
                    image="/images/fabrics/width.webp"
                    title="curtain1"
                    height={'581'}
                    align="top"
                  ></CardMedia>
                </Box>
              </Grid>

              <Grid container justifyContent={'left'} item xs={6}>
                <Grid>
                  <Typography
                    fontSize={'36px'}
                    fontStyle={'bold'}
                    fontWeight={'400'}
                    marginBottom={'20px'}
                  >
                    Measurements: Width
                  </Typography>

                  <Divider width="100%" />
                  <Grid container>
                    <Grid item xs={6.5} justifyContent={'right'}>
                      <Typography
                        fontSize={'20px'}
                        fontStyle={'bold'}
                        fontWeight={'500'}
                        marginTop="10px"
                      >
                        Enter your curtain width in inches:
                      </Typography>
                    </Grid>
                    <Grid item xs={2} mt={1.5}>
                      <form>
                        <input
                          style={{ width: '60px', height: '30px' }}
                        ></input>
                      </form>
                    </Grid>
                  </Grid>

                  <Typography fontStyle={'bold'} marginTop="10px">
                    How many of these curtains would you like?
                  </Typography>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Age</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={age}
                      label="จำนวนที่ต้องการ"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>

                  <Typography
                    fontSize={'18px'}
                    fontStyle={'bold'}
                    fontWeight={'500'}
                    marginTop="10px"
                  >
                    Material:
                  </Typography>
                  <Typography width="90%">
                    Keep in mind curtains need to be between 1.5 to 3 times
                    wider than the window they cover so you get that nice, wavy
                    curtain look. This is referred to as fullness. We recommend
                    a minimum fullness of 2x. This means if your window is 50”
                    wide, the curtain width you enter above should be 100” (or
                    you can do 2 curtains that are each 50”).
                  </Typography>

                  <Grid container item xs={5} marginTop={5}>
                    <Grid item xs={6} container justifyContent={'left'}>
                      <ContinueButton2
                        marginTop={'20px'}
                        variant="contained"
                        width="200px"
                        onClick={() => setFullshow(true)}
                      >
                        <Typography
                          paddingLeft={2}
                          paddingRight={2}
                          // color={'#ffb5a0'}
                        >
                          ย้อนกลับ
                        </Typography>
                      </ContinueButton2>
                    </Grid>
                    <Grid item xs={6} container justifyContent={'left'}>
                      <ContinueButton
                        marginTop={'20px'}
                        variant="contained"
                        width="200px"
                      >
                        <Typography paddingLeft={2} paddingRight={2}>
                          continue
                        </Typography>
                      </ContinueButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Paper elevation={0}>
            <Grid container spacing={3} mb={5} mt={3}>
              <Grid container justifyContent={'right'} item xs={6}>
                <Box sx={{ marginLeft: '20px', width: '580px' }}>
                  <CardMedia
                    component="img"
                    image="/images/fabrics/width2.webp"
                    title="curtain1"
                    height={'581'}
                    align="top"
                  ></CardMedia>
                </Box>
                
              </Grid>

              <Grid container justifyContent={'left'} item xs={6}>
                <Grid>
                  <Typography
                    fontSize={'36px'}
                    fontStyle={'bold'}
                    fontWeight={'400'}
                    marginBottom={'20px'}
                  >
                    Measurements: Width
                  </Typography>

                  <Divider width="90%" />
                  <Grid container>
                    <Grid justifyContent={'left'} mt={1} width="90%">
                      <form>
                        <label htmlFor="fname">
                          <b>1 .</b> Enter the width of your window, <b>A:</b>{' '}
                          {''}
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          style={{ width: '50px', height: '30px' }}
                        />
                        <br />
                        <br />
                      </form>
                      <form>
                        <label htmlFor="fname">
                          <b>2 .</b> We recommend adding a margin of 5-10” on
                          each side for proper coverage. Choose your margin,{' '}
                          <b>B:</b> {''}
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="10"
                          style={{ width: '50px', height: '30px' }}
                        />
                        <br />
                        <br />
                      </form>
                      <Typography>
                        <b>3 .</b> We can make this as one big curtain or split
                        it into a few smaller ones. How many pieces should your
                        curtain be?
                      </Typography>
                      <Box sx={{ width: 150 }}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs>
                            <Slider
                              max={5}
                              value={typeof value === 'number' ? value : 1}
                              onChange={handleSliderChange}
                              aria-labelledby="input-slider"
                            />
                          </Grid>
                          <Grid item>
                            <Typography
                              onChange={handleInputChange}
                              onBlur={handleBlur}
                            >
                              {value} ผืน
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid width="100%">
                      <CalculateButton marginTop={'20px'} variant="contained">
                        <Typography paddingLeft={10} paddingRight={10}>
                          Calculate
                        </Typography>
                      </CalculateButton>
                    </Grid>
                
                  </Grid>
                             {/* Button back & continue */}
                             <Grid container item xs={5} marginTop={5}>
                    <Grid item xs={6} container justifyContent={'left'}>
                      <ContinueButton2
                        marginTop={'20px'}
                        variant="contained"
                        width="200px"
                        onClick={() => setFullshow(true)}
                      >
                        <Typography
                          paddingLeft={2}
                          paddingRight={2}
                          // color={'#ffb5a0'}
                        >
                          ย้อนกลับ
                        </Typography>
                      </ContinueButton2>
                    </Grid>
                    <Grid item xs={6} container justifyContent={'left'}>
                      <ContinueButton
                        marginTop={'20px'}
                        variant="contained"
                        width="200px"
                      >
                        <Typography paddingLeft={2} paddingRight={2}>
                          continue
                        </Typography>
                      </ContinueButton>
                    </Grid>
                  </Grid>
                 

       
                </Grid>

              </Grid>
            </Grid>
          </Paper>
        ))}

      <RelatedItems />
    </>
  );
};

export default Lenght;
