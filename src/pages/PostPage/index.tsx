import React from "react";
import { Outlet } from "react-router-dom";
import { PostContextProvider } from "../../contexts/PostContextProvider";

const PostPage = () => (
  <PostContextProvider>
    <Outlet />
  </PostContextProvider>
);

export default PostPage;
