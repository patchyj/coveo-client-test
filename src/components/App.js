import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Main from './pages/main/MainConnect';
import Show from './pages/product/ShowConnect';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/products/:title" component={Show} />
      </Switch>
    </div>
  );
}

export default hot(module)(App);
