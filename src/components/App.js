import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import Footer from './layout/Footer';
import Navbar from './layout/NavbarConnect';
import Landing from './pages/landing/LandingConnect';
import Catalog from './pages/products/catalog/CatalogConnect';
import Products from './pages/products/saq/SaqContainer';
import S from '../static/styles';
import { ThemeType } from './types';

function App({ theme }) {
  const palette = theme.theme;
  return (
    <S.App palette={palette}>
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
    </S.App>
  );
}

App.propTypes = {
  theme: ThemeType
};

App.defaultProps = {
  theme: {}
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default hot(module)(withTheme(connect(mapStateToProps)(App)));
