import React from 'react';
import { Button, Icon, Item } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';

function ButtonAddToCart({ id, addToCart }) {
  return (
    <Item.Content>
      <Button onClick={() => addToCart(id)} animated='vertical' color='grey'>
        <Button.Content visible>Add</Button.Content>
        <Button.Content hidden>
          <Icon name='plus' />
        </Button.Content>
      </Button>
    </Item.Content>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ButtonAddToCart);
