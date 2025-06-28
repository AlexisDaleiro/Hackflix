import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Menu";
import "./PaginaBusqueda.css";


const truncateText = (text, maxWords) => {
	if (!text) return 'Descripción no disponible';
	const words = text.split(' ');
	if (words.length <= maxWords) return text;
	return words.slice(0, maxWords).join(' ') + '...';
};

const getYear = (date) => {
	if (!date) return 'N/A';
	return new Date(date).getFullYear();
};


const renderStars = (rating) => {
	if (!rating) return '☆☆☆☆☆';
	const stars = Math.round(rating / 2);
	return '★'.repeat(stars) + '☆'.repeat(5 - stars);
};

export default function PaginaBusqueda() {
	const location = useLocation();
	const [peliculas, setPeliculas] = useState([]);
	const [loading, setLoading] = useState(false);

	const query = new URLSearchParams(location.search).get("query");

	useEffect(() => {
		if (query) {
			const fetchPeliculas = async () => {
				setLoading(true);
				try {
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
				} catch (error) {
					console.error("Error al buscar películas:", error);
					setPeliculas([]);
				} finally {
					setLoading(false);
				}
			};

			fetchPeliculas();
		}
	}, [query]);

	return (
		<div className="container-fluid">
			<Navbar />

			<div className="container mt-4">
				<h1 className="text-center mb-4">
					Resultados de la búsqueda: <span className="text-primary">"{query}"</span>
				</h1>

				{loading && (
					<div className="text-center my-5">
						<div className="spinner-border text-primary" role="status">
							<span className="visually-hidden">Cargando...</span>
						</div>
					</div>
				)}

				{!loading && peliculas.length === 0 && query && (
					<div className="text-center my-5">
						<h3 className="text-muted">No se encontraron resultados</h3>
						<p>Intenta con otros términos de búsqueda</p>
					</div>
				)}

				<div className="row">
					{peliculas.map((pelicula) => (
						<div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={pelicula.id}>
							<Link
								to={`/peliculas/${pelicula.id}`}
								className="text-decoration-none"
							>
								<div className="card movie-card dark-theme h-100 shadow-sm">

									<img
										src={
											pelicula.poster_path
												? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
												: 'https://via.placeholder.com/300x450/cccccc/666666?text=Sin+Imagen'
										}
										className="card-img-top"
										alt={pelicula.title}
										loading="lazy"
									/>

									<div className="card-body d-flex flex-column">

										<h5 className="card-title">
											{pelicula.title}
										</h5>


										<p className="card-text flex-grow-1">
											{truncateText(pelicula.overview, 15)}
										</p>

										<div className="card-footer bg-transparent border-0 px-0 mt-auto">
											<div className="d-flex justify-content-between align-items-center">

												<div className="d-flex align-items-center">
													<span className="text-warning me-2">
														{renderStars(pelicula.vote_average)}
													</span>

													<small className="movie-rating">
														{pelicula.vote_average ? pelicula.vote_average.toFixed(1) : 'N/A'}
													</small>
												</div>


												<small className="movie-year fw-semibold">
													{getYear(pelicula.release_date)}
												</small>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}