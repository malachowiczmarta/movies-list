import React from "react";
import api from "./api";

export default class Movie extends React.Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    // this.props.match.params.id
    const { params } = this.props.match;
    api
      .get(`/movies/${params.id}`)
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
