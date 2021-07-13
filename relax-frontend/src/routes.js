import React from "react";

//components
const DashBoard = React.lazy(() =>
  import("./Components/views/Dashboard/Dashboard")
);
const Products = React.lazy(() => import("./Components/views/Product/Product"));
const Orders = React.lazy(() => import("./Components/views/Sales/Order/Order"));
const AllUsers = React.lazy(() =>
  import("./Components/views/Users/AllUsers/AllUsers")
);
const AllPosts = React.lazy(() => import("./Components/views/Posts/AllPosts"));

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
  {
    path: "/sale/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/users/all",
    name: "AllUsers",
    component: AllUsers,
  },
  {
    path: "/posts/all",
    name: "AllPosts",
    component: AllPosts,
  },
];

export default routes;
