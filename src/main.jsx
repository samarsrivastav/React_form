import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as PostsLoader } from "./Routes/Posts";
import "./index.css";
import PostDetails, { loader as PostDetailsLoader } from "./Routes/PostDetails";
import Routes from "./Routes/Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost, { action as NewPostAction } from "./Routes/NewPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: PostsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: NewPostAction },
          { path: "/:id", element: <PostDetails />, loader: PostDetailsLoader }
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
