import React from "react";
import { CCol, CRow } from "@coreui/react";
import classes from "./Home.module.css";
import Navigation from "./Navigation/Navigation";
import { useSelector } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
const Checkout = React.lazy(() => import("./Pages/Checkout"));
const Shop = React.lazy(() => import("./Pages/Shop"));
const Home = () => {
  const mapStateToProps = (state) => {
    return {
      cartData: state.cartStore.cartData,
    };
  };
  const state = useSelector(mapStateToProps);
  return (
    <>
      <HashRouter>
        <Navigation cartData={state.cartData} />
        <main className={classes.marginProduct}>
          <Switch>
            <Route
              exact
              path="/cart"
              name="Checkout"
              render={() => <Checkout />}
            />
            <Route exact path="/" name="Shop" render={() => <Shop />} />
          </Switch>
        </main>
      </HashRouter>
    </>
  );
};
export default Home;
