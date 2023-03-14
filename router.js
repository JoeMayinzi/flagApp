import React from "react";
import { ReactDOM } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
