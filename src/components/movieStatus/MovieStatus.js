import React from "react";
import "./MovieStatus.css";

class MovieStatus extends React.Component {
  render() {
    return (
      <div className="movieStatus mx-auto shadow mt-5 p-4 rounded-2 bg-white">
        <h3>Barcha kinolar soni: 3</h3>
        <h4>Ko'rilgan kinolar soni: 3</h4>
      </div>
    );
  }
}

export default MovieStatus;
