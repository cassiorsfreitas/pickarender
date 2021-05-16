import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Question from '../pages/questions/index ';
import Result from '../pages/result';
import Welcome from '../pages/welcome';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/question" component={Question} />
    <Route path="/result" component={Result} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
