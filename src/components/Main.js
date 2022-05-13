import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { manageProduct } from '../actions';

const Counter = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const isProduct = products.product.filter((item) => {
    if (item.id) {
      return true;
    }
    return false;
  });
  if (isProduct.length === 0) {
    return (
      <Container maxWidth='md' align='center'>
        <Typography variant='h6' gutterBottom>
          Oops! No Product available, please add
        </Typography>
        <Button variant='outlined' onClick={() => dispatch(manageProduct())}>
          Add Product
        </Button>
      </Container>
    );
  } else
    return (
      <Container maxWidth='md'>
        <Grid container spacing={4} alignItems='center'>
          {products &&
            products.product &&
            products.product.map((product, index) => {
              return (
                <Grid item key={index}>
                  <Card style={{ maxWidth: 250, minWidth: 250 }}>
                    <CardMedia
                      component='img'
                      height='140'
                      image={product.image}
                      alt={product.productName}
                    />
                    <CardContent>
                      <Grid container justifyContent='space-between'>
                        <Grid item>
                          <Typography
                            gutterBottom
                            variant='body2'
                            component='div'
                          >
                            {product.productName}
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                            {product.description}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='body1'>
                            {product.price}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    );
};

export default Counter;
