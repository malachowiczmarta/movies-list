import React from "react";
import Movie from "./Movie";
import MoviesList from "./MoviesList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>hello movie list</h1>
      <MoviesList />
      <Movie />
    </div>
  );
}
