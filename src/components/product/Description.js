import React from 'react';
import { Item } from 'semantic-ui-react';

import { connect } from 'react-redux';
import ButtonAddToCart from '../shop/ButtonAddToCart';

function Description({ currentItem }) {
  const { id, name, price, description, image } = currentItem;
  return (
    <Item>
      <Item.Image size='medium' src={image} />

      <Item.Content>
        <Item.Header>
          <h1>{name}</h1>
        </Item.Header>
        <Item.Meta>
          <span className='price'>
            <h3>${price}</h3>
          </span>
        </Item.Meta>
        <Item.Description>
          <h4>{description}</h4>
        </Item.Description>
      </Item.Content>
      <Item.Content style={{ margin: 20 }}>
        <ButtonAddToCart id={id} />
      </Item.Content>
    </Item>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(Description);
