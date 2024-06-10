import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "@/components/LoginPage";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "@/components/GamePage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/test",
    element: <div className="teko">Test</div>,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
