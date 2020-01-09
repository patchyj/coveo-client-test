import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Footer from './layout/Footer';
import Navbar from './layout/NavbarConnect';
import Main from './pages/main/MainConnect';
import Catalog from './pages/product/catalog/CatalogConnect';
import Show from './pages/product/searchResults/ShowConnect';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        {/* Coveo API */}
        <Route exact path="/" component={Main} />
        <Route path="/products/:title">
          <Show />
          <Footer />
        </Route>
        {/* 3rd PARTY API */}
        <Route path="/catalog">
          <Catalog />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default hot(module)(App);
