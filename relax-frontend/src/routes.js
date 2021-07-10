import React from "react";

//components
const IpgProvider = React.lazy(() =>
  import("./Components/views/ipgProvider/IpgProvider")
);
const DashBoard = React.lazy(() =>
  import("./Components/views/Dashboard/Dashboard")
);

const routes = [
  { path: "/", exact: true, name: "Homes", exact: "exact" },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashBoard,
    exact: "exact",
  },
];

export default routes;
