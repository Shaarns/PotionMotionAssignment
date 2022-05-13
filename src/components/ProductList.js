import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CardMedia, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../actions';

function createData(id, name, description, price, image) {
  return { id, name, description, price, image };
}

export default function BasicTable() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const rows = products.product.map((product) => {
    return createData(
      product.id,
      product.productName,
      product.description,
      product.price,
      product.image
    );
  });

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='left'>
                  <CardMedia
                    style={{ width: '70px' }}
                    component='img'
                    height='50'
                    image={row.image}
                    alt={row.productName}
                  />
                </TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='left'>{row.description}</TableCell>
                <TableCell align='left'>{row.price}</TableCell>
                <TableCell align='left'>
                  <Button onClick={() => handleDelete(row.id)}>Remove</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
