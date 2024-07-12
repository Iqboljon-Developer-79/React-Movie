import React from "react";
import "./SearchMovie.css";

class SearchMovie extends React.Component {
  render() {
    return (
      <div className="searchMovie shadow mx-auto mt-4 p-4 rounded-2 bg-white">
        <input
          type="text"
          className="form-control p-3"
          placeholder="Kinolar qidirish..."
        />
        <div className="btn-group mt-3">
          <button className="btn btn-dark">Barcha kinolar</button>
          <button className="btn btn-outline-dark">Mashhur kinolar</button>
          <button className="btn btn-outline-dark">
            Eng ko'p ko'rilgan kinolar
          </button>
        </div>
      </div>
    );
  }
}

export default SearchMovie;
