import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Products",
    to: "/product",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },

  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/ipg-provider",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Sale",
    route: "/sale",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Orders",
        to: "/sale/orders",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Users",
    route: "/users",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Users",
        to: "/users/all",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Posts",
    route: "/posts",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Posts",
        to: "/posts/all",
      },
    ],
  },
  {
    _tag: "CSidebarNavDivider",
  },
];

export default _nav;
