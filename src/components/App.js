import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Footer from './layout/Footer';
import Navbar from './layout/NavbarConnect';
import Landing from './pages/landing/LandingConnect';
import Catalog from './pages/products/catalog/CatalogConnect';
import Products from './pages/products/saq/SaqContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        {/* Coveo API */}
        <Route exact path="/" component={Landing} />
        <Route path="/products">
          <Products />
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
