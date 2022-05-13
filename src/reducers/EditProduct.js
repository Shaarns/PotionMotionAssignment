import image from '../images/Screenshot (52).png';

const initialState = {
  product: [
    {
      id: Date.now(),
      productName: 'Mobile',
      image: image,
      description: 'Sharp TV',
      price: 333,
    },
  ],
};

const EditProduct = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case 'ADD_PRODUCT':
      return { ...state, product: [...state.product, payload] };

    case 'DELETE_PRODUCT':
      console.log(payload);
      console.log(state);
      return {
        ...state,
        product: state.product.filter((product) => product.id !== payload),
      };

    default:
      return state;
  }
};

export default EditProduct;
