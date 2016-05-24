import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MapsListPage from './containers/MapsListPage';
import FramesListPage from './containers/FramesListPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MapsListPage}/>
    <Route path="Maps" component={MapsListPage}/>
    <Route path="Frames" component={FramesListPage}/>
  </Route>
);
