import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Main from './pages/main/MainConnect';
import Show from './pages/product/ShowConnect';
import Catalog from './pages/product/CatalogConnect';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        {/* Coveo API */}
        <Route exact path="/" component={Main} />
        <Route path="/products/:title" component={Show} />
        {/* 3rd PARTY API */}
        <Route path="/catalog">
          <Catalog />

          <Footer />
        </Route>
        {/* <Route path="/catalog/:query" component={CatalogShow} /> */}
      </Switch>
    </div>
  );
}

export default hot(module)(App);
