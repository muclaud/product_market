import React, { useState, useEffect } from 'react';
import { Button, Icon, Item, Grid } from 'semantic-ui-react';

import { connect } from 'react-redux';

import CartProductCard from './CartProductCard';

function CartProductList({ cart }) {
  const [totalPrice, settotalPrice] = useState(0);
  const [totalItems, settotalItems] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    function calcDiscount(id) {
      let discount = 0;

      let prodWithDiscount = cart.find((prod) => id === +prod.id);

      if (prodWithDiscount) {
        const item = cart.find((prod) => 102 === +prod.id);
        const count = item.qty;
        discount = Math.floor(count / 3) * 5;
        return discount;
      } else {
        return discount;
      }
    }
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * +item.price;
    });

    setDiscount(calcDiscount(102));
    settotalPrice(price);
    settotalItems(items);
  }, [
    cart,
    totalPrice,
    totalItems,
    discount,
    settotalItems,
    settotalPrice,
    setDiscount,
  ]);

  let cartList;
  if (cart.length === 0) {
    cartList = <h1 style={{ margin: 40 }}>Cart is empty</h1>;
  } else {
    cartList = (
      <Grid>
        <Grid.Column mobile={16} tablet={9} computer={9}>
          <Item.Group>
            {cart.map((item) => (
              <CartProductCard key={item.id} item={item} />
            ))}
          </Item.Group>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={7} computer={7}>
          <Item.Content>
            <Item.Header style={{ margin: 20 }}>
              <h2>Total price: {totalPrice - discount} $</h2>
            </Item.Header>
            <Item.Meta style={{ margin: 20 }}>
              <h3>Total weight: {totalItems} kg</h3>
            </Item.Meta>
            <Item.Extra style={{ margin: 20 }}>
              <Button animated='vertical' color='grey' fluid>
                <Button.Content visible>
                  <Icon name='right arrow' />
                </Button.Content>
                <Button.Content hidden>BUY</Button.Content>
              </Button>
            </Item.Extra>
          </Item.Content>
        </Grid.Column>
      </Grid>
    );
  }

  return cartList;
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(CartProductList);
