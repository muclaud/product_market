import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import ButtonAddToCart from './ButtonAddToCart';

import { connect } from 'react-redux';
import { loadCurrentItem } from '../../redux/Shopping/shopping-actions';

function Product({ product, loadCurrentItem }) {
  const { id, image, price, name, discount, shortDescr } = product;
  return (
    <Item style={{ marginTop: 40 }}>
      <Item.Image size='medium' src={image} />
      <Item.Content>
        <Item.Header as={Link} to={`/products/${id}`}>
          <h3 onClick={() => loadCurrentItem(product)}>{name}</h3>
        </Item.Header>
        <Item.Meta>
          <span className='price'>
            <h4>Price: {price}$</h4>
          </span>
          {discount && (
            <span className='stay'>
              <h4>Discount: {discount}</h4>
            </span>
          )}
        </Item.Meta>
        <Item.Description
          style={{ marginTop: 10, marginRight: 20 }}
          content={shortDescr}
        />
      </Item.Content>
      <ButtonAddToCart id={id} />
    </Item>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
