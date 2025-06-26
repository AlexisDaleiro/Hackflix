import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Menu";

export default function PaginaBusqueda() {
	const location = useLocation();
	const [peliculas, setPeliculas] = useState([]);

	const query = new URLSearchParams(location.search).get("query");
	useEffect(() => {
		if (query) {
			const fetchPeliculas = async () => {
				const response = await axios.get(
					"https://api.themoviedb.org/3/search/movie",
					{
						params: {
							api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
							query: query,
							language: "es-ES",
						},
					}
				);
				setPeliculas(response.data.results || []);
			};

			fetchPeliculas();
		}
	}, [query]);
	return (
		<div className="container m-0">
			<Navbar />
			<h1 className="text-center mt-5">Resultados de la búsqueda: {query}</h1>
			<div className="row">
				{peliculas.map((pelicula) => (
					<div className="col-md-3 mb-4" key={pelicula.id}>
						<Link to={`/peliculas/${pelicula.id}`}>
							<div className="card">
								<img
									src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
									className="card-img-top"
									alt={pelicula.title}
								/>
								<div className="card-body">
									<h5 className="card-title">{pelicula.title}</h5>
									<p className="card-text">{pelicula.overview}</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
