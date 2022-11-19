import React from "react";
const Items = React.lazy(() => import("src/views/Home/Product/Item"));
const Login = React.lazy(() => import("src/views/pages/login/Login"));

const homeRoutes = [
  { path: "/", name: "Home" },
  {
    path: "/items",
    name: "Products",
    component: Items,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];
export default homeRoutes;
