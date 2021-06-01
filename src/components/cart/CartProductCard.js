import React, { useState } from 'react';
import { Item, Button, Icon, Input } from 'semantic-ui-react';

import { connect } from 'react-redux';
import {
  removeFromCart,
  adjustQty,
} from '../../redux/Shopping/shopping-actions';

function CartProductCard({ item, removeFromCart, adjustQty }) {
  const { id, image, price, qty, name } = item;

  const [input, setInput] = useState(qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(id, e.target.value);
  };

  return (
    <Item>
      <Item.Image size='small' src={image} />

      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>Price: {price} $ / 1 kg</Item.Meta>
        <Item.Extra>
          <Button
            animated='vertical'
            color='grey'
            onClick={() => removeFromCart(id)}
          >
            <Button.Content visible>
              <Icon name='trash' />
            </Button.Content>
            <Button.Content hidden>Delete</Button.Content>
          </Button>
          <Input
            label='kg'
            type='number'
            min='1'
            id='qty'
            style={{ width: 80, marginLeft: 20 }}
            value={input}
            onChange={onChangeHandler}
          />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartProductCard);
