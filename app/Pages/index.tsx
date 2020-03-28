import React from 'react';
import { Route, Switch } from 'react-router';
import { MAIN } from '../constants/Route';
import { Main } from './Main';

export const Pages = () => (
  <Switch>
    <Route path={MAIN} component={Main} />
  </Switch>
);
