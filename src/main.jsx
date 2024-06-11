import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "@/components/LoginPage";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "@/components/GamePage.jsx";
import DocsPage from "@/components/DocsPage.jsx";
import PlayPage from "@/components/PlayPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/health",
    element: <div className="teko">Working fine!</div>,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/play",
    element: <PlayPage />,
  },
  {
    path: "/docs",
    element: <DocsPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
