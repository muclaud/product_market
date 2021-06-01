import React from 'react';
import { Item } from 'semantic-ui-react';

import { connect } from 'react-redux';

import Product from './Product';

function ProductList({ products }) {
  return (
    <Item.Group>
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
    </Item.Group>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductList);
