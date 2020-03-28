import React from 'react';
import { Route, Switch } from 'react-router';
import { CHARACTER_EDITOR, MAIN } from '../constants/Route';
import { CharacterEditor } from './CharacterEditor';
import { Main } from './Main';

export const Pages = () => (
  <Switch>
    <Route path={MAIN} component={Main} exact={true} />
    <Route path={CHARACTER_EDITOR} component={CharacterEditor} exact={true} />
  </Switch>
);
