import "./AddMovie.css";
import React from "react";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewers: "",
    };
  }

  inputsHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { addMovie } = this.props;
    return (
      <div className="addMovie shadow mx-auto mt-4 p-4 rounded-2 bg-white">
        <h2>Yangi kino qo'shish</h2>
        <form className="input-group" onSubmit={(e) => addMovie(e, this.state)}>
          <input
            type="text"
            placeholder="Qanday kino ?"
            className="form-control"
            name="name"
            onChange={(e) => this.inputsHandler(e)}
          />
          <input
            type="text"
            placeholder="Necha marotaba ko'rilgan ?"
            className="form-control"
            name="viewers"
            onChange={(e) => this.inputsHandler(e)}
          />
          <button className="btn btn-primary">Add Movie</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
