import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import Orders from '../container/Orders/Orders';
import Auth from '../container/Auth/Auth';
class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
        <Route path= "/checkout" component={Checkout} />
        <Route path= "/orders" component={Orders} />
        <Route path= "/auth" component={Auth} />
        <Route path= "/" exact component={BurgerBuilder} />
        </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
