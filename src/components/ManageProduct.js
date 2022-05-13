import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  OutlinedInput,
  FormControl,
  Input,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions';
import { SimpleSnackbar } from './helper';
import ProductList from './ProductList';

const ManageProducts = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({ isSuccess: false, message: '' });
  const products = useSelector((state) => state.product);
  const isProduct = products.product.filter((item) => {
    if (item.id) {
      return true;
    }
    return false;
  });

  const [values, setValues] = useState({
    id: '',
    productName: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    if (e.target.name === 'image') {
      setValues({
        ...values,
        [e.target.name]: base64,
      });
    }
  };

  const handleChange = (e) => {
    if (e.target.name !== 'image') {
      setValues({
        ...values,
        id: Date.now(),
        [e.target.name]: e.target.value,
      });
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = (e) => {
    if (values.productName && values.price && values.description) {
      dispatch(addProduct(values));
      setStatus({ isSuccess: true, message: 'Product Added Successfully' });
    } else {
      setStatus({
        isSuccess: true,
        message: 'Please fill all the required Field',
      });
    }
    setValues({
      id: '',
      productName: '',
      price: '',
      description: '',
      image: '',
    });
    setTimeout(() => {
      setStatus({ isSuccess: false });
    }, 1000);
  };

  return (
    <Container maxWidth='md'>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={10} md={5}>
          <Typography variant='body2' gutterBottom>
            Product Name
          </Typography>
          <FormControl sx={{ width: '30ch' }} required>
            <OutlinedInput
              name='productName'
              placeholder='Enter Product name'
              onChange={handleChange}
              value={values.productName}
            />
          </FormControl>
        </Grid>
        <Grid item xs={10} md={5}>
          <Typography variant='body2' gutterBottom>
            Price
          </Typography>
          <FormControl sx={{ width: '30ch' }}>
            <OutlinedInput
              name='price'
              placeholder='Enter Price'
              onChange={handleChange}
              value={values.price}
            />
          </FormControl>
        </Grid>
        <Grid item xs={10} md={5}>
          <Typography variant='body2' gutterBottom>
            Description
          </Typography>
          <FormControl sx={{ width: '30ch' }}>
            <OutlinedInput
              name='description'
              placeholder='Enter Description'
              multiline
              rows={4}
              onChange={handleChange}
              value={values.description}
            />
          </FormControl>
        </Grid>
        <Grid item xs={10} md={5}>
          <Typography variant='body2' gutterBottom>
            Product Imange (optional)
          </Typography>
          <label htmlFor='contained-button-file'>
            <Input
              name='image'
              sx={{ width: '30ch' }}
              variant='outlined'
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
              onChange={handleChangeImage}
            />
          </label>
        </Grid>
        <Grid item xs={10}>
          <Button variant='contained' disableElevation onClick={handleSubmit}>
            Add Product
          </Button>
        </Grid>
      </Grid>
      <br />
      {isProduct.length > 0 && <ProductList />}
      <br />
      {status.isSuccess && <SimpleSnackbar message={status.message} />}
    </Container>
  );
};

export default ManageProducts;
