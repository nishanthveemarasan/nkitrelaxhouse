import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import { useHistory } from "react-router";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const Home = React.lazy(() => import("./views/Home/Home"));
const Posts = React.lazy(() => import("./views/Home/Posts/Posts"));

//const Items = React.lazy(() => import("src/views/Home/Product/Item"));

const App = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
  }, []);
  return (
    <React.Suspense fallback={loading}>
      <Switch>
        <Route
          exact
          path="/"
          name="Home"
          render={(props) => <Home {...props} />}
        />

        {/* <Route
          exact
          path="/register"
          name="Register Page"
          render={(props) => <Register {...props} />}
        /> */}
        <Route
          exact
          path="/404"
          name="Page 404"
          render={(props) => <Page404 {...props} />}
        />
        <Route
          exact
          path="/500"
          name="Page 500"
          render={(props) => <Page500 {...props} />}
        />
        {/* if not authenticated hide this */}
        <Route
          path="/admin"
          name="Admin"
          render={(props) => <TheLayout {...props} />}
        />
        <Route path="*" name="Home" render={(props) => <Home {...props} />} />
      </Switch>
    </React.Suspense>
  );
};

export default App;
