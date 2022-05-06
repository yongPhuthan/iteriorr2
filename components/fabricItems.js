import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import * as stateAction from "../src/action/app.action";
import {useEffect,useState, useContext, useReducer} from 'react'
import { Store } from '../utils/Store';

import {
  Paper,
  CardMedia,
  Typography,
  Grid,
  Avatar,
  Stack,
} from '@mui/material';
import classes from '../styles/Fabric.module.css';
import { urlForThumbnail } from '../utils/image';



const FabricItems = ({ product }) => {
  // const [style, setStyle] = useState('');
  // const appReducer = useSelector(({ appReducer }) => appReducer.fabric);
  // const dispatch = useDispatch()
  const { state, dispatch } = useContext(Store);
  const { style, fabric, colorName, colorId } = state;
  const [ newFabric, setNewFabric ] = useState('')

  const changeStyle = (value) =>{
    dispatch(stateAction.fabricStyle(value));
  } 

  useEffect(() => {
    setNewFabric(fabric)
    
  }, [fabric]);

  console.log(product)

  return (
    <>
      <NextLink   href={`/products/${product.slug.current}` } passHref >
        <Paper elevation={0} href="/">
          <CardMedia
            onClick={()=>changeStyle(product.title)}            
            component="img"
            image={urlForThumbnail(
              product.defaultFabricVariant[0].images[1].asset
            )}
            
            title="curtain1"
            width="300px"
            height="190px"
            align="top"
            
          >
          </CardMedia>

          <Grid container spacing={1}>
            <Grid item xs={9} ml={1}>
              <Typography className={classes.cardh1}>
                <b>{product.title}</b>
              </Typography>
              <Stack direction="row" spacing={1}>
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
              </Stack>

              <Typography className={classes.cardtxt}>
                {product.body.en[0].children[0].text}
              </Typography>
            </Grid>

            <Grid className={classes.cardtxtright} mt={1}>
              <Typography className={classes.cardh3}>ราคาเริ่มต้น</Typography>
              <Typography className={classes.cardprice}>
                {product.defaultFabricVariant.price} B
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </NextLink>
    </>
  );
};

export default FabricItems;
