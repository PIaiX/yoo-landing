// AppRouter.js
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
import Redirect from "../pages/Redirect";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="article" element={<Blog />} />
      {/* Обычные редиректы по brandId */}
      <Route path="success/:brandId" element={<Redirect />} />
      <Route path="error/:brandId" element={<Redirect />} />
      {/* Партнёрские редиректы по partnerId */}
      <Route path="partner/success/:partnerId" element={<Redirect />} />
      <Route path="partner/error/:partnerId" element={<Redirect />} />
      <Route path="article/:articleId" element={<Article />} />
      <Route path=":value" element={<Home />} />
    </Route>,
  ),
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
