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
const UserLikes = React.lazy(() => import("./Components/views/Likes/Likes"));
const Message = React.lazy(() => import("./Components/views/Message/Message"));

const Store = React.lazy(() => import("./Components/views/Store/Store"));
const StoreProduct = React.lazy(() =>
  import("./Components/views/Store/Product/StoreItems")
);
const EditStoreProduct = React.lazy(() =>
  import("./Components/views/Store/Product/EditProduct")
);
const OnlineStoreOrder = React.lazy(() =>
  import("./Components/views/Store/Order/StoreOrder")
);

const EditOrder = React.lazy(() =>
  import("./Components/views/Store/Order/EditOrder/EditOrder")
);

const routes = [

  {
    path: "/admin/invoice/generate",
    name: "Create",
    component: Orders,
  },
  
];

export default routes;
