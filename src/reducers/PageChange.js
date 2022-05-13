const pageChange = (state = { home: true, manage_page: false }, { type }) => {
  switch (type) {
    case 'HOME':
      return { home: true, manage_page: false };

    case 'MANAGE_PRODUCT':
      return { home: false, manage_page: true };
    default:
      return state;
  }
};

export default pageChange;
