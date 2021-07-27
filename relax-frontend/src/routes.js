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
const Comments = React.lazy(() =>
  import("./Components/views/Comments/Comment")
);
const SinglePost = React.lazy(() =>
  import("./Components/views/Posts/SinglePost/SinglePost")
);
const CommentFilter = React.lazy(() =>
  import("./Components/views/Comments/Filter/CommentFilter")
);
const PostFilter = React.lazy(() =>
  import("./Components/views/Posts/Filter/FilterPost")
);
const UserDetail = React.lazy(() =>
  import("./Components/views/Users/UserDetail/UserDetail")
);

const routes = [
  { path: "/admin", exact: true, name: "Home" },

  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: DashBoard,
  },
  {
    path: "/admin/product",
    name: "Product",
    component: Products,
  },
  {
    path: "/admin/sale/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/admin/users/all",
    name: "AllUsers",
    component: AllUsers,
  },
  {
    path: "/admin/posts/all",
    name: "AllPosts",
    component: AllPosts,
  },
  {
    path: "/admin/comment/all",
    name: "AllComments",
    component: Comments,
  },
  {
    path: "/admin/singlePost",
    name: "SinglePost",
    component: SinglePost,
  },
  {
    path: "/admin/comment-filter",
    name: "CommentFilter",
    component: CommentFilter,
  },
  {
    path: "/admin/post-filter",
    name: "PostFilter",
    component: PostFilter,
  },
  {
    path: "/admin/user",
    name: "User",
    component: UserDetail,
  },
];

export default routes;
