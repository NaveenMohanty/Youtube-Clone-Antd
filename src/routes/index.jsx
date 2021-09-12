import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../utils/createHistory";
import HomeContent from "../components/homeContent";
import PageNotFound from "../components/PageNotFound";
import VideoPlayer from "../components/videoPlayer";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomeContent} />
        <Route path="/playVideo/:index" exact component={VideoPlayer} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
