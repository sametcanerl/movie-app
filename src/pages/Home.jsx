import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
const ApiKey = process.env.REACT_APP_ApiKey;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=`;
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getMovies = async (API) => {
    try {
      const movieData = await axios.get(API);
      setMovies(movieData.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleSubmit =(e)=>{
    e.preventDefault()
    getMovies(SEARCH_API+searchText)
    setSearchText("")
  }

  return (
    <>
      <div className=" search-container bg-secondary ">
        <form className="search  " onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Movie . . ."
            id="searchText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="btn btn-dark" type="submit" >
            Search
          </button>
        </form>
      </div>
      <div className="cards-container bg-dark">
        {movies?.map((movie, id) => (
          <MovieCard key={id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
