import React from 'react';
import { Grid, Container, Toolbar, Button, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { homePage, manageProduct } from '../actions';

const Header = () => {
  const dispatch = useDispatch();

  const handleChange = (page) => {
    if (page === 'home') {
      dispatch(homePage());
    }
    if (page === 'manageProduct') {
      dispatch(manageProduct());
    }
  };

  return (
    <Container maxWidth='md'>
      <Grid container>
        <Grid item>
          <Toolbar variant='dense'>
            <Button
              style={{ margin: 'auto 10px', cursor: 'pointer' }}
              onClick={() => {
                handleChange('home');
              }}
            >
              Home
            </Button>
            <Button
              style={{ margin: 'auto 10px', cursor: 'pointer' }}
              onClick={() => handleChange('manageProduct')}
            >
              Manage Product
            </Button>
          </Toolbar>
        </Grid>
      </Grid>
      <Divider sx={{ marginBottom: '50px' }} />
    </Container>
  );
};

export default Header;
