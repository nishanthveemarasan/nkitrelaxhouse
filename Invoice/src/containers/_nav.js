import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["Invoice"],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Invoice",
    route: "/admin/sale",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Orders",
        to: "/admin/invoice/generate",
      },
    ],
  },
];

export default _nav;
