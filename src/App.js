import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Movie from "./Movie";
import MoviesList from "./MoviesList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route path="/movies/:id" component={Movie} />
          <Route path="/" exact component={MoviesList} />
        </Switch>
      </Router>
    </div>
  );
}
