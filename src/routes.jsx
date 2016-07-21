import React from "react";
import {Route, IndexRoute} from "react-router";
import AppRoot from "./AppRoot";
import MainView from "./MainView";

export default (
  <Route path="/" component={AppRoot}>
    <IndexRoute component={MainView}/>
    <Route path="varietal/:varietalId" component={MainView}/>
    <Route path="wine/:wineId" component={MainView}/>
  </Route>
);
