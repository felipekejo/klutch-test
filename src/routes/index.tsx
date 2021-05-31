import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ApplyForLoan from '../pages/ApplyForLoan';
import ApplyForLoan1 from '../pages/ApplyForLoan1';
import ApplyForLoan2 from '../pages/ApplyForLoan2';
import ApplyForLoan3 from '../pages/ApplyForLoan3';
import ApplyForLoan4 from '../pages/ApplyForLoan4';

import DesiredAmount from '../pages/DesiredAmount';
import RequestDetail from '../pages/RequestDetail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DesiredAmount} />
    <Route path="/applyforloan" exact component={ApplyForLoan} />
    <Route path="/applyforloan1" component={ApplyForLoan1} />
    <Route path="/applyforloan2" component={ApplyForLoan2} />
    <Route path="/applyforloan3" component={ApplyForLoan3} />
    <Route path="/applyforloan4" component={ApplyForLoan4} />
    <Route path="/requestdetail" component={RequestDetail} />
  </Switch>
);

export default Routes;
