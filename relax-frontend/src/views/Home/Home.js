import React, { useEffect } from "react";
import {
  BrowserRouter,
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import MainNavigation from "./Navigation/MainNavigation";
import { useHistory } from "react-router";
//import Posts from "./Posts/Posts";
//import Item from "./Product/Item";
//import Login from "../pages/login/Login";
import { useSelector } from "react-redux";

const Posts = React.lazy(() => import("src/views/Home/Posts/Posts"));
const Item = React.lazy(() => import("src/views/Home/Product/Item"));
const Login = React.lazy(() => import("src/views/pages/login/Login"));
const Register = React.lazy(() => import("src/views/pages/register/Register"));
const Home = () => {
  const mapStateToProps = (state) => {
    return {
      admin: state.loginStore.admin,
    };
  };
  const state = useSelector(mapStateToProps);
  useEffect(() => {
    console.log(state.admin);
  }, [state.admin]);
  const history = useHistory();
  const onAdminHandler = () => {
    history.push("/admin");
  };
  return (
    <>
      <HashRouter>
        <div>
          <MainNavigation click={onAdminHandler} />
        </div>

        <div>
          <Switch>
            <Route
              exact
              path="/posts"
              name="posts"
              render={(props) => <Posts {...props} />}
            />
            <Route
              exact
              path="/products"
              name="Products"
              render={(props) => <Item {...props} />}
            />
            <Route
              exact
              path="/login"
              name="login"
              render={() => <Login history={history} />}
            />
            <Route
              exact
              path="/register"
              name="Register"
              render={() => <Register history={history} />}
            />
            <Redirect from="/" to="/products" />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </>
  );
};
export default Home;
