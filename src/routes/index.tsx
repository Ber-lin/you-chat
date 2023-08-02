import { Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import NotFound from "@/pages/404";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Chat } from "@/pages/Chat";

export const routesArr: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/chat",
        element: <Chat />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default function Route() {
  
  const routes = useRoutes(routesArr);
  return (
    <ErrorBoundary
      childrenNode={
        <Suspense fallback={<h2>loading...</h2>}>{routes}</Suspense>
      }
    />
  );
}
