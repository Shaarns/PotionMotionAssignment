export const addProduct = (payload) => {
  return {
    type: 'ADD_PRODUCT',
    payload,
  };
};

export const deleteProduct = (payload) => {
  return {
    type: 'DELETE_PRODUCT',
    payload,
  };
};

export const homePage = () => {
  return {
    type: 'HOME',
  };
};

export const manageProduct = () => {
  return {
    type: 'MANAGE_PRODUCT',
  };
};
