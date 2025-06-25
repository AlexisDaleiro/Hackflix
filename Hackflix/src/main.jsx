import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound.jsx";
import ApiInicio from "./components/ApiInicio.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./components/MovieDetails.jsx";
import PaginaBusqueda from "./components/PaginaBusqueda.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFound /> },
  { path: "peliculas/busqueda/:query?", element: <PaginaBusqueda /> },
  { path: "peliculas/:id", element: <MovieDetails /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
