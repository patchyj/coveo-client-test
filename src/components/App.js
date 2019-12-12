import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Main from './pages/main/MainConnect';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default hot(module)(App);
