import { StarFilled } from "@ant-design/icons";

const URL_IMAGE = "https://image.tmdb.org/t/p/w200";

export default function Movie({
  original_title,
  poster_path,
  overview,
  release_date,
  vote_average,
}) {
  return (
    <div className="movie_container">
      <div className="movie_header">
        <h2 className="movie_header--title">{original_title}</h2>
        <div className="movie_header--rating">
          <p>{vote_average}/10 </p>
          <StarFilled style={{ color: "#f5a623" }} />
        </div>
      </div>
      <div className="movie_content">
        <img
          className="movie_img"
          src={`${URL_IMAGE}${poster_path}`}
          alt={original_title}
        />
        <div className="movie_details">
          <p className="movie_details--overview">{overview}</p>
          <p className="movie_details--release">
            Fecha de estreno: {release_date}
          </p>
        </div>
      </div>
    </div>
  );
}
