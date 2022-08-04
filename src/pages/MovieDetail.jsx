import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import VideoSection from "../components/VideoSection";

const ApiKey = process.env.REACT_APP_ApiKey;
const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState("");
  const [videoKey, setVideoKey] = useState("");
  const [model, setModel] = useState(false);
  const { id } = useParams();

  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}`;
  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl]);

  const getFragman = () => {
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
    return setModel(true);
  };
  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
    genres,
  } = movieDetails;

  return (
    <div class="clearfix">
      <img
        src={poster_path ? baseImageUrl + poster_path : defaultImage}
        class="col-md-4 col-sm-6 col-6 float-sm-start mb-3 ms-md-3"
      alt="" />
      <div className="container bg-secondary  p-2">
        <div className="container p-3 m-2">
          <h4 className="text-center">{title}</h4>
          <p className="text-justify text-white mt-3">{overview}</p>
        </div>

        <ul className="list-group ">
          <li className="list-group-item">
            {"Release Date : " + release_date}
          </li>
        
           
             <li className="list-group-item">
              Genres : 
             {genres?.map((genre)=>( 
              <li className="ms-3">
              {  genre.name}
              </li>
                 ))}
             </li>
          
     
          <li className="list-group-item">{"Rate : " + vote_average}</li>
          <li className="list-group-item">{"Total Vote : " + vote_count}</li>
          <li className="list-group-item"></li>
        </ul>
        <button className="btn btn-success me-2" onClick={() => getFragman()}>
          Teaser Trailer
        </button>
        <Link to={-1} className="btn btn-dark">
          Go Back
        </Link>
      </div>
      {model ? <VideoSection videoKey={videoKey} setModel={setModel} /> : ""}
    </div>
  );
};

export default MovieDetail;
