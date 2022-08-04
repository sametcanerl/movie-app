import React from "react";
import { useNavigate } from "react-router-dom";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const navigate = useNavigate();
  const setVoteClass = (vote) => {
    if (vote > 8) {
      return "text-success";
    } else if (vote >= 6) {
      return "text-warning";
    } else {
      return "text-danget";
    }
  };
  return (
    <div className="card ">
      <img
        src={poster_path ? IMG_API + poster_path : defaultImage}
        className="card-image"
        alt="..."
      />
      <div className="d-flex align-items-baseline justify-content-between p-3 bg-secondary">
        <h5 className="card-title text-white">{title}</h5>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>

        <div className="movie-over">
          <h2>Overview</h2>
          <p>{overview}</p>
          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/moviedetail/`+id)}
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
