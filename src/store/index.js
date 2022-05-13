import product from '../reducers/EditProduct';
import pageIndicator from '../reducers/PageChange';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    product,
    pageIndicator,
  },
});
