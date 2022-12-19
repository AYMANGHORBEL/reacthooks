import "./App.css";
import { moviesData } from "./Data";
import AddMovie from "./components/AddMovie";
import { useState } from "react";
import Filter from "./components/Filter";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import Descreption from "./components/Descreption";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleRating = (x) => setRating(x);
  const handleChange = (e) => setText(e.target.value);
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);

  return (
    <div className="App">
      <BrowserRouter>
        <Filter
          text={text}
          handleChange={handleChange}
          rating={rating}
          handleRating={handleRating}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movies.filter(
                  (el) =>
                    el.name.toLowerCase().includes(text.toLowerCase()) &&
                    el.rating >= rating
                )}
              />
            }
          />
          <Route path="/trailer/:id" element={<Descreption film={movies} />} />
        </Routes>
      </BrowserRouter>
      <AddMovie add={handleAdd} />
    </div>
  );
}

export default App;
