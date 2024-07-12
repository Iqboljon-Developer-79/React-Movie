import React from "react";
import MovieItem from "../movieItem/MovieItem";
import "./MovieList.css";

class MovieList extends React.Component {
  //   constructor(props) {
  // super(props);
  //   }
  render() {
    const { data, removeMovie } = this.props;
    return (
      <div className="movieList shadow mx-auto mt-4 p-1 rounded-2 bg-white">
        {data.map((movie) => {
          return (
            <MovieItem {...movie} key={movie.id} removeMovie={removeMovie} />
          );
        })}
      </div>
    );
  }
}
export default MovieList;
