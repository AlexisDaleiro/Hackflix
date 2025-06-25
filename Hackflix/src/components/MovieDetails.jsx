// MovieDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieDetails() {
	const { id } = useParams();
	const [peliculas, setPeliculas] = useState(null);

	useEffect(() => {
		const fetchPeliculas = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${id}`,
					{
						params: {
							api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
							language: "es-ES",
						},
					}
				);
				setPeliculas(response.data);
			} catch (error) {
				console.error("Error cargando detalles:", error);
			}
		};

		fetchPeliculas();
	}, [id]);

	return (
		<div className="container-fluid text-white py-4">
			<div>
				<Link className="btn btn-danger" to="/">
					Volver a la pagina de inicio
				</Link>
			</div>
			{peliculas && (
				<>
					<h2>{peliculas.title}</h2>
					<img
						src={`https://image.tmdb.org/t/p/w300${peliculas.poster_path}`}
						alt={peliculas.title}
						className="rounded mb-3"
					/>
					<p>Estreno: {peliculas.release_date}</p>
					<p>Sinopsis: {peliculas.overview}</p>
					<p>Rating:⭐ {(peliculas.vote_average / 2).toFixed(0)}</p>
				</>
			)}
		</div>
	);
}
