import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import MainNavigation from "./Navigation/Navigation";
const Items = React.lazy(() => import("src/views/Home/Product/Item"));
const Home = () => {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/home" component={Items} />
      </Switch>
    </>
  );
};
export default Home;
