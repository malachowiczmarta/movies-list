import React from "react";

export default class Movies extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch("https://srapi.herokuapp.com/v1/movies")
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ movies: data }))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        {this.state.movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    );
  }
}
