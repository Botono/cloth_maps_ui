import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppPage from './containers/AppPage';
import MapsListPage from './containers/MapsListPage';
import FramesListPage from './containers/FramesListPage';
import FrameMapPage from './containers/FrameMapPage';

export default (
  <Route path="/" component={AppPage}>
    <IndexRoute component={MapsListPage}/>
    <Route path="Maps" component={MapsListPage} />
    <Route path="Frames" component={FramesListPage}/>
    <Route path="FrameMap/:mapId" component={FrameMapPage}/>
  </Route>
);
