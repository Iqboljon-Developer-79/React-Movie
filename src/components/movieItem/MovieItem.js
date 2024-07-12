import React from "react";
import "./MovieItem.css";

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      like: false,
    };
  }

  favouriteHandler = () => {
    this.setState((prev) => ({
      favourite: !prev.favourite,
    }));
  };

  likeHandler = () => {
    this.setState((prev) => ({
      like: !prev.like,
    }));
  };

  render() {
    const { name, viewers, removeMovie, id } = this.props;
    const { like, favourite } = this.state;
    return (
      <div
        className={`movieItem d-flex justify-content-between align-items-center m-3 border-bottom pb-2 bg-white ${
          favourite && "favourite"
        } ${like && "like"}`}
      >
        <div className="movieItemInfo d-flex align-items-center justify-content-between w-100">
          <h4 className="movieName m-0" onClick={this.favouriteHandler}>
            {name}
          </h4>
          <input
            type="text"
            className={"movieViewers form-control w-25"}
            defaultValue={viewers}
          />
        </div>
        <div className="movieNav d-flex justify-content-end gap-1 w-25">
          <button className="btn btn-success fs-5" onClick={this.likeHandler}>
            🍪
          </button>
          <button
            className="btn btn-danger fs-5"
            onClick={() => removeMovie(id)}
          >
            🗑
          </button>
          <button className="btn fs-5 btn-like">⭐️</button>
        </div>
      </div>
    );
  }
}

export default MovieItem;
