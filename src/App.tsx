import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
