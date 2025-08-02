import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Home from "./components/5_pages/Home";
import About from "./components/5_pages/About.mdx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/about",
    Component: About
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
