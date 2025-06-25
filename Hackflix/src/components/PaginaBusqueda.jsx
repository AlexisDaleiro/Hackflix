import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PaginaBusqueda() {
  const location = useLocation();
  const [peliculas, setPeliculas] = useState([]);
}
