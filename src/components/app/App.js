import React from "react";
import { v4 as uuidv4 } from "uuid";
import MovieStatus from "../movieStatus/MovieStatus";
import SearchMovie from "../searchMovie/SearchMovie";
import MovieList from "../movieList/MovieList";
import AddMovie from "../addMovie/AddMovie";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Ertugrul",
          viewers: 9090,
          favourite: true,
          like: false,
          id: 0,
        },
        {
          name: "Urdugan",
          viewers: 1090,
          favourite: false,
          like: true,
          id: 1,
        },
        {
          name: "Umar Ibn Hattob",
          viewers: 9890,
          favourite: false,
          like: false,
          id: 2,
        },
      ],
    };
  }

  addMovie = (e, movie) => {
    e.preventDefault();
    this.setState(({ data }) => {
      let newArray;
      movie.id = uuidv4();
      if (movie.name !== "" && movie.viewers !== "") {
        newArray = [...data, movie];
      } else return;

      data = newArray;
      return {
        data,
      };
    });
  };

  removeMovie = (id) => {
    this.setState(({ data }) => {
      const newArray = data.filter((c) => c.id !== id);

      data = newArray;
      return {
        data,
      };
    });
  };

  render() {
    const { data } = this.state;

    return (
      <main className="vh-100 d-flex align-content-center flex-column p-2">
        <div className="content">
          <MovieStatus />
          <SearchMovie />
          <MovieList data={data} removeMovie={this.removeMovie} />
          <AddMovie addMovie={this.addMovie} />
        </div>
      </main>
    );
  }
}

export default App;
