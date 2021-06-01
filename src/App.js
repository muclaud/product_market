import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import MenuBar from './components/MenuBar';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <Router>
      <MenuBar />
      <Container>
        <Switch>
          <Route exact path='/' component={ShopPage} />
          <Route exact path='/card' component={CartPage} />
          <Route exact path='/products/:id' component={SingleProductPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
