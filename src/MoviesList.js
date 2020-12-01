import React from "react";
import { Link } from "react-router-dom";
import api from "./api";

export default class MoviesList extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    api
      .get("/movies")
      .then((data) => this.setState({ movies: data }))
      .catch((error) => console.error(error));
  }
  // api.post('/movies', {title: 'Nowy film', video_utl: 'https://youtube.com})

  render() {
    return (
      <div>
        {this.state.movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}
