import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mt-5 ">
      <div className="row bg-dark text-white text-center p-5 rounded-5">
        <h1>404</h1>
        <p>Pagina no encontrada</p>
        <div>
          <Link className="btn btn-light" to="/">
            Volver a la pagina de inicio
          </Link>
        </div>
      </div>
    </div>
  );
  
}
