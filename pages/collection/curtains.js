import React from 'react';
import FabricItems from '../../components/FabricItems';
import { Grid, Box, Typography, Step, Stepper, StepLabel,  CircularProgress,
  Alert, } from '@mui/material';
import { useState, useEffect } from 'react';
import { Store } from '../../utils/Store';
import jsCookie from 'js-cookie';
import { useSelector } from 'react-redux';
import * as stateAction from './../../src/action/app.action';
import client from '../../utils/client';
import { useContext } from 'react';
import classes from '../../styles/Fabric.module.css';
import Steps from '../../components/shared/Steps';

const CollectionCurtains = () => {
  const { state, dispatch } = useContext(Store);
  const changeStyle = (value) =>{
    dispatch(stateAction.fabricStyle(value));
  } 


  const [stateAPI, setStateAPI] = useState({
    products: [],
    error: '',
    loading: true,
  });
  
  const { loading, error, products } = stateAPI;

  // const [style, setStyle] = useState('');
  // const appReducer = useSelector(({ appReducer }) => appReducer.style);
  const { style, fabric, colorName, colorId } = state;
  const [newStyle, setNewStyle] = useState('')
  const [newFabric, setNewFabric] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "curtain"]`);
        setStateAPI({ products, loading: false });
      } catch (err) {
        setStateAPI({ loading: false, error: err.message });
      }
    };
    fetchData();
    
setNewStyle(style)
setNewFabric(fabric)

  }, [fabric, newStyle, style]);

  
  // const steps = ['สไตล์ ' + style, 'ชนิดผ้า', 'สี', 'ไซส์', 'Panels', 'Linear'];

  return (
    <>
    <Steps props={{step1:newStyle,active:1}} />

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



      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
      <Box mb={10} padding={3} >{products.map((product) => 
        (<Grid container justifyContent="center" key={product.slug}>
        <divider></divider>
        <Grid margin={2}>
          <FabricItems product ={product} />
      </Grid>
      <div><h3 onClick={()=>changeStyle(product.title)}>{fabric}</h3></div>
      
      
      </Grid>
      ))}
      </Box>
      )}
          
    </>
  );
}

export default CollectionCurtains;
