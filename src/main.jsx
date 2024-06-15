import CreatePage from "@/components/CreatePage.jsx";
import DocsPage from "@/components/DocsPage.jsx";
import GamePage from "@/components/GamePage.jsx";
import LoginPage from "@/components/LoginPage";
import PlayPage from "@/components/PlayPage.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./config.js";
import "./global.css";
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
    path: "/create",
    element: <CreatePage />,
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
