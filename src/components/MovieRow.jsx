import { useDispatch, useSelector } from "react-redux";
import { selectSelectedMoviesList } from "../store/movies/selectors";
import { useEffect, useState } from "react";
import {
  addToSelectedMoviesList,
  removeFromSelectedMoviesList,
} from "../store/movies/slice";

export const MovieRow = ({ movie }) => {
  const dispatch = useDispatch();
  const selectedMovies = useSelector(selectSelectedMoviesList);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedMovies.find((id) => id === movie.id)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedMovies, setIsSelected, movie]);

  const handleClick = () => {
    if (isSelected) {
      dispatch(removeFromSelectedMoviesList(movie.id));
    } else {
      dispatch(addToSelectedMoviesList(movie.id));
    }
  };

  if (!movie) return null;

  return (
    <li style={{ border: isSelected ? "1px solid red" : "" }}>
      <div>Id: {movie.id}</div>
      <div>Title: {movie.title}</div>
      <div>Director: {movie.director}</div>
      <div>Image url: {movie.imageUrl}</div>
      <div>Duration: {movie.duration}</div>
      <div>Release date: {movie.releaseDate}</div>
      <div>Genre: {movie.genre}</div>
      <button onClick={handleClick}>
        {isSelected ? "Deselect" : "Select"}
      </button>
    </li>
  );
};
