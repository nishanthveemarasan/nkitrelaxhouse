import React from "react";

//components
const DashBoard = React.lazy(() =>
  import("./Components/views/Dashboard/Dashboard")
);
const Products = React.lazy(() => import("./Components/views/Product/Product"));

const routes = [
  { path: "/", exact: true, name: "Home" },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashBoard,
  },
  {
    path: "/product",
    name: "Product",
    component: Products,
  },
];

export default routes;
