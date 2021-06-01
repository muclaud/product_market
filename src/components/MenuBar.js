import React, { useState, useEffect } from 'react';
import { Container, Menu, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

function MenuBar({ cart }) {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'shop' : pathname.substr(1);
  const [cartCount, setcartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += +item.qty;
    });
    setcartCount(count);
  }, [cart, cartCount]);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { home }) => setActiveItem(home);

  return (
    <Menu inverted secondary color='green' size='huge'>
      <Container>
        <Menu.Item
          as={Link}
          to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          <Button animated='vertical' color='grey'>
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
              <Icon name='apple' />
            </Button.Content>
          </Button>
        </Menu.Item>
        <Menu.Item
          position={'right'}
          name='card'
          as={Link}
          to='/card'
          active={activeItem === 'card'}
          onClick={handleItemClick}
        >
          <Button animated='vertical' color='grey'>
            <Button.Content visible>{cartCount}</Button.Content>
            <Button.Content hidden>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(MenuBar);
