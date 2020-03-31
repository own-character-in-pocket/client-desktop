import React from 'react';
import { Route, Switch } from 'react-router';
import { CARD_EDITOR_VIEW, CARD_GRID_VIEW, MAIN_VIEW } from '../constants/Views';
import { CardEditorView } from './CardEditorView';
import { CardGrid } from './CardGridView';
import { MainView } from './MainView';

export const Views = () => (
  <Switch>
    <Route path={MAIN_VIEW} component={MainView} exact />
    <Route path={CARD_GRID_VIEW} component={CardGrid} exact />
    <Route path={CARD_EDITOR_VIEW} component={CardEditorView} exact />
  </Switch>
);
