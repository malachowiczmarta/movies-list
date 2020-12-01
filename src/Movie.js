import React from "react";

export default class Movie extends React.Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    // this.props.match.params.id
    const { params } = this.props.match;
    fetch(`https://srapi.herokuapp.com/v1/movies/${this.params.id}`)
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
