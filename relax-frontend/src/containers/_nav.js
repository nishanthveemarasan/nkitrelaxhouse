import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Products",
    to: "/admin/product",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Sale",
    route: "/admin/sale",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Orders",
        to: "/admin/sale/orders",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Users",
    route: "/admin/users",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Users",
        to: "/admin/users/all",
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
        to: "/admin/posts/all",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Comments",
    route: "/comments",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Comments",
        to: "/admin/comment/all",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Message",
    to: "/admin/message",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavDivider",
  },
];

export default _nav;
