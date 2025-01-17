import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Article from "../pages/Article";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="article" element={<Blog />} />
      <Route path="article/:articleId" element={<Article />} />
      <Route path=":value" element={<Home />} />

    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
