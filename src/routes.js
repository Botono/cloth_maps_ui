import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Maps from './components/Maps';
import Frames from './components/Frames';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Maps}/>
    <Route path="Maps" component={Maps}/>
    <Route path="Frames" component={Frames}/>
  </Route>
);
