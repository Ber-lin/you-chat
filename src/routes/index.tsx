import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import NotFound from "@/pages/404";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import ErrorBoundary from "@/components/ErrorBoundary";



export default function Route() {
  const routesArr: RouteObject[] = [
    {
      path: "/",
      element: <Home />,

    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ];
  const routes = useRoutes(routesArr);
  return (
    <ErrorBoundary
      childrenNode={<Suspense fallback={<h2>loading...</h2>}>{routes}</Suspense>}
    />
  );
}
