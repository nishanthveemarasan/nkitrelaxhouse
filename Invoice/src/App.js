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
          path="/admin"
          name="Admin"
          render={(props) => <TheLayout {...props} />}
        />
      </Switch>
    </React.Suspense>
  );
};

export default App;
