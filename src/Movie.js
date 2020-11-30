import React from "react";

export default class Movie extends React.Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    fetch(
      "https://srapi.herokuapp.com/v1/movies/222b4987-fa15-433d-9490-622172e813bc"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ movie: data }))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
      </div>
    );
  }
}
